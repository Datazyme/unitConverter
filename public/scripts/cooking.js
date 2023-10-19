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
    } else if (fromCooking === "ml" && toCooking === "c Imperial") {
      result = mlToImCups(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tbsp Metric") {
      result = mlToMetTbsp(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tbsp US") {
      result = mlToUsTbsp(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tbsp Imperial") {
      result = mlToImTbsp(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tsp Metric") {
      result = mlToMetTsp(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tsp US") {
      result = mlToUsTsp(inputValue);
    } else if (fromCooking === "ml" && toCooking === "tsp Imperial") {
      result = mlToImTsp(inputValue);
    } else {
      result = inputValue; // Same units, no conversion needed
    }

    //Display the result
    $("#resultCooking").text(
      `${inputValue} ${fromCooking} is equal to ${result} ${toCooking}`
    );
  });
});
