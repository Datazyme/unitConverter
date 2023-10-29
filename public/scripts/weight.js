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

      //from US Tons
    } else if (fromWeight === "tn" && toWeight === "t") {
      result = tonToTonnes(inputValue);
    } else if (fromWeight === "tn" && toWeight === "kg") {
      result = tonToKg(inputValue);
    } else if (fromWeight === "tn" && toWeight === "gm") {
      result = tonToGm(inputValue);
    } else if (fromWeight === "tn" && toWeight === "mg") {
      result = tonToMg(inputValue);
    } else if (fromWeight === "tn" && toWeight === "µg") {
      result = tonToµg(inputValue);
    } else if (fromWeight === "tn" && toWeight === "ng") {
      result = tonToNg(inputValue);
    } else if (fromWeight === "tn" && toWeight === "pg") {
      result = tonToPg(inputValue);
    } else if (fromWeight === "tn" && toWeight === "lb") {
      result = tonToPd(inputValue);
    } else if (fromWeight === "tn" && toWeight === "oz") {
      result = tonToOz(inputValue);
    } else if (fromWeight === "tn" && toWeight === "st") {
      result = tonToSt(inputValue);

      //from pounds
    } else if (fromWeight === "lb" && toWeight === "t") {
      result = poundToTonnes(inputValue);
    } else if (fromWeight === "lb" && toWeight === "kg") {
      result = poundToKg(inputValue);
    } else if (fromWeight === "lb" && toWeight === "gm") {
      result = poundToGm(inputValue);
    } else if (fromWeight === "lb" && toWeight === "mg") {
      result = poundToMg(inputValue);
    } else if (fromWeight === "lb" && toWeight === "µg") {
      result = poundToµg(inputValue);
    } else if (fromWeight === "lb" && toWeight === "ng") {
      result = poundToNg(inputValue);
    } else if (fromWeight === "lb" && toWeight === "pg") {
      result = poundToPg(inputValue);
    } else if (fromWeight === "lb" && toWeight === "tn") {
      result = poundToTon(inputValue);
    } else if (fromWeight === "lb" && toWeight === "oz") {
      result = poundToOz(inputValue);
    } else if (fromWeight === "lb" && toWeight === "st") {
      result = poundToSt(inputValue);

      //from ounces
    } else if (fromWeight === "oz" && toWeight === "t") {
      result = ozToTonnes(inputValue);
    } else if (fromWeight === "oz" && toWeight === "kg") {
      result = ozToKg(inputValue);
    } else if (fromWeight === "oz" && toWeight === "gm") {
      result = ozToGm(inputValue);
    } else if (fromWeight === "oz" && toWeight === "mg") {
      result = poundToMg(inputValue);
    } else if (fromWeight === "oz" && toWeight === "µg") {
      result = ozToµg(inputValue);
    } else if (fromWeight === "oz" && toWeight === "ng") {
      result = ozToNg(inputValue);
    } else if (fromWeight === "oz" && toWeight === "pg") {
      result = ozToPg(inputValue);
    } else if (fromWeight === "oz" && toWeight === "tn") {
      result = ozToTon(inputValue);
    } else if (fromWeight === "oz" && toWeight === "lb") {
      result = ozToPd(inputValue);
    } else if (fromWeight === "oz" && toWeight === "st") {
      result = ozToSt(inputValue);

      //from stone
    } else if (fromWeight === "st" && toWeight === "t") {
      result = stToTonnes(inputValue);
    } else if (fromWeight === "st" && toWeight === "kg") {
      result = stToKg(inputValue);
    } else if (fromWeight === "st" && toWeight === "gm") {
      result = stToGm(inputValue);
    } else if (fromWeight === "st" && toWeight === "mg") {
      result = stToMg(inputValue);
    } else if (fromWeight === "st" && toWeight === "µg") {
      result = stToµg(inputValue);
    } else if (fromWeight === "st" && toWeight === "ng") {
      result = stToNg(inputValue);
    } else if (fromWeight === "st" && toWeight === "pg") {
      result = stToPg(inputValue);
    } else if (fromWeight === "st" && toWeight === "tn") {
      result = stToTon(inputValue);
    } else if (fromWeight === "st" && toWeight === "lb") {
      result = stToPd(inputValue);
    } else if (fromWeight === "st" && toWeight === "oz") {
      result = stToOz(inputValue);
    } else {
      result = inputValue; // Same units, no conversion needed
    }

    //Display the result
    $("#resultWeight").text(
      `${inputValue}${fromWeight} = ${result}${toWeight}`
    );
  });
});
