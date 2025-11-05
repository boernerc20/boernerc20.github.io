---
description: Update images and details for existing projects
---

You are helping update images, descriptions, or other details for existing projects on the portfolio website.

## Instructions

1. Ask the user which project(s) they want to update:
   - List current projects by reading the projects section in index.html
   - Let them specify which project to modify

2. For each project update, ask what they want to change:
   - Replace project image
   - Update description
   - Change technologies used
   - Update GitHub/demo links
   - Modify project title

3. If updating images:
   - Ask for the new image file name/path
   - Verify the image exists in imgs/ directory (use ls imgs/)
   - Remind them to optimize large images (recommend <500KB)
   - Update the img src attribute in index.html

4. If updating other details:
   - Read the current project card HTML
   - Show them the current values
   - Make the requested changes while maintaining consistent formatting

5. Process for updating in index.html:
   - Search for the project by name or current image filename
   - Locate the project card div
   - Update the relevant fields (img src, description, tech tags, links)
   - Preserve the HTML structure and classes

6. After making changes:
   - Show a summary of what was updated
   - Ask if they want to commit and deploy changes

## Common Image Locations

Project images should be in `imgs/` directory:
- Current images: ecodistrict-mockup.png, masters-project.png, senior-design.png, pcb-learning.png, linux-dotfiles.png, minecraft-jukebox.jpg

## Notes

- Keep image filenames descriptive and lowercase with hyphens
- Maintain consistent image aspect ratios (roughly 16:9 works well)
- Optimize images before adding them to the repository
- Test that image paths are correct (case-sensitive)
- Ensure project cards remain visually consistent
