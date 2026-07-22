---
description: Add a new project to the portfolio website
---

Add a project to the Astro portfolio. Projects are data-driven — you edit JSON,
not markup.

## Instructions

1. Ask the user for: title, short blurb, tech tags, any links (GitHub, live demo,
   video), and whether it should be a **featured case study** or a **compact grid
   card**.

2. If it's featured, also gather: a `status` line (e.g. `Personal · KiCad`), a
   longer `detail` paragraph (problem → approach → result), and 3–4
   datasheet-style specs.

3. Add an image to `public/imgs/` and reference it as `/imgs/name.jpg`. Crop to
   roughly 16:10 and keep it under ~150 KB:
   ```bash
   magick source.jpg -resize 800x -strip -quality 82 public/imgs/name.jpg
   ```

4. Add an entry to `src/data/projects.json`. **Array order controls display
   order**; `featured` controls which section it lands in.

   Featured (large case-study row):
   ```json
   {
     "featured": true,
     "title": "Project Name",
     "status": "Personal · KiCad",
     "blurb": "One-sentence hook.",
     "detail": "A longer paragraph on approach and outcome.",
     "specs": [
       { "k": "TOOL", "v": "KiCad" },
       { "k": "OUTPUT", "v": "schematic → Gerber" }
     ],
     "tags": ["KiCad", "ESP32"],
     "image": "/imgs/name.jpg",
     "links": [{ "label": "GitHub", "href": "https://github.com/..." }]
   }
   ```

   Grid card (compact) — no `detail` or `specs`:
   ```json
   {
     "featured": false,
     "title": "Project Name",
     "status": "Personal",
     "blurb": "Two sentences max.",
     "tags": ["Linux", "Bash"],
     "image": "/imgs/name.jpg",
     "links": [{ "label": "GitHub", "href": "https://github.com/..." }]
   }
   ```

5. A 3D model can replace the image via `"model": "/file.glb"`. Compress it first
   (`npx @gltf-transform/cli optimize in.glb out.glb --compress draco`) and set
   `camera-target` / `camera-orbit` in `src/components/Projects.astro` to frame it.

6. Verify with `npm run build`, then check it on the dev server (`npm run dev`).

## Notes

- Keep roughly 3 featured projects; more dilutes the section.
- `links: []` is valid — the card renders without link buttons.
- Do **not** edit `src/components/Projects.astro` for content changes.
