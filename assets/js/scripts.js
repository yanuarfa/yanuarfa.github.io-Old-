const toggleBtn = document.getElementById("toggle");
let darkMode = localStorage.getItem("dark-mode");

window.onscroll = function () {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const limit = header.offsetTop;
  console.log(window.pageYOffset);

  if (window.pageYOffset > 60) {
    nav.classList.add("nav-blur");
    // nav.classList.remove("nav-bg");
    nav.classList.remove("bg-dark-secondary");
    nav.classList.remove("nav-bg");
  } else {
    nav.classList.remove("nav-blur");
  }

  // if (darkMode == "enabled") {
  //   nav.classList.remove("nav-bg");
  // }

  const home = document.getElementById("home");
  const projects = document.getElementById("projects");
  const aboutMe = document.getElementById("aboutme");
  const menu = document.querySelectorAll(".desktop a");

  if (home.offsetHeight > window.pageYOffset) {
    menu[0].classList.add("menu-active");
    menu[1].classList.remove("menu-active");
  } else if (home.offsetHeight + projects.offsetHeight > window.pageYOffset) {
    menu[0].classList.remove("menu-active");
    menu[1].classList.add("menu-active");
    menu[2].classList.remove("menu-active");
  } else if (
    home.offsetHeight + projects.offsetHeight + aboutMe.offsetHeight >
    window.pageYOffset
  ) {
    menu[1].classList.remove("menu-active");
    menu[2].classList.add("menu-active");
  }
};

const hamburger = document.querySelector("#hamburgerMenu");
const navMenu = document.querySelector("#nav-menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("show");
  body.classList.toggle("nooverflow");
});

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

const btnHello = document.querySelector(".btn-hello");
btnHello.addEventListener("click", () => {
  getQuotes();
});

const tagline = document.querySelector(".tagline");

const getQuotes = async () => {
  try {
    const getData = await fetch("https://api.quotable.io/random?maxLength=70", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (getData.status === 404) {
      alert("Error");
      return null;
    }
    if (getData.status === 200) {
      const DATA = await getData.json();
      tagline.textContent = DATA.content;
      return;
    }
  } catch (e) {
    console.log(e);
  }
};

const dataProjects = [
  {
    id: 1,
    imgSrc: "assets/images/1.jpg",
    title: "Tesla Clone",
    desc: "I think this is my first project using HTML.",
    lang: ["HTML", "CSS"],
    url: "#",
  },
  {
    id: 2,
    imgSrc: "assets/images/2.jpg",
    title: "Paper Rock",
    desc: "This is my first DOM Project.",
    lang: ["Javascript", "CSS", "HTML"],
    url: "#",
  },
  {
    id: 3,
    imgSrc: "assets/images/3.jpg",
    title: "Activity Generator",
    desc: "This was my project during bored.",
    lang: ["Javascript", "CSS", "HTML"],
    url: "#",
  },
  {
    id: 4,
    imgSrc: "assets/images/4.jpg",
    title: "QR Generator",
    desc: "This app can convert url to qr code",
    lang: ["Javascript", "CSS", "HTML"],
    url: "#",
  },
  {
    id: 5,
    imgSrc: "assets/images/5.jpg",
    title: "Bookshelf",
    desc: "This project was my latest project",
    lang: ["Javascript", "CSS", "HTML"],
    url: "https://bookshelfyanuar.netlify.app/",
  },
];

const showCard = (data) => {
  let lang = "";
  for (let i = 0; i < data.lang.length; i++) {
    lang += `
    <span class="type">${data.lang[i]}</span>`;
  }

  return `
  <a href="${data.url}" data-aos="zoom-out-up">
    <div class="card">
      <img src="${data.imgSrc}" alt="${data.title}" />
      <h3>${data.title}</h3>
      <p>${data.desc}</p>
        <span class="flex">
        ${lang}
      </span>
    </div>
  </a>
  `;
};

function projectSection(data) {
  let cards = "";
  data.forEach((d) => (cards += showCard(d)));
  const projectContainer = document.querySelector(".cards");
  projectContainer.innerHTML = cards;
}

projectSection(dataProjects);

getQuotes();
