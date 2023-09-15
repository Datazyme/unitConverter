//From micrometers to the rest
const µmToKm = function (value) {
  let kilometers = value * 1e-9;
  return kilometers.toExponential(3);
};
const µmToM = function (value) {
  let meters = value * 1e-6;
  return meters.toExponential(3);
};
const µmToDm = function (value) {
  let decimeters = value * 1e-5;
  return decimeters.toExponential(3);
};
const µmToCm = function (value) {
  let centimeters = value * 1e-4;
  return centimeters.toExponential(3);
};
const µmToMm = function (value) {
  let millimeters = value * 0.001;
  return millimeters;
};
const µmToNm = function (value) {
  let nanometers = value * 1000;
  return nanometers;
};
const µmToPm = function (value) {
  let picometers = value * 1e6;
  return picometers.toExponential(3);
};
const µmToMi = function (value) {
  let miles = value * 6.2137e-10;
  return miles.toExponential(3);
};
const µmToYd = function (value) {
  let yards = value * 1.09361e-6;
  return yards.toExponential(3);
};
const µmToFt = function (value) {
  let feet = value * 3.28084e-6;
  return feet.toExponential(3);
};
const µmToIn = function (value) {
  let inches = value * 3.93701e-5;
  return inches.toExponential(3);
};
