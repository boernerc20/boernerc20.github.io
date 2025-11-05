---
description: Add a new project to the portfolio website
---

You are helping add a new project to the portfolio website.

## Instructions

1. Ask the user for the following project details:
   - Project name
   - Brief description (2-3 sentences)
   - Technologies used (e.g., React, Python, AWS)
   - GitHub repository URL
   - Project image (path or if they need to add one)
   - Live demo URL (optional)

2. If an image needs to be added:
   - Remind the user to add it to the `imgs/` directory
   - Suggest optimizing the image (recommend <500KB)
   - Use descriptive filename (e.g., `project-name.png`)

3. Edit `index.html`:
   - Locate the projects section (search for `<section id="projects"`)
   - Find the project grid container
   - Add a new project card following the existing pattern:
   ```html
   <div class="project-card">
     <img src="imgs/project-image.png" alt="Project Name">
     <h3>Project Name</h3>
     <p>Project description here...</p>
     <div class="project-tech">
       <span>Technology1</span>
       <span>Technology2</span>
     </div>
     <div class="project-links">
       <a href="https://github.com/user/repo" target="_blank">
         <i class="fab fa-github"></i> GitHub
       </a>
       <a href="https://demo-url.com" target="_blank">
         <i class="fas fa-external-link-alt"></i> Live Demo
       </a>
     </div>
   </div>
   ```

4. Verify the changes look correct
5. Ask if the user wants to commit and deploy the changes now

## Notes

- Maintain consistent styling with existing projects
- Ensure image paths are correct (case-sensitive)
- Keep descriptions concise but informative
- Test locally by opening index.html in browser before deploying
