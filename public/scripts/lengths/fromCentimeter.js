//From centimeters to the rest
const cmToKm = function (value) {
  let kilometers = value * 1e-5;
  return kilometers.toExponential(3);
};
const cmToM = function (value) {
  let centimeters = value * 0.01;
  return centimeters;
};
const cmToDm = function (value) {
  let decimeters = value * 0.1;
  return decimeters;
};
const cmToMm = function (value) {
  let millimeters = value * 10;
  return millimeters.toExponential(3);
};
const cmToµm = function (value) {
  let micrometers = value * 1e4;
  return micrometers.toExponential(3);
};
const cmToNm = function (value) {
  let nanometers = value * 1e7;
  return nanometers.toExponential(3);
};
const cmToPm = function (value) {
  let picometers = value * 1e10;
  return picometers.toExponential(3);
};
const cmToMi = function (value) {
  let miles = value * 6.2137e-6;
  return miles.toExponential(3);
};
const cmToYd = function (value) {
  let yards = value * 0.0109361;
  return yards.toFixed(3);
};
const cmToFt = function (value) {
  let feet = value * 0.0328084;
  return feet.toFixed(3);
};
const cmToIn = function (value) {
  let inches = value * 0.393701;
  return inches.toFixed(3);
};
