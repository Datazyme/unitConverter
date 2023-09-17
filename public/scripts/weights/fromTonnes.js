//From tonnes to the rest
const tonneToKg = function (value) {
  let kilograms = value * 1000;
  return kilograms;
};
const tonneToGm = function (value) {
  let grams = value * 1e6;
  return grams.toExponential(3);
};
const tonneToMg = function (value) {
  let milligrams = value * 1e9;
  return milligrams.toExponential(3);
};
const tonneToµg = function (value) {
  let micrograms = value * 1e12;
  return micrograms.toExponential(3);
};
const tonneToNg = function (value) {
  let nanograms = value * 1e15;
  return nanograms.toExponential(3);
};
const tonneToPg = function (value) {
  let picograms = value * 1e18;
  return picograms.toExponential(3);
};
const tonneToTon = function (value) {
  let tons = value * 1.10231;
  return tons.toFixed(3);
};
const tonneToPd = function (value) {
  let pounds = value * 2204.62;
  return pounds.toFixed(3);
};
const tonneToOz = function (value) {
  let ounces = value * 35274;
  return ounces.toExponential(3);
};
const tonneToSt = function (value) {
  let stone = value * 157.473;
  return stone.toFixed(3);
};
