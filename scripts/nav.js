const mainNav = document.querySelector(".navigation");
const hamButton = document.getElementById("hamMenu");
const header = document.querySelector("header");

hamButton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hamButton.classList.toggle("show");
    header.classList.toggle("hide-header");
});

const currentPage = window.location.href.split('/').pop();
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
    const linkPage = link.href.split('/').pop(); 
    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});