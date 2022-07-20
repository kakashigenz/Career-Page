import draw from "./draw.js";

function clickSidebar() {
  const btnMenu = document.querySelector(".header__btn-menu");
  const sidebarContainer = document.querySelector(".sidebar-container");
  const sidebar = document.querySelector(".sidebar");

  btnMenu.addEventListener("click", (e) => {
    sidebarContainer.classList.add("active");
    sidebar.classList.add("active");
  });

  sidebarContainer.addEventListener("click", (e) => {
    sidebarContainer.classList.remove("active");
    sidebar.classList.remove("active");
  });

  sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

draw();
clickSidebar();

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1500,
  reset: true,
});

sr.reveal(
  `.header__intro-text, .header__intro-illustration, .associated, .about__header, 
  .about__card, .feature__text, .feature__image, .job__header, .job__card, .job__footer,
  .testimonal, .cta, .footer__top`,
  {
    interval: 200,
  }
);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    slideBy: 3,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
      },
      768: {
        items: 3,
      },
    },
  });
});
