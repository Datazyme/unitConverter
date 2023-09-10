//From Kilometers to the rest
const kmToM = function (value) {
  let meters = value * 1e3;
  return meters;
};
const kmToDm = function (value) {
  let decimeters = value * 1e4;
  return decimeters;
};
const kmToCm = function (value) {
  let centimeters = value * 1e5;
  return centimeters.toExponential(3);
};
const kmToMm = function (value) {
  let millimeters = value * 1e6;
  return millimeters.toExponential(3);
};
const kmToµm = function (value) {
  let micrometers = value * 1e9;
  return micrometers.toExponential(3);
};
const kmToNm = function (value) {
  let nanometers = value * 1e12;
  return nanometers.toExponential(3);
};
const kmToPm = function (value) {
  let picometers = value * 1e15;
  return picometers.toExponential(3);
};
const kmToMi = function (value) {
  let miles = value * 0.62137;
  return miles.toFixed(3);
};
const kmToYd = function (value) {
  let yards = value * 1093.61;
  return yards.toFixed(3);
};
const kmToFt = function (value) {
  let feet = value * 3280.839895;
  return feet.toExponential(3);
};
const kmToIn = function (value) {
  let inches = value * 39370.07874;
  return inches.toExponential(3);
};
