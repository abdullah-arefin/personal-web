// 1. Display Current Page Location
document.getElementById("page-location").textContent = window.location.href;

// 2. Display Last Modified Date
document.getElementById("last-modified").textContent = document.lastModified;

// 3. Bonus: Simple Dark Mode Toggle
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});