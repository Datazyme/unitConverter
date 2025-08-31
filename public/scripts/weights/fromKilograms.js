//From kilograms to the rest
const kgToTonne = function (value) {
  let tonnes = value * 0.001;
  return tonnes;
};
const kgToGm = function (value) {
  let grams = value * 1000;
  return grams;
};
const kgToMg = function (value) {
  let milligrams = value * 1e6;
  return milligrams.toExponential(3);
};
const kgToµg = function (value) {
  let micrograms = value * 1e9;
  return micrograms.toExponential(3);
};
const kgToNg = function (value) {
  let nanograms = value * 1e12;
  return nanograms.toExponential(3);
};
const kgToPg = function (value) {
  let picograms = value * 1e15;
  return picograms.toExponential(3);
};
const kgToTon = function (value) {
  let tons = value * 0.00110231;
  return tons.toExponential(3);
};
const kgToPd = function (value) {
  let pounds = value * 2.20462;
  return pounds.toFixed(3);
};
const kgToOz = function (value) {
  let ounces = value * 35.274;
  return ounces.toFixed(3);
};
const kgToSt = function (value) {
  let stone = value * 0.157473;
  return stone.toFixed(3);
};
