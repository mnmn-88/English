(function () {
  'use strict';

  const dataNode = document.getElementById('vocab-data');
  const sentenceNode = document.getElementById('sentence');
  const wordsNode = document.getElementById('words');
  const searchNode = document.getElementById('search');
  if (!dataNode || !sentenceNode || !wordsNode || !searchNode) return;

  const deck = JSON.parse(dataNode.textContent);
  const customKey = 'series-vocab:custom:v1:' + deck.deck_id;
  const cacheKey = 'series-vocab:lookup:v1:' + deck.deck_id;
  let selected = null;
  let requestController = null;

  function readArray(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(value) ? value : [];
    } catch (_) {
      return [];
    }
  }

  function readCache() {
    try {
      const value = JSON.parse(localStorage.getItem(cacheKey) || '{}');
      return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
    } catch (_) {
      return {};
    }
  }

  let customWords = readArray(customKey).filter(item =>
    item && typeof item.term === 'string' && typeof item.meaning === 'string'
  ).slice(0, 100);
  let lookupCache = readCache();

  const popover = document.createElement('div');
  popover.className = 'selection-popover';
  popover.hidden = true;
  popover.setAttribute('role', 'dialog');
  popover.setAttribute('aria-label', '所选词语释义');
  popover.innerHTML = [
    '<div class="selection-popover__head">',
    '<strong class="selection-popover__term"></strong>',
    '<button class="selection-popover__close" type="button" aria-label="关闭释义">&times;</button>',
    '</div>',
    '<p class="selection-popover__meaning" role="status" aria-live="polite"></p>',
    '<button class="selection-popover__add primary" type="button">+ 加入词汇总览</button>'
  ].join('');
  document.body.append(popover);

  const termNode = popover.querySelector('.selection-popover__term');
  const meaningNode = popover.querySelector('.selection-popover__meaning');
  const addButton = popover.querySelector('.selection-popover__add');
  const closeButton = popover.querySelector('.selection-popover__close');

  function notify(message) {
    const notice = document.getElementById('notice');
    if (notice) notice.textContent = message;
  }

  function saveCustomWords() {
    try {
      localStorage.setItem(customKey, JSON.stringify(customWords));
    } catch (_) {
      notify('浏览器未允许保存自选词。');
    }
  }

  function saveCache() {
    try {
      const entries = Object.entries(lookupCache).slice(-200);
      localStorage.setItem(cacheKey, JSON.stringify(Object.fromEntries(entries)));
    } catch (_) {
      // Translation still works when cache storage is unavailable.
    }
  }

  function normalizeSelection(text) {
    return text
      .replace(/^[^A-Za-z'-]+|[^A-Za-z'-]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function knownMeaning(term) {
    const lower = term.toLocaleLowerCase();
    for (const card of deck.cards) {
      const targets = (card.target_spans || []).map(([start, end]) =>
        card.sentence.slice(start, end).toLocaleLowerCase()
      );
      if (card.term.toLocaleLowerCase() === lower || targets.includes(lower)) return card.meaning;
    }
    return '';
  }

  function currentCard() {
    const target = (document.getElementById('term')?.textContent || '').trim();
    return deck.cards.find(card => card.term === target) ||
      deck.cards.find(card => sentenceNode.textContent.includes(card.sentence.slice(0, 18))) || null;
  }

  function positionPopover(rect) {
    popover.style.visibility = 'hidden';
    popover.hidden = false;
    const width = popover.offsetWidth;
    const height = popover.offsetHeight;
    const left = Math.max(12, Math.min(rect.left + rect.width / 2 - width / 2, innerWidth - width - 12));
    const top = rect.top - height - 10 >= 12 ? rect.top - height - 10 : rect.bottom + 10;
    popover.style.left = Math.round(left) + 'px';
    popover.style.top = Math.round(Math.min(top, innerHeight - height - 12)) + 'px';
    popover.style.visibility = 'visible';
  }

  function closePopover() {
    popover.hidden = true;
    selected = null;
    if (requestController) requestController.abort();
  }

  async function translate(term) {
    const cacheId = term.toLocaleLowerCase();
    if (lookupCache[cacheId]) return lookupCache[cacheId];
    const local = knownMeaning(term);
    if (local) return local;

    requestController = new AbortController();
    const timer = setTimeout(() => requestController.abort(), 8000);
    try {
      const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=' + encodeURIComponent(term);
      const response = await fetch(url, { signal: requestController.signal });
      if (!response.ok) throw new Error('lookup failed');
      const json = await response.json();
      const meaning = Array.isArray(json?.[0]) ? json[0].map(part => part?.[0] || '').join('').trim() : '';
      if (!meaning || meaning.toLocaleLowerCase() === cacheId) throw new Error('empty result');
      lookupCache[cacheId] = meaning;
      saveCache();
      return meaning;
    } finally {
      clearTimeout(timer);
    }
  }

  async function showSelection() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
      ? range.commonAncestorContainer.parentElement
      : range.commonAncestorContainer;
    if (!container || !sentenceNode.contains(container)) return;

    const term = normalizeSelection(selection.toString());
    if (!term || term.length > 60 || term.split(' ').length > 8) return;
    const card = currentCard();
    selected = {
      term,
      meaning: '',
      sentence: card?.sentence || sentenceNode.textContent.trim(),
      translation: card?.translation || ''
    };
    termNode.textContent = term;
    meaningNode.textContent = '正在查询中文释义...';
    addButton.disabled = true;
    addButton.textContent = '+ 加入词汇总览';
    positionPopover(range.getBoundingClientRect());

    try {
      const meaning = await translate(term);
      if (!selected || selected.term !== term) return;
      selected.meaning = meaning;
      meaningNode.textContent = meaning;
      const exists = customWords.some(item => item.term.toLocaleLowerCase() === term.toLocaleLowerCase());
      addButton.disabled = exists;
      addButton.textContent = exists ? '已加入词汇总览' : '+ 加入词汇总览';
      positionPopover(range.getBoundingClientRect());
    } catch (_) {
      if (!selected || selected.term !== term) return;
      meaningNode.textContent = '暂时未查到中文释义，请稍后再试。';
      addButton.disabled = true;
      positionPopover(range.getBoundingClientRect());
    }
  }

  function renderCustomWords() {
    wordsNode.querySelectorAll('[data-custom-word]').forEach(node => node.remove());
    const query = searchNode.value.trim().toLocaleLowerCase();
    const rows = customWords.filter(item =>
      [item.term, item.meaning, item.sentence, item.translation].join(' ').toLocaleLowerCase().includes(query)
    );

    for (const item of rows) {
      const article = document.createElement('article');
      article.className = 'word';
      article.dataset.customWord = item.id;

      const top = document.createElement('div');
      top.className = 'word-top';
      const term = document.createElement('strong');
      term.textContent = item.term;
      const actions = document.createElement('div');
      actions.className = 'custom-word-actions';
      const status = document.createElement('span');
      status.className = 'hint';
      status.textContent = '自选词';
      const remove = document.createElement('button');
      remove.className = 'custom-word-remove';
      remove.type = 'button';
      remove.textContent = '移除';
      remove.setAttribute('aria-label', '从词汇总览移除 ' + item.term);
      remove.addEventListener('click', () => {
        customWords = customWords.filter(word => word.id !== item.id);
        saveCustomWords();
        renderCustomWords();
        notify('已从词汇总览移除 “' + item.term + '”。');
      });
      actions.append(status, remove);
      top.append(term, actions);
      article.append(top);

      for (const [text, className] of [
        [item.meaning, ''],
        [item.sentence, 'example'],
        [item.translation, 'muted']
      ]) {
        if (!text) continue;
        const paragraph = document.createElement('p');
        paragraph.className = className;
        paragraph.textContent = text;
        article.append(paragraph);
      }
      wordsNode.append(article);
    }

    const results = document.getElementById('results');
    if (results) {
      const curatedCount = wordsNode.querySelectorAll('.word:not([data-custom-word])').length;
      results.textContent = '找到 ' + (curatedCount + rows.length) + ' 个词条' +
        (rows.length ? '，其中 ' + rows.length + ' 个自选词' : '');
    }
  }

  sentenceNode.addEventListener('pointerup', () => setTimeout(showSelection, 0));
  document.getElementById('list-tab')?.addEventListener('click', () => setTimeout(renderCustomWords, 0));
  searchNode.addEventListener('input', () => setTimeout(renderCustomWords, 0));
  closeButton.addEventListener('click', closePopover);
  addButton.addEventListener('click', () => {
    if (!selected?.meaning) return;
    const lower = selected.term.toLocaleLowerCase();
    if (customWords.some(item => item.term.toLocaleLowerCase() === lower)) return;
    customWords.push({
      id: 'custom-' + Date.now().toString(36),
      term: selected.term,
      meaning: selected.meaning,
      sentence: selected.sentence,
      translation: selected.translation
    });
    customWords = customWords.slice(-100);
    saveCustomWords();
    addButton.disabled = true;
    addButton.textContent = '已加入词汇总览';
    notify('已将 “' + selected.term + '” 加入词汇总览。');
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !popover.hidden) closePopover();
  });
  document.addEventListener('pointerdown', event => {
    if (!popover.hidden && !popover.contains(event.target) && !sentenceNode.contains(event.target)) closePopover();
  });
  addEventListener('resize', closePopover);
  addEventListener('scroll', closePopover, true);
})();
