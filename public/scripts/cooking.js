//Client facing scripts here

//allows user to enter number into textbox, applies function and spits out value to same box
$(document).ready(function () {
  $("#convertCookingBtn").click(function () {
    // Get user input values
    const inputValue = parseFloat($("#inputCooking").val());
    console.log(inputValue);
    const fromCooking = $("#fromCooking").val();
    const toCooking = $("#toCooking").val();

    // Perform conversion
    let result;
    //from ml
    if (fromCooking === "ml" && toCooking === "c Metric") {
      result = mlToMetCups(inputValue);
    } else if (fromCooking === "ml" && toCooking === "c US") {
      result = mlToUsCups(inputValue);
    } else if (fromCooking === "ml" && toCooking === "c Imp.") {
      result = mlToImCups(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tbsp Metric") {
      result = mlToMetTbsp(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tbsp US") {
      result = mlToUsTbsp(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tbsp Imp.") {
      result = mlToImTbsp(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tsp Metric") {
      result = mlToMetTsp(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tsp US") {
      result = mlToUsTsp(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tsp Imp.") {
      result = mlToImTsp(inputValue);

      // from metric cups
    } else if (fromCooking === "c Metric" && toCooking === "ml") {
      result = metCupToMl(inputValue);
    } else if (fromCooking === "c Metric" && toCooking === "c US") {
      result = metCupToUsCups(inputValue);
    } else if (fromCooking === "c Metric" && toCooking === "c Imp.") {
      result = metCupToImCups(inputValue);
    } else if (fromCooking === "c Metric" && toCooking === "tbsp Metric") {
      result = metCupToMetTbsp(inputValue);
    } else if (fromCooking === "c Metric" && toCooking === "tbsp US") {
      result = metCupToUsTbsp(inputValue);
    } else if (fromCooking === "c Metric" && toCooking === "tbsp Imp.") {
      result = metCupToImTbsp(inputValue);
    } else if (fromCooking === "c Metric" && toCooking === "tsp Metric") {
      result = metCupToMetTsp(inputValue);
    } else if (fromCooking === "c Metric" && toCooking === "tsp US") {
      result = metCupToUsTsp(inputValue);
    } else if (fromCooking === "c Metric" && toCooking === "tsp Imp.") {
      result = metCupToImTsp(inputValue);

      //from Us Cups
    } else if (fromCooking === "c US" && toCooking === "ml") {
      result = usCupToMl(inputValue);
    } else if (fromCooking === "c US" && toCooking === "c Metric") {
      result = usCupToMetCups(inputValue);
    } else if (fromCooking === "c US" && toCooking === "c Imp.") {
      result = usCupToImCups(inputValue);
    } else if (fromCooking === "c US" && toCooking === "tbsp Metric") {
      result = usCupToMetTbsp(inputValue);
    } else if (fromCooking === "c US" && toCooking === "tbsp US") {
      result = usCupToUsTbsp(inputValue);
    } else if (fromCooking === "c US" && toCooking === "tbsp Imp.") {
      result = usCupToImTbsp(inputValue);
    } else if (fromCooking === "c US" && toCooking === "tsp Metric") {
      result = usCupToMetTsp(inputValue);
    } else if (fromCooking === "c US" && toCooking === "tsp US") {
      result = usCupToUsTsp(inputValue);
    } else if (fromCooking === "c US" && toCooking === "tsp Imp.") {
      result = usCupToImTsp(inputValue);

      //from Imperial Cups
    } else if (fromCooking === "c Imp." && toCooking === "ml") {
      result = imCupToMl(inputValue);
    } else if (fromCooking === "c Imp." && toCooking === "c Metric") {
      result = imCupToMetCups(inputValue);
    } else if (fromCooking === "c Imp." && toCooking === "c US") {
      result = imCupToUsCups(inputValue);
    } else if (fromCooking === "c Imp." && toCooking === "tbsp Metric") {
      result = imCupToMetTbsp(inputValue);
    } else if (fromCooking === "c Imp." && toCooking === "tbsp US") {
      result = imCupToUsTbsp(inputValue);
    } else if (fromCooking === "c Imp." && toCooking === "tbsp Imp.") {
      result = imCupToImTbsp(inputValue);
    } else if (fromCooking === "c Imp." && toCooking === "tsp Metric") {
      result = imCupToMetTsp(inputValue);
    } else if (fromCooking === "c Imp." && toCooking === "tsp US") {
      result = imCupToUsTsp(inputValue);
    } else if (fromCooking === "c Imp." && toCooking === "tsp Imp.") {
      result = imCupToImTsp(inputValue);

      //from metric Tbsp
    } else if (fromCooking === "tbsp Metric" && toCooking === "ml") {
      result = metTbspToMl(inputValue);
    } else if (fromCooking === "tbsp Metric" && toCooking === "c Metric") {
      result = metTbspToMetCups(inputValue);
    } else if (fromCooking === "tbsp Metric" && toCooking === "c US") {
      result = metTbspToUsCups(inputValue);
    } else if (fromCooking === "tbsp Metric" && toCooking === "c Imp.") {
      result = metTbspToImCups(inputValue);
    } else if (fromCooking === "tbsp Metric" && toCooking === "tbsp US") {
      result = metTbspToUsTbsp(inputValue);
    } else if (fromCooking === "tbsp Metric" && toCooking === "tbsp Imp.") {
      result = metTbspToImTbsp(inputValue);
    } else if (fromCooking === "tbsp Metric" && toCooking === "tsp Metric") {
      result = metTbspToMetTsp(inputValue);
    } else if (fromCooking === "tbsp Metric" && toCooking === "tsp US") {
      result = metTbspToUsTsp(inputValue);
    } else if (fromCooking === "tbsp Metric" && toCooking === "tsp Imp.") {
      result = metTbspToImTsp(inputValue);

      //from US Tbsp
    } else if (fromCooking === "tbsp US" && toCooking === "ml") {
      result = usTbspToMl(inputValue);
    } else if (fromCooking === "tbsp US" && toCooking === "c Metric") {
      result = usTbspToMetCups(inputValue);
    } else if (fromCooking === "tbsp US" && toCooking === "c US") {
      result = usTbspToUsCups(inputValue);
    } else if (fromCooking === "tbsp US" && toCooking === "c Imp.") {
      result = usTbspToImCups(inputValue);
    } else if (fromCooking === "tbsp US" && toCooking === "tbsp Metric") {
      result = usTbspToMetTbsp(inputValue);
    } else if (fromCooking === "tbsp US" && toCooking === "tbsp Imp.") {
      result = usTbspToImTbsp(inputValue);
    } else if (fromCooking === "tbsp US" && toCooking === "tsp Metric") {
      result = usTbspToMetTsp(inputValue);
    } else if (fromCooking === "tbsp US" && toCooking === "tsp US") {
      result = usTbspToUsTsp(inputValue);
    } else if (fromCooking === "tbsp US" && toCooking === "tsp Imp.") {
      result = usTbspToImTsp(inputValue);

      //from Imperial Tbsp
    } else if (fromCooking === "tbsp Imp." && toCooking === "ml") {
      result = imTbspToMl(inputValue);
    } else if (fromCooking === "tbsp Imp." && toCooking === "c Metric") {
      result = imTbspToMetCups(inputValue);
    } else if (fromCooking === "tbsp Imp." && toCooking === "c US") {
      result = imTbspToUsCups(inputValue);
    } else if (fromCooking === "tbsp Imp." && toCooking === "c Imp.") {
      result = imTbspToImCups(inputValue);
    } else if (fromCooking === "tbsp Imp." && toCooking === "tbsp Metric") {
      result = imTbspToMetTbsp(inputValue);
    } else if (fromCooking === "tbsp Imp." && toCooking === "tbsp US") {
      result = imTbspToUsTbsp(inputValue);
    } else if (fromCooking === "tbsp Imp." && toCooking === "tsp Metric") {
      result = imTbspToMetTsp(inputValue);
    } else if (fromCooking === "tbsp Imp." && toCooking === "tsp US") {
      result = imTbspToUsTsp(inputValue);
    } else if (fromCooking === "tbsp Imp." && toCooking === "tsp Imp.") {
      result = imTbspToImTsp(inputValue);

      //From Metric Teaspoon
    } else if (fromCooking === "tsp Metric" && toCooking === "ml") {
      result = metTspToMl(inputValue);
    } else if (fromCooking === "tsp Metric" && toCooking === "c Metric") {
      result = metTspToMetCups(inputValue);
    } else if (fromCooking === "tsp Metric" && toCooking === "c US") {
      result = metTspToUsCups(inputValue);
    } else if (fromCooking === "tsp Metric" && toCooking === "c Imp.") {
      result = metTspToImCups(inputValue);
    } else if (fromCooking === "tsp Metric" && toCooking === "tbsp Metric") {
      result = metTspToMetTbsp(inputValue);
    } else if (fromCooking === "tsp Metric" && toCooking === "tbsp US") {
      result = metTspToUsTbsp(inputValue);
    } else if (fromCooking === "tsp Metric" && toCooking === "tbsp Imp.") {
      result = metTspToImTbsp(inputValue);
    } else if (fromCooking === "tsp Metric" && toCooking === "tsp US") {
      result = metTspToUsTsp(inputValue);
    } else if (fromCooking === "tsp Metric" && toCooking === "tsp Imp.") {
      result = metTspToImTsp(inputValue);

      //From US Teaspoon
    } else if (fromCooking === "tsp US" && toCooking === "ml") {
      result = usTspToMl(inputValue);
    } else if (fromCooking === "tsp US" && toCooking === "c Metric") {
      result = usTspToMetCups(inputValue);
    } else if (fromCooking === "tsp US" && toCooking === "c US") {
      result = usTspToUsCups(inputValue);
    } else if (fromCooking === "tsp US" && toCooking === "c Imp.") {
      result = usTspToImCups(inputValue);
    } else if (fromCooking === "tsp US" && toCooking === "tbsp Metric") {
      result = usTspToMetTbsp(inputValue);
    } else if (fromCooking === "tsp US" && toCooking === "tbsp US") {
      result = usTspToUsTbsp(inputValue);
    } else if (fromCooking === "tsp US" && toCooking === "tbsp Imp.") {
      result = usTspToImTbsp(inputValue);
    } else if (fromCooking === "tsp US" && toCooking === "tsp Metric") {
      result = usTspToMetTsp(inputValue);
    } else if (fromCooking === "tsp US" && toCooking === "tsp Imp.") {
      result = usTspToImTsp(inputValue);

      //From Imperial Teaspoon
    } else if (fromCooking === "tsp Imp." && toCooking === "ml") {
      result = usTspToMl(inputValue);
    } else if (fromCooking === "tsp Imp." && toCooking === "c Metric") {
      result = usTspToMetCups(inputValue);
    } else if (fromCooking === "tsp Imp." && toCooking === "c US") {
      result = usTspToUsCups(inputValue);
    } else if (fromCooking === "tsp Imp." && toCooking === "c Imp.") {
      result = usTspToImCups(inputValue);
    } else if (fromCooking === "tsp Imp." && toCooking === "tbsp Metric") {
      result = usTspToMetTbsp(inputValue);
    } else if (fromCooking === "tsp Imp." && toCooking === "tbsp US") {
      result = usTspToUsTbsp(inputValue);
    } else if (fromCooking === "tsp Imp." && toCooking === "tbsp Imp.") {
      result = usTspToImTbsp(inputValue);
    } else if (fromCooking === "tsp Imp." && toCooking === "tsp Metric") {
      result = usTspToMetTsp(inputValue);
    } else if (fromCooking === "tsp Imp." && toCooking === "tsp US") {
      result = usTspToImTsp(inputValue);
    } else {
      result = inputValue; // Same units, no conversion needed
    }

    //Display the result
    $("#resultCooking").text(
      `${inputValue} ${fromCooking} is equal to ${result} ${toCooking}`
    );
  });
});
