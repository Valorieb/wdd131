import { flowers } from "./flowerData.js";

const flowercards = document.getElementById("flower-cards");
const button = document.getElementById("flower-btn");

function displayFlowers(flowersArray) {
  flowersArray.forEach((flower, index) => {
    const container = document.createElement("div");
    const bouquetText = document.createElement("p");
    const lightText = document.createElement("p");
    const wateringText = document.createElement("p");
    const plantingText = document.createElement("p");
    const heading3 = document.createElement("h3");
    const heading4 = document.createElement("h4");
    const img = document.createElement("img");

    heading3.textContent = `${flower.flowerName}`;
    img.setAttribute("src", `${flower.imageUrl}`);
    img.setAttribute("alt", `${flower.flowerName}`);
    img.setAttribute("loading", "lazy");

    bouquetText.innerHTML = `
        Pairs with: ${flower.bouquet.join(", ")} <br>
        `;
    heading4.textContent = "Care Instructions:";
    lightText.textContent = flower.light;
    wateringText.textContent = flower.watering;
    plantingText.innerHTML = `🌱 Plant outdoors: <br> ${flower.season.join(
      ", "
    )}`;

    container.appendChild(heading3);
    container.appendChild(img);
    container.appendChild(bouquetText);
    container.appendChild(heading4);
    container.appendChild(lightText);
    container.appendChild(wateringText);
    container.appendChild(plantingText);
    container.classList.add("flower-card");

    flowercards.appendChild(container);
  });
}

displayFlowers(flowers);

button.addEventListener("click", (event) => {
  event.preventDefault();

  flowercards.innerHTML = "";

  const lightCare = document.getElementById("light-care").value;
  const waterCare = document.getElementById("water").value;
  const growSeason = document.getElementById("flower-season").value;
  const bouquetPairs = document.getElementById("bouquet").value;

  const filteredFlowers = flowers.filter((flower) => {
    const matchesLight = lightCare === "Any" || flower.light === lightCare;
    const matchesWater = waterCare === "Any" || flower.watering === waterCare;
    const matchesSeason =
      growSeason === "Any" || flower.season.includes(growSeason);
    const matchesBouquet =
      bouquetPairs === "Any" || flower.bouquet.includes(bouquetPairs);

    return matchesLight && matchesWater && matchesSeason && matchesBouquet;
  });
  if (filteredFlowers.length === 0) {
    flowercards.innerHTML = "<p>No matching flowers found.</p>";
    return;
  }
  displayFlowers(filteredFlowers);
});
