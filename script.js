const menuBar = document.getElementById("menu-icon");
const navBar = document.getElementById("navbar");
const closeBar = document.getElementById("close-icon");

const menuToggle = () => {
  if (menuBar.src.endsWith("icon-menu.svg")) {
    menuBar.src = "images/icon-close.svg";
  } else {
    menuBar.src = "images/icon-menu.svg";
  }

  navBar.classList.add("menu");
};

menuBar.addEventListener("click", menuToggle);

closeBar.addEventListener("click", () => {
  navBar.classList.remove("menu");
});
