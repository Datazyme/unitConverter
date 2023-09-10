// Client facing scripts here

//allows user to enter number into textbox, applies function and spits out value to same box
$(document).ready(function () {
  $("#convertLengthBtn").click(function () {
    // Get user input values
    const inputValue = parseFloat($("#inputLength").val());
    const fromLength = $("#fromLength").val();
    const toLength = $("#toLength").val();

    // Perform conversion with calculations imported in index.ejs
    let result;
    //from kilometers
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
    } else if (fromLength === "km" && toLength === "in") {
      result = kmToIn(inputValue);

      //from meter
    } else if (fromLength === "m" && toLength === "km") {
      result = mToKm(inputValue);
    } else if (fromLength === "m" && toLength === "dm") {
      result = mToDm(inputValue);
    } else if (fromLength === "m" && toLength === "cm") {
      result = mToCm(inputValue);
    } else if (fromLength === "m" && toLength === "mm") {
      result = mToMm(inputValue);
    } else if (fromLength === "m" && toLength === "µm") {
      result = mToµm(inputValue);
    } else if (fromLength === "m" && toLength === "nm") {
      result = mToNm(inputValue);
    } else if (fromLength === "m" && toLength === "pm") {
      result = mToPm(inputValue);
    } else if (fromLength === "m" && toLength === "mi") {
      result = mToMi(inputValue);
    } else if (fromLength === "m" && toLength === "yd") {
      result = mToYd(inputValue);
    } else if (fromLength === "m" && toLength === "ft") {
      result = mToFt(inputValue);
    } else if (fromLength === "m" && toLength === "in") {
      result = mToIn(inputValue);

      //from decimeters
    } else if (fromLength === "dm" && toLength === "km") {
      result = dmToKm(inputValue);
    } else if (fromLength === "dm" && toLength === "dm") {
      result = dmToM(inputValue);
    } else if (fromLength === "dm" && toLength === "cm") {
      result = dmToCm(inputValue);
    } else if (fromLength === "dm" && toLength === "mm") {
      result = dmToMm(inputValue);
    } else if (fromLength === "dm" && toLength === "µm") {
      result = dmToµm(inputValue);
    } else if (fromLength === "dm" && toLength === "nm") {
      result = dmToNm(inputValue);
    } else if (fromLength === "dm" && toLength === "pm") {
      result = dmToPm(inputValue);
    } else if (fromLength === "dm" && toLength === "mi") {
      result = dmToMi(inputValue);
    } else if (fromLength === "dm" && toLength === "yd") {
      result = dmToYd(inputValue);
    } else if (fromLength === "dm" && toLength === "ft") {
      result = dmToFt(inputValue);
    } else if (fromLength === "dm" && toLength === "in") {
      result = dmToIn(inputValue);
      //from centimeters
    } else if (fromLength === "cm" && toLength === "km") {
      result = cmToKm(inputValue);
    } else if (fromLength === "cm" && toLength === "m") {
      result = cmToM(inputValue);
    } else if (fromLength === "cm" && toLength === "dm") {
      result = cmToDm(inputValue);
    } else if (fromLength === "cm" && toLength === "mm") {
      result = cmToMm(inputValue);
    } else if (fromLength === "cm" && toLength === "µm") {
      result = cmToµm(inputValue);
    } else if (fromLength === "cm" && toLength === "nm") {
      result = cmToNm(inputValue);
    } else if (fromLength === "cm" && toLength === "pm") {
      result = cmToPm(inputValue);
    } else if (fromLength === "cm" && toLength === "mi") {
      result = cmToMi(inputValue);
    } else if (fromLength === "cm" && toLength === "yd") {
      result = cmToYd(inputValue);
    } else if (fromLength === "cm" && toLength === "ft") {
      result = cmToFt(inputValue);
    } else if (fromLength === "cm" && toLength === "in") {
      result = cmToIn(inputValue);
    } else {
      result = inputValue; // Same units, no conversion needed
    }

    //Display the result
    $("#resultLength").text(
      `${inputValue}${fromLength} is equal to ${result}${toLength}`
    );
  });
});
