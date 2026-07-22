---
description: Update images and details for existing projects
---

Update an existing project's image or copy. All project content lives in
`src/data/projects.json`.

## Instructions

1. List the current projects so the user can pick one:
   ```bash
   grep '"title"' src/data/projects.json
   ```

2. Ask what's changing — image, blurb/detail, specs, tags, links, or whether it
   should move between featured and the grid.

### Replacing an image

3. Optimize the new file into `public/imgs/` (ImageMagick is installed). Featured
   and card images both render at 16:10, so crop to that around the subject:
   ```bash
   magick source.jpg -crop WxH+X+Y +repage -resize 800x -strip -quality 82 \
     public/imgs/name.jpg
   ```
   Keep it under ~150 KB. To find crop coordinates, view the source first and
   pick a box centered on the subject.

4. Update the `"image"` field in `src/data/projects.json` (path is `/imgs/name.jpg`).

5. `git rm` the old image if nothing else references it.

### Changing copy

6. Edit the entry's fields directly:
   - `blurb` — one-sentence hook (both layouts)
   - `detail` — longer paragraph (featured only)
   - `specs` — 3–4 `{ "k": …, "v": … }` datasheet rows (featured only)
   - `tags`, `links`, `status`
   - `featured` — moves it between the case-study rows and the compact grid

7. Verify with `npm run build`, then confirm visually on the dev server.

## Notes

- Never edit `src/components/Projects.astro` for content — it's layout only.
- Keep claims accurate; prefer understating what a prototype achieved.
- Screenshot to confirm framing:
  ```bash
  google-chrome-stable --headless=new --no-sandbox --hide-scrollbars \
    --virtual-time-budget=10000 --window-size=1280,6800 \
    --screenshot=out.png http://localhost:4321/
  ```
