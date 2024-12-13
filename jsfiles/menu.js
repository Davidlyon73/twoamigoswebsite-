document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.section-button');
    const categories = document.querySelectorAll('.menu-category');
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
  
        const target = button.getAttribute('data-target');
        
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
  });