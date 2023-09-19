const lToMl = function (value) {
  let milliliters = value * 1000;
  return milliliters;
};
const lToµl = function (value) {
  let microliters = value * 1e6;
  return microliters.toExponential(3);
};
const lToNl = function (value) {
  let nanoliters = value * 1e9;
  return nanoliters.toExponential(3);
};
const lToPl = function (value) {
  let picoliters = value * 1e12;
  return picoliters.toExponential(3);
};
const lToUsGal = function (value) {
  let usGallon = value * 0.264172;
  return usGallon.toFixed(3);
};
const lToUsQt = function (value) {
  let usQuart = value * 1.05669;
  return usQuart.toFixed(3);
};
const lToUsPt = function (value) {
  let usPint = value * 2.11338;
  return usPint.toFixed(3);
};
const lToUsFlOz = function (value) {
  let usFlOz = value * 33.814;
  return usFlOz.toFixed(3);
};
const lToImGal = function (value) {
  let imGal = value * 0.219969;
  return imGal.toFixed(3);
};
const lToImQt = function (value) {
  let imQuart = value * 0.879877;
  return imQuart.toFixed(3);
};
const lToImPt = function (value) {
  let imPint = value * 1.75975;
  return imPint.toFixed(3);
};
const lToImFlOz = function (value) {
  let imFlOz = value * 35.1951;
  return imFlOz.toFixed(3);
};
