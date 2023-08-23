const convertButton = document.getElementById("convertButton");
const lengthInput = document.getElementById("lengthInput");
const unitSelector = document.getElementById("unitSelector");
const resultArea = document.getElementById("resultArea");

convertButton.addEventListener("click", () => {
  const lengthInMeters = parseFloat(lengthInput.value);
  const selectedUnit = unitSelector.value;
  
  let convertedLength;
  switch (selectedUnit) {
    case "cm":
      convertedLength = lengthInMeters * 100;
      break;
    case "km":
      convertedLength = lengthInMeters / 1000;
      break;
    case "mm":
      convertedLength = lengthInMeters * 1000;
      break;
    default:
      convertedLength = "Invalid unit";
  }
  
  resultArea.textContent = `Converted length: ${convertedLength} ${selectedUnit}`;
});
