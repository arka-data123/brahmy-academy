// ============================================
// BRAHMY ACADEMY - ANIMATIONS
// Scroll animations, parallax, and reveal effects
// ============================================

// Intersection Observer for scroll reveals
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe all scroll-reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
});

// ===== PARALLAX SCROLLING =====
let ticking = false;

function updateParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    const scrolled = window.pageYOffset;

    parallaxElements.forEach(element => {
        const speed = 0.5; // Parallax speed (0.5 = half scroll speed)
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });

    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// ===== SCROLL PROGRESS BAR =====
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;

    if (scrollProgress) {
        scrollProgress.style.width = `${scrolled}%`;
    }
}

window.addEventListener('scroll', updateScrollProgress);

// ===== COUNTER ANIMATIONS =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// Observe counters and animate when visible
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => counterObserver.observe(counter));
});

// ===== STAGGER ANIMATIONS =====
// Automatically handled by CSS classes, but we can add dynamic delays
document.addEventListener('DOMContentLoaded', () => {
    const staggerGroups = document.querySelectorAll('[data-stagger]');

    staggerGroups.forEach(group => {
        const children = group.children;
        const delay = parseInt(group.dataset.stagger) || 100;

        Array.from(children).forEach((child, index) => {
            child.style.animationDelay = `${index * delay}ms`;
        });
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
// Add will-change to elements being animated
const addWillChange = (element) => {
    element.style.willChange = 'transform, opacity';

    // Remove will-change after animation completes
    setTimeout(() => {
        element.style.willChange = 'auto';
    }, 1000);
};

// Apply to scroll-reveal elements when they become visible
observer.observe = new Proxy(observer.observe, {
    apply(target, thisArg, args) {
        const element = args[0];
        element.addEventListener('animationstart', () => addWillChange(element));
        return Reflect.apply(target, thisArg, args);
    }
});

// ===== SMOOTH SCROLL POLYFILL =====
// Enhance smooth scrolling for better performance
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    });
}

// ===== HOVER TILT EFFECT =====
document.addEventListener('DOMContentLoaded', () => {
    const tiltCards = document.querySelectorAll('.card-tilt');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
});

console.log('✨ Brahmy Academy animations loaded');
