// Client facing scripts here
const tempConverter = function (value) {
  let celsius = Math.round(((value - 32) / 1.8) * 10) / 10;
  return celsius;
};

// const tempConverter = function (value, cToF) {
//   if (typeof value === "string") {
//     return NaN;
//   }

//   if (cToF === true) {
//     let farenheit = Math.round(((value * 9) / 5 + 32) * 10) / 10;
//     return farenheit;
//   } else if (cToF === false) {
//     let celsius = Math.round(((value - 32) / 1.8) * 10) / 10;
//     return celsius;
//   }
// };

// console.log(tempConverter(42, false));

$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();
    $(".tweet").val(tempConverter($(".tweet").val()));
    //console.log(tempConverter($(".tweet").val(event)));
    //console.log("works");
  });
});
