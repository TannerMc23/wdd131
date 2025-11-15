const yearSpan = document.getElementById('currentyear');
const now = new Date();
yearSpan.textContent = now.getFullYear();

const lastmod = document.getElementById('lastmodified');
lastmod.textContent = `Last modified: ${document.lastModified}`;

const temperatureF = 60;
const windSpeedMph = 8;
const conditionsText = "Clear Skies";

document.getElementById('temp').textContent = temperatureF;
document.getElementById('wind').textContent = `${windSpeedMph} mph`;
document.getElementById('conditions').textContent = conditionsText;

function computeWindChill(tempF, speedMph) {
    if (typeof tempF !== 'number' || typeof speedMph !== 'number') return 'N/A';
    if (tempF <= 60 && speedMph > 3) {
        const w = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16);
        return Math.round(w * 10) / 10;
    } else {
        return 'N/A';
    }
}

document.getElementById('windChill').textContent = computeWindChill(temperatureF, windSpeedMph);
