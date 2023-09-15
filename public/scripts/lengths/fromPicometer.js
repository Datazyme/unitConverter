//From picometers to the rest
const pmToKm = function (value) {
  let kilometers = value * 1e-15;
  return kilometers.toExponential(3);
};
const pmToM = function (value) {
  let meters = value * 1e-12;
  return meters.toExponential(3);
};
const pmToDm = function (value) {
  let decimeters = value * 1e-11;
  return decimeters.toExponential(3);
};
const pmToCm = function (value) {
  let centimeters = value * 1e-10;
  return centimeters.toExponential(3);
};
const pmToMm = function (value) {
  let millimeters = value * 1e-9;
  return millimeters.toExponential(3);
};
const pmToµm = function (value) {
  let micrometers = value * 1e-6;
  return micrometers.toExponential(3);
};
const pmToNm = function (value) {
  let nanometers = value * 0.001;
  return nanometers.toExponential(3);
};
const pmToMi = function (value) {
  let miles = value * 6.2137e-16;
  return miles.toExponential(3);
};
const pmToYd = function (value) {
  let yards = value * 1.09361e-12;
  return yards.toExponential(3);
};
const pmToFt = function (value) {
  let feet = value * 3.28084e-12;
  return feet.toExponential(3);
};
const pmToIn = function (value) {
  let inches = value * 3.93701e-11;
  return inches.toExponential(3);
};
