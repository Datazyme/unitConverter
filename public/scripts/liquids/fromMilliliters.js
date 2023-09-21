//from milliliters to the rest
const mlToL = function (value) {
  let liters = value * 0.001;
  return liters;
};
const mlToµl = function (value) {
  let microliters = value * 1000;
  return microliters;
};
const mlToNl = function (value) {
  let nanoliters = value * 1e6;
  return nanoliters.toExponential(3);
};
const mlToPl = function (value) {
  let picoliters = value * 1e9;
  return picoliters.toExponential(3);
};
const mlToUsGal = function (value) {
  let usGallon = value * 0.000264172;
  return usGallon.toExponential(3);
};
const mlToUsQt = function (value) {
  let usQuart = value * 0.00105669;
  return usQuart.toExponential(3);
};
const mlToUsPt = function (value) {
  let usPint = value * 0.00211338;
  return usPint.toExponential(3);
};
const mlToUsFlOz = function (value) {
  let usFlOz = value * 0.033814;
  return usFlOz.toFixed(3);
};
const mlToImGal = function (value) {
  let imGal = value * 0.000219969;
  return imGal.toExponential(3);
};
const mlToImQt = function (value) {
  let imQuart = value * 0.000879877;
  return imQuart.toExponential(3);
};
const mlToImPt = function (value) {
  let imPint = value * 0.00175975;
  return imPint.toExponential(3);
};
const mlToImFlOz = function (value) {
  let imFlOz = value * 0.0351951;
  return imFlOz.toFixed(3);
};
