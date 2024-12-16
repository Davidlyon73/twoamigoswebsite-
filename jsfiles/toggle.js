document.addEventListener("DOMContentLoaded", () => {
  console.log("toggle.js Loaded");

  // Sidebar toggle
  const toggleMenu = document.getElementById("toggle-menu");
  const sidebarMenu = document.getElementById("sidebar-menu");

  if (toggleMenu && sidebarMenu) {
    // Open/Close sidebar
    toggleMenu.addEventListener("click", (event) => {
      console.log("Toggle button clicked");
      sidebarMenu.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
      event.stopPropagation();
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", (event) => {
      if (
        !event.target.closest("#sidebar-menu") &&
        !event.target.closest("#toggle-menu")
      ) {
        sidebarMenu.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
    });
  } else {
    console.warn("Toggle button or sidebar menu not found!");
  }

  // Dropdown menu logic
  document.querySelectorAll(".dropdown-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const targetMenu = button.getAttribute("data-menu");
      const dropdownMenu = document.getElementById(`${targetMenu}-dropdown`);

      if (dropdownMenu) {
        dropdownMenu.classList.toggle("active");
      } else {
        console.error(`Dropdown menu with ID "${targetMenu}-dropdown" not found`);
      }
    });
  });
});