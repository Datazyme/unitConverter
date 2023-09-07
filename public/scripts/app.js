// Client facing scripts here

//convert temperatures function
const farenToCel = function (inputValue) {
  let celsius = Math.round(((inputValue - 32) / 1.8) * 10) / 10;
  return celsius;
};
const celsToFaren = function (inputValue) {
  let farenheit = Math.round(((inputValue * 9) / 5 + 32) * 10) / 10;
  return farenheit;
};

//allows user to enter number into textbox, applies function and spits out value to same box
$(document).ready(function () {
  $("#convertBtn").click(function () {
    // Get user input values
    const inputValue = parseFloat($("#inputValue").val());
    console.log(inputValue);
    const fromUnit = $("#fromUnit").val();
    const toUnit = $("#toUnit").val();
    const farenToCel = function (value) {
      let celsius = Math.round(((value - 32) / 1.8) * 10) / 10;
      return celsius;
    };
    const celsToFaren = function (value) {
      let farenheit = Math.round(((value * 9) / 5 + 32) * 10) / 10;
      return farenheit;
    };
    const celsToKelvin = function (value) {
      let kelvin = Math.round((value + 273) * 10) / 10;
      return kelvin;
    };
    const kelvToCels = function (value) {
      let kelvin = Math.round((value - 273) * 10) / 10;
      return kelvin;
    };
    const farentToKelv = function (value) {
      let kelvin = (Math.round(((value - 32) * 5) / 9 + 273) * 10) / 10;
      return kelvin;
    };

    // Perform conversion
    let result;
    if (fromUnit === "F" && toUnit === "C") {
      result = farenToCel(inputValue);
    } else if (fromUnit === "C" && toUnit === "F") {
      result = celsToFaren(inputValue);
    } else if (fromUnit === "C" && toUnit === "K") {
      result = celsToKelvin(inputValue);
    } else if (fromUnit === "K" && toUnit === "C") {
      result = kelvToCels(inputValue);
    } else if (fromUnit === "F" && toUnit === "K") {
      result = farentToKelv(inputValue);
    } else {
      result = inputValue; // Same units, no conversion needed
    }

    //Display the result
    $("#result").text(
      `${inputValue}${fromUnit} is equal to ${result.toFixed(2)}${toUnit}`
    );
  });
});
