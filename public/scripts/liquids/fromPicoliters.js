//from picoliters to the rest
const plToL = function (value) {
  let liters = value * 1e-12;
  return liters.toExponential(3);
};
const plToMl = function (value) {
  let milliliters = value * 1e-9;
  return milliliters.toExponential(3);
};
const plToµl = function (value) {
  let microliters = value * 1e-6;
  return microliters.toExponential(3);
};
const plToNl = function (value) {
  let nanoliters = value * 0.001;
  return nanoliters.toFixed(3);
};
const plToUsGal = function (value) {
  let usGallon = value * 2.6417e-13;
  return usGallon.toExponential(3);
};
const plToUsQt = function (value) {
  let usQuart = value * 1.0567e-12;
  return usQuart.toExponential(3);
};
const plToUsPt = function (value) {
  let usPint = value * 2.1134e-12;
  return usPint.toExponential(3);
};
const plToUsFlOz = function (value) {
  let usFlOz = value * 3.3814e-11;
  return usFlOz.toExponential(3);
};
const plToImGal = function (value) {
  let imGal = value * 2.1997e-13;
  return imGal.toExponential(3);
};
const plToImQt = function (value) {
  let imQuart = value * 8.7988e-13;
  return imQuart.toExponential(3);
};
const plToImPt = function (value) {
  let imPint = value * 1.7598e-12;
  return imPint.toExponential(3);
};
const plToImFlOz = function (value) {
  let imFlOz = value * 3.5195e-11;
  return imFlOz.toExponential(3);
};
