/**
 * MIRAINA Homepage specific functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    // Additional page-specific initializations
    
    // Animate service cards on scroll
    initServiceCardAnimations();
    
    // Handle smooth scrolling for navigation links
    initSmoothScrolling();
  });
  
  /**
   * Initialize animations for service cards
   */
  function initServiceCardAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    if (serviceCards.length === 0) return;
    
    // Create intersection observer to trigger animations when elements come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of the element is visible
    });
    
    // Observe each service card
    serviceCards.forEach(card => {
      // Add base class for animations
      card.classList.add('fade-in-element');
      observer.observe(card);
    });
  }
  
  /**
   * Initialize smooth scrolling for navigation links
   */
  function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('header nav a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Check if the link is pointing to an in-page section
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
          e.preventDefault();
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
  
  /**
   * Add animation class to elements when they're scrolled into view
   */
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  }