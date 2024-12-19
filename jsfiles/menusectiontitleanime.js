document.addEventListener("DOMContentLoaded", () => {
    const words = ["DES SAVEURS AUTHENTIQUES", "UNE PASSION POUR LE GOÛT", "FEEL GOOD", "THIS IS THE WAY OF LIFE", "VIVEZ UNE EXPERIÈNCE UNIQUE", "LE PLAISIR DU FAIT MAISON", "PARTAGEZ DÉGUSTER,SAVOUREZ"];
    const animatedText = document.getElementById("animated-text");
    let currentIndex = 0;
  
    function updateText() {
      animatedText.textContent = words[currentIndex];
      currentIndex = (currentIndex + 1) % words.length;
    }
  
    // Update text every 2 seconds
    setInterval(updateText, 2000);
    updateText(); // Initialize with the first word
  });