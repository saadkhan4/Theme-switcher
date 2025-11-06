function updateToggleUI(theme) {
  if (theme === "dark") {
    toggleIcon.textContent = "☀️";
    toggleText.textContent = "Light Mode";
  } else {
    toggleIcon.textContent = "🌙";
    toggleText.textContent = "Dark Mode";
  }
}

// functionality for theme toggle.
const themeToggle = document.getElementById("theme-toggle");
const toggleIcon = themeToggle.querySelector(".toggle-icon");
const toggleText = themeToggle.querySelector(".toggle-text");

// •	Agar "theme" naam ka key exist nahi karta (matlab user ne pehle kabhi theme set hi nahi kiya),
// •	toh default value "light" use ho jaati hai.
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);
updateToggleUI(currentTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  // condition ? valueIfTrue : valueIfFalse;
  // ? matlab “agar condition true ho to yeh do”
  // : matlab “warna yeh do
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateToggleUI(newTheme);
});
