// Client facing scripts here

//allows user to enter number into textbox, applies function and spits out value to same box
$(document).ready(function () {
  $("#convertLengthBtn").click(function () {
    // Get user input values
    const inputValue = parseFloat($("#inputLength").val());
    console.log(inputValue);
    const fromLength = $("#fromLength").val();
    const toLength = $("#toLength").val();

    //calculations
    //From Kilometers to the rest
    const kmToM = function (value) {
      let meters = value * 1e3;
      return meters;
    };
    const kmToDm = function (value) {
      let decimeters = value * 1e4;
      return decimeters;
    };
    const kmToCm = function (value) {
      let centimeters = value * 1e5;
      return centimeters.toExponential();
    };
    const kmToMm = function (value) {
      let millimeters = value * 1e6;
      return millimeters.toExponential();
    };
    const kmToµm = function (value) {
      let micrometers = value * 1e9;
      return micrometers.toExponential();
    };
    const kmToNm = function (value) {
      let nanometers = value * 1e12;
      return nanometers.toExponential();
    };
    const kmToPm = function (value) {
      let picometers = value * 1e15;
      return picometers.toExponential();
    };
    const kmToMi = function (value) {
      let miles = value * 0.62137;
      return miles.toFixed(2);
    };
    const kmToYd = function (value) {
      let yards = value * 1093.61;
      return yards.toFixed(2);
    };
    const kmToFt = function (value) {
      let feet = value * 3280.84;
      return feet.toFixed(2);
    };

    // Perform conversion
    let result;
    if (fromLength === "km" && toLength === "m") {
      result = kmToM(inputValue);
    } else if (fromLength === "km" && toLength === "dm") {
      result = kmToDm(inputValue);
    } else if (fromLength === "km" && toLength === "cm") {
      result = kmToCm(inputValue);
    } else if (fromLength === "km" && toLength === "mm") {
      result = kmToMm(inputValue);
    } else if (fromLength === "km" && toLength === "µm") {
      result = kmToµm(inputValue);
    } else if (fromLength === "km" && toLength === "nm") {
      result = kmToNm(inputValue);
    } else if (fromLength === "km" && toLength === "pm") {
      result = kmToPm(inputValue);
    } else if (fromLength === "km" && toLength === "mi") {
      result = kmToMi(inputValue);
    } else if (fromLength === "km" && toLength === "yd") {
      result = kmToYd(inputValue);
    } else if (fromLength === "km" && toLength === "ft") {
      result = kmToFt(inputValue);
    } else {
      result = inputValue; // Same units, no conversion needed
    }

    //Display the result
    $("#resultLength").text(
      `${inputValue}${fromLength} is equal to ${result}${toLength}`
    );
  });
});
