// Client facing scripts here

//allows user to enter number into textbox, applies function and spits out value to same box
$(document).ready(function () {
  $("#convertLiquidBtn").click(function () {
    // Get user input values
    const inputValue = parseFloat($("#inputLiquid").val());
    console.log(inputValue);
    const fromLiquid = $("#fromLiquid").val();
    const toLiquid = $("#toLiquid").val();

    // Perform conversion
    let result;
    //from Liters
    if (fromLiquid === "L" && toLiquid === "ml") {
      result = lToMl(inputValue);
    } else if (fromLiquid === "L" && toLiquid === "µL") {
      result = lToµl(inputValue);
    } else if (fromLiquid === "L" && toLiquid === "nL") {
      result = lToNl(inputValue);
    } else if (fromLiquid === "L" && toLiquid === "pL") {
      result = lToPl(inputValue);
    } else if (fromLiquid === "L" && toLiquid === "US gal") {
      result = lToUsGal(inputValue);
    } else if (fromLiquid === "L" && toLiquid === "US qt") {
      result = lToUsQt(inputValue);
    } else if (fromLiquid === "L" && toLiquid === "US pt") {
      result = lToUsPt(inputValue);
    } else if (fromLiquid === "L" && toLiquid === "US fl.oz.") {
      result = lToUsFlOz(inputValue);
    } else if (fromLiquid === "L" && toLiquid === "Imp. gal.") {
      result = lToImGal(inputValue);
    } else if (fromLiquid === "L" && toLiquid === "Imp. qt.") {
      result = lToImQt(inputValue);
    } else if (fromLiquid === "L" && toLiquid === "Imp. pt.") {
      result = lToImPt(inputValue);
    } else if (fromLiquid === "L" && toLiquid === "Imp fl.oz.") {
      result = lToImFlOz(inputValue);
    } else {
      result = inputValue; // Same units, no conversion needed
    }

    //Display the result
    $("#resultLiquid").text(
      `${inputValue}${fromLiquid} is equal to ${result}${toLiquid}`
    );
  });
});
