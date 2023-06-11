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
  // Pause the audio when the page is unloaded or hidden
  window.addEventListener('beforeunload', function() {
    var audio = document.getElementById('myAudio');
    audio.pause();
  });

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}








