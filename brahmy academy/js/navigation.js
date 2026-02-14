// ============================================
// BRAHMY ACADEMY - NAVIGATION
// Navbar behavior, mobile menu, and smooth scrolling
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.navbar-link');

    // ===== STICKY NAVBAR ON SCROLL =====
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for styling
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ===== MOBILE MENU TOGGLE =====
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ===== ACTIVE SECTION HIGHLIGHTING =====
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.navbar-link[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // ===== SMOOTH SCROLL TO SECTIONS =====
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for navbar height

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Update URL without jumping
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // ===== KEYBOARD NAVIGATION =====
    // Allow keyboard navigation through menu items
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (index + 1) % navLinks.length;
                navLinks[nextIndex].focus();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (index - 1 + navLinks.length) % navLinks.length;
                navLinks[prevIndex].focus();
            } else if (e.key === 'Escape') {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // ===== SKIP TO CONTENT LINK =====
    // Add skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#programs';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-yellow-neon);
    color: var(--color-navy-deep);
    padding: 8px 16px;
    text-decoration: none;
    z-index: 1000;
    font-weight: bold;
  `;

    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // ===== SCHEDULE FILTERS =====
    const scheduleFilters = document.querySelectorAll('.schedule-filter');
    const scheduleClasses = document.querySelectorAll('.schedule-class');

    scheduleFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const filterValue = filter.dataset.filter;

            // Update active filter
            scheduleFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            // Filter classes
            scheduleClasses.forEach(classEl => {
                if (filterValue === 'all' || classEl.dataset.type === filterValue) {
                    classEl.style.display = 'block';
                    classEl.parentElement.style.display = 'block';
                } else {
                    classEl.style.display = 'none';

                    // Hide cell if no classes visible
                    const cell = classEl.parentElement;
                    const visibleClasses = cell.querySelectorAll('.schedule-class[style*="display: block"]');
                    if (visibleClasses.length === 0) {
                        cell.style.display = 'none';
                    }
                }
            });
        });
    });

    // ===== GALLERY FILTERS =====
    const galleryFilters = document.querySelectorAll('.gallery-filters .schedule-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Show all images by default (no filter active initially)
    galleryItems.forEach(item => {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });

    galleryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const filterValue = filter.dataset.filter;

            // Update active filter
            galleryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            // Filter gallery items
            galleryItems.forEach(item => {
                if (item.dataset.category === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    console.log('🧭 Brahmy Academy navigation loaded');
});
