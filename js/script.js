const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const menulist = document.querySelectorAll(".menu>li");
const home = document.querySelectorAll(".home _header");
const html = document.querySelector("html");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("open");
  disableScroll();
});

if (home) {
  menulist.forEach((listItem) => {
    listItem.addEventListener("click", () => {
      navbar.classList.toggle("open");
      disableScroll();
    });
  });
}

function disableScroll() {
  html.style.overflow = html.style.overflow === "hidden" ? "visible" : "hidden";
}
