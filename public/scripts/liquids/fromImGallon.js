//from Imperial Gallon to the rest
const imGalToL = function (value) {
  let liters = value * 4.54609;
  return liters.toFixed(3);
};
const imGalToMl = function (value) {
  let milliliters = value * 4546.09;
  return milliliters.toFixed(3);
};
const imGalToµl = function (value) {
  let microliters = value * 4.54609e6;
  return microliters.toExponential(3);
};
const imGalToNl = function (value) {
  let nanoliters = value * 4.54609e9;
  return nanoliters.toExponential(3);
};
const imGalToPl = function (value) {
  let picoliter = value * 4.54609e12;
  return picoliter.toExponential(3);
};
const imGalToUsGal = function (value) {
  let usGallon = value * 1.20095;
  return usGallon.toFixed(3);
};
const imGalToUsQt = function (value) {
  let usQuart = value * 4.8038;
  return usQuart.toFixed(3);
};
const imGalToUsPt = function (value) {
  let usPt = value * 9.6076;
  return usPt.toFixed(3);
};
const imGalToUsFlOz = function (value) {
  let usFlOz = value * 153.722;
  return usFlOz.toFixed(3);
};
const imGalToImQt = function (value) {
  let imQuart = value * 4;
  return imQuart;
};
const imGalToImPt = function (value) {
  let imPint = value * 8;
  return imPint;
};
const imGalToImFlOz = function (value) {
  let imFlOz = value * 160;
  return imFlOz;
};
