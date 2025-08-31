//From feet to the rest
const inToKm = function (value) {
  let kilometers = value * 2.54e-5;
  return kilometers.toExponential(3);
};
const inToM = function (value) {
  let meters = value * 0.0254;
  return meters.toFixed(3);
};
const inToDm = function (value) {
  let decimeters = value * 0.254;
  return decimeters.toFixed(3);
};
const inToCm = function (value) {
  let centimeters = value * 2.54;
  return centimeters.toFixed(3);
};
const inToMm = function (value) {
  let millimeters = value * 25.4;
  return millimeters.toFixed(3);
};
const inToµm = function (value) {
  let micrometers = value * 25400;
  return micrometers.toExponential(3);
};
const inToNm = function (value) {
  let nanometers = value * 2.54e7;
  return nanometers.toExponential(3);
};
const inToPm = function (value) {
  let picometers = value * 2.54e10;
  return picometers.toExponential(3);
};
const inToMi = function (value) {
  let miles = value * 1.5783e5;
  return miles.toExponential(3);
};
const inToYd = function (value) {
  let yards = value * 0.0277;
  return yards.toFixed(3);
};
