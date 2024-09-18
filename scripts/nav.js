const mainNav = document.querySelector(".navigation");
const hamButton = document.getElementById("hamMenu");
const header = document.querySelector("header");

hamButton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hamButton.classList.toggle("show");
    header.classList.toggle("hide-header");
});