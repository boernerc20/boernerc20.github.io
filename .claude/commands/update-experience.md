---
description: Update work experience section on the website
---

Update the experience timeline. It's data-driven — edit JSON, not markup.

## Instructions

1. Ask what's changing: a new role, updated bullets, new dates, or new tags.

2. Edit `src/data/experience.json`. Entries render **in array order**, so the
   newest role goes first. Each entry:
   ```json
   {
     "designator": "EXP-01",
     "role": "Electrical Engineer",
     "org": "Northrop Grumman",
     "note": "ESPAStar · ESPASat-L",
     "start": "Nov 2025",
     "end": "Present",
     "location": "Dulles, VA",
     "bullets": ["Achievement-oriented sentence."],
     "tags": ["Avionics", "Python"]
   }
   ```

3. When inserting a role at the top, **renumber the `designator` fields** so they
   stay sequential (`EXP-01`, `EXP-02`, …).

4. `note` is optional — use `null` when there's no sub-label.

5. Verify with `npm run build`.

## Notes

- 1–3 bullets per role, written as accomplishments.
- Only real employment belongs here. Projects — including Senior Design and the
  Master's project — go in `src/data/projects.json` instead.
- If the change also affects the résumé, the source of truth is the separate
  `LaTeX-Resume` repo; see the `update-resume` skill.
