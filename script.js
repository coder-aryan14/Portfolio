// Cursor

const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";

});

// Mobile Menu

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {

  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
  }

});

// Close mobile menu when clicked

document.querySelectorAll(".mobile-menu a")
.forEach(link => {

  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });

});