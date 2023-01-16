const menuToggle = document.getElementById("nav-mobile_menu");
const mobileMenu = document.getElementById("nav");

menuToggle.onclick = () => {
    mobileMenu.classList.toggle("active");
}
