function updateToggleUI(theme) {
  if (theme === "dark") {
    themeToggle.textContent = "☀️";
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "🌙";
    themeToggle.textContent = "Dark Mode";
  }
}

const themeToggle = document.getElementById("theme-toggle");
const toggleIcon = themeToggle.querySelector(".toggle-icon");
const toggleText = themeToggle.querySelector(".toggle-text");

const currentTheme = localStorage.getItem("theme" || "light");
document.documentElement.setAttribute("data-theme", currentTheme);
updateToggleUI(currentTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateToggleUI(newTheme);
});
