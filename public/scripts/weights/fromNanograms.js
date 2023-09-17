//From nanograms to the rest
const nanogramToTonnes = function (value) {
  let tonnes = value * 1e-15;
  return tonnes.toExponential(3);
};
const nanogramToKg = function (value) {
  let kilograms = value * 1e-12;
  return kilograms.toExponential(3);
};
const nanogramToGm = function (value) {
  let grams = value * 1e-9;
  return grams.toExponential(3);
};
const nanogramToMg = function (value) {
  let milligrams = value * 1e-6;
  return milligrams.toExponential(3);
};
const nanogramToµg = function (value) {
  let micrograms = value * 0.001;
  return micrograms;
};
const nanogramToPg = function (value) {
  let picograms = value * 1000;
  return picograms;
};
const nanogramToTon = function (value) {
  let tons = value * 1.1023e-15;
  return tons.toExponential(3);
};
const nanogramToPd = function (value) {
  let pounds = value * 2.2046e-12;
  return pounds.toExponential(3);
};
const nanogramToOz = function (value) {
  let ounces = value * 3.5274e-11;
  return ounces.toExponential(3);
};
const nanogramToSt = function (value) {
  let stone = value * 1.57473e-13;
  return stone.toExponential(3);
};
