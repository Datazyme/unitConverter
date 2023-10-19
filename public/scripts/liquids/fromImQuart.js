//from Imperial Quart to the rest
const imQtToL = function (value) {
  let liters = value * 1.13652;
  return liters.toFixed(3);
};
const imQtToMl = function (value) {
  let milliliters = value * 1136.52;
  return milliliters.toFixed(3);
};
const imQtToµl = function (value) {
  let microliters = value * 1.137e6;
  return microliters.toExponential(3);
};
const imQtToNl = function (value) {
  let nanoliters = value * 1.137e9;
  return nanoliters.toExponential(3);
};
const imQtToPl = function (value) {
  let picoliter = value * 1.137e12;
  return picoliter.toExponential(3);
};
const imQtToUsGal = function (value) {
  let usGallon = value * 0.300237;
  return usGallon.toFixed(3);
};
const imQtToUsQt = function (value) {
  let usQuart = value * 1.20095;
  return usQuart.toFixed(3);
};
const imQtToUsPt = function (value) {
  let usPt = value * 2.4019;
  return usPt.toFixed(3);
};
const imQtToUsFlOz = function (value) {
  let usFlOz = value * 38.4304;
  return usFlOz.toFixed(3);
};
const imQtToImGal = function (value) {
  let imGal = value * 0.25;
  return imGal;
};
const imQtToImPt = function (value) {
  let imPint = value * 2;
  return imPint;
};
const imQtToImFlOz = function (value) {
  let imFlOz = value * 40;
  return imFlOz;
};
