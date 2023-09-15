//From yards to the rest
const ydToKm = function (value) {
  let kilometers = value * 9.144e-4;
  return kilometers.toExponential(3);
};
const ydToM = function (value) {
  let meters = value * 0.9144;
  return meters.toFixed(3);
};
const ydToDm = function (value) {
  let decimeters = value * 9.144;
  return decimeters.toFixed(3);
};
const ydToCm = function (value) {
  let centimeters = value * 91.44;
  return centimeters.toFixed(3);
};
const ydToMm = function (value) {
  let millimeters = value * 914.4;
  return millimeters.toFixed(3);
};
const ydToµm = function (value) {
  let micrometers = value * 9.144e5;
  return micrometers.toExponential(3);
};
const ydToNm = function (value) {
  let nanometers = value * 9.144e8;
  return nanometers.toExponential(3);
};
const ydToPm = function (value) {
  let picometers = value * 9.144e11;
  return picometers.toExponential(3);
};
const ydToMi = function (value) {
  let miles = value * 5.68182e-4;
  return miles.toExponential(3);
};
const ydToFt = function (value) {
  let feet = value * 3;
  return feet.toFixed(3);
};
const ydToIn = function (value) {
  let inches = value * 36;
  return inches.toFixed(3);
};
