const yearSpan = document.getElementById('currentyear');
const now = new Date();
yearSpan.textContent = now.getFullYear();

const lastmod = document.getElementById('lastmodified');
lastmod.textContent = `Last modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const header = document.querySelector("header");

menuButton.addEventListener("click", () => {
    header.classList.toggle("show");
    menuButton.textContent = menuButton.textContent === "☰" ? "X" : "☰";
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Brigham City Utah",
        location: "Brigham City, Utah",
        dedicated: "2012, September, 23",
        area: 36000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brigham-city-utah/400x250/brigham-city-temple-lds-1027480-wallpaper.jpg"
    },
    {
        templeName: "Ogden Utah",
        location: "Ogden, Utah",
        dedicated: "1972, January, 18",
        area: 112232,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ogden-utah/400x250/ogden-utah-temple-1300442-wallpaper.jpg"
    },
    {
        templeName: "Orlando Florida",
        location: "Orlando, Florida",
        dedicated: "1994, October, 9",
        area: 70000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/orlando-florida/400x250/orlando-temple-lds-776399-wallpaper.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah",
        dedicated: "1884, March, 13",
        area: 119619,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-760446-wallpaper.jpg"
    },
    {
        templeName: "Nuku'alofa Tonga",
        location: "Nuku'alofa, Tonga",
        dedicated: "1983, August, 9",
        area: 21184,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nukualofa-tonga/400x250/nukualofa-tonga-temple-lds-445038-wallpaper.jpg"
    },
];

function createTempleCard(temple) {
    const card = document.createElement("figure");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Dedicated:</strong> ${temple.area} sq fr`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    return card
}

const gallery = document.querySelector("#temple-cards");

function displayTemples(filteredList) {
    gallery.innerHTML = "";
    filteredList.forEach(temple => {
        gallery.appendChild(createTempleCard(temple));
    });
}

document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    displayTemples(temples.filter(t => t.area < 10000));
});

displayTemples(temples);