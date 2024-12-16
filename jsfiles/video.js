document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("video");
    if (video) {
      video.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  });