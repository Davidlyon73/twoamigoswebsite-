document.querySelectorAll('.dropdown-button').forEach((button) => {
  button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      console.log('Button clicked:', button);

      // Toggle aria-expanded attribute
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      console.log('Toggled aria-expanded to:', !isExpanded);

      // Select the corresponding dropdown menu
      const dropdown = button.nextElementSibling;
      console.log('Dropdown sibling:', dropdown);

      if (dropdown) {
          if (!isExpanded) {
              // Show dropdown
              dropdown.style.display = 'block';
              dropdown.style.visibility = 'visible';
              dropdown.style.opacity = '1';
          } else {
              // Hide dropdown
              dropdown.style.display = 'none';
              dropdown.style.visibility = 'hidden';
              dropdown.style.opacity = '0';
          }
      }

      // Close other dropdowns
      document.querySelectorAll('.dropdown-button').forEach((otherButton) => {
          if (otherButton !== button) {
              const otherDropdown = otherButton.nextElementSibling;
              otherButton.setAttribute('aria-expanded', 'false');
              if (otherDropdown) {
                  otherDropdown.style.display = 'none';
                  otherDropdown.style.visibility = 'hidden';
                  otherDropdown.style.opacity = '0';
              }
          }
      });
  });
});