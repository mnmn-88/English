'use strict';

const library = [
  {
    show: 'The Guild',
    image: 'https://i.ytimg.com/vi/grCTXGW3sxQ/hqdefault.jpg',
    year: 2007,
    category: ['comedy'],
    tags: ['游戏社交', '日常口语', '关系表达'],
    search: '公会 游戏 喜剧 网络剧 心理咨询 日常口语 the guild',
    episodes: [
      { title: 'S01E01 · Wake-Up Call', href: 'episodes/the-guild-s01e01.html', watch: 'https://www.youtube.com/watch?v=grCTXGW3sxQ', words: 22, runtime: '约 4 分钟' },
      { title: "S01E02 · Zaboo'd", href: 'episodes/the-guild-s01e02.html', watch: 'https://www.youtube.com/watch?v=Qb7GNu3NN-E', words: 15, runtime: '约 4 分钟' }
    ]
  },
  {
    show: 'The Lizzie Bennet Diaries',
    image: 'https://i.ytimg.com/vi/KisuGP2lcPs/hqdefault.jpg',
    year: 2012,
    category: ['comedy', 'literary'],
    tags: ['家庭话题', '观点表达', '文学改编'],
    search: '傲慢与偏见 家庭 喜剧 文学改编 vlog lizzie bennet diaries',
    episodes: [
      { title: 'S01E01 · My Name is Lizzie Bennet', href: 'episodes/lizzie-bennet-s01e01.html', watch: 'https://www.youtube.com/watch?v=KisuGP2lcPs', words: 15, runtime: '3 分 20 秒' }
    ]
  },
  {
    show: 'Emma Approved',
    image: 'https://i.ytimg.com/vi/aeeXkf8LZ_8/hqdefault.jpg',
    year: 2013,
    category: ['comedy', 'literary'],
    tags: ['职场英语', '商业表达', '文学改编'],
    search: '爱玛 职场 创业 婚礼 喜剧 文学改编 emma approved woodhouse',
    episodes: [
      { title: 'S01E01 · I am Emma Woodhouse', href: 'episodes/emma-approved-s01e01.html', watch: 'https://www.youtube.com/watch?v=aeeXkf8LZ_8', words: 18, runtime: '约 8 分钟' }
    ]
  },
  {
    show: 'The Amazing Digital Circus',
    image: 'https://i.ytimg.com/vi/HwAPLk_sQ3w/hqdefault.jpg',
    year: 2023,
    category: ['comedy', 'animation', 'recent'],
    tags: ['荒诞喜剧', '心理表达', '动画'],
    search: '数字马戏团 荒诞 喜剧 心理 动画 虚拟世界 amazing digital circus pomni',
    episodes: [
      { title: 'Pilot · 试播集', href: 'episodes/the-amazing-digital-circus-pilot.html', watch: 'https://www.youtube.com/watch?v=HwAPLk_sQ3w', words: 16, runtime: '25 分 45 秒' }
    ]
  },
  {
    show: 'Murder Drones',
    image: 'https://i.ytimg.com/vi/mImFz8mkaHo/hqdefault.jpg',
    year: 2021,
    category: ['comedy', 'animation', 'recent', 'scifi'],
    tags: ['科幻', '黑色幽默', '校园表达'],
    search: '杀手无人机 机器人 黑色幽默 科幻 动画 校园 murder drones uzi',
    episodes: [
      { title: 'Pilot · 试播集', href: 'episodes/murder-drones-pilot.html', watch: 'https://www.youtube.com/watch?v=mImFz8mkaHo', words: 16, runtime: '约 27 分钟' }
    ]
  },
  {
    show: 'Lackadaisy',
    image: 'https://i.ytimg.com/vi/vffu6FG4YP4/hqdefault.jpg',
    year: 2023,
    category: ['comedy', 'animation', 'recent', 'crime'],
    tags: ['犯罪喜剧', '动作表达', '动画'],
    search: '拉克代西 1920 禁酒令 犯罪 喜剧 动画 lackadaisy rocky ivy',
    episodes: [
      { title: 'Pilot · Animated Short', href: 'episodes/lackadaisy-pilot.html', watch: 'https://www.youtube.com/watch?v=vffu6FG4YP4', words: 16, runtime: '约 27 分钟' }
    ]
  },
  {
    show: 'Meta Runner',
    image: 'https://i.ytimg.com/vi/bmhAp0SNUVM/hqdefault.jpg',
    year: 2019,
    category: ['animation', 'scifi'],
    tags: ['科幻动作', '电竞', '冒险'],
    search: '元跑者 科幻 电竞 游戏 动画 冒险 meta runner tari wrong warp',
    episodes: [
      { title: 'S01E01 · Wrong Warp', href: 'episodes/meta-runner-s01e01.html', watch: 'https://www.youtube.com/watch?v=bmhAp0SNUVM', words: 20, runtime: '约 13 分钟' }
    ]
  },
  {
    show: 'Money Heist',
    image: 'https://i.ytimg.com/vi/txxtKehDpqQ/hqdefault.jpg',
    year: 2017,
    format: '官方精选片段',
    category: ['crime'],
    tags: ['犯罪剧情', '女性力量', '西班牙口音'],
    search: '纸钞屋 奈洛比 精选片段 抢劫 犯罪 money heist nairobi best moments',
    episodes: [
      { title: "Nairobi's Best Moments · 官方精选", href: 'episodes/money-heist-nairobi.html', watch: 'https://www.youtube.com/watch?v=txxtKehDpqQ', words: 14, runtime: '8 分钟' }
    ]
  },
  {
    show: 'Young Sheldon',
    image: 'https://i.ytimg.com/vi/gTfLgb-2Omc/hqdefault.jpg',
    year: 2017,
    format: '官方长合集',
    category: ['comedy'],
    tags: ['家庭喜剧', '亲子对话', '日常口语'],
    search: '小谢尔顿 少年谢尔顿 家庭 喜剧 合集 young sheldon mom compilation',
    episodes: [
      { title: 'Sheldon vs. Mom · 官方合集', href: 'episodes/young-sheldon-compilation.html', watch: 'https://www.youtube.com/watch?v=gTfLgb-2Omc', words: 14, runtime: '16 分 11 秒' }
    ]
  },
  {
    show: 'The Big Bang Theory',
    image: 'https://i.ytimg.com/vi/dVmOvmH4dL4/hqdefault.jpg',
    year: 2007,
    format: '官方长合集',
    category: ['comedy'],
    tags: ['情景喜剧', '社交口语', '科学表达'],
    search: '生活大爆炸 谢尔顿 莱纳德 佩妮 喜剧 top 10 funniest big bang theory',
    episodes: [
      { title: 'Top 10 Funniest Moments · 官方精选', href: 'episodes/big-bang-theory-top10.html', watch: 'https://www.youtube.com/watch?v=dVmOvmH4dL4', words: 15, runtime: '12 分 14 秒' }
    ]
  },
  {
    show: 'House of Cards',
    image: 'https://i.ytimg.com/vi/GW00_e3Mebs/hqdefault.jpg',
    year: 2013,
    format: '第三方长合集',
    category: ['crime'],
    tags: ['政治剧情', '权力表达', '正式英语'],
    search: '纸牌屋 弗兰克 政治 权力 狠角色 长剪辑 house of cards ruthless moments compilation',
    episodes: [
      { title: "Frank's Most Ruthless Moments · 长合集", href: 'episodes/house-of-cards-trailer.html', watch: 'https://www.youtube.com/watch?v=GW00_e3Mebs', words: 19, runtime: '22 分 27 秒' }
    ]
  }
];

