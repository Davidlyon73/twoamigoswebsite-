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
  
    let autoCloseTimeout;
  
    // Function to bind toggle menu behavior
    function bindToggleBehavior() {
      const toggleMenu = document.getElementById("toggle-menu");
      const sidebarMenu = document.getElementById("sidebar-menu");
  
      if (toggleMenu && sidebarMenu) {
        toggleMenu.addEventListener("click", (event) => {
          sidebarMenu.classList.toggle("active");
          document.body.classList.toggle("no-scroll");
          event.stopPropagation();
  
          startAutoCloseTimer(() => {
            sidebarMenu.classList.remove("active");
            document.body.classList.remove("no-scroll");
          });
        });
  
        // Auto-close sidebar when mouse leaves it
        sidebarMenu.addEventListener("mouseleave", () => {
          sidebarMenu.classList.remove("active");
          document.body.classList.remove("no-scroll");
        });
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
            closeOtherDropdowns(dropdownMenu);
  
            // Hide other buttons when dropdown is active
            toggleOtherButtons(button, dropdownMenu.classList.contains("active"));
  
            // Auto-close dropdown after 3 seconds
            startAutoCloseTimer(() => {
              dropdownMenu.classList.remove("active");
              restoreButtons();
            });
          }
        });
      });
  
      // Close dropdown when mouse leaves
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.addEventListener("mouseleave", () => {
          menu.classList.remove("active");
          restoreButtons();
        });
      });
  
      // Close dropdowns when clicking outside
      document.addEventListener("click", (event) => {
        if (!event.target.closest(".dropdown-button") && !event.target.closest(".dropdown-menu")) {
          closeAllDropdowns();
          restoreButtons();
        }
      });
    }
  
    // Helper function to close all dropdowns
    function closeOtherDropdowns(activeMenu) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== activeMenu) {
          menu.classList.remove("active");
        }
      });
    }
  
    // Hide or restore buttons
    function toggleOtherButtons(activeButton, hide) {
      document.querySelectorAll(".menu-section > a, .sidebar-menu > a").forEach((btn) => {
        if (!btn.isSameNode(activeButton)) {
          btn.style.display = hide ? "none" : "block";
        }
      });
    }
  
    function restoreButtons() {
      document.querySelectorAll(".menu-section > a, .sidebar-menu > a").forEach((btn) => {
        btn.style.display = "block";
      });
    }
  
    // Auto-close timer
    function startAutoCloseTimer(callback) {
      clearTimeout(autoCloseTimeout);
      autoCloseTimeout = setTimeout(callback, 3000); // 3 seconds
    }
  
    // Close all dropdown menus
    function closeAllDropdowns() {
      document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("active"));
    }
  
    // Function to style submenu items dynamically
    function styleSubmenuItems() {
      const dropdownItems = document.querySelectorAll("#reserver-dropdown .dropdown-item, #commander-dropdown .dropdown-item");
  
      dropdownItems.forEach(item => {
        item.style.backgroundColor = "#219EBC"; // Background color
        item.style.color = "#fff"; // White text color
        item.style.marginBottom = "8px"; // Add space between items
        item.style.padding = "8px"; // Padding for better appearance
        item.style.borderRadius = "5px"; // Rounded corners
      });
    }
  });