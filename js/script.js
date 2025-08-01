document.addEventListener('DOMContentLoaded', function() {
  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- Smooth Scrolling & Close Mobile Menu on Link Click ---
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      // Handle the "scroll to top" link
      if (targetId === '#') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Handle links to other sections
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }

      // If the mobile menu is open and a link is clicked, close the menu
      if (mobileMenu && !mobileMenu.classList.contains('hidden') && this.closest('#mobile-menu')) {
        mobileMenu.classList.add('hidden');
      }
    });
  });
});