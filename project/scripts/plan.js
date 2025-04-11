import { flowers } from "./flowerData.js";

const frostDateSelect = document.getElementById("last-frost-date");
const zoneSelect = document.getElementById("planting-zone");
const flowerTable = document.getElementById("flower-table");

function calculatePlantingDate(){
    const sowSelect = document.getElementById("sow").value;
    const selectedDate = new Date(sowSelect);
      

}

function displaySuggestions(flowersArray) {
    const table = document.createElement("table");
    const title = document.createElementNS("caption");
    const head = document.createElement("thead");
    const firstrow = document.createElement("tr");
    const flowerHeading = document.createElement("th");
    const dateHeading = document.createElement("th");
    const tableBody = document.createElement("tbody");

    title.innerHTML = `<strong>Results</strong>`;
    flowerHeading.textContent = "Flowers";
    dateHeading.textContent = "When to plant";

    table.appendChild(title);
    table.appendChild(head);
    head.appendChild(firstrow);
    firstrow.appendChild(flowerHeading);
    firstrow.appendChild(dateHeading);
    table.appendChild(tableBody);
    
    flowersArray.forEach((flower, index) => {

    const dataRow = document.createElement("tr");
    const flowerData = document.createElement("td");
    const dateData = document.createElement("td");

    
    flowerData.textContent = flower.flowerName;
    dateData.textContent = plantDate;

    dataRow.appendChild(flowerData);
    dataRow.appendChild(dateData);
    tableBody.appendChild(dataRow);

  });
  
}
