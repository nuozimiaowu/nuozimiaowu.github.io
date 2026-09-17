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
| `public/images/yanineko/hero-everyday-smile.webp` | [Episode 3 still 03](https://yanineko-anime.com/wp/wp-content/uploads/2026/07/yanineko_03-03.jpg) | Previous gallery selection; retained as a candidate |
| `public/images/yanineko/hero-outdoor-cheer.webp` | [Episode 3 still 01](https://yanineko-anime.com/wp/wp-content/uploads/2026/07/yanineko_03-01.jpg) | Previous gallery selection; retained as a candidate |
| `public/images/yanineko/hero-friends-kyoto.webp` | [Episode 11 still 02](https://yanineko-anime.com/wp/wp-content/uploads/2026/09/yanineko_11-02.jpg) | Previous gallery selection; retained as a candidate |
| `public/images/yanineko/hero-balcony-chat.webp` | [Episode 2 still 02](https://yanineko-anime.com/wp/wp-content/uploads/2026/07/yanineko_02-02.jpg) | Second active cover, explicitly selected as option 09 |

Official WebP files are copied unchanged from URLs observed in the official page. Episode-still JPEG originals are retained in `design/hero/`, with the earlier everyday selections under `design/hero/calm/`; `scripts/optimize-hero-art.mjs` creates their 1280-pixel-wide WebP copies. The selected balcony still uses the inspected 1600 × 900 WebP from option 09, copied unchanged to the hero asset directory. Layout and framing are performed with CSS. Both active hero images are official artwork, not generated recreations.

On 2026-09-17 the user initially asked for a relaxed, natural impression without making smoking or rebellion the visual focus, and explicitly approved the clean full-body character illustration as the reference. It remains the default. The initial three accompanying stills contained no visible cigarettes or smoke. The user later clarified that smoking is allowed and selected options 01 and 09 from the ten-image board. The active homepage gallery now contains exactly those two selections: the full-body character illustration and the balcony conversation. The other previous covers remain available as source assets but are not referenced by the active gallery. No image content was painted over or generated to remove smoking.

The palette uses the official site's observed colors: old-paper white `#EFEEE2`, charcoal `#252525`, yellow `#FFB400`. Character green supports the research cards. The site is an unofficial personal academic homepage and includes attribution in its footer and source dialog. Interactive dialogue is original website copy, not anime quotations.

The three research-card illustrations are generated adaptations based on the official character references, created at the user's request. They are not official anime scenes. Original files are in `design/research/`; WebP versions are in `public/images/research/`; full prompts are recorded in `docs/research-art-prompts.md`.

The earlier generic `research-cat` illustration is not used or included in the GitHub repository.

## Optional cover selection board

Later on 2026-09-17, the user requested ten numbered cover choices and clarified that smoking is allowed among the optional candidates. The separate selection board at `public/art-options/index.html` initially included the existing eight artwork choices and the following two additional official episode stills. The user then selected 01 and 09, which now form the two-slide homepage gallery; option 01 remains the default.

| Selection file | Official source | Description |
| --- | --- | --- |
| `public/art-options/images/09.webp` | [Episode 2 still 02](https://yanineko-anime.com/wp/wp-content/uploads/2026/07/yanineko_02-02.jpg) | Yani Neko chatting with her neighbor on the balcony; a small cigarette is visible near the bottom, without visible smoke |
| `public/art-options/images/10.webp` | [Episode 4 still 01](https://yanineko-anime.com/wp/wp-content/uploads/2026/07/yanineko_04-01.jpg) | Close-up of Yani Neko and a bespectacled friend; no visible cigarette or smoke |

Both additional originals were inspected at their full 1920 × 1080 resolution. Their URLs were observed in the official site's episode section. These selection images are resized WebP copies of official stills, not generated or retouched artwork.

## Second selection round

The user confirmed **01 and 09** for the homepage, then requested twenty different additional choices, allowing Pixiv as a possible source. Pixiv navigation was blocked by the browser site-safety policy, so no Pixiv artwork was retrieved or attributed to that site. The twenty new options are numbered **11–30**, with the first ten retained in a collapsed section and the confirmed two shown at the top.

The new choices include fifteen distinct official anime stills, the first three manga volume covers, and two publisher color illustrations. All were visually reviewed; smoking is allowed. Original cover text, signatures, and artwork credits are retained. Manga cover previews are the original small images offered by the anime site and are not enlarged during conversion. None of the twenty are AI-generated or repetitions of the first batch.

`public/art-options/new-candidates.js` records each stable number, title, original image URL, source page, and served dimensions. `public/art-options/images/11.webp` through `30.webp` are optimized previews. The additional publisher source is [Young Magazine's official Yani Neko page](https://magazine.yanmaga.jp/c/yanineko/); manga artwork is ©にゃんにゃんファクトリー／講談社. The new balcony side profile comes from the [official voice actor interview](https://yanineko-anime.com/117/).
