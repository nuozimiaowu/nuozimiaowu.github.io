# Tianyi Shang × ヤニねこ

A bilingual academic homepage for Tianyi Shang, a Ph.D. student at Purdue University. Research interests: MLLMs for AIGC detection, agentic AI, and embodied AI navigation.

**Website:** https://nuozimiaowu.github.io/

以动漫《尼古喵喵》（ヤニねこ）为主题，保留清楚的学术信息与轻量交互。首屏使用官方角色素材；三张研究卡片使用基于角色参考生成的漫画插图，分别表达真假检测、多智能体协作与具身导航。

## Features

- English / 中文, with saved language preference.
- Light / dark themes, responsive navigation and reduced-motion support.
- Three illustrated research directions: FAKE / REAL comparison, a collaborating cat team, and choosing a route at a fork.
- Sixteen verified publications reconciled from 19 Google Scholar records, with compact conference/journal/preprint badges, titles, authors, bilingual summaries, topic filters and paper/code/resource links.
- Four official Yani Neko cover images: a clean character illustration opens the gallery, followed by relaxed everyday scenes. Click the image, use previous/next arrows, choose a numbered button or press the left/right keys to switch. No automatic rotation.
- An interactive character expression switch in the footer.
- Local font files and responsive WebP artwork; no backend or analytics.

## Local development

Requires Node.js 24 (the version used by the deployment workflow).

```sh
git clone https://github.com/nuozimiaowu/nuozimiaowu.github.io.git
cd nuozimiaowu.github.io
npm ci
npm run dev -- --port 4173
```

Open http://127.0.0.1:4173/. On Windows PowerShell, use `npm.cmd` if the local execution policy blocks `npm.ps1`.

```sh
npm run build
npm run preview -- --port 4173
```

## Deployment

GitHub Pages is built by `.github/workflows/pages.yml`. Push to `main` to build and deploy, or use **Actions → Deploy academic homepage to GitHub Pages → Run workflow**. The repository's Pages source must be **GitHub Actions**.

Only the production `dist/` artifact is published. `vite.config.js` uses the Pages base path from `configure-pages`, so root and project-site URLs both work. No deployment credentials are committed; GitHub Actions uses its repository-scoped token.

## Editing

| File | Purpose |
| --- | --- |
| `src/main.js` | Bilingual copy, biography, research cards and interactions |
| `src/publications.js` | Verified publications, author order, links and BibTeX |
| `src/hero-art.js` | Cover gallery images, bilingual descriptions and framing |
| `src/style.css` | Base layout and responsive styles |
| `src/yanineko.css` | Anime theme and illustrated research cards |
| `public/images/yanineko/` | Official anime character and promotional artwork |
| `public/images/research/` | Optimized generated research illustrations |
| `design/research/` | Original generated research PNGs |
| `design/hero/` | Original official episode-still JPEGs |
| `SOURCES.md` | Primary sources for academic records |
| `docs/anime-artwork.md` | Official artwork provenance and credits |
| `docs/research-art-prompts.md` | ImageGen prompts for the three research illustrations |

After replacing research artwork, run:

```sh
node scripts/optimize-research-art.mjs
npm run build
```

## Credits

Official anime artwork and logo: ©にゃんにゃんファクトリー・講談社／ヤニねこ製作委員会. Sources are linked in `docs/anime-artwork.md`. This is an unofficial personal academic homepage. The three research illustrations are generated adaptations made with OpenAI ImageGen, not official frames; interactive speech is original website copy. Font license texts are retained under `public/licenses/`.

No email address, enrollment dates, awards, citation metrics or CV were invented. The publication data retains venue and preprint metadata. Academic facts and their sources are documented in `SOURCES.md`.
