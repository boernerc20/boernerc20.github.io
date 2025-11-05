---
description: Pull latest resume from LaTeX-Resume repo
---

You are helping update the resume.pdf file by pulling the latest version from the LaTeX-Resume GitHub repository.

## Instructions

1. Fetch the latest resume PDF from the LaTeX-Resume repository:
   - Repository: https://github.com/boernerc20/LaTeX-Resume
   - File: Boerner_Christopher_Resume.pdf
   - Raw URL: https://github.com/boernerc20/LaTeX-Resume/raw/main/Boerner_Christopher_Resume.pdf

2. Download the file and save it as `resume.pdf` in the repository root:
   ```bash
   curl -L -o resume.pdf "https://github.com/boernerc20/LaTeX-Resume/raw/main/Boerner_Christopher_Resume.pdf"
   ```

3. Verify the download was successful:
   - Check file size is reasonable (should be 50-200KB typically)
   - Show the file size and last modified date

4. Ask the user if they want to commit and deploy the updated resume

## Notes

- The resume link in index.html (line 52) already points to resume.pdf
- Keep the download attribute as "Chris_Boerner_Resume.pdf" for user-friendly filename
- The resume.pdf file is tracked in git, so changes will be committed
- This can also be automated via GitHub Actions (see .github/workflows/sync-resume.yml)
