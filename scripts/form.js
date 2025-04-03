const select = document.querySelector("select");
const required = document.querySelector("required");
const label = document.querySelector("label");
const button = document.querySelector("button");

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];


products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.name.replace(/\s+/g, "_");
  option.textContent = product.name;
  select.append(option);
});

let counter = 0;

button.addEventListener("click", (e)=>{
  counter += 1; 
  localStorage.setItem("count", counter);
  let getCount = localStorage.getItem("count");
  console.log(`Count is ${getCount}`);
  alert(`Count is ${getCount}`);
});






