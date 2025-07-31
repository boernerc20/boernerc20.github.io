# Personal Portfolio Website

A modern, minimalist personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features smooth animations, responsive design, and optimal performance for showcasing your skills, background, and projects.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Fully Responsive**: Optimized for all device sizes
- **Performance Optimized**: Fast loading with minimal dependencies
- **Accessibility Friendly**: WCAG compliant with keyboard navigation support
- **SEO Ready**: Semantic HTML and meta tags included
- **Smooth Animations**: CSS animations with reduced motion support
- **Interactive Elements**: Animated counters, skill bars, and form validation
- **GitHub Pages Ready**: Optimized for GitHub Pages deployment

## 📁 Project Structure

```
boernerc20.github.io/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet with animations
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Sections Included

1. **Hero Section** - Eye-catching introduction with animated elements
2. **About** - Personal background with animated statistics
3. **Skills** - Technical skills with animated progress bars
4. **Projects** - Portfolio showcase with hover effects
5. **Contact** - Contact form and social links

## 🛠️ Customization Guide

### 1. Personal Information
Edit `index.html` to update:
- Your name in the hero section
- Personal description and background
- Contact information and social links
- Statistics in the about section

### 2. Skills Section
Update the skills in `index.html`:
```html
<div class="skill-item">
    <span class="skill-name">Your Skill</span>
    <div class="skill-bar">
        <div class="skill-progress" data-width="85"></div>
    </div>
</div>
```

### 3. Projects
Replace project placeholders with your actual projects:
- Add project images to replace placeholders
- Update project titles, descriptions, and tech stacks
- Add links to live demos and source code

### 4. Colors and Styling
Customize the color scheme in `css/style.css`:
```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --primary-dark: #4f46e5;     /* Darker shade */
    --text-primary: #1e293b;     /* Main text color */
    /* ... other variables */
}
```

### 5. Animations
Adjust animation timing in CSS:
```css
:root {
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push your code to the `main` branch
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" and choose `main`
4. Your site will be available at `https://yourusername.github.io`

### Other Hosting Options
- **Netlify**: Drag and drop the folder or connect your GitHub repo
- **Vercel**: Import your GitHub repository
- **Custom Hosting**: Upload files to your web server

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Features

- **Optimized CSS**: Minimal unused styles, efficient selectors
- **Lazy Loading**: Images and animations load when needed
- **Efficient JavaScript**: Debounced scroll events, intersection observers
- **Web Fonts**: Preloaded Google Fonts with fallbacks
- **Minimal Dependencies**: No external frameworks required

## 🎯 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt texts for images
- Proper heading hierarchy
- Fast loading times

## 🔧 Development

### Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. Use a local server for best results:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

### Making Changes
1. Edit HTML content in `index.html`
2. Customize styles in `css/style.css`
3. Add functionality in `js/main.js`
4. Test across different devices and browsers

## 📋 Todo List

- [ ] Replace placeholder content with your information
- [ ] Add your actual project images and details
- [ ] Update contact form endpoint (currently shows demo)
- [ ] Add your social media links
- [ ] Customize color scheme to match your brand
- [ ] Add any additional sections you need
- [ ] Optimize images for web (compress, WebP format)
- [ ] Set up contact form backend (Netlify Forms, Formspree, etc.)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Google Fonts for the Inter font family
- CSS Grid and Flexbox for layout
- Intersection Observer API for scroll animations
- CSS Custom Properties for theming

---