// Main JavaScript file for portfolio website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initThemeToggle();
    initNavigation();
    initScrollAnimations();
    initLoadingScreen();
    initCounterAnimations();
    initAgeCounter();
    initExperienceTabs();
    initContactForm();
    initSmoothScroll();
    initParallaxEffects();
});

// Theme Toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add smooth transition for theme change
        htmlElement.style.transition = 'all 0.3s ease';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Remove transition after change to avoid affecting other animations
        setTimeout(() => {
            htmlElement.style.transition = '';
        }, 300);
        
        // Add a subtle scale animation to the toggle button
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 150);
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            htmlElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
}

// Navigation functionality
function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Loading screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger specific animations based on element type
                if (entry.target.classList.contains('project-card')) {
                    animateProjectCard(entry.target);
                }
                
                if (entry.target.classList.contains('tab-panel')) {
                    // Experience panels will be handled by their own intersection observer if needed
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const elementsToAnimate = document.querySelectorAll(
        '.section-title, .section-subtitle, .project-card, .tab-panel, .about-text, .contact-info, .contact-form'
    );
    
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Counter animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Age Counter functionality
function initAgeCounter() {
    const ageCounter = document.getElementById('age-counter');
    if (!ageCounter) return;
    
    // Set your birthdate here (year, month-1, day, hour, minute, second)
    // Note: Month is 0-indexed (0 = January, 5 = June, etc.)
    const birthDate = new Date(2002, 0, 9, 7, 0, 0); // January 9, 2002, 7:00 AM

    function updateAge() {
        const now = new Date();
        const ageInMilliseconds = now.getTime() - birthDate.getTime();
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        
        // Display age with 6 decimal places for smooth animation
        ageCounter.textContent = ageInYears.toFixed(6);
    }
    
    // Update immediately
    updateAge();
    
    // Update every 100ms for smooth real-time counter
    setInterval(updateAge, 100);
}

// Travel Map functionality
function initTravelMap() {
    const mapContainer = document.getElementById('world-map');
    if (!mapContainer) return;
    
    // Countries you've visited - add country codes here
    const visitedCountries = [
        'US', // United States
        'CA', // Canada
        'GB', // United Kingdom
        'FR', // France
        'DE', // Germany
        // Add more country codes as you visit them
    ];
    
    // Load simplified world map data
    loadWorldMap(visitedCountries);
    
    // Update stats
    updateTravelStats(visitedCountries);
}

function loadWorldMap(visitedCountries) {
    const countriesGroup = document.getElementById('countries');
    if (!countriesGroup) return;
    
    // Simplified country data (you can expand this with more detailed SVG paths)
    const countries = {
        'US': { 
            name: 'United States', 
            path: 'M158 206c2-1 4-2 6-1l3 1c1 0 2 1 3 0l2-1c1-1 3-1 4 0l2 1c1 1 3 1 4 0l2-1c1 0 2-1 3 0l2 1c1 1 2 1 3 0l2-1h3l2 1c1 1 2 1 3 0l2-1c1-1 3-1 4 0l2 1c1 1 3 1 4 0l2-1c1 0 2 0 3 1l2 1c1 1 2 1 3 0l2-1c1-1 2-1 3 0l2 1c1 1 2 1 3 0l2-1c1 0 2 0 3 1l2 1c1 1 2 1 3 0',
            continent: 'North America'
        },
        'CA': { 
            name: 'Canada', 
            path: 'M158 180c2-1 4-2 6-1l3 1c1 0 2 1 3 0l2-1c1-1 3-1 4 0l2 1c1 1 3 1 4 0l2-1c1 0 2-1 3 0l2 1c1 1 2 1 3 0l2-1h3l2 1c1 1 2 1 3 0l2-1c1-1 3-1 4 0l2 1c1 1 3 1 4 0l2-1c1 0 2 0 3 1l2 1c1 1 2 1 3 0',
            continent: 'North America'
        },
        'GB': { 
            name: 'United Kingdom', 
            path: 'M488 180c1-1 2-1 3 0l1 1c1 1 2 1 3 0l1-1c1 0 2 0 2 1l1 1c0 1 1 1 2 0l1-1c1-1 2-1 3 0',
            continent: 'Europe'
        },
        'FR': { 
            name: 'France', 
            path: 'M470 200c2-1 3-2 5-1l2 1c1 0 2 1 2 0l2-1c1-1 2-1 3 0l2 1c1 1 2 1 3 0l2-1c1 0 2-1 2 0l2 1c1 1 2 1 3 0',
            continent: 'Europe'
        },
        'DE': { 
            name: 'Germany', 
            path: 'M500 190c1-1 2-1 3 0l2 1c1 1 2 1 3 0l2-1c1 0 2 0 2 1l2 1c0 1 1 1 2 0l2-1c1-1 2-1 3 0l2 1',
            continent: 'Europe'
        },
        // Add more countries here with their SVG paths
    };
    
    // Create country elements
    Object.keys(countries).forEach(countryCode => {
        const country = countries[countryCode];
        const countryElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        countryElement.setAttribute('d', country.path);
        countryElement.setAttribute('class', `country ${visitedCountries.includes(countryCode) ? 'visited' : ''}`);
        countryElement.setAttribute('data-country', countryCode);
        countryElement.setAttribute('data-name', country.name);
        
        // Add click handler
        countryElement.addEventListener('click', () => {
            toggleCountry(countryCode, countryElement);
        });
        
        // Add hover tooltip
        countryElement.addEventListener('mouseenter', (e) => {
            showTooltip(e, country.name);
        });
        
        countryElement.addEventListener('mouseleave', hideTooltip);
        
        countriesGroup.appendChild(countryElement);
    });
}

function toggleCountry(countryCode, element) {
    element.classList.toggle('visited');
    
    // Update visited countries array (you can save this to localStorage)
    const isVisited = element.classList.contains('visited');
    console.log(`${countryCode} is now ${isVisited ? 'visited' : 'not visited'}`);
    
    // Update stats
    updateTravelStats();
}

function updateTravelStats(visitedCountries = []) {
    const countriesCount = document.getElementById('countries-visited');
    const continentsCount = document.getElementById('continents-visited');
    
    if (!visitedCountries.length) {
        // Count from DOM if no array provided
        visitedCountries = Array.from(document.querySelectorAll('.country.visited')).map(el => el.dataset.country);
    }
    
    // Calculate continents (simplified)
    const continents = new Set();
    const countryToContinentMap = {
        'US': 'North America', 'CA': 'North America', 'MX': 'North America',
        'GB': 'Europe', 'FR': 'Europe', 'DE': 'Europe', 'IT': 'Europe', 'ES': 'Europe',
        'CN': 'Asia', 'JP': 'Asia', 'IN': 'Asia', 'KR': 'Asia', 'TH': 'Asia',
        'AU': 'Oceania', 'NZ': 'Oceania',
        'BR': 'South America', 'AR': 'South America', 'CL': 'South America',
        'EG': 'Africa', 'ZA': 'Africa', 'KE': 'Africa', 'MA': 'Africa'
    };
    
    visitedCountries.forEach(country => {
        if (countryToContinentMap[country]) {
            continents.add(countryToContinentMap[country]);
        }
    });
    
    if (countriesCount) {
        animateCountUp(countriesCount, visitedCountries.length);
    }
    
    if (continentsCount) {
        animateCountUp(continentsCount, continents.size);
    }
}

function animateCountUp(element, target) {
    const current = parseInt(element.textContent) || 0;
    const increment = target > current ? 1 : -1;
    const duration = 50;
    
    if (current === target) return;
    
    const timer = setInterval(() => {
        const newValue = parseInt(element.textContent) + increment;
        element.textContent = newValue;
        
        if (newValue === target) {
            clearInterval(timer);
        }
    }, duration);
}

function showTooltip(event, text) {
    // Create or update tooltip
    let tooltip = document.getElementById('map-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'map-tooltip';
        tooltip.style.cssText = `
            position: absolute;
            background: var(--bg-tertiary);
            color: var(--text-primary);
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            font-size: 0.875rem;
            pointer-events: none;
            z-index: 1000;
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-medium);
        `;
        document.body.appendChild(tooltip);
    }
    
    tooltip.textContent = text;
    tooltip.style.left = (event.pageX + 10) + 'px';
    tooltip.style.top = (event.pageY - 30) + 'px';
    tooltip.style.display = 'block';
}

function hideTooltip() {
    const tooltip = document.getElementById('map-tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

// Experience tabs functionality
function initExperienceTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const tabIndicator = document.querySelector('.tab-indicator');

    if (!tabButtons.length || !tabPanels.length || !tabIndicator) return;

    // Set initial indicator position
    updateTabIndicator(tabButtons[0]);

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove active states
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active state to clicked button and corresponding panel
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            tabPanels[index].classList.add('active');

            // Update indicator position
            updateTabIndicator(button);
        });
    });

    // Handle keyboard navigation
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', (e) => {
            let newIndex = index;
            
            if (e.key === 'ArrowLeft') {
                newIndex = index > 0 ? index - 1 : tabButtons.length - 1;
                e.preventDefault();
            } else if (e.key === 'ArrowRight') {
                newIndex = index < tabButtons.length - 1 ? index + 1 : 0;
                e.preventDefault();
            }
            
            if (newIndex !== index) {
                tabButtons[newIndex].click();
                tabButtons[newIndex].focus();
            }
        });
    });
}

