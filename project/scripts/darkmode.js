const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
const iconSmall = document.getElementById("iconSmall");
const iconLarge = document.getElementById("iconLarge");
const darkModeLarge = document.getElementById("dark-modeLarge");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.classList.toggle("dark-mode", savedTheme === "dark");

  if (savedTheme === "dark") {
    darkModeLarge.srcset = "images/dark-mode-dark.webp"
    iconSmall.src = "images/icon-small-dark.webp";
    iconLarge.srcset = "images/icon-dark.webp";
  } else {
    darkModeLarge.srcset = "images/dark-mode.webp";
    iconSmall.src = "images/icon-small.webp";
    iconLarge.srcset = "images/icon.webp";
  }
}

toggleDarkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeLarge.srcset = "images/dark-mode-dark.webp"
    iconSmall.src = "images/icon-small-dark.webp";
    iconLarge.srcset = "images/icon-dark.webp";
    localStorage.setItem("theme", "dark");
  } else {
    darkModeLarge.srcset = "images/dark-mode.webp";
    iconSmall.src = "images/icon-small.webp";
    iconLarge.srcset = "images/icon.webp";
    localStorage.setItem("theme", "light");
  }
});