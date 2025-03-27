const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const templecards = document.querySelector("#temple-cards");

const homenav = document.querySelector("#home");
const oldnav = document.querySelector("#old");
const newnav = document.querySelector("#new");
const largenav = document.querySelector("#large");
const smallnav = document.querySelector("#small");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo_guam_temple.webp",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Idaho Falls",
    location: "Idaho Falls, Idaho, USA",
    dedicated: "1945, September, 23-25",
    area: 85624,
    imageUrl: "images/idaho-falls-idaho-temple.jpg",
  },
  {
    templeName: "Okinawa Japan",
    location: "Okinawa, Japan",
    dedicated: "2023, November, 12",
    area: 12437,
    imageUrl: "images/okinawa-japan-temple.webp",
  },
  {
    templeName: "Oakland California",
    location: "Oakland, California, USA",
    dedicated: "1964, November, 17-19",
    area: 85624,
    imageUrl: "images/oakland-california-temple.jpg",
  },
];

displayTemples(temples);

function dedicationYear(dedicationStr) {
  const regex = /^(\d{4})(?=,)/;
  const match = dedicationStr.match(regex);
  if (match) {
    year = parseInt(match);
    return year;
  }
}

const largeTemples = temples.filter((temple) => temple.area > 90000);
const smallTemples = temples.filter((temple) => temple.area < 10000);
const oldTemples = temples.filter(
  (temple) => dedicationYear(temple.dedicated) < 1900
);
const newTemples = temples.filter(
  (temple) => dedicationYear(temple.dedicated) > 2000
);

homenav.addEventListener("click", () => {
  templecards.innerHTML = "";
  displayTemples(temples);
});

largenav.addEventListener("click", () => {
  templecards.innerHTML = "";
  displayTemples(largeTemples);
});

smallnav.addEventListener("click", () => {
  templecards.innerHTML = "";
  displayTemples(smallTemples);
});

oldnav.addEventListener("click", () => {
  templecards.innerHTML = "";
  displayTemples(oldTemples);
});

newnav.addEventListener("click", () => {
  templecards.innerHTML = "";
  displayTemples(newTemples);
});

function displayTemples(templesArray) {
  templesArray.forEach((temple) => {
    const container = document.createElement("div");
    const text = document.createElement("p");
    const heading = document.createElement("h3");

    heading.innerHTML = `${temple.templeName} <br>`;

    text.innerHTML = `
      <strong>Location:</strong> ${temple.location} <br>
      <strong>Dedicated:</strong> ${temple.dedicated} <br>
      <strong>Area:</strong> ${temple.area} sq ft
`;

    const img = document.createElement("img");
    img.setAttribute("src", `${temple.imageUrl}`);
    img.setAttribute("alt", `${temple.templeName}`);
    img.setAttribute("loading", "lazy");
    img.width = 399;

    img.onload = () => {
      img.height = (img.naturalHeight / img.naturalWidth) * img.width;
    };

    container.appendChild(heading);
    container.appendChild(img);
    container.appendChild(text);

    templecards.appendChild(container);
  });
}
