# Google Scholar reconciliation

Read the [Tianyi Shang profile](https://scholar.google.com/citations?hl=en&user=YmHM1XkAAAAJ) directly in a browser on 2026-09-17. It displayed 19 entries and a disabled “Show more” button. The server fetch was rate-limited, but the browser view was accessible. Citation metrics were not added to the website.

The homepage combines duplicate preprint/publisher records into one entry for each work. Final publisher titles, author lists, and journal issue years take precedence when a Scholar record represents an earlier version. Preprint-only works retain their arXiv year. In particular, FourierPlace and CWPFormer use their 2026 issue year, and the dark-enhanced-net paper uses its 2025 issue year; Scholar displays 2025, 2025, and 2024 respectively.

| Scholar citation ID suffix | Record | Homepage entry |
| --- | --- | --- |
| `zYLM7Y9cAGgC` | Multimodal place recognition review, final journal version | `multimodal-review` |
| `WF5omc3nYNoC` | Multi-modal attention perception for vehicle navigation | `multimodal-navigation` |
| `Y0pCki6q_DkC` | Dark-enhanced visual place recognition | `dark-enhanced-vpr` |
| `IjCSPb-OGe4C` | MambaPlace | `mambaplace` |
| `Tyk-4Ss8FVUC` | Multilayer cooperative particle swarm optimizer | `mc-pso` |
| `qjMakFHDy7sC` | Bridging Text and Vision / Text4VPR | `text4vpr` |
| `ufrVoPGSRksC` | Earlier CWPFormer record | `cwpformer` (merged) |
| `_FxGoFyzp5QC` | A2GC | `a2gc` |
| `UeHWp8X0CEIC` | Multimodal review preprint | `multimodal-review` (merged) |
| `LkGwnXOMwfcC` | FourierPlace | `fourierplace` |
| `YsMSGLbcyi4C` | Text-driven 3D lidar place recognition preprint | `vehicle-scene-interaction` (merged) |
| `Se3iqnhoufwC` | Vehicle-Scene Interaction, final journal version | `vehicle-scene-interaction` |
| `W7OEmFMy1HYC` | OptiCorNet | `opticornet` |
| `4TOpqqG69KYC` | Hybrid State Space Modeling | `hybrid-state-space` |
| `8k81kl-MbHgC` | Adversarial Attacks on Robot Localization | `adversarial-localization` |
| `UebtZRa9Y70C` | Riemannian and Symplectic Geometry / SympLoc | `symploc` |
| `5nxA0vEk-isC` | Seeing Through the Rain | `seeing-through-rain` |
| `roLk4NBRz8UC` | SpatiaLoc | `spatialoc` |
| `M3ejUd6NZC8C` | CWPFormer with final four-author list | `cwpformer` |

Each record can be opened using `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=YmHM1XkAAAAJ&citation_for_view=YmHM1XkAAAAJ:SUFFIX`. Full publisher and arXiv evidence is retained in `SOURCES.md`.
