const yearSpan = document.getElementById('currentyear');
const now = new Date();
yearSpan.textContent = now.getFullYear();

const lastmod = document.getElementById('lastmodified');
lastmod.textContent = `Last modified: ${document.lastModified}`;