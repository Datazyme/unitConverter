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
    } else if (fromLength === "dm" && toLength === "m") {
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

      //from micrometers
    } else if (fromLength === "µm" && toLength === "km") {
      result = µmToKm(inputValue);
    } else if (fromLength === "µm" && toLength === "m") {
      result = µmToM(inputValue);
    } else if (fromLength === "µm" && toLength === "dm") {
      result = µmToDm(inputValue);
    } else if (fromLength === "µm" && toLength === "cm") {
      result = µmToCm(inputValue);
    } else if (fromLength === "µm" && toLength === "mm") {
      result = µmToMm(inputValue);
    } else if (fromLength === "µm" && toLength === "nm") {
      result = µmToNm(inputValue);
    } else if (fromLength === "µm" && toLength === "pm") {
      result = µmToPm(inputValue);
    } else if (fromLength === "µm" && toLength === "mi") {
      result = µmToMi(inputValue);
    } else if (fromLength === "µm" && toLength === "yd") {
      result = µmToYd(inputValue);
    } else if (fromLength === "µm" && toLength === "ft") {
      result = µmToFt(inputValue);
    } else if (fromLength === "µm" && toLength === "in") {
      result = µmToIn(inputValue);

      //from nanometers
    } else if (fromLength === "nm" && toLength === "km") {
      result = nmToKm(inputValue);
    } else if (fromLength === "nm" && toLength === "m") {
      result = nmToM(inputValue);
    } else if (fromLength === "nm" && toLength === "dm") {
      result = nmToDm(inputValue);
    } else if (fromLength === "nm" && toLength === "cm") {
      result = nmToCm(inputValue);
    } else if (fromLength === "nm" && toLength === "mm") {
      result = nmToMm(inputValue);
    } else if (fromLength === "nm" && toLength === "µm") {
      result = nmToµm(inputValue);
    } else if (fromLength === "nm" && toLength === "pm") {
      result = nmToPm(inputValue);
    } else if (fromLength === "nm" && toLength === "mi") {
      result = nmToMi(inputValue);
    } else if (fromLength === "nm" && toLength === "yd") {
      result = nmToYd(inputValue);
    } else if (fromLength === "nm" && toLength === "ft") {
      result = nmToFt(inputValue);
    } else if (fromLength === "nm" && toLength === "in") {
      result = nmToIn(inputValue);

      //from picometers
    } else if (fromLength === "pm" && toLength === "km") {
      result = pmToKm(inputValue);
    } else if (fromLength === "pm" && toLength === "m") {
      result = pmToM(inputValue);
    } else if (fromLength === "pm" && toLength === "dm") {
      result = pmToDm(inputValue);
    } else if (fromLength === "pm" && toLength === "cm") {
      result = pmToCm(inputValue);
    } else if (fromLength === "pm" && toLength === "mm") {
      result = pmToMm(inputValue);
    } else if (fromLength === "pm" && toLength === "µm") {
      result = pmToµm(inputValue);
    } else if (fromLength === "pm" && toLength === "nm") {
      result = pmToPm(inputValue);
    } else if (fromLength === "pm" && toLength === "mi") {
      result = pmToMi(inputValue);
    } else if (fromLength === "pm" && toLength === "yd") {
      result = pmToYd(inputValue);
    } else if (fromLength === "pm" && toLength === "ft") {
      result = pmToFt(inputValue);
    } else if (fromLength === "pm" && toLength === "in") {
      result = pmToIn(inputValue);

      //from miles
    } else if (fromLength === "mi" && toLength === "km") {
      result = miToKm(inputValue);
    } else if (fromLength === "mi" && toLength === "m") {
      result = miToM(inputValue);
    } else if (fromLength === "mi" && toLength === "dm") {
      result = miToDm(inputValue);
    } else if (fromLength === "mi" && toLength === "cm") {
      result = miToCm(inputValue);
    } else if (fromLength === "mi" && toLength === "mm") {
      result = miToMm(inputValue);
    } else if (fromLength === "mi" && toLength === "µm") {
      result = miToµm(inputValue);
    } else if (fromLength === "mi" && toLength === "nm") {
      result = miToNm(inputValue);
    } else if (fromLength === "mi" && toLength === "pm") {
      result = miToPm(inputValue);
    } else if (fromLength === "mi" && toLength === "yd") {
      result = miToYd(inputValue);
    } else if (fromLength === "mi" && toLength === "ft") {
      result = miToFt(inputValue);
    } else if (fromLength === "mi" && toLength === "in") {
      result = miToIn(inputValue);

      //from yards
    } else if (fromLength === "yd" && toLength === "km") {
      result = ydToKm(inputValue);
    } else if (fromLength === "yd" && toLength === "m") {
      result = ydToM(inputValue);
    } else if (fromLength === "yd" && toLength === "dm") {
      result = ydToDm(inputValue);
    } else if (fromLength === "yd" && toLength === "cm") {
      result = ydToCm(inputValue);
    } else if (fromLength === "yd" && toLength === "mm") {
      result = ydToMm(inputValue);
    } else if (fromLength === "yd" && toLength === "µm") {
      result = ydToµm(inputValue);
    } else if (fromLength === "yd" && toLength === "nm") {
      result = ydToNm(inputValue);
    } else if (fromLength === "yd" && toLength === "pm") {
      result = ydToPm(inputValue);
    } else if (fromLength === "yd" && toLength === "mi") {
      result = ydToMi(inputValue);
    } else if (fromLength === "yd" && toLength === "ft") {
      result = ydToFt(inputValue);
    } else if (fromLength === "yd" && toLength === "in") {
      result = ydToIn(inputValue);

      //from feet
    } else if (fromLength === "ft" && toLength === "km") {
      result = ftToKm(inputValue);
    } else if (fromLength === "ft" && toLength === "m") {
      result = ftToM(inputValue);
    } else if (fromLength === "ft" && toLength === "dm") {
      result = ftToDm(inputValue);
    } else if (fromLength === "ft" && toLength === "cm") {
      result = ftToCm(inputValue);
    } else if (fromLength === "ft" && toLength === "mm") {
      result = ftToMm(inputValue);
    } else if (fromLength === "ft" && toLength === "µm") {
      result = ftToµm(inputValue);
    } else if (fromLength === "ft" && toLength === "nm") {
      result = ftToNm(inputValue);
    } else if (fromLength === "ft" && toLength === "pm") {
      result = ftToPm(inputValue);
    } else if (fromLength === "ft" && toLength === "mi") {
      result = ftToMi(inputValue);
    } else if (fromLength === "ft" && toLength === "yd") {
      result = ftToFt(inputValue);
    } else if (fromLength === "ft" && toLength === "in") {
      result = ftToIn(inputValue);

      //from inches
    } else if (fromLength === "in" && toLength === "km") {
      result = inToKm(inputValue);
    } else if (fromLength === "in" && toLength === "m") {
      result = inToM(inputValue);
    } else if (fromLength === "in" && toLength === "dm") {
      result = inToDm(inputValue);
    } else if (fromLength === "in" && toLength === "cm") {
      result = inToCm(inputValue);
    } else if (fromLength === "in" && toLength === "mm") {
      result = inToMm(inputValue);
    } else if (fromLength === "in" && toLength === "µm") {
      result = inToµm(inputValue);
    } else if (fromLength === "in" && toLength === "nm") {
      result = inToNm(inputValue);
    } else if (fromLength === "in" && toLength === "pm") {
      result = inToPm(inputValue);
    } else if (fromLength === "in" && toLength === "mi") {
      result = inToMi(inputValue);
    } else if (fromLength === "in" && toLength === "yd") {
      result = inToFt(inputValue);
    } else {
      result = inputValue; // Same units, no conversion needed
    }

    //Display the result
    $("#resultLength").text(
      `${inputValue}${fromLength} is equal to ${result}${toLength}`
    );
  });
});
