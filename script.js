// Smooth page transitions
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');
  barba.init({
  transitions: [{
    leave(data) {
      return gsap.to(data.current.container, { opacity: 0 });
    },
    enter(data) {
      return gsap.from(data.next.container, { opacity: 0 });
    }
  }]
});
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Don't prevent default for links with no href or anchor links
      if (!this.href || this.href.includes('#')) {
        return;
      }
      
      // Prevent default navigation
      e.preventDefault();
      
      // Get the href
      const href = this.href;
      
      // Add fade-out animation to body
      document.body.classList.add('page-exit');
      
      // Navigate after animation completes
      setTimeout(() => {
        window.location.href = href;
      }, 400); // Match the fadeOut animation duration
    });
  });
});
