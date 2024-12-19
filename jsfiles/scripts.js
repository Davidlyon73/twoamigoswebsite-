document.addEventListener('DOMContentLoaded', () => {
    console.log('scripts.js Initialized');
  
    // Select all buttons and categories
    const buttons = document.querySelectorAll('.menu-btn');
    const categories = document.querySelectorAll('.menu-category');
  
    if (!categories.length) {
      console.error('No menu categories found. Check your HTML structure.');
      return;
    }
  
    // Add click event to each button
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Get the target category ID from the button
        const targetId = e.target.getAttribute('data-target');
  
        // Hide all categories
        categories.forEach((category) => {
          category.classList.remove('active');
        });
  
        // Show the selected category
        const targetCategory = document.getElementById(targetId);
        if (targetCategory) {
          targetCategory.classList.add('active');
          console.log(`Displaying category: ${targetId}`);
        } else {
          console.error(`Category with ID '${targetId}' not found.`);
        }
      });
    });
  
    // Show the first category by default
    const defaultCategory = categories[0];
    if (defaultCategory) {
      defaultCategory.classList.add('active');
    } else {
      console.error('No default category found.');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    console.log('scripts.js is loaded');
  
    const buttons = document.querySelectorAll('.menu-btn');
    const categories = document.querySelectorAll('.menu-category');
  
    console.log('Buttons:', buttons);
    console.log('Categories:', categories);
  
    if (!buttons.length) {
      console.error('No buttons found. Check your HTML structure or class names.');
    }
  
    if (!categories.length) {
      console.error('No categories found. Check your HTML structure or class names.');
    }
  });