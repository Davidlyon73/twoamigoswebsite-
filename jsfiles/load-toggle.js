document.addEventListener("DOMContentLoaded", () => {
  console.log("toggle-combined.js Loaded");

  // Fetch and insert the toggle-menu.html content dynamically
  fetch("toggle-menu.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("toggle-container").innerHTML = html;

      // Call functions to bind toggle and dropdown behaviors
      bindToggleBehavior();
      bindDropdownBehavior();
      styleSubmenuItems();
    })
    .catch(error => console.error("Error loading toggle-menu:", error));

  // Function to bind toggle menu behavior
  function bindToggleBehavior() {
    const toggleMenu = document.getElementById("toggle-menu");
    const sidebarMenu = document.getElementById("sidebar-menu");
    const locationTitle = document.querySelector(".location-title");
    const locationCards = document.querySelector(".content-container");
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");

    let autoCloseTimer;

    function isSmallScreen() {
      return window.matchMedia("(max-width: 768px)").matches;
    }

    // Function to hide sidebar and reset UI
    function closeSidebar() {
      sidebarMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");

      dropdownMenus.forEach(menu => menu.classList.remove("active")); // Close dropdowns

      if (isSmallScreen()) {
        if (locationTitle) locationTitle.classList.remove("hidden");
        if (locationCards) locationCards.classList.remove("hidden");
      }
    }

    // Start the auto-close timer
    function startAutoCloseTimer() {
      clearTimeout(autoCloseTimer);
      autoCloseTimer = setTimeout(closeSidebar, 3000); // 3 seconds
    }

    if (toggleMenu && sidebarMenu) {
      // Open/close toggle menu
      toggleMenu.addEventListener("click", (event) => {
        sidebarMenu.classList.toggle("active");
        document.body.classList.toggle("no-scroll");

        if (isSmallScreen()) {
          if (locationTitle) locationTitle.classList.toggle("hidden");
          if (locationCards) locationCards.classList.toggle("hidden");
        }
        startAutoCloseTimer();
        event.stopPropagation();
      });

      // Close the toggle menu when clicking outside
      document.addEventListener("click", (event) => {
        if (!event.target.closest("#sidebar-menu") && !event.target.closest("#toggle-menu")) {
          closeSidebar();
        }
      });

      // Close sidebar when mouse leaves the sidebar, toggle, or dropdown menus
      [sidebarMenu, toggleMenu, ...dropdownMenus].forEach((element) => {
        element.addEventListener("mouseleave", () => {
          startAutoCloseTimer();
        });
        element.addEventListener("mouseenter", () => {
          clearTimeout(autoCloseTimer);
        });
      });
    } else {
      console.warn("Toggle button or sidebar menu not found!");
    }
  }

  // Function to bind dropdown button behavior
  function bindDropdownBehavior() {
    document.querySelectorAll(".dropdown-button").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();

        const targetMenu = button.getAttribute("data-menu");
        const dropdownMenu = document.getElementById(`${targetMenu}-dropdown`);

        if (dropdownMenu) {
          dropdownMenu.classList.toggle("active");

          // Close other dropdowns
          document.querySelectorAll(".dropdown-menu").forEach((menu) => {
            if (!menu.isSameNode(dropdownMenu)) {
              menu.classList.remove("active");
            }
          });
        }
      });
    });
  }

  // Function to style submenu items dynamically
  function styleSubmenuItems() {
    const reserverDropdown = document.querySelectorAll("#reserver-dropdown .dropdown-item");
    const commanderDropdown = document.querySelectorAll("#commander-dropdown .dropdown-item");

    if (reserverDropdown.length > 0) {
      reserverDropdown.forEach(item => {
        item.style.backgroundColor = "#219EBC";
        item.style.color = "#fff";
        item.style.marginBottom = "8px";
      });
    }

    if (commanderDropdown.length > 0) {
      commanderDropdown.forEach(item => {
        item.style.backgroundColor = "#219EBC";
        item.style.color = "#fff";
        item.style.marginBottom = "8px";
      });
    }
  }
});