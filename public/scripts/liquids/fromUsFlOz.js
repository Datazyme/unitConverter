//from US fluid oz to the rest
const usFlOzToL = function (value) {
  let liters = value * 0.0295735;
  return liters.toFixed(3);
};
const usFlOzToMl = function (value) {
  let milliliters = value * 29.5735;
  return milliliters.toFixed(3);
};
const usFlOzToµl = function (value) {
  let microliters = value * 29573.5;
  return microliters.toExponential(3);
};
const usFlOzToNl = function (value) {
  let nanoliters = value * 2.957e7;
  return nanoliters.toExponential(3);
};
const usFlOzToPl = function (value) {
  let picoliter = value * 2.957e10;
  return picoliter.toExponential(3);
};
const usFlOzToUsGal = function (value) {
  let usGallon = value * 0.0078125;
  return usGallon.toExponential(3);
};
const usFlOzToUsQt = function (value) {
  let usQuart = value * 0.03125;
  return usQuart.toFixed(3);
};
const usFlOzToUsPt = function (value) {
  let usPt = value * 0.0625;
  return usPt.toFixed(3);
};
const usFlOzToImGal = function (value) {
  let imGal = value * 0.00650527;
  return imGal.toFixed(3);
};
const usFlOzToImQt = function (value) {
  let imQuart = value * 0.0260211;
  return imQuart.toFixed(3);
};
const usFlOzToImPt = function (value) {
  let imPint = value * 0.0520421;
  return imPint.toFixed(3);
};
const usFlOzToImFlOz = function (value) {
  let imFlOz = value * 1.0484;
  return imFlOz.toFixed(3);
};
