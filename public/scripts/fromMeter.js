//From meters to the rest
const mToKm = function (value) {
  let kilometers = value / 1e3;
  return kilometers;
};
const mToDm = function (value) {
  let decimeters = value * 10;
  return decimeters;
};
const mToCm = function (value) {
  let centimeters = value * 1e2;
  return centimeters;
};
const mToMm = function (value) {
  let millimeters = value * 1e3;
  return millimeters.toExponential(3);
};
const mToµm = function (value) {
  let micrometers = value * 1e6;
  return micrometers.toExponential(3);
};
const mToNm = function (value) {
  let nanometers = value * 1e9;
  return nanometers.toExponential(3);
};
const mToPm = function (value) {
  let picometers = value * 1e12;
  return picometers.toExponential(3);
};
const mToMi = function (value) {
  let miles = value * 0.000621;
  return miles.toExponential(3);
};
const mToYd = function (value) {
  let yards = value * 1.09361;
  return yards.toFixed(3);
};
const mToFt = function (value) {
  let feet = value * 3.28084;
  return feet.toFixed(3);
};
const mToIn = function (value) {
  let inches = value * 39.3701;
  return inches.toFixed(3);
};
