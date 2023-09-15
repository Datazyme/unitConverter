//From miles to the rest
const miToKm = function (value) {
  let kilometers = value * 1.60934;
  return kilometers.toFixed(3);
};
const miToM = function (value) {
  let meters = value * 1609.34;
  return meters.toFixed(3);
};
const miToDm = function (value) {
  let decimeters = value * 16093.4;
  return decimeters.toExponential(3);
};
const miToCm = function (value) {
  let centimeters = value * 160934;
  return centimeters.toExponential(3);
};
const miToMm = function (value) {
  let millimeters = value * 1.609e6;
  return millimeters.toExponential(3);
};
const miToµm = function (value) {
  let micrometers = value * 1e9;
  return micrometers.toExponential(3);
};
const miToNm = function (value) {
  let nanometers = value * 1.609e12;
  return nanometers.toExponential(3);
};
const miToPm = function (value) {
  let picometers = value * 1.609e15;
  return picometers.toExponential(3);
};
const miToYd = function (value) {
  let yards = value * 1760;
  return yards.toFixed(3);
};
const miToFt = function (value) {
  let feet = value * 5280;
  return feet.toFixed(3);
};
const miToIn = function (value) {
  let inches = value * 63360;
  return inches.toFixed(3);
};
