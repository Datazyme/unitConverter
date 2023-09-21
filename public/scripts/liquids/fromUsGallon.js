//from US gallons to the rest
const usGalToL = function (value) {
  let liters = value * 3.78541;
  return liters.toFixed(3);
};
const usGalToMl = function (value) {
  let milliliters = value * 3785.41;
  return milliliters.toFixed(3);
};
const usGalToµl = function (value) {
  let microliters = value * 3.785e6;
  return microliters.toExponential(3);
};
const usGalToNl = function (value) {
  let nanoliters = value * 3.785e9;
  return nanoliters.toExponential(3);
};
const usGalToPl = function (value) {
  let picoliter = value * 3.785e12;
  return picoliter.toExponential(3);
};
const usGalToUsQt = function (value) {
  let usQuart = value * 4;
  return usQuart;
};
const usGalToUsPt = function (value) {
  let usPint = value * 8;
  return usPint;
};
const usGalToUsFlOz = function (value) {
  let usFlOz = value * 128;
  return usFlOz;
};
const usGalToImGal = function (value) {
  let imGal = value * 0.832674;
  return imGal.toFixed(3);
};
const usGalToImQt = function (value) {
  let imQuart = value * 3.3307;
  return imQuart.toFixed(3);
};
const usGalToImPt = function (value) {
  let imPint = value * 6.66139;
  return imPint.toFixed(3);
};
const usGalToImFlOz = function (value) {
  let imFlOz = value * 133.228;
  return imFlOz.toFixed(3);
};
