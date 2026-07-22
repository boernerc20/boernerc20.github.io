---
description: Check and optimize images for better website performance
---

Audit and optimize assets in `public/`. ImageMagick (`magick`) is installed
locally, so optimize directly rather than pointing at web tools.

## Instructions

1. Inventory sizes:
   ```bash
   du -sh public/ && ls -lhS public/imgs/
   ```

2. Find **unused** images — these still ship, since everything in `public/` is
   copied to `dist/`:
   ```bash
   npm run build
   for f in public/imgs/*; do
     n=$(basename "$f")
     [ "$(grep -c "$n" dist/index.html)" -eq 0 ] && echo "UNUSED $n"
   done
   ```
   Delete unused ones with `git rm` (recoverable from history).

3. Recompress anything oversized. Target ~800px wide, under ~150 KB:
   ```bash
   magick in.jpg -resize 800x -strip -quality 82 public/imgs/out.jpg
   ```
   To crop to the card ratio (16:10) around a subject:
   ```bash
   magick in.jpg -crop WxH+X+Y +repage -resize 800x -strip -quality 82 out.jpg
   ```

4. For `.glb` models, Draco compression is dramatic (6.8 MB → 244 KB here):
   ```bash
   npx @gltf-transform/cli optimize in.glb out.glb --compress draco --texture-compress webp
   ```
   Always re-check the model still renders before keeping it, and re-tune
   `camera-target` / `camera-orbit` in `Projects.astro`.

5. Report before/after totals.

## Targets

| Asset | Size |
|---|---|
| Project card / featured image (800px wide) | < 150 KB |
| Headshot | < 100 KB |
| 3D model (Draco-compressed) | < 500 KB |
| Whole `dist/` | ~1–2 MB |

## Notes

- Images already use `loading="lazy"` and `decoding="async"`.
- Fonts are self-hosted latin-only subsets; don't re-add full subsets.
- Verify visually after optimizing — headless Chrome is available:
  ```bash
  google-chrome-stable --headless=new --no-sandbox --hide-scrollbars \
    --virtual-time-budget=10000 --window-size=1280,6800 \
    --screenshot=out.png http://localhost:4321/
  ```
