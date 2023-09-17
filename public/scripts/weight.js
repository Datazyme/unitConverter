// Client facing scripts here

//allows user to enter number into textbox, applies function and spits out value to same box
$(document).ready(function () {
  $("#convertWeightBtn").click(function () {
    // Get user input values
    const inputValue = parseFloat($("#inputWeight").val());
    console.log(inputValue);
    const fromWeight = $("#fromWeight").val();
    const toWeight = $("#toWeight").val();

    // Perform conversion
    let result;
    //from Tonnes
    if (fromWeight === "t" && toWeight === "kg") {
      result = tonneToKg(inputValue);
    } else if (fromWeight === "t" && toWeight === "gm") {
      result = tonneToGm(inputValue);
    } else if (fromWeight === "t" && toWeight === "mg") {
      result = tonneToMg(inputValue);
    } else if (fromWeight === "t" && toWeight === "µg") {
      result = tonneToµg(inputValue);
    } else if (fromWeight === "t" && toWeight === "ng") {
      result = tonneToNg(inputValue);
    } else if (fromWeight === "t" && toWeight === "pg") {
      result = tonneToPg(inputValue);
    } else if (fromWeight === "t" && toWeight === "tn") {
      result = tonneToTon(inputValue);
    } else if (fromWeight === "t" && toWeight === "lb") {
      result = tonneToPd(inputValue);
    } else if (fromWeight === "t" && toWeight === "oz") {
      result = tonneToOz(inputValue);
    } else if (fromWeight === "t" && toWeight === "st") {
      result = tonneToSt(inputValue);

      //from kilograms
    } else if (fromWeight === "kg" && toWeight === "t") {
      result = kgToTonne(inputValue);
    } else if (fromWeight === "kg" && toWeight === "gm") {
      result = kgToGm(inputValue);
    } else if (fromWeight === "kg" && toWeight === "mg") {
      result = kgToMg(inputValue);
    } else if (fromWeight === "kg" && toWeight === "µg") {
      result = kgToµg(inputValue);
    } else if (fromWeight === "kg" && toWeight === "ng") {
      result = kgToNg(inputValue);
    } else if (fromWeight === "kg" && toWeight === "pg") {
      result = kgToPg(inputValue);
    } else if (fromWeight === "kg" && toWeight === "tn") {
      result = kgToTon(inputValue);
    } else if (fromWeight === "kg" && toWeight === "lb") {
      result = kgToPd(inputValue);
    } else if (fromWeight === "kg" && toWeight === "oz") {
      result = kgToOz(inputValue);
    } else if (fromWeight === "kg" && toWeight === "st") {
      result = kgToSt(inputValue);

      //from grams
    } else if (fromWeight === "gm" && toWeight === "t") {
      result = gramToTonnes(inputValue);
    } else if (fromWeight === "gm" && toWeight === "kg") {
      result = gramToKg(inputValue);
    } else if (fromWeight === "gm" && toWeight === "mg") {
      result = gramToMg(inputValue);
    } else if (fromWeight === "gm" && toWeight === "µg") {
      result = gramToµg(inputValue);
    } else if (fromWeight === "gm" && toWeight === "ng") {
      result = gramToNg(inputValue);
    } else if (fromWeight === "gm" && toWeight === "pg") {
      result = gramToPg(inputValue);
    } else if (fromWeight === "gm" && toWeight === "tn") {
      result = gramToTon(inputValue);
    } else if (fromWeight === "gm" && toWeight === "lb") {
      result = gramToPd(inputValue);
    } else if (fromWeight === "gm" && toWeight === "oz") {
      result = gramToOz(inputValue);
    } else if (fromWeight === "gm" && toWeight === "st") {
      result = gramToSt(inputValue);

      //from milligrams
    } else if (fromWeight === "mg" && toWeight === "t") {
      result = milligramToTonnes(inputValue);
    } else if (fromWeight === "mg" && toWeight === "kg") {
      result = milligramToKg(inputValue);
    } else if (fromWeight === "mg" && toWeight === "gm") {
      result = milligramToMg(inputValue);
    } else if (fromWeight === "mg" && toWeight === "µg") {
      result = milligramToµg(inputValue);
    } else if (fromWeight === "mg" && toWeight === "ng") {
      result = milligramToNg(inputValue);
    } else if (fromWeight === "mg" && toWeight === "pg") {
      result = milligramToPg(inputValue);
    } else if (fromWeight === "mg" && toWeight === "tn") {
      result = milligramToTon(inputValue);
    } else if (fromWeight === "mg" && toWeight === "lb") {
      result = milligramToPd(inputValue);
    } else if (fromWeight === "mg" && toWeight === "oz") {
      result = milligramToOz(inputValue);
    } else if (fromWeight === "mg" && toWeight === "st") {
      result = milligramToSt(inputValue);

      //from micrograms
    } else if (fromWeight === "µg" && toWeight === "t") {
      result = microgramToTonnes(inputValue);
    } else if (fromWeight === "µg" && toWeight === "kg") {
      result = microgramToKg(inputValue);
    } else if (fromWeight === "µg" && toWeight === "gm") {
      result = microgramToGm(inputValue);
    } else if (fromWeight === "µg" && toWeight === "mg") {
      result = microgramToMg(inputValue);
    } else if (fromWeight === "µg" && toWeight === "ng") {
      result = microgramToNg(inputValue);
    } else if (fromWeight === "µg" && toWeight === "pg") {
      result = microgramToPg(inputValue);
    } else if (fromWeight === "µg" && toWeight === "tn") {
      result = microgramToTon(inputValue);
    } else if (fromWeight === "µg" && toWeight === "lb") {
      result = microgramToPd(inputValue);
    } else if (fromWeight === "µg" && toWeight === "oz") {
      result = microgramToOz(inputValue);
    } else if (fromWeight === "µg" && toWeight === "st") {
      result = microgramToSt(inputValue);

      //from nanograms
    } else if (fromWeight === "ng" && toWeight === "t") {
      result = nanogramToTonnes(inputValue);
    } else if (fromWeight === "ng" && toWeight === "kg") {
      result = nanogramToKg(inputValue);
    } else if (fromWeight === "ng" && toWeight === "gm") {
      result = nanogramToGm(inputValue);
    } else if (fromWeight === "ng" && toWeight === "mg") {
      result = nanogramToMg(inputValue);
    } else if (fromWeight === "ng" && toWeight === "µg") {
      result = nanogramToµg(inputValue);
    } else if (fromWeight === "ng" && toWeight === "pg") {
      result = nanogramToPg(inputValue);
    } else if (fromWeight === "ng" && toWeight === "tn") {
      result = nanogramToTon(inputValue);
    } else if (fromWeight === "ng" && toWeight === "lb") {
      result = nanogramToPd(inputValue);
    } else if (fromWeight === "ng" && toWeight === "oz") {
      result = nanogramToOz(inputValue);
    } else if (fromWeight === "ng" && toWeight === "st") {
      result = nanogramToSt(inputValue);

      //from picograms
    } else if (fromWeight === "pg" && toWeight === "t") {
      result = picogramToTonnes(inputValue);
    } else if (fromWeight === "pg" && toWeight === "kg") {
      result = picogramToKg(inputValue);
    } else if (fromWeight === "pg" && toWeight === "gm") {
      result = picogramToGm(inputValue);
    } else if (fromWeight === "pg" && toWeight === "mg") {
      result = picogramToMg(inputValue);
    } else if (fromWeight === "pg" && toWeight === "µg") {
      result = picogramToµg(inputValue);
    } else if (fromWeight === "pg" && toWeight === "ng") {
      result = picogramToNg(inputValue);
    } else if (fromWeight === "pg" && toWeight === "tn") {
      result = picogramToTon(inputValue);
    } else if (fromWeight === "pg" && toWeight === "lb") {
      result = picogramToPd(inputValue);
    } else if (fromWeight === "pg" && toWeight === "oz") {
      result = picogramToOz(inputValue);
    } else if (fromWeight === "pg" && toWeight === "st") {
      result = picogramToSt(inputValue);
    } else {
      result = inputValue; // Same units, no conversion needed
    }

    //Display the result
    $("#resultWeight").text(
      `${inputValue}${fromWeight} is equal to ${result}${toWeight}`
    );
  });
});
