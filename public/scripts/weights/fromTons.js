//From US tons to the rest
const tonToTonnes = function (value) {
  let tonnes = value * 0.907185;
  return tonnes.toFixed(3);
};
const tonToKg = function (value) {
  let kilograms = value * 907.185;
  return kilograms.toFixed(3);
};
const tonToGm = function (value) {
  let grams = value * 907185;
  return grams.toExponential(3);
};
const tonToMg = function (value) {
  let milligrams = value * 9.072e8;
  return milligrams.toExponential(3);
};
const tonToµg = function (value) {
  let micrograms = value * 9.072e11;
  return micrograms.toExponential(3);
};
const tonToNg = function (value) {
  let nanograms = value * 9.072e14;
  return nanograms.toExponential(3);
};
const tonToPg = function (value) {
  let picograms = value * 9.072e17;
  return picograms.toExponential(3);
};
const tonToPd = function (value) {
  let pounds = value * 2000;
  return pounds;
};
const tonToOz = function (value) {
  let ounces = value * 32000;
  return ounces.toExponential(3);
};
const tonToSt = function (value) {
  let stone = value * 142.857;
  return stone.toFixed(3);
};
