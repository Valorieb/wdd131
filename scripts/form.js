const select = document.querySelector("select");
const requiredFields = document.querySelectorAll("[required]");
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

let counter = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : 0;

button.addEventListener("click", (e) => {
  // Prevent form submission and button click unless all required fields are filled
  e.preventDefault();

  // Check if all required fields are filled
  let allRequiredFilled = true;
  requiredFields.forEach((field) => {
    if (
      !field.value ||
      (field.type === "radio" &&
        !document.querySelector('input[name="stars"]:checked'))
    ) {
      allRequiredFilled = false;
    }
  });

  // Only increment the counter if all required fields are filled
  if (allRequiredFilled) {
    counter += 1;
    localStorage.setItem("count", counter);
    alert(`Count is ${counter}`);
  } else {
    alert("Please fill in all required fields.");
  }
});