const grid = document.getElementById('series-grid');
const search = document.getElementById('search');
const clearSearch = document.getElementById('clear-search');
const emptyState = document.getElementById('empty-state');
const resultCount = document.getElementById('result-count');
const sort = document.getElementById('sort');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const number = new Intl.NumberFormat('zh-CN');
const params = new URLSearchParams(location.search);
const validFilters = new Set(filterButtons.map(button => button.dataset.filter));
const validSorts = new Set([...sort.options].map(option => option.value));
let activeFilter = validFilters.has(params.get('filter')) ? params.get('filter') : 'all';
search.value = params.get('q') || '';
sort.value = validSorts.has(params.get('sort')) ? params.get('sort') : 'featured';

function totalWords(item) {
  return item.episodes.reduce((sum, episode) => sum + episode.words, 0);
}

function card(item, index) {
  const episode = item.episodes[0];
  const format = item.format || '完整单集';
  const tags = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  const options = item.episodes.map((entry, optionIndex) => `<option value="${optionIndex}">${entry.title}</option>`).join('');
  const pickerId = `episode-${index}`;
  return `
    <article class="series-card" data-show="${item.show}">
      <div class="poster">
        <img src="${item.image}" alt="${item.show} 官方视频画面" width="480" height="270" loading="${index === 0 ? 'eager' : 'lazy'}"${index === 0 ? ' fetchpriority="high"' : ''}>
        <span class="episode-pill">${format} · 免费观看</span>
      </div>
      <div class="card-body">
        <div class="title-row">
          <h3>${item.show}</h3>
          <span class="episode-count">${item.episodes.length} 项</span>
        </div>
        <label class="episode-picker" for="${pickerId}">
          <span>选择学习内容</span>
          <select id="${pickerId}" data-episode-select>${options}</select>
        </label>
        <div class="card-meta"><span data-runtime>${item.year} · ${episode.runtime}</span><span data-words>${number.format(episode.words)} 个词条</span></div>
        <div class="tags">${tags}</div>
        <div class="card-actions">
          <a class="card-cta" data-learn href="${episode.href}"><span>${item.format ? '学习这段' : '学习这一集'}</span><span aria-hidden="true">→</span></a>
          <a class="watch-link" data-watch href="${episode.watch}" target="_blank" rel="noopener">${item.format ? '免费观看片段' : '免费观看本集'} ↗</a>
        </div>
      </div>
    </article>`;
}

