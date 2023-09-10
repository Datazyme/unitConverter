//From decimeters to the rest
const dmToKm = function (value) {
  let kilometers = value / 1e4;
  return kilometers.toExponential(3);
};
const dmToM = function (value) {
  let decimeters = value / 10;
  return decimeters;
};
const dmToCm = function (value) {
  let centimeters = value * 10;
  return centimeters;
};
const dmToMm = function (value) {
  let millimeters = value * 100;
  return millimeters.toExponential(3);
};
const dmToµm = function (value) {
  let micrometers = value * 1e5;
  return micrometers.toExponential(3);
};
const dmToNm = function (value) {
  let nanometers = value * 1e8;
  return nanometers.toExponential(3);
};
const dmToPm = function (value) {
  let picometers = value * 1e11;
  return picometers.toExponential(3);
};
const dmToMi = function (value) {
  let miles = value * 6.21371e-5;
  return miles.toExponential(3);
};
const dmToYd = function (value) {
  let yards = value * 0.109361;
  return yards.toFixed(3);
};
const dmToFt = function (value) {
  let feet = value * 0.328084;
  return feet.toFixed(3);
};
const dmToIn = function (value) {
  let inches = value * 3.93701;
  return inches.toFixed(3);
};
