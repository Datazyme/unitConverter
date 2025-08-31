//From feet to the rest
const ftToKm = function (value) {
  let kilometers = value * 3.048e-4;
  return kilometers.toExponential(3);
};
const ftToM = function (value) {
  let meters = value * 0.3048;
  return meters.toFixed(3);
};
const ftToDm = function (value) {
  let decimeters = value * 3.048;
  return decimeters.toFixed(3);
};
const ftToCm = function (value) {
  let centimeters = value * 30.48;
  return centimeters.toFixed(3);
};
const ftToMm = function (value) {
  let millimeters = value * 304.8;
  return millimeters.toFixed(3);
};
const ftToµm = function (value) {
  let micrometers = value * 304800;
  return micrometers.toExponential(3);
};
const ftToNm = function (value) {
  let nanometers = value * 3.048e8;
  return nanometers.toExponential(3);
};
const ftToPm = function (value) {
  let picometers = value * 3.048e11;
  return picometers.toExponential(3);
};
const ftToMi = function (value) {
  let miles = value * 1.89394e-4;
  return miles.toExponential(3);
};
const ftToYd = function (value) {
  let yards = value * 0.333;
  return yards.toFixed(3);
};
const ftToIn = function (value) {
  let inches = value * 12;
  return inches.toFixed(3);
};