function connectEpisodePickers(items) {
  grid.querySelectorAll('[data-episode-select]').forEach((select, index) => {
    select.addEventListener('change', () => {
      const cardElement = select.closest('.series-card');
      const episode = items[index].episodes[Number(select.value)];
      cardElement.querySelector('[data-runtime]').textContent = `${items[index].year} · ${episode.runtime}`;
      cardElement.querySelector('[data-words]').textContent = `${number.format(episode.words)} 个词条`;
      cardElement.querySelector('[data-learn]').href = episode.href;
      cardElement.querySelector('[data-watch]').href = episode.watch;
    });
  });
}

function render() {
  const query = search.value.trim().toLocaleLowerCase();
  const matches = library.filter(item => {
    const inFilter = activeFilter === 'all' || item.category.includes(activeFilter);
    const episodeText = item.episodes.map(episode => episode.title).join(' ');
    const haystack = [item.show, episodeText, item.search, ...item.tags].join(' ').toLocaleLowerCase();
    return inFilter && (!query || haystack.includes(query));
  }).sort((a, b) => {
    if (sort.value === 'newest') return b.year - a.year;
    if (sort.value === 'words') return totalWords(b) - totalWords(a);
    return 0;
  });

  grid.innerHTML = matches.map(card).join('');
  connectEpisodePickers(matches);
  emptyState.hidden = matches.length > 0;
  const matchedEpisodes = matches.reduce((sum, item) => sum + item.episodes.length, 0);
  resultCount.textContent = query || activeFilter !== 'all'
    ? `找到 ${number.format(matches.length)} 部剧，共 ${number.format(matchedEpisodes)} 个独立学习内容`
    : `共 ${number.format(matches.length)} 部剧、${number.format(matchedEpisodes)} 个独立学习内容；在卡片中选择内容`;
  clearSearch.hidden = !query;

  const next = new URLSearchParams();
  if (query) next.set('q', search.value.trim());
  if (activeFilter !== 'all') next.set('filter', activeFilter);
  if (sort.value !== 'featured') next.set('sort', sort.value);
  const nextUrl = `${location.pathname}${next.size ? `?${next}` : ''}${location.hash}`;
  history.replaceState(null, '', nextUrl);
}

const episodeCount = library.reduce((sum, item) => sum + item.episodes.length, 0);
document.getElementById('show-count').textContent = number.format(library.length);
document.getElementById('episode-count').textContent = number.format(episodeCount);
document.getElementById('word-count').textContent = number.format(library.reduce((sum, item) => sum + totalWords(item), 0));
search.addEventListener('input', render);
sort.addEventListener('change', render);
clearSearch.addEventListener('click', () => {
  search.value = '';
  search.focus();
  render();
});
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  render();
}));
document.getElementById('reset-search').addEventListener('click', () => {
  search.value = '';
  activeFilter = 'all';
  sort.value = 'featured';
  filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.filter === 'all')));
  search.focus();
  render();
});

filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.filter === activeFilter)));
render();
