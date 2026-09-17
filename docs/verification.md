# Verification

## Build

- `npm run build`: production bundle generated successfully.
- `npm install`: dependency audit reported 0 vulnerabilities at implementation time.
- No backend, credentials, analytics, or remote runtime font requests are required.

## Browser checks

Checked in the Codex Chromium in-app browser against the local site:

- At widths 320, 390, 768, 1024, and 1440 CSS pixels, the document had no horizontal overflow.
- Official Yani Neko WebP images load locally. The active hero uses the actual anime visual and an alternate official character illustration.
- Publication filters: All = 5; Navigation = 4; AIGC = current-research empty state with the correct topic.
- Reset from an empty state restores all 5 publications.
- SympLoc citation dialog shows an arXiv `@misc` entry with its verified eprint ID.
- Native citation and source dialogs open and close.
- The production build's A2GC copy button successfully copied BibTeX and changed its label to “Copied!”.
- English/Chinese switching updates the document language, navigation, body, labels, and summaries.
- Light/dark switching updates page theme and accessible action labels.
- Mobile menu opens, closes after navigation, and restores its correct accessible label.
- An open mobile menu is hidden when the viewport expands to desktop size.
- Clicking the cat changes its live status message.
- After a production-build reload, there were no failed network responses and no broken images.
- With reduced motion emulated, smooth scrolling becomes `auto` and the hero animation becomes `none`; the emulation was reset after the check.
- The three generated research cartoons load at widths 320, 390, 768, 1024, and 1440 CSS pixels, with no horizontal overflow. The detection card has HTML FAKE / REAL labels; the collaboration and fork-in-the-road scenes were visually inspected on mobile.
- Root and project-subpath production builds both succeed. Image paths use Vite's configured base URL.

## Independent review

The actual-anime revision was additionally checked at all five widths above with no horizontal overflow or broken images. Both official hero modes alternate visibility correctly; clicking the character changes the expression sprite. The sources dialog and footer identify the official artwork and correct rights holders. A separate read-only review found no remaining actionable issue in the character integration.

A separate source review checked content integrity, accessibility and UI behavior. Identified issues were corrected: muted text contrast, mobile menu visibility after desktop resize, the menu's accessible label after close, topic-specific empty states, and the citation entry type for preprints.

## Limits

- External academic pages may rate-limit requests. Links and records were checked from the primary sources described in `SOURCES.md`; ongoing availability is controlled by those sites.
- Browser interactions were checked in Chromium. Safari and Firefox have not been separately tested.
- Nova SSH timed out; the static frontend was built and checked in the local Windows workspace. No GPU resources were used.
