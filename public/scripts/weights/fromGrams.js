//From grams to the rest
const gramToTonnes = function (value) {
  let tonnes = value * 1e-6;
  return tonnes.toExponential(3);
};
const gramToKg = function (value) {
  let kilograms = value * 0.001;
  return kilograms;
};
const gramToMg = function (value) {
  let milligrams = value * 1000;
  return milligrams;
};
const gramToµg = function (value) {
  let micrograms = value * 1e6;
  return micrograms.toExponential(3);
};
const gramToNg = function (value) {
  let nanograms = value * 1e9;
  return nanograms.toExponential(3);
};
const gramToPg = function (value) {
  let picograms = value * 1e12;
  return picograms.toExponential(3);
};
const gramToTon = function (value) {
  let tons = value * 1.1023e-6;
  return tons.toExponential(3);
};
const gramToPd = function (value) {
  let pounds = value * 0.00220462;
  return pounds.toFixed(3);
};
const gramToOz = function (value) {
  let ounces = value * 0.035274;
  return ounces.toFixed(3);
};
const gramToSt = function (value) {
  let stone = value * 0.000157473;
  return stone.toExponential(3);
};
