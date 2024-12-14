document.addEventListener('DOMContentLoaded', () => {
  console.log('Script Loaded');

  const categories = document.querySelectorAll('.menu-category');
  const buttons = document.querySelectorAll('.section-button');
  const isMobile = () => window.matchMedia("(max-width: 768px)").matches; // Check if screen is mobile size

  const enableDesktopToggle = () => {
      // On desktop: Enable toggle functionality
      buttons.forEach(button => {
          button.addEventListener('click', (e) => {
              e.preventDefault();

              // Find the target menu category
              const target = button.getAttribute('data-target');
              categories.forEach(category => category.classList.remove('active')); // Hide all
              const targetCategory = document.getElementById(target);
              if (targetCategory) {
                  targetCategory.classList.add('active'); // Show the clicked category
              } else {
                  console.error(`Category with ID "${target}" not found.`);
              }
          });
      });
  };

  const enableMobileView = () => {
      // On mobile: Show all categories by default
      console.log('Mobile detected: Displaying all menu categories.');
      categories.forEach(category => category.classList.add('active')); // Display all
  };

  // Run behavior based on screen size
  if (isMobile()) {
      enableMobileView();
  } else {
      enableDesktopToggle();
  }

  // Listen for screen resize to switch behavior dynamically
  window.addEventListener('resize', () => {
      if (isMobile()) {
          enableMobileView();
      } else {
          enableDesktopToggle();
      }
  });
});