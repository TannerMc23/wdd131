document.addEventListener('DOMContentLoaded', () => {

    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    const selectElement = document.getElementById("productName");
    if (selectElement){
        products.forEach(products => {
        const option = document.createElement("option");
        option.value = products.id;
        option.textContent = products.name;
        selectElement.appendChild(option);
    });
}

    const yearSpan = document.getElementById('currentyear');
    const now = new Date();
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastmod = document.getElementById('lastmodified');
    if (lastmod) {
        lastmod.textContent = `Last modified: ${document.lastModified}`;
    }
    
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', () => {
            let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
            reviewCount += 1;
            localStorage.setItem('reviewCount', reviewCount);
        });
    }
    if (document.body.classList.contains("review-page")) {
        const reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
        const mainElement = document.querySelector('main') || document.body;
        const counterElement = document.createElement('p');
        counterElement.textContent = `You have submitted ${reviewCount} review(s).`;
        counterElement.style.fontWeight = 'bold';
        counterElement.style.marginTop = '1rem';
        mainElement.appendChild(counterElement);
    }
});