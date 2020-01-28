const button = document.querySelector(".btn-menu");
const mainNav = document.querySelector(".main-nav");
const nav = document.querySelector("ul.nav-links");

button.addEventListener("click", function() {
  mainNav.classList.toggle("open");
  button.classList.toggle("open");
  nav.classList.toggle("open");
});

$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  if (mainNav.classList.contains("open")) {
    mainNav.classList.remove("open");
    button.classList.remove("open");

    nav.classList.remove("open");
  }
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 90
    },
    500
  );
});

const containerNav = document.querySelector(".main-nav");
const logo = document.querySelector(".logo img");
const links = [...document.querySelectorAll("ul.nav-links a")];

const changeMenu = () => {
  if (scrollY > 100) {
    containerNav.classList.add("small");
  } else {
    containerNav.classList.remove("small");
  }
};

document.addEventListener("scroll", changeMenu);
