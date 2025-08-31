//From milligrams to the rest
const milligramToTonnes = function (value) {
  let tonnes = value * 1e-9;
  return tonnes.toExponential(3);
};
const milligramToKg = function (value) {
  let kilograms = value * 1e-6;
  return kilograms.toExponential(3);
};
const milligramToGm = function (value) {
  let grams = value * 0.001;
  return grams;
};
const milligramToµg = function (value) {
  let micrograms = value * 1000;
  return micrograms;
};
const milligramToNg = function (value) {
  let nanograms = value * 1e6;
  return nanograms.toExponential(3);
};
const milligramToPg = function (value) {
  let picograms = value * 1e9;
  return picograms.toExponential(3);
};
const milligramToTon = function (value) {
  let tons = value * 1.1023e-6;
  return tons.toExponential(3);
};
const milligramToPd = function (value) {
  let pounds = value * 0.00220462;
  return pounds.toExponential(3);
};
const milligramToOz = function (value) {
  let ounces = value * 0.035274;
  return ounces.toFixed(3);
};
const milligramToSt = function (value) {
  let stone = value * 0.000157473;
  return stone.toExponential(3);
};
