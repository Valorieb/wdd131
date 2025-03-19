const windDisplay = document.querySelector("#windchill");

function calculateWindChill(temperature, windSpeed) {
  // Check if the wind speed is below 3 mph (no wind chill effect)
  if (windSpeed < 3) {
    return temperature; // Wind chill is the same as temperature
  }

  // Wind chill formula
  let windChill =
    35.74 +
    0.6215 * temperature -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * temperature * Math.pow(windSpeed, 0.16);

  return windChill.toFixed(2); // Return result with 2 decimal places
}

// Example usage:
let temperature = 67; // Fahrenheit
let windSpeed = 4; // mph

let windChill = calculateWindChill(temperature, windSpeed);

if (temperature <= 50 && windSpeed > 3) {
  windDisplay.innerHTML = `Wind Chill: ${windChill} °F`;
} else {
  windDisplay.innerHTML = `Wind Chill: N/A`;
}
