document.addEventListener("DOMContentLoaded", () => {
  console.log("toggle.js Loaded");

  // Toggle Sidebar
  const toggleBar = document.querySelector('.toggle-bar');
  const sidebarMenu = document.getElementById('sidebar-menu');

  toggleBar.addEventListener('click', () => {
    console.log("Sidebar Toggle Clicked");
    sidebarMenu.classList.toggle('active'); // Toggles active state
  });

  // Dropdown Menu Functionality
  document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const targetMenu = button.getAttribute('data-menu');
      const dropdownMenu = document.getElementById(`${targetMenu}-dropdown`);

      if (dropdownMenu) {
        dropdownMenu.classList.toggle('active');
        console.log(`Dropdown Menu ${targetMenu} Toggled`);
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-button')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('active');
      });
    }
  });
});