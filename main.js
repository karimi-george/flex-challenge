const toggleButton = document.querySelector(".toggle button");
const darkModeCheckbox = document.getElementById("toggle");

const isDarkMode = localStorage.getItem("darkMode") === "true";

document.body.classList.toggle("dark-theme", isDarkMode);
darkModeCheckbox.checked = isDarkMode;

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const isDarkModeNow = document.body.classList.contains("dark-theme");
  localStorage.setItem("darkMode", isDarkModeNow);

  // Change theme of the button and checkbox text on toggle
  if (isDarkModeNow) {
    toggleButton.textContent = "Light Mode";
  } else {
    toggleButton.textContent = "Dark Mode";
  }
}

toggleButton.addEventListener("click", toggleTheme);

// On page load, update the button text based on the initial theme
if (isDarkMode) {
  toggleButton.textContent = "Light Mode";
} else {
  toggleButton.textContent = "Dark Mode";
}