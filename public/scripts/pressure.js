//Client facing scripts here

//allows user to enter number into textbox, applies function and spits out value to same box
$(document).ready(function () {
  $("#convertPressureBtn").click(function () {
    // Get user input values
    const inputValue = parseFloat($("#inputPressure").val());
    console.log(inputValue);
    const fromPressure = $("#fromPressure").val();
    const toPressure = $("#toPressure").val();

    // Perform conversion
    let result;
    //from Pa
    if (fromPressure === "Pa" && toPressure === "kPa") {
      result = paToKpa(inputValue);
    } else if (fromPressure === "Pa" && toPressure === "bar") {
      result = paToBar(inputValue);
    } else if (fromPressure === "Pa" && toPressure === "torr/mmHg") {
      result = paToTorr(inputValue);
    } else if (fromPressure === "Pa" && toPressure === "psi") {
      result = paToPsi(inputValue);
    } else if (fromPressure === "Pa" && toPressure === "atm") {
      result = paToAtm(inputValue);
    } else if (fromPressure === "Pa" && toPressure === "inHg") {
      result = paToInHg(inputValue);

      //from kPa
    } else if (fromPressure === "kPa" && toPressure === "Pa") {
      result = kPaToPa(inputValue);
    } else if (fromPressure === "kPa" && toPressure === "bar") {
      result = kpaToBar(inputValue);
    } else if (fromPressure === "kPa" && toPressure === "torr/mmHg") {
      result = kpaToTorr(inputValue);
    } else if (fromPressure === "kPa" && toPressure === "psi") {
      result = kpaToPsi(inputValue);
    } else if (fromPressure === "kPa" && toPressure === "atm") {
      result = kpaToAtm(inputValue);
    } else if (fromPressure === "kPa" && toPressure === "inHg") {
      result = kpaToInHg(inputValue);

      //from bar
    } else if (fromPressure === "bar" && toPressure === "Pa") {
      result = barToPa(inputValue);
    } else if (fromPressure === "bar" && toPressure === "kPa") {
      result = barToKpa(inputValue);
    } else if (fromPressure === "bar" && toPressure === "torr/mmHg") {
      result = barToTorr(inputValue);
    } else if (fromPressure === "bar" && toPressure === "psi") {
      result = barToPsi(inputValue);
    } else if (fromPressure === "bar" && toPressure === "atm") {
      result = barToAtm(inputValue);
    } else if (fromPressure === "bar" && toPressure === "inHg") {
      result = barToInHg(inputValue);

      //from torr/mmHg
    } else if (fromPressure === "torr/mmHg" && toPressure === "Pa") {
      result = torrToPa(inputValue);
    } else if (fromPressure === "torr/mmHg" && toPressure === "kPa") {
      result = torrToKpa(inputValue);
    } else if (fromPressure === "torr/mmHg" && toPressure === "bar") {
      result = torrToBar(inputValue);
    } else if (fromPressure === "torr/mmHg" && toPressure === "psi") {
      result = torrToPsi(inputValue);
    } else if (fromPressure === "torr/mmHg" && toPressure === "atm") {
      result = torrToAtm(inputValue);
    } else if (fromPressure === "torr/mmHg" && toPressure === "inHg") {
      result = torrToInHg(inputValue);

      //from Psi
    } else if (fromPressure === "psi" && toPressure === "Pa") {
      result = psiToPa(inputValue);
    } else if (fromPressure === "psi" && toPressure === "kPa") {
      result = psiToKpa(inputValue);
    } else if (fromPressure === "psi" && toPressure === "bar") {
      result = psiToBar(inputValue);
    } else if (fromPressure === "psi" && toPressure === "torr/mmHg") {
      result = psiToPsi(inputValue);
    } else if (fromPressure === "psi" && toPressure === "atm") {
      result = psiToAtm(inputValue);
    } else if (fromPressure === "psi" && toPressure === "inHg") {
      result = psiToInHg(inputValue);

      //from Standard Atmosphere
    } else if (fromPressure === "atm" && toPressure === "Pa") {
      result = atmToPa(inputValue);
    } else if (fromPressure === "atm" && toPressure === "kPa") {
      result = atmToKpa(inputValue);
    } else if (fromPressure === "atm" && toPressure === "bar") {
      result = atmToBar(inputValue);
    } else if (fromPressure === "atm" && toPressure === "torr/mmHg") {
      result = atmToTorr(inputValue);
    } else if (fromPressure === "atm" && toPressure === "psi") {
      result = atmToPsi(inputValue);
    } else if (fromPressure === "atm" && toPressure === "inHg") {
      result = atmToInHg(inputValue);

      //from inches Hg
    } else if (fromPressure === "inHg" && toPressure === "Pa") {
      result = hgToPa(inputValue);
    } else if (fromPressure === "inHg" && toPressure === "kPa") {
      result = hgToKpa(inputValue);
    } else if (fromPressure === "inHg" && toPressure === "bar") {
      result = hgToBar(inputValue);
    } else if (fromPressure === "inHg" && toPressure === "torr/mmHg") {
      result = hgToTorr(inputValue);
    } else if (fromPressure === "inHg" && toPressure === "psi") {
      result = hgToPsi(inputValue);
    } else if (fromPressure === "inHg" && toPressure === "atm") {
      result = hgToAtm(inputValue);
    } else {
      result = inputValue; // Same units, no conversion needed
    }

    //Display the result
    $("#resultPressure").text(
      `${inputValue} ${fromPressure} = ${result} ${toPressure}`
    );
  });
  $("#resetPressureBtn").click(function () {
    // reset values by each
    $("#fromPressure").val("Pa");
    $("#toPressure").val("Pa");
    $("#inputPressure").val("0");
    $("#resultPressure").text("Result will be displayed here");
  });
});