function updateTabIndicator(activeButton) {
    const tabIndicator = document.querySelector('.tab-indicator');
    const buttonRect = activeButton.getBoundingClientRect();
    const containerRect = activeButton.parentNode.getBoundingClientRect();
    
    tabIndicator.style.left = (buttonRect.left - containerRect.left) + 'px';
    tabIndicator.style.width = buttonRect.width + 'px';
}

// Project card animation
function animateProjectCard(card) {
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, Math.random() * 200);
}

// Contact form handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        // Simulate form submission (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success message
        showFormMessage('Message sent successfully!', 'success');
        e.target.reset();
        
    } catch (error) {
        showFormMessage('Failed to send message. Please try again.', 'error');
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

function showFormMessage(message, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: var(--border-radius);
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        text-align: center;
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s ease;
    `;
    
    const form = document.getElementById('contact-form');
    form.appendChild(messageDiv);
    
    // Animate in
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(-10px)';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effects - Subtle version
function initParallaxEffects() {
    const shapes = document.querySelectorAll('.shape');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Very subtle parallax for shapes
        shapes.forEach((shape, index) => {
            const rate = scrolled * (-0.05 - index * 0.01);
            const rotation = scrolled * (0.02 + index * 0.005);
            shape.style.transform = `translateY(${rate}px) rotate(${rotation}deg)`;
        });
        
        // Fade out scroll indicator
        if (scrollIndicator) {
            const opacity = Math.max(0, 1 - scrolled / 200);
            scrollIndicator.style.opacity = opacity;
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimizations for shapes
const shapes = document.querySelectorAll('.shape');
shapes.forEach(shape => {
    shape.style.willChange = 'transform';
});

// Enhanced scroll performance
const debouncedScroll = debounce(() => {
    // Any expensive scroll operations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll, { passive: true });

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// Focus management for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add keyboard navigation styles
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary-color) !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(style);

// Performance monitoring (optional)
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        }, 0);
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // You could send this to an error tracking service
});

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-normal', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');
}
