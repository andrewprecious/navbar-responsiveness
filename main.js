const navLinks = document.querySelector(".nav-right");
const hambuger = document.querySelector(".hambuger");
const para1 = document.querySelector("p");
const alink = document.querySelector(".special");
const navImg = document.querySelector("img");
const closeBtn = document.querySelector(".closeBtn");
const icon = document.querySelector(".bi-caret-down-fill");

hambuger.addEventListener("click", () => {
  navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

alink.addEventListener("click", () => {
  para1.classList.toggle("active");
  icon.classList.toggle("show");
});
