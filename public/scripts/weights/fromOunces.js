//From ounces to the rest
const ozToTonnes = function (value) {
  let tonnes = value * 2.835e-5;
  return tonnes.toExponential(3);
};
const ozToKg = function (value) {
  let kilograms = value * 0.0283495;
  return kilograms.toFixed(3);
};
const ozToGm = function (value) {
  let grams = value * 28.3495;
  return grams.toFixed(3);
};
const ozToMg = function (value) {
  let milligrams = value * 28349.5;
  return milligrams.toExponential(3);
};
const ozToµg = function (value) {
  let micrograms = value * 2.835e7;
  return micrograms.toExponential(3);
};
const ozToNg = function (value) {
  let nanograms = value * 2.835e10;
  return nanograms.toExponential(3);
};
const ozToPg = function (value) {
  let picograms = value * 2.835e13;
  return picograms.toExponential(3);
};
const ozToTon = function (value) {
  let tons = value * 3.125e-5;
  return tons.toExponential(3);
};
const ozToPd = function (value) {
  let pounds = value * 0.0625;
  return pounds.toFixed(3);
};
const ozToSt = function (value) {
  let stone = value * 0.00446429;
  return stone.toExponential(3);
};
