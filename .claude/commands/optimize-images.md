---
description: Check and optimize images for better website performance
---

You are helping optimize images for the portfolio website to improve loading performance.

## Instructions

1. Scan the `imgs/` directory to find all image files
2. Check file sizes using `ls -lh imgs/`
3. Identify images larger than 500KB that should be optimized
4. For each large image, suggest optimization strategies:
   - Use online tools like TinyPNG, ImageOptim, or Squoosh
   - Recommend WebP format for better compression
   - Suggest appropriate dimensions (max 1920px width for full-width images)
   - For thumbnails/cards, recommend 800px max width

5. Check if images are being used:
   - Search for image filename in `index.html`
   - List any unused images that could be removed

6. Provide optimization report:
   - Total size of imgs/ directory
   - List of images over 500KB
   - Unused images
   - Potential size savings

7. Ask if user wants help replacing optimized images

## Image Size Guidelines

- **Project cards**: 800px × 500px, <200KB
- **Hero/header images**: 1920px × 1080px, <500KB
- **Icons/small graphics**: 256px × 256px, <50KB
- **Headshot**: 500px × 500px, <100KB
- **3D models**: <10MB (consider hosting externally if larger)

## Commands to Use

```bash
# Check total size
du -sh imgs/

# List files by size
ls -lhS imgs/

# Find large files
find imgs/ -type f -size +500k -exec ls -lh {} \;
```

## Notes

- Optimize images before committing to keep repository lean
- GitHub has repository size limits
- Faster loading improves user experience and SEO
- Consider lazy loading for below-the-fold images
