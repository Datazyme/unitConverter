//from US gallons to the rest
const usQtToL = function (value) {
  let liters = value * 0.945363;
  return liters.toFixed(3);
};
const usQtToMl = function (value) {
  let milliliters = value * 946.353;
  return milliliters.toFixed(3);
};
const usQtToµl = function (value) {
  let microliters = value * 946353;
  return microliters.toExponential(3);
};
const usQtToNl = function (value) {
  let nanoliters = value * 9.464e8;
  return nanoliters.toExponential(3);
};
const usQtToPl = function (value) {
  let picoliter = value * 9.464e11;
  return picoliter.toExponential(3);
};
const usQtToUsGal = function (value) {
  let usGallon = value * 0.25;
  return usGallon.toFixed(3);
};
const usQtToUsPt = function (value) {
  let usPint = value * 2;
  return usPint;
};
const usQtToUsFlOz = function (value) {
  let usFlOz = value * 32;
  return usFlOz;
};
const usQtToImGal = function (value) {
  let imGal = value * 0.208169;
  return imGal.toFixed(3);
};
const usQtToImQt = function (value) {
  let imQuart = value * 0.832674;
  return imQuart.toFixed(3);
};
const usQtToImPt = function (value) {
  let imPint = value * 1.66535;
  return imPint.toFixed(3);
};
const usQtToImFlOz = function (value) {
  let imFlOz = value * 33.307;
  return imFlOz.toFixed(3);
};
