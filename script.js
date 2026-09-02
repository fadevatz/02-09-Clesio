/**
 * Dr. Clésio Pimenta - Landing Page JavaScript
 * Handles navigation, animations, FAQ accordions, and WhatsApp floating widget
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const whatsappFloatBtn = document.getElementById('whatsapp-float-btn');
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const popupClose = document.getElementById('popup-close');

    /* ==========================================
       1. Sticky Header & Scroll Effects
       ========================================== */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        highlightActiveNavLink();
    });

    /* ==========================================
       2. Mobile Menu Drawer
       ========================================== */
    const toggleMobileMenu = () => {
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        const isExpanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
        navToggle.querySelector('i').className = isExpanded ? 'fas fa-times' : 'fas fa-bars';
    };

    if (navToggle) navToggle.addEventListener('click', toggleMobileMenu);
    if (navOverlay) navOverlay.addEventListener('click', toggleMobileMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    /* ==========================================
       3. Active Nav Link on Scroll
       ========================================== */
    function highlightActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    }

    /* ==========================================
       4. FAQ Accordion Toggle
       ========================================== */
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isOpen = faqItem.classList.contains('active');

            // Close all items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // If not open, open clicked item
            if (!isOpen) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* ==========================================
       5. WhatsApp Floating Widget & Popup
       ========================================== */
    let popupTimer;

    // Show popup automatically after 6 seconds
    popupTimer = setTimeout(() => {
        if (whatsappPopup && !whatsappPopup.classList.contains('active')) {
            whatsappPopup.classList.add('active');
        }
    }, 6000);

    if (whatsappFloatBtn) {
        whatsappFloatBtn.addEventListener('click', () => {
            whatsappPopup.classList.toggle('active');
            clearTimeout(popupTimer);
        });
    }

    if (popupClose) {
        popupClose.addEventListener('click', () => {
            whatsappPopup.classList.remove('active');
            clearTimeout(popupTimer);
        });
    }

    /* ==========================================
       6. Scroll Intersection Observer Animations
       ========================================== */
    const animatedElements = document.querySelectorAll('[data-animate]');

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    element.classList.add('animated');
                }, delay);

                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => animationObserver.observe(el));
});
