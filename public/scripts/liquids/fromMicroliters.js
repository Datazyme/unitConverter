//from picoliters to the rest
const µlToL = function (value) {
  let liters = value * 1e-6;
  return liters.toExponential(3);
};
const µlToMl = function (value) {
  let milliliters = value * 0.001;
  return milliliters.toFixed(3);
};
const µlToNl = function (value) {
  let nanoliters = value * 1000;
  return nanoliters;
};
const µlToPl = function (value) {
  let picoliters = value * 1e6;
  return picoliters.toExponential(3);
};
const µlToUsGal = function (value) {
  let usGallon = value * 2.6417e-7;
  return usGallon.toExponential(3);
};
const µlToUsQt = function (value) {
  let usQuart = value * 1.0567e-6;
  return usQuart.toExponential(3);
};
const µlToUsPt = function (value) {
  let usPint = value * 2.1134e-6;
  return usPint.toExponential(3);
};
const µlToUsFlOz = function (value) {
  let usFlOz = value * 3.3814e-5;
  return usFlOz.toExponential(3);
};
const µlToImGal = function (value) {
  let imGal = value * 2.1997e-7;
  return imGal.toExponential(3);
};
const µlToImQt = function (value) {
  let imQuart = value * 8.7988e-7;
  return imQuart.toExponential(3);
};
const µlToImPt = function (value) {
  let imPint = value * 1.7598e-6;
  return imPint.toExponential(3);
};
const µlToImFlOz = function (value) {
  let imFlOz = value * 3.5195e-5;
  return imFlOz.toExponential(3);
};
