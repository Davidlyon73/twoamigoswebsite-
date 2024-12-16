document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("home-video");
  
    // Play the video if it's not already playing
    if (video.paused) {
      video.play().catch((error) => {
        console.error("Video play was blocked:", error);
      });
    }
  });