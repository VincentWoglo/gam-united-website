const navigation_menu = document.querySelector(".navigation-section");
const top_navigation_menu = document.querySelector(".top-navigation-section");

function handleScroll() {
    const isPageScrolled = window.pageYOffset > 26;
    
    navigation_menu.classList.toggle("navigation-scroll", isPageScrolled);
    top_navigation_menu.classList.toggle("navigation-scroll", isPageScrolled);
}

window.addEventListener("scroll", handleScroll);


const hamburger_menu_icon = document.querySelector(".hamburger-menu-icon");
const hamburger_menu_open = document.querySelector(".hamburger-menu-open");
const hamburger_menu_close_icon = document.querySelector(".hamburger-close-icon");

hamburger_menu_icon.addEventListener("click", ()=>{
    hamburger_menu_open.style.display = "block"
});


hamburger_menu_close_icon.addEventListener("click", ()=>{
    hamburger_menu_open.style.display = "none"
});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}