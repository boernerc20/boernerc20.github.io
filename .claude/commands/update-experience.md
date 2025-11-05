---
description: Update work experience section on the website
---

You are helping update the work experience section of the portfolio website.

## Instructions

1. Ask the user what they want to update:
   - Add a new position/company
   - Update existing experience
   - Reorder experiences

2. If adding new experience, collect:
   - Company name
   - Position/role title
   - Date range (e.g., "June 2024 - Present")
   - Key responsibilities (3-5 bullet points)
   - Technologies used

3. Edit `index.html`:
   - Locate the experience section (search for `<section id="experience"`)
   - Find the tab navigation and content area
   - Add new tab button:
   ```html
   <button class="tab-btn" data-tab="company-name">Company Name</button>
   ```
   - Add corresponding content panel:
   ```html
   <div class="tab-content" id="company-name">
     <h3>Position Title <span class="company">@ Company Name</span></h3>
     <p class="date-range">Date Range</p>
     <ul>
       <li>Responsibility 1</li>
       <li>Responsibility 2</li>
       <li>Responsibility 3</li>
     </ul>
   </div>
   ```

4. Verify the tab switching functionality works (check js/main.js if needed)
5. Ask if the user wants to commit and deploy the changes

## Notes

- Most recent experience should typically be first
- Keep bullet points action-oriented and quantifiable
- Ensure consistent formatting with existing entries
- Tab IDs should be lowercase with hyphens (e.g., "virginia-tech")
