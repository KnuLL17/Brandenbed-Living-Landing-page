// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authLinks = document.querySelector('.auth-links');
    
    hamburger.addEventListener('click', function() {
        // Toggle navigation menu
        navLinks.classList.toggle('nav-active');
        authLinks.classList.toggle('auth-active');
        
        // Change hamburger icon
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('nav-active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Language toggle functionality
    const languageToggle = document.querySelectorAll('.language-toggle span');
    languageToggle.forEach(function(element) {
        element.addEventListener('click', function() {
            if (this.textContent === 'EN' || this.textContent === 'DE') {
                document.querySelector('.language-toggle .active').classList.remove('active');
                this.classList.add('active');
                
                // Here you would typically change the language of the page
                console.log('Language changed to: ' + this.textContent);
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    authLinks.classList.remove('auth-active');
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
    
    // Add animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.value-card, .service-card, .stat-item');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // If element is in viewport
            if (position.top < window.innerHeight - 100) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize elements for animation
    const animatedElements = document.querySelectorAll('.value-card, .service-card, .stat-item');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load in case elements are already in view
    animateOnScroll();
});