//From stone to the rest
const stToTonnes = function (value) {
  let tonnes = value * 0.00635029;
  return tonnes.toExponential(3);
};
const stToKg = function (value) {
  let kilograms = value * 6.35029;
  return kilograms.toFixed(3);
};
const stToGm = function (value) {
  let grams = value * 6350.29;
  return grams.toFixed(3);
};
const stToMg = function (value) {
  let milligrams = value * 6.35e6;
  return milligrams.toExponential(3);
};
const stToµg = function (value) {
  let micrograms = value * 6.35e9;
  return micrograms.toExponential(3);
};
const stToNg = function (value) {
  let nanograms = value * 6.35e12;
  return nanograms.toExponential(3);
};
const stToPg = function (value) {
  let picograms = value * 6.35e15;
  return picograms.toExponential(3);
};
const stToTon = function (value) {
  let tons = value * 0.007;
  return tons.toFixed(3);
};
const stToPd = function (value) {
  let pounds = value * 14;
  return pounds;
};
const stToOz = function (value) {
  let ounce = value * 224;
  return ounce;
};
