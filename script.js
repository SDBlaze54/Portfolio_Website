// Smooth slide page transitions
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');

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

      // Add slide-out animation to body
      document.body.classList.add('page-exit');

      // Navigate after animation completes
      setTimeout(() => {
        window.location.href = href;
      }, 400); // Match the slideOutToLeft animation duration
    });
  });
});
