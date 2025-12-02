// Date and Last Modified

const yearSpan = document.getElementById('currentyear');
const now = new Date();
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastmod = document.getElementById('lastmodified');
if (lastmod) {
    lastmod.textContent = `Last modified: ${document.lastModified}`;
}

//Example of Turn and Fade
(function () {
    const turnSlider = document.getElementById('turnSlider');
    const fadeSlider = document.getElementById('fadeSlider');
    const turnValue = document.getElementById('turnValue');
    const fadeValue = document.getElementById('fadeValue');
    const pathLine = document.getElementById('pathLine');

    if (!turnSlider || !fadeSlider || !turnValue || !fadeValue || !pathLine) {
        return;
    }

    function updateFlightPath() {
        const turn = parseInt(turnSlider.value);
        const fade = parseInt(fadeSlider.value);

        turnValue.textContent = turn;
        fadeValue.textContent = fade;

        const startX = 10;
        const startY = 120;

        const midX = 150;
        const midY = 120;

        const endX = 290;
        const endY = 120;

        const turnOffset = turn * 8;
        const turnHeight = -Math.abs(turn) * 5;

        const fadeOffset = fade * 10;
        const fadeHeight = -fade * 4;

        const pathData =
            `M ${startX},${startY}
         Q ${midX + turnOffset},${midY + turnHeight} ${midX},${midY}
         T ${endX - fadeOffset},${endY + fadeHeight}`;

        pathLine.setAttribute("d", pathData);
    }

    turnSlider.addEventListener("input", updateFlightPath);
    fadeSlider.addEventListener("input", updateFlightPath);

    updateFlightPath();
})();

// Hamburger Nav Button

(function () {
    const menuButton = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("open");
        mobileMenu.classList.toggle("show");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("show");
            menuButton.classList.remove("open");
        });
    });

    document.addEventListener("click", (e) => {
        if (!mobileMenu.classList.contains("show")) return;
        if (mobileMenu.contains(e.target) || menuButton.contains(e.target)) return;

        mobileMenu.classList.remove("show");
        menuButton.classList.remove("open");
    });
})();

//Terminology Glossary

const glossaryTerms = [
    { term: "Nose Angle", definition: "The angle of the front of the disc relative to the direction of flight. Beginners should focus on keeping the nose flat or slightly down for straighter, longer throws." },
    { term: "Hyzer", definition: "A throw where the disc's outer edge is angled downward. For right-handed players throwing backhand, a hyzer will typically fade left." },
    { term: "Anhyzer", definition: "The opposite of a hyzer - the outer edge is angled upward. For right-handed backhand, an anhyzer will typically move right." },
    { term: "Follow-Through", definition: "The continuation of your body and arm motion after releasing the disc. Good follow-through improves accuracy and reduces strain on your body." },
    { term: "Plant Foot", definition: "The foot that makes final contact with the ground during a throw. A strong, stable plant foot helps transfer power efficiently." },
    { term: "Spin Rate", definition: "The speed at which the disc rotates during flight. More spin increases stability and keeps the disc straighter longer." },
];

const glossaryContainer = document.getElementById("terminology-list");

let savedStates = JSON.parse(localStorage.getItem("glossaryStates")) || {};

function renderGlossary() {
    glossaryContainer.innerHTML = glossaryTerms
        .map((item, index) => {
            const isOpen = savedStates[index] === true;
            return `
            <div class="terminology-item" data-index="${index}">
            <div class="term-title">
            ${item.term}
            <span class="term-icon ${isOpen ? 'rotate' : ''}">▶</span>
            </div>
            <div class="term-content ${isOpen ? 'open' : ''}">
            ${item.definition}
            </div>
        </div>
    `;
        })
        .join("");
}

function handleGlossaryClick(e) {
    const item = e.target.closest(".terminology-item");
    if (!item) return;

    const index = item.dataset.index;
    const content = item.querySelector(".term-content");
    const icon = item.querySelector(".term-icon");

    const isOpen = content.classList.contains("open");

    if (isOpen) {
        content.classList.remove("open");
        icon.classList.remove("rotate");
        savedStates[index] = false;
    } else {
        content.classList.add("open");
        icon.classList.add("rotate");
        savedStates[index] = true;
    }

    localStorage.setItem("glossaryStates", JSON.stringify(savedStates));
}

glossaryContainer.addEventListener("click", handleGlossaryClick);

renderGlossary();