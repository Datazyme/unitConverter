//From micrograms to the rest
const microgramToTonnes = function (value) {
  let tonnes = value * 1e-12;
  return tonnes.toExponential(3);
};
const microgramToKg = function (value) {
  let kilograms = value * 1e-9;
  return kilograms.toExponential(3);
};
const microgramToGm = function (value) {
  let grams = value * 1e-6;
  return grams.toExponential(3);
};
const microgramToMg = function (value) {
  let milligrams = value * 0.001;
  return milligrams;
};
const microgramToNg = function (value) {
  let nanograms = value * 1000;
  return nanograms;
};
const microgramToPg = function (value) {
  let picograms = value * 1e6;
  return picograms.toExponential(3);
};
const microgramToTon = function (value) {
  let tons = value * 1.1023e-12;
  return tons.toExponential(3);
};
const microgramToPd = function (value) {
  let pounds = value * 2.2046e-9;
  return pounds.toExponential(3);
};
const microgramToOz = function (value) {
  let ounces = value * 3.5274e-8;
  return ounces.toExponential(3);
};
const microgramToSt = function (value) {
  let stone = value * 1.57473e-10;
  return stone.toExponential(3);
};
