//From picograms to the rest
const picogramToTonnes = function (value) {
  let tonnes = value * 1e-18;
  return tonnes.toExponential(3);
};
const picogramToKg = function (value) {
  let kilograms = value * 1e-15;
  return kilograms.toExponential(3);
};
const picogramToGm = function (value) {
  let grams = value * 1e-12;
  return grams.toExponential(3);
};
const picogramToMg = function (value) {
  let milligrams = value * 1e-9;
  return milligrams.toExponential(3);
};
const picogramToµg = function (value) {
  let micrograms = value * 1e-6;
  return micrograms.toExponential(3);
};
const picogramToNg = function (value) {
  let nanograms = value * 0.001;
  return nanograms;
};
const picogramToTon = function (value) {
  let tons = value * 1.1023e-18;
  return tons.toExponential(3);
};
const picogramToPd = function (value) {
  let pounds = value * 2.2046e-15;
  return pounds.toExponential(3);
};
const picogramToOz = function (value) {
  let ounces = value * 3.5274e-14;
  return ounces.toExponential(3);
};
const picogramToSt = function (value) {
  let stone = value * 1.57473e-16;
  return stone.toExponential(3);
};
