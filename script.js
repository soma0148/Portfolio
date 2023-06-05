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
btn.addEventListener("click", toggleMenu);

function showTitle() {
  console.log("showTitle");

// Get the button elements by their ids
var btn1 = document.getElementById("btn_1");
var webBtn = document.getElementById("web_btn");
var uxBtn = document.getElementById("ux_btn_2");
var animBtn = document.getElementById("anim_btn_3");
var indholdBtn = document.getElementById("indhold_btn_4");
var portfolioBtn = document.getElementById("pexan_btn_5");
var aboutBtn = document.getElementById("about_btn_6");

// Add click event listeners to the buttons
btn1.addEventListener("click", function() {
  console.log("Button 1 clicked!");
  // Additional code for Button 1
});

webBtn.addEventListener("click", function() {
  console.log("Web Button clicked!");
  // Additional code for Web Button
});

uxBtn.addEventListener("click", function() {
  console.log("UX Button clicked!");
  // Additional code for UX Button
});

animBtn.addEventListener("click", function() {
  console.log("Animation Button clicked!");
  // Additional code for Animation Button
});

indholdBtn.addEventListener("click", function() {
  console.log("Indhold Button clicked!");
  // Additional code for Indhold Button
});

pexamBtn.addEventListener("click", function() {
  console.log("pexam Button clicked!");
  // Additional code for Portfolio Button
});

aboutBtn.addEventListener("click", function() {
  console.log("About Button clicked!");
  // Additional code for About Button
});
}






