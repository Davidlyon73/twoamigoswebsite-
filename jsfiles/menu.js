document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.section-button'); // Select all menu section buttons
  const categories = document.querySelectorAll('.menu-category'); // Select all menu categories

  // Functionality for section switching
  buttons.forEach(button => {
      button.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default anchor behavior

          const target = button.getAttribute('data-target'); // Get the target section's ID
          
          // Hide all categories
          categories.forEach(category => {
              category.classList.remove('active');
          });

          // Show the targeted category
          const targetCategory = document.getElementById(target);
          if (targetCategory) {
              targetCategory.classList.add('active');
          }
      });
  });

  // Optional: Handle cases where no buttons or sections exist
  if (buttons.length === 0 || categories.length === 0) {
      console.warn('No menu sections or buttons found in the HTML. Please ensure the structure is correct.');
  }
});