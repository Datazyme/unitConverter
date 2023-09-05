// Client facing scripts here

//target all the necessary HTML elements with unique identifiers
const fromFarenheit = document.querySelector("#from-farenheit");
const fromCelsius = document.querySelector("#from-celsius");
const toFarenheit = document.querySelector("#to-farenheit");
const toCelsius = document.querySelector("#to-celsius");
const submitBtn = document.querySelector("#submit-button");

// Listen for checkbox ticked and length
fromFarenheit.addEventListener("change", function () {
  if (this.checked) {
    console.log("fromFarenheit is checked..");
  } else {
    console.log("fromFarenheit is unchecked..");
  }
});

fromCelsius.addEventListener("change", function () {
  if (this.checked) {
    console.log("fromCelsius is checked..");
  } else {
    console.log("fromCelsius is unchecked..");
  }
});

toFarenheit.addEventListener("change", function () {
  if (this.checked) {
    console.log("toFarenheit is checked..");
  } else {
    console.log("toFarenheit is unchecked..");
  }
});

toCelsius.addEventListener("change", function () {
  if (this.checked) {
    console.log("toCelsius is checked..");
  } else {
    console.log("toCelsius is unchecked..");
  }
});

// submitBtn.addEventListener("click", () => {
const fromFartoCels = fromFarenheit.checked && toCels.checked;
const fromCelstoFar = fromCelsius.checked && toFar.checked;

let checking = function () {
  if (fromFartoCels) {
    console.log("checking");
  }
};
//   result.value = tempConverter(value, fromFartoCels, fromCelstoFar);
// });

// const cToF = function () {
//   if (fromCelsius.checked && toFarenheit.checked) {
//     return true;
//   } else if (fromFarenheit.checked && toCelsius.checked) {
//     return false;
//   } else {
//     console.log("not a valid choice");
//   }
// };

//convert temperatures function
const farenToCel = function (value) {
  let celsius = Math.round(((value - 32) / 1.8) * 10) / 10;
  return celsius;
};
const CelcToFaren = function (value) {
  let farenheit = Math.round(((value * 9) / 5 + 32) * 10) / 10;
  return farenheit + "F";
};

// const tempConverter = function convert(value, fromFartoCels, fromCelstoFar) {
//   // if (typeof value === "string") {
//   //   return typeof value;
//   // }

//   if (fromCelstoFar) {
//     let farenheit = Math.round(((value * 9) / 5 + 32) * 10) / 10;
//     return farenheit + "F";
//   } else if (fromFartoCels) {
//     let celsius = Math.round(((value - 32) / 1.8) * 10) / 10;
//     return celsius + "C";
//   }
// };

//console.log(tempConverter(42, false));

//allows user to enter number into textbox, applies function and spits out value to same box
$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();
    if (fromFartoCels) {
      $(".number").val(farenToCel($(".number").val()));
    } else if (fromCelstoFar) {
      $(".number").val(CelcToFaren($(".number").val()));
    }
    //console.log($("#number-text").val(tempConverter($("#number-text").val())));
    console.log("works");
  });
});
