---
description: Commit and deploy website changes to GitHub Pages
---

Deploy the Astro portfolio. Pushing to `main` triggers
`.github/workflows/deploy.yml`, which builds with Astro and publishes `dist/`.

## Instructions

1. **Build first** — a broken build means a failed deploy:
   ```bash
   npm run build
   ```

2. Review what's changing:
   ```bash
   git status && git diff
   ```

3. Confirm the branch. Feature branches never deploy; only `main` does.
   If the user is on a feature branch and wants to go live, confirm explicitly
   before merging.

4. Stage and commit with a clear message describing *why*, ending with:
   ```
   Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
   ```

5. Push. If deploying, push/merge to `main`.

6. Watch the run:
   ```bash
   gh run list --limit 3
   gh run watch
   ```

7. Confirm the site is live at https://boernerc20.me (allow a minute or two).

## Before the first Actions deploy

GitHub Pages must be switched from serving files directly off `main` to running
the workflow. Check current state:
```bash
gh api repos/boernerc20/boernerc20.github.io/pages | grep build_type
```
If it reports `"build_type": "legacy"`, the order matters — **merge to `main`
first, then** switch to `workflow`:
```bash
gh api -X PUT repos/boernerc20/boernerc20.github.io/pages -f build_type=workflow
```
Flipping it before `main` has the workflow leaves Pages with nothing to serve.

## Notes

- `public/CNAME` must keep `boernerc20.me` — losing it drops the custom domain.
- Never commit `dist/` or `node_modules/` (both gitignored).
- Large binaries: compress `.glb` files before committing (see `optimize-images`).
