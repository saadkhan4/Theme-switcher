function updateToggleUI(theme) {
    if (theme === "dark") {
        toggleIcon.textContent = "☀️";
        toggleText.textContent = "Light Mode";
    } else {
        toggleIcon.textContent = "🌙";
        toggleText.textContent = "Dark Mode"
    }
}

// functionality for theme toggle
const themeToggle = document.getElementById("theme-toggle");
const toggleIcon = themeToggle.querySelector(".toggle-icon");
const toggleText = themeToggle.querySelector(".toggle-text");

// Get saved theme or default to light
// We set the key "theme" in localstorage of browser
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);
updateToggleUI(currentTheme);

themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateToggleUI(newTheme);
})


