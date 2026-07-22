---
description: Pull latest resume from LaTeX-Resume repo
---

Refresh `public/resume.pdf` from the `LaTeX-Resume` repo, which is the source of
truth for the résumé.

## Instructions

1. Download the latest PDF. **The filename is `Christopher_Boerner_Resume.pdf`**
   (given-name first — an earlier version of this skill had it reversed, which
   silently returned a 404 HTML page):
   ```bash
   curl -fL -o public/resume.pdf \
     "https://raw.githubusercontent.com/boernerc20/LaTeX-Resume/main/Christopher_Boerner_Resume.pdf"
   ```

2. **Verify it's actually a PDF**, not an error page:
   ```bash
   file public/resume.pdf          # must say "PDF document"
   pdfinfo public/resume.pdf | grep -i '^pages'
   ```
   A 404 lands as a ~300 KB HTML file — always check before committing.

3. Confirm the content is current (role, employer, dates):
   ```bash
   pdftotext public/resume.pdf - | head -20
   ```

4. Ask the user whether to commit.

## Editing the résumé itself

The PDF is generated, so never hand-edit it. To change content:

1. Clone `https://github.com/boernerc20/LaTeX-Resume`
2. Edit `Christopher_Boerner_Resume.tex`
3. Rebuild: `pdflatex -interaction=nonstopmode Christopher_Boerner_Resume.tex`
4. **Check it's still one page** — `pdfinfo … | grep Pages`. The Projects section
   uses unsplittable `minipage` blocks, so adding a couple of lines to Experience
   silently pushes Projects onto page 2. Render and look:
   `pdftoppm -png -r 95 -f 1 -l 1 file.pdf out`
5. Commit and push both the `.tex` and the `.pdf`, then re-run step 1 here.

## Notes

- The site link is `/resume.pdf` (served from `public/`), with the download
  attribute `Chris_Boerner_Resume.pdf`.
- `.github/workflows/sync-resume.yml` automates this weekly.
- Keep the résumé's claims consistent with `src/data/` copy on the site.
