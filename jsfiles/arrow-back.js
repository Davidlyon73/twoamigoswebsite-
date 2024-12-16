// Get the back-to-top button element
const backToTopButton = document.getElementById("back-to-top");

// Listen for scroll events
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block"; // Show the button
  } else {
    backToTopButton.style.display = "none"; // Hide the button
  }
});

// Smooth scroll to the top when clicked
backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0, behavior: "smooth" // Smooth scroll effect
  });
});