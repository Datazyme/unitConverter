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

      //from milliliters
    } else if (fromLiquid === "ml" && toLiquid === "L") {
      result = mlToL(inputValue);
    } else if (fromLiquid === "ml" && toLiquid === "µL") {
      result = mlToµl(inputValue);
    } else if (fromLiquid === "ml" && toLiquid === "nL") {
      result = mlToNl(inputValue);
    } else if (fromLiquid === "ml" && toLiquid === "pL") {
      result = mlToPl(inputValue);
    } else if (fromLiquid === "ml" && toLiquid === "US gal") {
      result = mlToUsGal(inputValue);
    } else if (fromLiquid === "ml" && toLiquid === "US qt") {
      result = mlToUsQt(inputValue);
    } else if (fromLiquid === "ml" && toLiquid === "US pt") {
      result = mlToUsPt(inputValue);
    } else if (fromLiquid === "ml" && toLiquid === "US fl.oz.") {
      result = mlToUsFlOz(inputValue);
    } else if (fromLiquid === "ml" && toLiquid === "Imp. gal.") {
      result = mlToImGal(inputValue);
    } else if (fromLiquid === "ml" && toLiquid === "Imp. qt.") {
      result = mlToImQt(inputValue);
    } else if (fromLiquid === "ml" && toLiquid === "Imp. pt.") {
      result = mlToImPt(inputValue);
    } else if (fromLiquid === "ml" && toLiquid === "Imp fl.oz.") {
      result = mlToImFlOz(inputValue);

      //from microliters
    } else if (fromLiquid === "µL" && toLiquid === "L") {
      result = µlToL(inputValue);
    } else if (fromLiquid === "µL" && toLiquid === "ml") {
      result = µlToMl(inputValue);
    } else if (fromLiquid === "µL" && toLiquid === "nL") {
      result = µlToNl(inputValue);
    } else if (fromLiquid === "µL" && toLiquid === "pL") {
      result = µlToPl(inputValue);
    } else if (fromLiquid === "µL" && toLiquid === "US gal") {
      result = µlToUsGal(inputValue);
    } else if (fromLiquid === "µL" && toLiquid === "US qt") {
      result = µlToUsQt(inputValue);
    } else if (fromLiquid === "µL" && toLiquid === "US pt") {
      result = µlToUsPt(inputValue);
    } else if (fromLiquid === "µL" && toLiquid === "US fl.oz.") {
      result = µlToUsFlOz(inputValue);
    } else if (fromLiquid === "µL" && toLiquid === "Imp. gal.") {
      result = µlToImGal(inputValue);
    } else if (fromLiquid === "µL" && toLiquid === "Imp. qt.") {
      result = µlToImQt(inputValue);
    } else if (fromLiquid === "µL" && toLiquid === "Imp. pt.") {
      result = µlToImPt(inputValue);
    } else if (fromLiquid === "µL" && toLiquid === "Imp fl.oz.") {
      result = µlToImFlOz(inputValue);

      //from nanoliters
    } else if (fromLiquid === "nL" && toLiquid === "L") {
      result = nlToL(inputValue);
    } else if (fromLiquid === "nL" && toLiquid === "ml") {
      result = nlToMl(inputValue);
    } else if (fromLiquid === "nL" && toLiquid === "µL") {
      result = nlToµl(inputValue);
    } else if (fromLiquid === "nL" && toLiquid === "pL") {
      result = nlToPl(inputValue);
    } else if (fromLiquid === "nL" && toLiquid === "US gal") {
      result = nlToUsGal(inputValue);
    } else if (fromLiquid === "nL" && toLiquid === "US qt") {
      result = nlToUsQt(inputValue);
    } else if (fromLiquid === "nL" && toLiquid === "US pt") {
      result = nlToUsPt(inputValue);
    } else if (fromLiquid === "nL" && toLiquid === "US fl.oz.") {
      result = nlToUsFlOz(inputValue);
    } else if (fromLiquid === "nL" && toLiquid === "Imp. gal.") {
      result = nlToImGal(inputValue);
    } else if (fromLiquid === "nL" && toLiquid === "Imp. qt.") {
      result = nlToImQt(inputValue);
    } else if (fromLiquid === "nL" && toLiquid === "Imp. pt.") {
      result = nlToImPt(inputValue);
    } else if (fromLiquid === "nL" && toLiquid === "Imp fl.oz.") {
      result = nlToImFlOz(inputValue);

      //from picoliters
    } else if (fromLiquid === "pL" && toLiquid === "L") {
      result = plToL(inputValue);
    } else if (fromLiquid === "pL" && toLiquid === "ml") {
      result = plToMl(inputValue);
    } else if (fromLiquid === "pL" && toLiquid === "µL") {
      result = plToµl(inputValue);
    } else if (fromLiquid === "pL" && toLiquid === "nL") {
      result = plToNl(inputValue);
    } else if (fromLiquid === "pL" && toLiquid === "US gal") {
      result = plToUsGal(inputValue);
    } else if (fromLiquid === "pL" && toLiquid === "US qt") {
      result = plToUsQt(inputValue);
    } else if (fromLiquid === "pL" && toLiquid === "US pt") {
      result = plToUsPt(inputValue);
    } else if (fromLiquid === "pL" && toLiquid === "US fl.oz.") {
      result = plToUsFlOz(inputValue);
    } else if (fromLiquid === "pL" && toLiquid === "Imp. gal.") {
      result = plToImGal(inputValue);
    } else if (fromLiquid === "pL" && toLiquid === "Imp. qt.") {
      result = plToImQt(inputValue);
    } else if (fromLiquid === "pL" && toLiquid === "Imp. pt.") {
      result = plToImPt(inputValue);
    } else if (fromLiquid === "pL" && toLiquid === "Imp fl.oz.") {
      result = plToImFlOz(inputValue);

      //from US Gallons
    } else if (fromLiquid === "US gal" && toLiquid === "L") {
      result = usGalToL(inputValue);
    } else if (fromLiquid === "US gal" && toLiquid === "ml") {
      result = usGalToMl(inputValue);
    } else if (fromLiquid === "US gal" && toLiquid === "µL") {
      result = usGalToµl(inputValue);
    } else if (fromLiquid === "US gal" && toLiquid === "nL") {
      result = usGalToNl(inputValue);
    } else if (fromLiquid === "US gal" && toLiquid === "pL") {
      result = usGalToPl(inputValue);
    } else if (fromLiquid === "US gal" && toLiquid === "US qt") {
      result = usGalToUsQt(inputValue);
    } else if (fromLiquid === "US gal" && toLiquid === "US pt") {
      result = usGalToUsPt(inputValue);
    } else if (fromLiquid === "US gal" && toLiquid === "US fl.oz.") {
      result = usGalToUsFlOz(inputValue);
    } else if (fromLiquid === "US gal" && toLiquid === "Imp. gal.") {
      result = usGalToImGal(inputValue);
    } else if (fromLiquid === "US gal" && toLiquid === "Imp. qt.") {
      result = usGalToImQt(inputValue);
    } else if (fromLiquid === "US gal" && toLiquid === "Imp. pt.") {
      result = usGalToImPt(inputValue);
    } else if (fromLiquid === "US gal" && toLiquid === "Imp fl.oz.") {
      result = usGalToImFlOz(inputValue);
    } else {
      result = inputValue; // Same units, no conversion needed
    }

    //Display the result
    $("#resultLiquid").text(
      `${inputValue}${fromLiquid} is equal to ${result}${toLiquid}`
    );
  });
});
