const year = document.querySelector("#current-year");
const today = new Date();
year.innerHTML = `© <span class="copyright-year">${today.getFullYear()}</span> Valorie Broderick USA`;

const mod = document.querySelector("#lastModified");
let lastModif = new Date(document.lastModified);

let formattedDate = lastModif.toLocaleDateString("en-US");
let formattedTime = lastModif.toLocaleTimeString("en-US");

mod.innerHTML = `Last modified: <span class="modified">${formattedDate} ${formattedTime}</span>`;
