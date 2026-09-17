import '@fontsource-variable/dm-sans';
import '@fontsource-variable/manrope';
import '@fontsource/kalam/latin-400.css';
import './style.css';
import './yanineko.css';
import { publications } from './publications.js';
import { heroArtwork } from './hero-art.js';

const SCHOLAR = 'https://scholar.google.com/citations?hl=en&user=YmHM1XkAAAAJ';
const SHU = 'https://scholar.google.com/citations?user=q4qu28QAAAAJ&hl=en';
const LI = 'https://scholar.google.com/citations?user=VZi8rpAAAAAJ&hl=zh-CN';
const LAB = 'https://web.ics.purdue.edu/~hu968/lab.html';
const assetUrl = path => `${import.meta.env.BASE_URL}${path}`;
const storage = { get: key => { try { return localStorage.getItem(key); } catch { return null; } }, set: (key, value) => { try { localStorage.setItem(key, value); } catch { /* Private browser mode still works. */ } } };
let lang = storage.get('tianyi-language') === 'zh' ? 'zh' : 'en';
let theme = storage.get('tianyi-theme') === 'dark' ? 'dark' : 'light';
let filter = 'all';
let activeSection = 'about';
let heroIndex = 0;
let observer;
const icons = {
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  right: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  book: '<path d="M12 6c-3-3-7-3-10-2v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-1-10 2Zm0 0v15"/>',
  cap: '<path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6m4-2v8"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',
  moon: '<path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  copy: '<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-16-2 20"/>',
};
const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.arrow}</svg>`;
const cat = (cls = '') => `<img class="cat-mark ${cls}" src="${assetUrl('images/yanineko/chara-icon01.webp')}" alt="" width="104" height="104" aria-hidden="true">`;
const t = (en, zh) => lang === 'zh' ? zh : en;
const esc = text => String(text ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const external = (href, label, cls = '') => `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label}${icon('arrow')}</a>`;

const research = [
  { id: 'aigc', no: '01', title: 'MLLMs for AIGC detection', zh: '多模态大模型与 AIGC 检测', label: ['Learning to see what’s real.', '学习辨别真实。'], text: ['Exploring multimodal large language models for understanding and detecting AI-generated content.', '探索多模态大语言模型，理解并检测人工智能生成的内容。'], word: ['PERCEPTION', '感知'], color: 'sage', art: '<rect x="31" y="23" width="106" height="70" rx="8"/><path d="m42 79 25-24 16 16 18-27 24 35"/><circle cx="55" cy="40" r="5"/><path d="M98 15h47v49"/><circle cx="127" cy="83" r="22"/><path d="m117 83 7 7 15-15"/>' },
  { id: 'agentic', no: '02', title: 'Agentic AI', zh: '智能体 AI', label: ['From reasoning to doing.', '从推理走向行动。'], text: ['Investigating AI agents that connect reasoning, planning, and action to tackle complex tasks.', '研究将推理、规划与行动结合起来的 AI 智能体，探索复杂任务的求解。'], word: ['REASONING', '推理'], color: 'pink', art: '<rect x="66" y="37" width="48" height="40" rx="12"/><circle cx="80" cy="55" r="2"/><circle cx="99" cy="55" r="2"/><path d="M82 65h15M90 37V23m-7-3h14M44 55H27m105 0h21M90 93v10"/><rect x="9" y="42" width="18" height="26" rx="4"/><rect x="153" y="42" width="18" height="26" rx="4"/><path d="m55 28-8-9m78 9 8-9M44 86l-7 8m99-8 7 8"/>' },
  { id: 'navigation', no: '03', title: 'Embodied AI navigation', zh: '具身智能导航', label: ['Intelligence, out in the world.', '让智能走进真实世界。'], text: ['Connecting language, visual perception, and spatial understanding to help agents find their way.', '连接语言、视觉感知与空间理解，帮助智能体认识环境并自主导航。'], word: ['EXPLORATION', '探索'], color: 'yellow', art: '<path d="m22 36 41-13 53 17 41-15v64l-41 16-53-18-41 14V36Zm41-13v64m53-47v65"/><path d="M47 63c14-29 40 37 80-8" stroke-dasharray="4 6"/><path d="M143 38c0 10-13 22-13 22s-13-12-13-22a13 13 0 0 1 26 0Z"/><circle cx="130" cy="37" r="4"/><circle cx="46" cy="64" r="4"/>' },
];

const researchArtwork = {
  aigc: { file: 'research-aigc', alt: ['Two Yani Neko cat heads: an idealized sparkling version labeled FAKE, and a scruffy, comically abstract version labeled REAL. A concept illustration of authenticity detection.', '两个尼古喵喵猫头对照：精致闪亮的版本标注 FAKE，凌乱搞怪的版本标注 REAL，作为真实性检测的概念插图。'] },
  agentic: { file: 'research-agentic', alt: ['A team of Yani Neko cartoon cats sharing ideas, checking information, and cooperating around a shared task board.', '多个尼古喵喵风格的卡通小猫围绕同一块任务板，分享想法、检查信息并协作完成任务。'] },
  navigation: { file: 'research-navigation', alt: ['Chibi Yani Neko holds a map at a fork in the road, deciding which route leads to the destination.', 'Q 版尼古喵喵拿着地图站在岔路口，判断哪条路线通向目标。'] },
};

function researchComic(id) {
  const art = researchArtwork[id];
  return `<div class="research-illustration research-comic"><img src="${assetUrl(`images/research/${art.file}.webp`)}" srcset="${assetUrl(`images/research/${art.file}-small.webp`)} 640w, ${assetUrl(`images/research/${art.file}.webp`)} 1280w" sizes="(max-width:700px) 88vw, (max-width:1000px) 30vw, 360px" alt="${esc(t(...art.alt))}" width="1536" height="1024" loading="lazy" decoding="async">${id==='aigc'?'<div class="detection-labels" aria-hidden="true"><span class="label-fake">FAKE</span><span class="label-real">REAL</span></div>':''}</div>`;
}

function render() {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#24251f' : '#efeee2';
  document.querySelector('.skip-link').textContent = t('Skip to content', '跳至正文');
  document.getElementById('app').innerHTML = `
    <header class="site-header">
      <div class="nav-shell">
        <a href="#about" class="brand" aria-label="Tianyi Shang — ${t('home','首页')}">${cat()}<span>Tianyi Shang<span class="brand-sub">${t('research, with ヤニねこ', '和尼古喵喵一起做研究')}</span></span></a>
        <nav class="desktop-nav" aria-label="${t('Main navigation','主导航')}">
          ${[['about','About','关于'],['research','Research','研究'],['publications','Publications','论文'],['journey','Journey','经历']].map(([id,en,zh])=>`<a href="#${id}" data-section="${id}" class="${activeSection===id?'active':''}">${t(en,zh)}</a>`).join('')}
        </nav>
        <div class="nav-actions"><button class="language-button" id="language" aria-label="${t('Switch to Chinese','Switch to English')}"><span class="${lang==='en'?'chosen':''}">EN</span><span class="lang-divider">/</span><span class="${lang==='zh'?'chosen':''}">中</span></button><button id="theme" class="icon-button" aria-label="${t(theme==='dark'?'Switch to light theme':'Switch to dark theme',theme==='dark'?'切换浅色主题':'切换深色主题')}">${icon(theme==='dark'?'sun':'moon')}</button><button class="icon-button mobile-menu" id="menu" aria-expanded="false" aria-controls="mobile-nav" aria-label="${t('Open menu','打开菜单')}">${icon('menu')}</button></div>
      </div>
      <nav id="mobile-nav" class="mobile-nav" aria-label="${t('Mobile navigation','移动导航')}" hidden>${[['about','About','关于'],['research','Research','研究'],['publications','Publications','论文'],['journey','Journey','经历']].map(([id,en,zh])=>`<a href="#${id}">${t(en,zh)}</a>`).join('')}</nav>
      <div class="scroll-progress" aria-hidden="true"></div>
    </header>
    <main id="main">
      <section id="about" class="hero container">
        <div class="hero-copy">
          <div class="eyebrow"><span class="status-dot"></span>${t('PH.D. STUDENT · PURDUE UNIVERSITY','博士研究生 · 普渡大学')}</div>
          <h1>${t('Hi, I’m','你好，我是')}<br><span>Tianyi <em>Shang.</em></span><svg class="name-spark" viewBox="0 0 40 46" aria-hidden="true"><path d="m20 2 3 16 14 5-14 4-3 16-4-16L2 23l14-5Z"/></svg></h1>
          <p class="hero-subtitle">${t('Serious research. Yani Neko state of mind.','认真研究，尼古喵喵式放空。')}</p>
          <p class="hero-description">${t('I explore how AI <strong>perceives, reasons, and finds its way.</strong> My research spans MLLMs for AIGC detection, agentic AI, and embodied AI navigation.','我探索 AI 如何<strong>感知、推理与寻找方向。</strong>研究兴趣包括面向 AIGC 检测的多模态大模型、智能体 AI，以及具身智能导航。')}</p>
          <div class="hero-buttons"><a href="#publications" class="button button-primary">${icon('book')}${t('Explore my research','了解我的研究')}${icon('right')}</a>${external(SCHOLAR, 'Google Scholar', 'button button-secondary')}</div>
          <div class="hero-footnote">${icon('cap')}<span>${t('Advised by','导师：')} ${external(SHU, 'Prof. Shu Hu', 'inline-link')}<span class="footnote-dot">·</span>Purdue University</span></div>
        </div>
        <div class="hero-art yani-hero-art" role="group" aria-roledescription="${t('carousel','轮播图')}" aria-label="${t('Yani Neko gallery','尼古喵喵画廊')}">
          <div class="anime-scene-wrap">
            <button class="anime-stage" id="hero-next" aria-label="${t('Show next Yani Neko image','点击切换下一张尼古喵喵图片')}" aria-describedby="hero-art-status">
              ${heroArtwork.map((art,index)=>`<img class="hero-slide" data-hero-slide="${index}" src="${assetUrl(`images/yanineko/${art.file}`)}" alt="${esc(t(...art.alt))}" width="${art.width}" height="${art.height}" style="object-fit:${art.fit};object-position:${art.position}" fetchpriority="${index===0?'high':'low'}" ${index!==heroIndex?'hidden':''}>`).join('')}
              <img class="anime-logo" src="${assetUrl('images/yanineko/logo.webp')}" alt="ヤニねこ" width="360" height="121">
              <span class="scene-index">${t('A LITTLE BREAK FROM RESEARCH','研究间隙，放空一下')}</span>
            </button>
            <div class="anime-panel-caption"><span>尼古喵喵 <b>ヤニねこ</b></span><span>${t('CLICK IMAGE TO SWITCH','点击图片，切换下一张')}</span></div>
          </div>
          <div class="yani-sticker"><span>ニャー。</span><small>${t('thinking… probably.','正在思考……大概吧。')}</small></div>
          <div class="anime-art-controls">
            <div class="hero-gallery-nav">
              <button id="hero-prev" class="hero-gallery-arrow" aria-label="${t('Previous image','上一张图片')}">${icon('right','arrow-back')}</button>
              <div class="hero-gallery-pages" role="group" aria-label="${t('Choose an image','选择图片')}">${heroArtwork.map((art,index)=>`<button data-hero-index="${index}" aria-controls="hero-next" aria-pressed="${heroIndex===index}" aria-label="${esc(t(...art.label))}" title="${esc(t(...art.label))}">${String(index+1).padStart(2,'0')}</button>`).join('')}</div>
              <button id="hero-forward" class="hero-gallery-arrow" aria-label="${t('Next image','下一张图片')}">${icon('right')}</button>
            </div>
            <div class="hero-gallery-meta"><span id="hero-art-status" aria-live="polite" aria-atomic="true">${heroIndex+1} / ${heroArtwork.length} · ${t(...heroArtwork[heroIndex].label)}</span><a href="https://yanineko-anime.com/" target="_blank" rel="noopener noreferrer">${t('Anime official site','动画官网')}${icon('arrow')}</a></div>
          </div>
        </div>
      </section>
      <div class="intro-strip container"><span>${t('BUILDING UNDERSTANDING, ONE QUESTION AT A TIME','每一个问题，都是理解世界的新起点')}</span><div><span>${t('Perceive','感知')}</span><i>✳</i><span>${t('Reason','推理')}</span><i>✳</i><span>${t('Explore','探索')}</span></div></div>
      <section id="research" class="section container">
        <div class="section-heading"><div><div class="eyebrow section-number">01 / ${t('RESEARCH INTERESTS','研究方向')}</div><h2>${t('What keeps me curious','好奇心的方向')}<span class="small-star">✳</span></h2></div><p>${t('Three directions. One drive to understand intelligence.','三个方向，同一份理解智能的好奇心。')}</p></div>
        <div class="research-grid">${research.map(r=>`<a href="#publications" class="research-card comic-card ${r.color}" data-research="${r.id}"><div class="card-top"><span>${r.no}</span><span class="round-arrow">${icon('arrow')}</span></div>${researchComic(r.id)}<h3>${t(r.title,r.zh)}</h3><p class="card-tagline">${t(...r.label)}</p><p class="card-description">${t(...r.text)}</p><span class="card-link">${t('Explore this direction','探索这个方向')}${icon('right')}</span></a>`).join('')}</div>
      </section>
      <section id="publications" class="publications-section"><div class="container section">
        <div class="section-heading"><div><div class="eyebrow section-number">02 / ${t('PUBLICATIONS','研究成果')}</div><h2>${t('Ideas, put into words','把想法写成论文')}<span class="handwritten heading-note">${t('and into the world.','也带进世界。')}</span></h2></div>${external(SCHOLAR,t('Google Scholar','Google Scholar'),'text-link')}</div>
        <div class="publication-toolbar"><div class="filter-list" role="group" aria-label="${t('Filter publications','筛选论文')}">${[['all','All work','全部'],['aigc','AIGC detection','AIGC 检测'],['navigation','Navigation','导航'],['vision','Vision','视觉'],['agentic','Agentic AI','智能体 AI'],['other','Other research','其他研究']].map(([id,en,zh])=>`<button class="filter-button ${filter===id?'selected':''}" data-filter="${id}" aria-pressed="${filter===id}">${t(en,zh)}</button>`).join('')}</div><span class="results-count" aria-live="polite"></span></div>
        <div id="publication-list" class="publication-list"></div>
        <div class="publication-note">${icon('book')}<span>${t('Conference papers, journal articles and preprints. More on','会议论文、期刊论文与预印本。更多信息请见')} ${external(SCHOLAR,'Google Scholar','inline-link')}.</span></div>
      </div></section>
      <section id="journey" class="section container journey-section">
        <div class="journey-intro"><div class="eyebrow section-number">03 / ${t('THE JOURNEY','学术经历')}</div><h2>${t('Places & people<br>that shape my work.','一路同行，<br>一路成长。')}</h2><p>${t('Research is a journey best taken together. I’m grateful for the people who help me ask better questions.','研究是一段与人同行的旅程。感谢每一位帮助我提出更好问题的老师与伙伴。')}</p><div class="journey-doodle" aria-hidden="true"><span>Fuzhou</span><svg viewBox="0 0 200 60"><path d="M2 40c50-65 76 40 110-2S166 5 195 19m-10-14 11 15-20 3"/></svg><span>Purdue</span><i>✧</i></div></div>
        <div class="timeline"><article class="timeline-item"><div class="timeline-dot"></div><div class="timeline-meta"><span class="current-label">${t('THE CURRENT CHAPTER','正在书写的篇章')}</span>${icon('cap')}</div><h3>Purdue University</h3><p class="degree">${t('Ph.D. student','博士研究生')}</p><p>${t('Working with','博士生导师：')} ${external(SHU,'Prof. Shu Hu','inline-link')}</p>${external(LAB,t('Meet the lab','了解实验室'),'text-link timeline-link')}</article><article class="timeline-item"><div class="timeline-dot"></div><div class="timeline-meta"><span>${t('WHERE IT BEGAN','故事开始的地方')}</span>${icon('book')}</div><h3>${t('Fuzhou University','福州大学')}</h3><p class="degree">${t('Undergraduate studies','本科学习')}</p><p>${t('Close research collaboration with','深度科研合作：')} ${external(LI,'Prof. Zhenyu Li','inline-link')}</p></article></div>
      </section>
      <section class="contact-section container"><div class="contact-copy"><div class="eyebrow">${t('GOOD IDEAS START WITH CURIOSITY','好的想法，始于好奇')}</div><h2>${t('Still curious?<br>So am I.','还想继续探索？<br>我也是。')}</h2><p>${t('Explore my work, meet my research community,<br>and follow the questions that come next.','欢迎了解我的工作与研究伙伴，<br>一起期待下一个有趣的问题。')}</p><div class="contact-links">${external(SCHOLAR,'Google Scholar','button button-primary')}${external(LAB,t('Purdue research lab','Purdue 研究团队'),'text-link')}</div></div><button class="cat-companion yani-companion" id="cat-companion" aria-label="${t('Change Yani Neko’s expression','切换尼古喵喵的表情')}"><span class="cat-speech" id="cat-speech" role="status">${t('One more paper… probably.','再看一篇……大概吧。')}</span><span class="yani-expression" aria-hidden="true"></span><span class="cat-hint">${t('click for a different mood','戳一下，换个表情')}</span></button></section>
    </main>
    <footer class="site-footer container"><div><a href="#about" class="footer-brand">${cat()}<span>Tianyi Shang</span></a><p>© ${new Date().getFullYear()} Tianyi Shang · ${t('An academic homepage with ヤニねこ.','与尼古喵喵一起的学术主页。')}</p><p class="anime-copyright">${t('Anime artwork','动画素材')} ©にゃんにゃんファクトリー・講談社／ヤニねこ製作委員会</p></div><div class="footer-right"><button id="credits" class="subtle-button">${t('Sources & artwork','资料与素材来源')}</button><a href="#about" class="back-top">${t('Back to top','回到顶部')}${icon('arrow')}</a></div></footer>
    <dialog id="info-dialog" aria-labelledby="dialog-title"><div class="dialog-top"><h2 id="dialog-title"></h2><button class="icon-button" id="close-dialog" aria-label="${t('Close dialog','关闭弹窗')}">${icon('close')}</button></div><div id="dialog-content"></div></dialog>
    <div class="toast" id="toast" role="status"></div>`;
  renderPublications();
  bindEvents();
}

function renderPublications() {
  const shown = publications.filter(p => filter === 'all' || p.topic === filter);
  const interest = filter === 'aigc' ? t('MLLMs for AIGC detection', '面向 AIGC 检测的多模态大模型') : t('Agentic AI', '智能体 AI');
  document.querySelector('.results-count').textContent = t(`${shown.length} ${shown.length===1?'paper':'papers'}`, `${shown.length} 篇论文`);
  document.getElementById('publication-list').innerHTML = shown.length ? shown.map(p=>`
    <article class="publication-row">
      <div class="paper-content">
        ${publicationVenue(p)}
        <h3>${external(p.paperUrl,esc(p.title),'paper-title')}</h3>
        <p class="authors">${esc(Array.isArray(p.authors)?p.authors.join(', '):p.authors).replace(/Tianyi Shang/g,'<strong>Tianyi Shang</strong>')}</p>
        ${p.summary?`<p class="paper-summary">${esc(p.summary[lang]||p.summary.en)}</p>`:''}
        <div class="paper-links">
          ${external(p.paperUrl,`${icon('book')}${t('Paper','论文')}`,'paper-link')}
          ${p.codeUrl?external(p.codeUrl,`${icon('code')}${p.codeLabel?t(...p.codeLabel):t('Code','代码')}`,'paper-link'):''}
        </div>
      </div>
    </article>`).join('') : `<div class="empty-publications">${cat()}<h3>${t('A new direction, an open notebook.','新的方向，新的探索。')}</h3><p>${t(interest + ' is one of my current research interests. Explore my other selected papers or visit Google Scholar for the full publication list.', interest + '是我目前的研究兴趣之一。欢迎浏览其他精选论文，或前往 Google Scholar 查看完整列表。')}</p><button class="button button-secondary" data-reset>${t('View all selected work','查看全部精选论文')}${icon('right')}</button></div>`;
  document.querySelector('[data-reset]')?.addEventListener('click',()=>setFilter('all'));
}

function setFilter(next) {
  filter = next;
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b.dataset.filter===filter);b.setAttribute('aria-pressed',String(b.dataset.filter===filter));});
  renderPublications();
}

function publicationVenue(p) {
  const preprint = /preprint|arxiv/i.test(p.venue);
  const venueNames = {
    CVPR: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    IROS: 'IEEE/RSJ International Conference on Intelligent Robots and Systems',
  };
  const label = preprint ? t('arXiv preprint', 'arXiv 预印本') : p.venue;
  const fullName = preprint ? t('arXiv preprint', 'arXiv 预印本') : (p.venueFullName || venueNames[p.venue] || p.venue);
  return `<span class="publication-venue ${preprint?'venue-preprint':'venue-published'}" title="${esc(fullName)}" aria-label="${esc(`${fullName}, ${p.year}`)}"><span class="venue-dot" aria-hidden="true"></span>${esc(label)} <span class="venue-year">${esc(p.year)}</span></span>`;
}

function setHeroImage(next) {
  heroIndex = (next + heroArtwork.length) % heroArtwork.length;
  document.querySelectorAll('[data-hero-slide]').forEach(image => { image.hidden = Number(image.dataset.heroSlide) !== heroIndex; });
  document.querySelectorAll('[data-hero-index]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.heroIndex) === heroIndex)));
  document.getElementById('hero-art-status').textContent = `${heroIndex+1} / ${heroArtwork.length} · ${t(...heroArtwork[heroIndex].label)}`;
}

function showDialog(title,html) {
  document.getElementById('dialog-title').textContent=title;
  document.getElementById('dialog-content').innerHTML=html;
  document.getElementById('info-dialog').showModal();
}

function openCitation(id) {
  const p = publications.find(p=>p.id===id);
  if (!p) return;
  const authors = Array.isArray(p.authors) ? p.authors.join(' and ') : p.authors.replace(/, /g,' and ');
  const bib = p.bibtex || `@inproceedings{${p.id.replace(/[^a-z0-9]/gi,'')}${p.year},\n  title = {${p.title}},\n  author = {${authors}},\n  booktitle = {${p.venue}},\n  year = {${p.year}},\n  url = {${p.paperUrl}}\n}`;
  showDialog(t('Cite this work','引用这篇论文'),`<p class="dialog-intro">${esc(p.title)}</p><pre class="citation-code" tabindex="0">${esc(bib)}</pre><button class="button button-primary" id="copy-citation">${icon('copy')}${t('Copy BibTeX','复制 BibTeX')}</button>`);
  document.getElementById('copy-citation').addEventListener('click',async()=>{
    try { await navigator.clipboard.writeText(bib); document.getElementById('copy-citation').innerHTML=`${icon('check')}${t('Copied!','已复制！')}`; }
    catch { const code=document.querySelector('.citation-code');const range=document.createRange();range.selectNodeContents(code);window.getSelection().removeAllRanges();window.getSelection().addRange(range);showToast(t('Citation selected. Press Ctrl/Cmd+C to copy.','已选中引用，请按 Ctrl/Cmd+C 复制。')); }
  });
}

function showToast(message) { const el=document.getElementById('toast');el.textContent=message;el.classList.add('visible');setTimeout(()=>el.classList.remove('visible'),3200); }

function bindEvents() {
  document.getElementById('language').addEventListener('click',()=>{const y=window.scrollY;lang=lang==='en'?'zh':'en';storage.set('tianyi-language',lang);render();window.scrollTo({top:y,behavior:'instant'});document.getElementById('language').focus({preventScroll:true});});
  document.getElementById('theme').addEventListener('click',()=>{theme=theme==='light'?'dark':'light';storage.set('tianyi-theme',theme);document.documentElement.dataset.theme=theme;document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#24251f':'#efeee2';const b=document.getElementById('theme');b.innerHTML=icon(theme==='dark'?'sun':'moon');b.setAttribute('aria-label',t(theme==='dark'?'Switch to light theme':'Switch to dark theme',theme==='dark'?'切换浅色主题':'切换深色主题'));});
  document.getElementById('menu').addEventListener('click',()=>{const b=document.getElementById('menu');const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));b.setAttribute('aria-label',t(open?'Close menu':'Open menu',open?'关闭菜单':'打开菜单'));b.innerHTML=icon(open?'close':'menu');document.getElementById('mobile-nav').hidden=!open;});
  document.querySelectorAll('#mobile-nav a').forEach(a=>a.addEventListener('click',()=>{document.getElementById('mobile-nav').hidden=true;document.getElementById('menu').setAttribute('aria-expanded','false');document.getElementById('menu').innerHTML=icon('menu');document.getElementById('menu').setAttribute('aria-label',t('Open menu','打开菜单'));}));
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
  document.querySelectorAll('[data-research]').forEach(a=>a.addEventListener('click',()=>setFilter(a.dataset.research)));
  document.getElementById('hero-next').addEventListener('click',()=>setHeroImage(heroIndex+1));
  document.getElementById('hero-forward').addEventListener('click',()=>setHeroImage(heroIndex+1));
  document.getElementById('hero-prev').addEventListener('click',()=>setHeroImage(heroIndex-1));
  document.querySelectorAll('[data-hero-index]').forEach(button=>button.addEventListener('click',()=>setHeroImage(Number(button.dataset.heroIndex))));
  document.querySelector('.yani-hero-art').addEventListener('keydown',event=>{
    if (event.key==='ArrowLeft' || event.key==='ArrowRight') {
      event.preventDefault();
      setHeroImage(heroIndex+(event.key==='ArrowLeft'?-1:1));
    }
  });
  document.getElementById('close-dialog').addEventListener('click',()=>document.getElementById('info-dialog').close());
  document.getElementById('info-dialog').addEventListener('click',e=>{if(e.target===e.currentTarget){const rect=e.currentTarget.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)e.currentTarget.close();}});
  document.getElementById('credits').addEventListener('click',()=>showDialog(t('Sources & artwork','资料与素材来源'),`<div class="credits-content"><p>${t('Academic background and research interests are provided by Tianyi Shang. Selected publications are linked to their original sources.','学术背景及研究方向由 Tianyi Shang 本人提供。精选论文均链接至原始来源。')}</p>${external(SCHOLAR,"Tianyi Shang · Google Scholar",'text-link')}${external(LAB,'Purdue M2 Lab','text-link')}${external('https://cv4ra.github.io/','Zhenyu Li · Academic homepage','text-link')}<hr><p>${t('The three research-card comics are generated adaptations made with OpenAI ImageGen using Yani Neko character references. They illustrate research concepts and are not official anime frames.','三张研究卡片的小漫画使用 OpenAI ImageGen，基于尼古喵喵角色参考生成，用于表达研究概念，并非官方动画画面。')}</p><p>${t('This homepage features the actual protagonist and official promotional artwork from the TV anime Yani Neko (ヤニねこ). Images and logo come from the official anime website. Artwork ©にゃんにゃんファクトリー・講談社／ヤニねこ製作委員会. This is an unofficial personal academic homepage. The interactive dialogue is original website copy, not quotes from the anime.','本站使用《尼古喵喵》（ヤニねこ）中的真实主角形象、官方先导视觉图、角色立绘、表情与标志，素材均来自动画官网。动画素材版权：©にゃんにゃんファクトリー・講談社／ヤニねこ製作委員会。本站为非官方个人学术主页；互动气泡是原创网页文案，并非动漫台词。')}</p>${external('https://yanineko-anime.com/',t('Yani Neko · Official website','尼古喵喵 · 官方网站'),'text-link')}</div>`));
  let catClicks=0;
  document.getElementById('cat-companion').addEventListener('click',()=>{const messages=lang==='en'?['Another deadline? You’re kidding.','Thinking… probably.','A paper, a break, repeat.','One more paper… probably.']:['又有 deadline？真的假的。','正在思考……大概吧。','读一篇，歇一下，再来。','再看一篇……大概吧。'];document.getElementById('cat-speech').textContent=messages[catClicks++%messages.length];document.querySelector('.yani-expression').classList.toggle('alternate',catClicks%2===1);const el=document.getElementById('cat-companion');el.classList.remove('purr');void el.offsetWidth;el.classList.add('purr');});
  observer?.disconnect();
  observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){activeSection=entry.target.id;document.querySelectorAll('[data-section]').forEach(a=>{const active=a.dataset.section===activeSection;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-18% 0px -60% 0px',threshold:0});
  document.querySelectorAll('main section[id]').forEach(el=>observer.observe(el));
  updateScroll();
}

function updateScroll(){const max=document.documentElement.scrollHeight-innerHeight;const progress=document.querySelector('.scroll-progress');if(progress)progress.style.transform=`scaleX(${max>0?scrollY/max:0})`;}
window.addEventListener('scroll',updateScroll,{passive:true});
window.addEventListener('resize',updateScroll,{passive:true});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.getElementById('mobile-nav').hidden){document.getElementById('menu').click();document.getElementById('menu').focus();}});
render();
