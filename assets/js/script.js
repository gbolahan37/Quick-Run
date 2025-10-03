let hamButton = document.querySelector(".ham-navbar");
let dropDown = document.querySelector(".nav-links");
let navLinks = document.querySelectorAll(".nav-links a");
let closeBtn = document.querySelector(".close")
let openBtn = document.querySelector(".open")

dropDown.classList.remove("visible");
hamButton.addEventListener("click", () => {
  dropDown.classList.toggle("visible");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    dropDown.classList.remove("visible");
  });
});