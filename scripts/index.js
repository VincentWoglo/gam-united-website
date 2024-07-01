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

hamburger_menu_icon.addEventListener("click", ()=>{
    hamburger_menu_open.style.display = "block"
});

