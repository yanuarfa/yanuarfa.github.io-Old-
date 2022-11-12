const toggleBtn = document.getElementById("toggle");
let darkMode = localStorage.getItem("dark-mode");

window.onscroll = function () {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const limit = header.offsetTop;

  if (window.pageYOffset > limit) {
    nav.classList.add("nav-blur");
    // nav.classList.remove("nav-bg");
    nav.classList.remove("bg-dark-secondary");
    nav.classList.remove("nav-bg");
  } else {
    nav.classList.remove("nav-blur");
  }

  if (darkMode == "enabled") {
    nav.classList.remove("nav-bg");
  }
};

// const hamburger = document.querySelector("#hamburgerMenu");
// const navMenu = document.querySelector("#nav-menu");
// const body = document.querySelector("body");

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("show");
//   body.classList.toggle("nooverflow");
// });

// const navbar = document.querySelector("nav"),
//   navbarLink = document.querySelectorAll(".desktop a"),
//   hamburgerText = document.querySelectorAll(".hamburger span"),
//   logo = document.querySelectorAll("svg path"),
//   homeTextWhite = document.querySelector(".greet"),
//   projectTextWhite = document.querySelector(".project"),
//   projectCards = document.querySelectorAll(".card"),
//   borderColor = document.querySelectorAll(".type"),
//   aboutmeTextWhite = document.querySelector("#aboutme"),
//   table = document.querySelector("table"),
//   footer = document.querySelector("footer");

// const enableDarkMode = () => {
//   document.body.classList.add("bg-dark-primary");
//   navbar.classList.add("bg-dark-secondary");
//   navbarLink.forEach(function (data) {
//     data.classList.add("text-white");
//     data.classList.add("underline-dark");
//   });
//   for (let i = 0; i < logo.length; i++) {
//     let item = logo[i];
//     item.setAttribute("fill", "#FFF");
//     item.setAttribute("stroke", "#FFF");
//   }
//   hamburgerText.forEach(function (ham) {
//     ham.classList.add("bg-white");
//     ham.classList.remove("bg-dark-primary");
//   });
//   homeTextWhite.classList.add("pure-text-white");
//   projectTextWhite.classList.add("pure-text-white");
//   projectCards.forEach(function (card) {
//     card.classList.add("bg-dark-secondary");
//   });
//   borderColor.forEach((color) => {
//     color.classList.add("border-color-white");
//   });
//   aboutmeTextWhite.classList.add("pure-text-white");
//   table.classList.add("pure-text-white");
//   footer.classList.add("bg-dark-secondary");
//   footer.classList.add("pure-text-white");
//   toggleBtn.classList.remove("dark-mode-toggle");
//   toggleBtn.classList.add("forward");
//   localStorage.setItem("dark-mode", "enabled");
// };

// const disableDarkMode = () => {
//   document.body.classList.remove("bg-dark-primary");
//   navbar.classList.remove("bg-dark-secondary");
//   navbarLink.forEach(function (data) {
//     data.classList.remove("text-white");
//     data.classList.remove("underline-dark");
//   });
//   for (let i = 0; i < logo.length; i++) {
//     let item = logo[i];
//     item.setAttribute("fill", "#0A0D13");
//     item.setAttribute("stroke", "#0A0D13");
//   }
//   hamburgerText.forEach(function (ham) {
//     ham.classList.add("bg-dark-primary");
//     ham.classList.remove("bg-white");
//   });
//   homeTextWhite.classList.remove("pure-text-white");
//   projectTextWhite.classList.remove("pure-text-white");
//   projectCards.forEach(function (card) {
//     card.classList.remove("bg-dark-secondary");
//   });
//   borderColor.forEach((color) => {
//     color.classList.remove("border-color-white");
//   });
//   aboutmeTextWhite.classList.remove("pure-text-white");
//   table.classList.remove("pure-text-white");
//   footer.classList.remove("bg-dark-secondary");
//   footer.classList.remove("pure-text-white");
//   toggleBtn.classList.add("dark-mode-toggle");
//   toggleBtn.classList.remove("forward");
//   localStorage.setItem("dark-mode", "disabled");
// };

// if (darkMode === "enabled") {
//   enableDarkMode(); // set state of darkMode on page load
// }

// toggleBtn.addEventListener("click", (e) => {
//   darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
//   if (!toggleBtn.classList.contains("forward")) {
//     toggleBtn.classList.add("forward");
//     toggleBtn.classList.remove("reverse");
//   } else {
//     toggleBtn.classList.add("reverse");
//     toggleBtn.classList.remove("forward");
//   }
//   if (darkMode === "disabled") {
//     enableDarkMode();
//   } else {
//     disableDarkMode();
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const divWidth = document.querySelector(".card-content");
  const image = document.querySelector(".img-card");

  image.setAttribute(
    "src",
    `https://picsum.photos/${divWidth.scrollWidth}/${divWidth.scrollHeight}`
  );
});
