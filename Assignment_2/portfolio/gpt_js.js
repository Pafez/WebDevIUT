document.addEventListener("DOMContentLoaded", () => {
    const professionText = document.getElementById("profession");
    const professions = ["Web Developer", "Designer", "Tech Enthusiast", "Problem Solver"];
    let index = 0;
  
    setInterval(() => {
      index = (index + 1) % professions.length;
      professionText.textContent = professions[index];
    }, 2000);
  
    const ctaButton = document.getElementById("cta-button");
    ctaButton.addEventListener("click", () => {
      alert("Thanks for showing interest! Scroll down to learn more about me.");
    });
  });