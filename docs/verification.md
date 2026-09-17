# Verification

## Build

- `npm run build`: production bundle generated successfully.
- `npm install`: dependency audit reported 0 vulnerabilities at implementation time.
- No backend, credentials, analytics, or remote runtime font requests are required.

## Browser checks

Checked in the Codex Chromium in-app browser against the local site:

- At widths 320, 390, 768, 1024, and 1440 CSS pixels, the document had no horizontal overflow.
- Official Yani Neko WebP images load locally. The active hero uses the actual anime visual and an alternate official character illustration.
- Publication filters after the Scholar expansion: All = 16; Navigation = 11; Vision = 4; Other research = 1. AIGC has the current-research empty state with the correct topic.
- The source dialog opens and closes.
- English/Chinese switching updates the document language, navigation, body, labels, and summaries.
- Light/dark switching updates page theme and accessible action labels.
- Mobile menu opens, closes after navigation, and restores its correct accessible label.
- An open mobile menu is hidden when the viewport expands to desktop size.
- Clicking the cat changes its live status message.
- After a production-build reload, there were no failed network responses and no broken images.
- With reduced motion emulated, smooth scrolling becomes `auto` and the hero animation becomes `none`; the emulation was reset after the check.
- The three generated research cartoons load at widths 320, 390, 768, 1024, and 1440 CSS pixels, with no horizontal overflow. The detection card has HTML FAKE / REAL labels; the collaboration and fork-in-the-road scenes were visually inspected on mobile.
- Root and project-subpath production builds both succeed. Image paths use Vite's configured base URL.

### Publication layout simplification

- Removed publication thumbnails, venue/topic badges and BibTeX controls. All five entries retain their title, authors, bilingual summary and Paper link; A2GC also retains its documented Code link.
- At widths 390, 900 and 1440 CSS pixels, publication text occupies the full row and there is no horizontal overflow. The mobile layout was visually inspected.
- Navigation filtering still returns four papers, resetting returns five, and Chinese switching updates summaries and resource labels.
- The updated production build and JavaScript syntax check pass.

### Cover gallery and venue badges (initial five-image version)

- Five distinct official Yani Neko images load and switch through numbered selectors, previous/next controls, clicking the image, and keyboard arrows. The gallery wraps in both directions and exposes exactly one active slide and selector.
- Language switching preserves the selected image and translates its description. Slide animation respects reduced motion; there is no automatic rotation.
- Layout checks at 320, 390, 768 and 1440 CSS pixels found no horizontal overflow. The initially crowded 320-pixel controls were corrected and rechecked to fit their container.
- Publication rows keep their text-only layout and now show compact CVPR 2026, IROS 2025 or arXiv preprint 2026 badges. Venue full names are available through accessible labels and tooltips. Preprint badges translate in Chinese.
- The gallery and dark-theme badges were visually inspected; no browser console errors were captured. A separate source review found no actionable regression.

### Relaxed cover revision

- The user's approved full-body official character illustration is now the default (`chara-pic01.webp`). Three official everyday stills replace the prior smoking-focused and more dramatic cover selections, for four active slides total.
- All three source stills were visually inspected at full resolution: an everyday smile, a cheerful outdoor moment, and an outing with friends. None shows visible cigarettes or smoke.
- Browser verification confirms all four images load, clicking the image wraps from the final slide to the approved default, and the former four selections are absent from the active gallery.
- Widths 320, 390 and 1440 CSS pixels have no horizontal overflow; all gallery controls fit. The production build passes, with no captured browser console errors. All sixteen publications remain present.

## Independent review

The actual-anime revision was additionally checked at all five widths above with no horizontal overflow or broken images. Both official hero modes alternate visibility correctly; clicking the character changes the expression sprite. The sources dialog and footer identify the official artwork and correct rights holders. A separate read-only review found no remaining actionable issue in the character integration.

A separate source review checked content integrity, accessibility and UI behavior. Identified issues were corrected: muted text contrast, mobile menu visibility after desktop resize, the menu's accessible label after close, topic-specific empty states, and the citation entry type for preprints.

### Google Scholar expansion

- The live Scholar profile's 19 records were reconciled into 16 independent works: nine journal articles, three conference papers, and four preprints. Eleven works were added to the previous five.
- A separate read-only review compared all eleven additions against the publisher/arXiv evidence, confirming exact titles, ordered authors, journal issue years and full venue names. All nineteen Scholar records map to valid website entries; duplicate versions are merged.
- Seven Code links and one survey Resources link are displayed. FourierPlace's empty repository is omitted.
- All sixteen entries contain Chinese and English summaries. Browser checks confirmed 16 total entries, 11 Navigation, 4 Vision and 1 Other research entry, and no publication thumbnails.
- At 320, 390 and 1440 CSS pixels, the expanded list and filter controls have no horizontal overflow. Chinese switching updates every summary and the Resources label. No console errors were captured.
- Production build and JavaScript syntax validation passed.

## Public deployment

Verified on 2026-09-17:

- Public site: https://nuozimiaowu.github.io/.
- GitHub Pages source is GitHub Actions. [Deployment run 35181036864](https://github.com/nuozimiaowu/nuozimiaowu.github.io/actions/runs/35181036864) completed successfully for source commit `1e8a67b19022f14005bec5e9478cad00d1dea198`.
- Unauthenticated HTTPS requests returned success for all 22 checked resources: the homepage, production JavaScript/CSS, eight font resources, and eleven image files. All eleven remote image SHA-256 hashes match the local assets.
- The public page rendered in Chromium with all three research illustrations loaded, the correct FAKE / REAL labels, no horizontal overflow at the normal mobile viewport, and no captured console warnings or errors.
- Mobile navigation successfully opens the research section on the public site. Future pushes to `main` trigger the deployment workflow (except commits explicitly marked to skip CI).

## Limits

- External academic pages may rate-limit requests. Links and records were checked from the primary sources described in `SOURCES.md`; ongoing availability is controlled by those sites.
- Browser interactions were checked in Chromium. Safari and Firefox have not been separately tested.
- Nova SSH timed out; the static frontend was built and checked in the local Windows workspace. No GPU resources were used.
