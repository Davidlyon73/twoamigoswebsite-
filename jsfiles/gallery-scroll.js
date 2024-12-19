document.addEventListener("DOMContentLoaded", () => {
  console.log("gallery-scroll.js Loaded");

  // Auto-scrolling gallery
  const gallery = document.getElementById("scroll-gallery");
  if (gallery) {
    let scrollSpeed = 1; // Adjust speed
    function autoScroll() {
      gallery.scrollLeft += scrollSpeed;
      if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
        gallery.scrollLeft = 0; // Reset scrolling
      }
      requestAnimationFrame(autoScroll);
    }
    autoScroll();
  } else {
    console.error("Gallery element not found!");
  }

  // Image Modal Popup
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const captionText = document.getElementById("caption");
  const closeModal = document.querySelector(".close");
  const images = document.querySelectorAll(".popup-image");

  if (modal && modalImg && captionText && closeModal && images) {
    images.forEach((img) => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
      });
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  } else {
    console.error("Modal or related elements not found!");
  }

  // Debounce scroll logging
  let scrollTimeout;
  document.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      console.log("Scrolling event triggered...");
    }, 200); // Adjust debounce delay as needed
  });
});