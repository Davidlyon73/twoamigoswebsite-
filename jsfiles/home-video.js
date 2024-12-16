document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("home-video");
    if (video) {
      video.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  });