window.addEventListener("load", showTitle);

let btn = document.querySelector(".toggle-btn");
let menu = document.querySelector(".main-menu");

function toggleMenu() {
  menu.classList.toggle("shown");
  let menuShown = menu.classList.contains("shown");
  if (menuShown) {
    console.log("menu shown");
    btn.textContent`="luk";
  } else {
    console.log("menu shown");
    btn.textContent`="menu";
  }
  
  }







