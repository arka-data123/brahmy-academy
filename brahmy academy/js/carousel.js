// ============================================
// BRAHMY ACADEMY - CAROUSEL
// Testimonial slider with auto-play and touch support
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    const indicatorsContainer = document.getElementById('testimonialIndicators');

    if (!track) return;

    const slides = Array.from(track.children);
    const slideCount = slides.length;
    let currentIndex = 0;
    let autoPlayInterval;
    let isTransitioning = false;

    // ===== CREATE INDICATORS =====
    function createIndicators() {
        // Only create if indicators don't already exist
        if (indicatorsContainer && indicatorsContainer.children.length === 0) {
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('button');
                dot.className = 'carousel-dot';
                dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
                dot.setAttribute('data-index', i);

                if (i === 0) dot.classList.add('active');

                dot.addEventListener('click', () => goToSlide(i));
                indicatorsContainer.appendChild(dot);
            }
        } else if (indicatorsContainer) {
            // If indicators already exist, add click listeners
            const existingDots = indicatorsContainer.querySelectorAll('.carousel-dot');
            existingDots.forEach((dot, i) => {
                dot.addEventListener('click', () => goToSlide(i));
            });
        }
    }

    // ===== UPDATE INDICATORS =====
    function updateIndicators() {
        if (!indicatorsContainer) return;
        const dots = indicatorsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // ===== GO TO SLIDE =====
    function goToSlide(index) {
        if (isTransitioning) return;

        isTransitioning = true;
        currentIndex = index;

        // Calculate offset
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;

        updateIndicators();

        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    // ===== NEXT SLIDE =====
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slideCount;
        goToSlide(nextIndex);
    }

    // ===== PREVIOUS SLIDE =====
    function prevSlide() {
        const prevIndex = (currentIndex - 1 + slideCount) % slideCount;
        goToSlide(prevIndex);
    }

    // ===== AUTO PLAY =====
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // 5 seconds
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // ===== EVENT LISTENERS =====
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay(); // Restart auto-play after manual interaction
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    // Pause auto-play on hover
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);

    // ===== TOUCH SUPPORT =====
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // ===== KEYBOARD NAVIGATION =====
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        }
    });

    // ===== RESPONSIVE BEHAVIOR =====
    function updateCarouselLayout() {
        const windowWidth = window.innerWidth;

        // Show multiple slides on larger screens
        if (windowWidth >= 1024) {
            track.style.display = 'grid';
            track.style.gridTemplateColumns = 'repeat(3, 1fr)';
            track.style.transform = 'none';
        } else if (windowWidth >= 768) {
            track.style.display = 'grid';
            track.style.gridTemplateColumns = 'repeat(2, 1fr)';
            track.style.transform = 'none';
        } else {
            track.style.display = 'flex';
            track.style.gridTemplateColumns = '';
            goToSlide(currentIndex);
        }
    }

    window.addEventListener('resize', updateCarouselLayout);

    // ===== INITIALIZE =====
    createIndicators();
    updateCarouselLayout();

    // Only start auto-play on mobile
    if (window.innerWidth < 768) {
        startAutoPlay();
    }

    // Set up track for sliding
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.display = 'flex';

    slides.forEach(slide => {
        slide.style.minWidth = '100%';
        slide.style.flex = '0 0 100%';
    });

    console.log('🎠 Brahmy Academy carousel loaded');
});
