//From nanometers to the rest
const nmToKm = function (value) {
  let kilometers = value * 1e-12;
  return kilometers.toExponential(3);
};
const nmToM = function (value) {
  let meters = value * 1e-9;
  return meters.toExponential(3);
};
const nmToDm = function (value) {
  let decimeters = value * 1e-8;
  return decimeters.toExponential(3);
};
const nmToCm = function (value) {
  let centimeters = value * 1e-7;
  return centimeters.toExponential(3);
};
const nmToMm = function (value) {
  let millimeters = value * 1e-6;
  return millimeters;
};
const nmToµm = function (value) {
  let micrometers = value * 0.001;
  return micrometers;
};
const nmToPm = function (value) {
  let picometers = value * 1000;
  return picometers.toExponential(3);
};
const nmToMi = function (value) {
  let miles = value * 6.2137e-13;
  return miles.toExponential(3);
};
const nmToYd = function (value) {
  let yards = value * 1.09361e-9;
  return yards.toExponential(3);
};
const nmToFt = function (value) {
  let feet = value * 3.28084e-9;
  return feet.toExponential(3);
};
const nmToIn = function (value) {
  let inches = value * 3.93701e-8;
  return inches.toExponential(3);
};
