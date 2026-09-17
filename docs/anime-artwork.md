# Actual Yani Neko artwork

The user clarified that the homepage must feature the anime **尼古喵喵 / ヤニねこ itself**, not a generic original catgirl. The active homepage now uses the actual official character and promotional images.

Source: [TV anime ヤニねこ official website](https://yanineko-anime.com/).

Copyright: ©にゃんにゃんファクトリー・講談社／ヤニねこ製作委員会.

| Local file | Official source | Use |
| --- | --- | --- |
| `public/images/yanineko/kv00.webp` | [Teaser visual](https://yanineko-anime.com/wp/wp-content/themes/yanineko-theme/images/kv00.webp) | Retired from the gallery |
| `public/images/yanineko/chara-pic01.webp` | [Character art](https://yanineko-anime.com/wp/wp-content/themes/yanineko-theme/images/chara-pic01.webp) | Default full character view, explicitly preferred by the user |
| `public/images/yanineko/chara-icon01.webp` | [Character icon](https://yanineko-anime.com/wp/wp-content/themes/yanineko-theme/images/chara-icon01.webp) | Header, footer, favicon |
| `public/images/yanineko/chara-face01.webp` | [Character expressions](https://yanineko-anime.com/wp/wp-content/themes/yanineko-theme/images/chara-face01.webp) | Clickable expression switch |
| `public/images/yanineko/logo.webp` | [Anime logo](https://yanineko-anime.com/wp/wp-content/themes/yanineko-theme/images/logo.webp) | Identify the anime in the hero panel |
| `public/images/yanineko/hero-key-visual.webp` | [Main key visual](https://yanineko-anime.com/wp/wp-content/themes/yanineko-theme/images/kv01.webp) | Retired from the gallery |
| `public/images/yanineko/hero-closeup.webp` | [Episode 1 still 01](https://yanineko-anime.com/wp/wp-content/uploads/2026/07/yanineko_01-01.jpg) | Retired from the gallery |
| `public/images/yanineko/hero-workday.webp` | [Episode 1 still 02](https://yanineko-anime.com/wp/wp-content/uploads/2026/07/yanineko_01-02.jpg) | Retired from the gallery |
| `public/images/yanineko/hero-everyday-smile.webp` | [Episode 3 still 03](https://yanineko-anime.com/wp/wp-content/uploads/2026/07/yanineko_03-03.jpg) | Everyday expression on an apartment walkway |
| `public/images/yanineko/hero-outdoor-cheer.webp` | [Episode 3 still 01](https://yanineko-anime.com/wp/wp-content/uploads/2026/07/yanineko_03-01.jpg) | Cheerful moment outdoors |
| `public/images/yanineko/hero-friends-kyoto.webp` | [Episode 11 still 02](https://yanineko-anime.com/wp/wp-content/uploads/2026/09/yanineko_11-02.jpg) | A relaxed outing with friends |

Official WebP files are copied unchanged from URLs observed in the official page. Episode-still JPEG originals are retained in `design/hero/`, with the active everyday selections under `design/hero/calm/`; `scripts/optimize-hero-art.mjs` resizes the active stills to 1280 pixels wide and encodes WebP copies for the site. Layout and framing are performed with CSS. All four active hero images are official artwork, not generated recreations.

On 2026-09-17 the user asked for a relaxed, natural impression without making smoking or rebellion the visual focus, and explicitly approved the clean full-body character illustration as the reference. It is now the default. The three accompanying stills were inspected at full size and contain no visible cigarettes or smoke. The former balcony, group key visual, smoking closeup, and workday image are no longer referenced by the gallery. No image content was painted over or generated to remove smoking.

The palette uses the official site's observed colors: old-paper white `#EFEEE2`, charcoal `#252525`, yellow `#FFB400`. Character green supports the research cards. The site is an unofficial personal academic homepage and includes attribution in its footer and source dialog. Interactive dialogue is original website copy, not anime quotations.

The three research-card illustrations are generated adaptations based on the official character references, created at the user's request. They are not official anime scenes. Original files are in `design/research/`; WebP versions are in `public/images/research/`; full prompts are recorded in `docs/research-art-prompts.md`.

The earlier generic `research-cat` illustration is not used or included in the GitHub repository.
