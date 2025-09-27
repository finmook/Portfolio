const page = document.querySelector("body");
const darkMode = document.querySelector("#darkModeSwitch");
const icon = document.querySelector("#logo");
const contactBtn = document.querySelector("#contactButton");
const toggleLogo=document.querySelector("#toggle-logo")
function applyDarkMode(isDark) {
  const textToggle = document.querySelector(".textToggle");
  const albumToggle = document.querySelector(".albumToggle");

  page.classList.toggle("dark-mode", isDark);
  icon.setAttribute("src", isDark ? "./images/white-book.svg" : "./images/journals.svg");
  icon.setAttribute("height", "20px");
  toggleLogo.textContent = isDark ? '🌙' : '☀️';
  if (contactBtn) {
    contactBtn.classList.toggle("btn-outline-primary", !isDark);
    contactBtn.classList.toggle("btn-outline-light", isDark);
  }

  if (textToggle) textToggle.classList.toggle("dark", isDark);
  if (albumToggle) albumToggle.classList.toggle("dark", isDark);
}

//initial load
if (localStorage.getItem("darkMode") === "true") {
  darkMode.checked = true;
  applyDarkMode(true);
  toggleLogo.textContent='🌙';
}

//toggle-switch
darkMode.addEventListener("change", () => {
  const isDark = darkMode.checked;
  localStorage.setItem("darkMode", isDark);
  applyDarkMode(isDark);
});

//contact scroll logic
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  });
}





