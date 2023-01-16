const menuToggle = document.getElementById("nav-mobile_menu");
const mobileMenu = document.getElementById("nav");

menuToggle.onclick = () => {
    mobileMenu.classList.toggle("active");
    document.getElementsByClassName("icon")[0].classList.toggle("none");
    document.getElementsByClassName("icon")[1].classList.toggle("none");
}