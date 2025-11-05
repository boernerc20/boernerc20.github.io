---
description: Commit and deploy website changes to GitHub Pages
---

You are helping deploy changes to the personal portfolio website hosted on GitHub Pages.

## Instructions

1. Run `git status` to see all changed files
2. Run `git diff` to show the changes made
3. Review the changes and create a clear, descriptive commit message following conventional commits format:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `style:` for styling changes
   - `content:` for content updates
   - `docs:` for documentation
4. Stage all relevant changes with `git add`
5. Create a commit with an appropriate message that includes the Claude Code co-author:
   ```
   🤖 Generated with [Claude Code](https://claude.com/claude-code)

   Co-Authored-By: Claude <noreply@anthropic.com>
   ```
6. Push to the main branch: `git push origin main`
7. Confirm that the changes have been pushed successfully
8. Remind the user that changes will be live at https://boernerc20.me within 1-2 minutes

## Important Notes

- Only commit files that should be deployed
- Check for any large binary files before committing
- Ensure CNAME file is not accidentally deleted
- Verify HTML/CSS/JS syntax before pushing
