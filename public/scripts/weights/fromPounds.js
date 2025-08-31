//From pounds to the rest
const poundToTonnes = function (value) {
  let tonnes = value * 0.000453592;
  return tonnes.toExponential(3);
};
const poundToKg = function (value) {
  let kilograms = value * 0.453592;
  return kilograms.toFixed(3);
};
const poundToGm = function (value) {
  let grams = value * 453.592;
  return grams.toFixed(3);
};
const poundToMg = function (value) {
  let milligrams = value * 453592;
  return milligrams.toExponential(3);
};
const poundToµg = function (value) {
  let micrograms = value * 4.53592e8;
  return micrograms.toExponential(3);
};
const poundToNg = function (value) {
  let nanograms = value * 4.53592e11;
  return nanograms.toExponential(3);
};
const poundToPg = function (value) {
  let picograms = value * 4.53592e14;
  return picograms.toExponential(3);
};
const poundToTon = function (value) {
  let tons = value * 0.0005;
  return tons;
};
const poundToOz = function (value) {
  let ounces = value * 16;
  return ounces;
};
const poundToSt = function (value) {
  let stone = value * 0.0714256;
  return stone.toFixed(3);
};
