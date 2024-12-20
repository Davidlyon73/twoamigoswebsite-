document.addEventListener("DOMContentLoaded", () => {
  console.log("load-toggle.js Loaded");

  // Fetch and insert the toggle-menu.html content dynamically
  fetch("toggle-menu.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("toggle-container").innerHTML = html;

      // Call functions to bind toggle, dropdown, and navigation link behaviors
      bindToggleBehavior();
      bindDropdownBehavior();
      bindNavigationLinks();
    })
    .catch((error) => console.error("Error loading toggle-menu:", error));

  // Function to bind toggle menu behavior
  function bindToggleBehavior() {
    const toggleMenu = document.getElementById("toggle-menu");
    const sidebarMenu = document.getElementById("sidebar-menu");

    if (!toggleMenu || !sidebarMenu) {
      console.warn("Toggle menu or sidebar menu not found!");
      return;
    }

    toggleMenu.addEventListener("click", (event) => {
      sidebarMenu.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
      event.stopPropagation();
    });

    document.addEventListener("click", (event) => {
      if (
        !event.target.closest("#sidebar-menu") &&
        !event.target.closest("#toggle-menu")
      ) {
        sidebarMenu.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
    });
  }

  // Function to bind dropdown behavior and hide unrelated buttons
  function bindDropdownBehavior() {
    const reserverButton = document.getElementById("reserver-button");
    const commanderButton = document.getElementById("commander-button");
    const reserverDropdown = document.getElementById("reserver-dropdown");
    const commanderDropdown = document.getElementById("commander-dropdown");
    const allSections = document.querySelectorAll(".menu-section, .menu-link, .address-link, .home-link");

    if (!reserverButton || !commanderButton || !reserverDropdown || !commanderDropdown) {
      console.warn("Dropdown buttons or menus not found!");
      return;
    }

    // Show dropdown and hide other buttons except its own items
    function showDropdownAndHideOthers(button, dropdown) {
      // Hide all other sections and links
      allSections.forEach((section) => {
        if (!section.contains(dropdown)) {
          section.style.display = "none";
        }
      });

      // Toggle the visibility of the clicked dropdown
      dropdown.classList.toggle("active");
    }

    // Restore all buttons and links
    function restoreAllButtons() {
      allSections.forEach((section) => {
        section.style.display = "";
      });

      // Hide dropdowns
      reserverDropdown.classList.remove("active");
      commanderDropdown.classList.remove("active");
    }

    reserverButton.addEventListener("click", (event) => {
      event.preventDefault();
      showDropdownAndHideOthers(reserverButton, reserverDropdown);
      console.log("Reserver button clicked. Showing dropdown.");
    });

    commanderButton.addEventListener("click", (event) => {
      event.preventDefault();
      showDropdownAndHideOthers(commanderButton, commanderDropdown);
      console.log("Commander button clicked. Showing dropdown.");
    });

    // Restore buttons if pointer leaves dropdown or no selection is made
    [reserverDropdown, commanderDropdown].forEach((dropdown) => {
      dropdown.addEventListener("mouseleave", () => {
        console.log("Pointer left the dropdown. Restoring buttons.");
        restoreAllButtons();
      });
    });

    // Restore buttons when clicking outside
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".menu-section")) {
        restoreAllButtons();
      }
    });
  }

  // Function to bind navigation links
  function bindNavigationLinks() {
    const addressLink = document.querySelector(".address-link");

    if (!addressLink) {
      console.warn("Address link not found!");
      return;
    }

    addressLink.addEventListener("click", (event) => {
      event.preventDefault();
      const isIndexPage = window.location.pathname.includes("index.html");

      if (isIndexPage) {
        // Scroll directly to the #locations section on the index page
        document.getElementById("locations").scrollIntoView({ behavior: "smooth" });
      } else {
        // Redirect to the index.html page with #locations
        window.location.href = "index.html#locations";
      }
    });
  }
});