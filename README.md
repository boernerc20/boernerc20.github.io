# boernerc20.me

Personal portfolio for Christopher Boerner — Electrical Engineer working avionics
for the ESPASat-L space vehicles that dispense from Northrop Grumman's ESPAStar
satellite bus.

Built with [Astro](https://astro.build), deployed to GitHub Pages at
**[boernerc20.me](https://boernerc20.me)**.

## Design: "Test Bench"

The site is themed as a piece of lab equipment. The hero is an oscilloscope whose
trace is a genuine UART encoding of the site's own boot log — start bit, 8 data
bits LSB-first, stop bit — decoded live on screen beside the raw hex bytes.

- **Substrate** — deep blue-black with a faint PCB ground-plane grid
- **Signal blue** (`--signal`) carries live/interactive elements; **neon pink**
  (`--neon`) is a sparing accent only
- **Type** — Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono
  (instrument labels), self-hosted latin subsets
- Dark is primary; light mode is a cool technical white. All text pairs meet
  WCAG AA in both themes.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built output
```

## Structure

```
src/
  data/                 # ← content lives here, no markup needed
    experience.json     #   roles, bullets, tags
    projects.json       #   featured + grid projects
    countries.json      #   travel list (drives the Beyond stat)
  components/           # Nav, Hero, About, Experience, Projects, Beyond, Footer
  layouts/Base.astro    # head, fonts, theme init, meta
  pages/index.astro     # page assembly + scroll-reveal
  styles/
    tokens.css          # design tokens (colors, type scale, motion)
    global.css          # reset, layout primitives, shared components
public/                 # served at the site root
  esp_clone.glb         # 3D PCB model (Draco-compressed)
  resume.pdf            # synced from the LaTeX-Resume repo
  imgs/, headshot.jpg, favicon.*, CNAME
```

## Editing content

Most updates need no markup changes:

| To change | Edit |
|---|---|
| A project's title, blurb, specs, tags, links | `src/data/projects.json` |
| Which projects are large case studies | `featured: true/false` (array order sets display order) |
| Work history | `src/data/experience.json` |
| Countries visited | `src/data/countries.json` |
| Hero copy / boot-log lines | `src/components/Hero.astro` |
| Colors, spacing, type scale | `src/styles/tokens.css` |

Adding an image: drop it in `public/imgs/` and reference it as `/imgs/name.jpg`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Astro
and publishes `dist/` to GitHub Pages. Feature branches never deploy.

`.github/workflows/sync-resume.yml` pulls the latest PDF from
[LaTeX-Resume](https://github.com/boernerc20/LaTeX-Resume) into
`public/resume.pdf` on a weekly schedule (or manual dispatch) and commits it,
which in turn triggers a redeploy.

## Notes

- The 3D model is Draco-compressed (6.8 MB → 244 KB). Re-compress any
  replacement with
  `npx @gltf-transform/cli optimize in.glb out.glb --compress draco`, then update
  `camera-target` / `camera-orbit` in `Projects.astro` to frame it.
- `model-viewer` loads from a CDN only once the model nears the viewport.
- Scroll-reveal, the 3D auto-rotate, and all animation respect
  `prefers-reduced-motion`.

---

Originally a vanilla HTML/CSS/JS site inspired by
[brittanychiang](https://v4.brittanychiang.com/),
[saahild](https://saahild.com/),
[matthiaskretschmann](https://matthiaskretschmann.com/), and
[ellishw](https://ellishw.tech/); rebuilt in Astro in 2026.
