const yearSpan = document.getElementById('currentyear');
const now = new Date();
yearSpan.textContent = now.getFullYear();

const lastmod = document.getElementById('lastmodified');
lastmod.textContent = `Last modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const header = document.querySelector("header");

menuButton.addEventListener("click", () => {
    header.classList.toggle("show");
    if (menuButton.textContent === "☰") {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }
});