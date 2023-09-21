//From nanometers to the rest
const nlToL = function (value) {
  let liters = value * 1e-9;
  return liters.toExponential(3);
};
const nlToMl = function (value) {
  let milliliters = value * 1e-6;
  return milliliters.toExponential(3);
};
const nlToµl = function (value) {
  let microliters = value * 0.001;
  return microliters;
};
const nlToPl = function (value) {
  let picoliters = value * 1000;
  return picoliters;
};
const nlToUsGal = function (value) {
  let usGallon = value * 2.6417e-10;
  return usGallon.toExponential(3);
};
const nlToUsQt = function (value) {
  let usQuart = value * 1.0567e-9;
  return usQuart.toExponential(3);
};
const nlToUsPt = function (value) {
  let usPint = value * 2.1134e-9;
  return usPint.toExponential(3);
};
const nlToUsFlOz = function (value) {
  let usFlOz = value * 3.3814e-8;
  return usFlOz.toExponential(3);
};
const nlToImGal = function (value) {
  let imGal = value * 2.1997e-10;
  return imGal.toExponential(3);
};
const nlToImQt = function (value) {
  let imQuart = value * 8.7988e-10;
  return imQuart.toExponential(3);
};
const nlToImPt = function (value) {
  let imPint = value * 1.7598e-9;
  return imPint.toExponential(3);
};
const nlToImFlOz = function (value) {
  let imFlOz = value * 3.5195e-8;
  return imFlOz.toExponential(3);
};
