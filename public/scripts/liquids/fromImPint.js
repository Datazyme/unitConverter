//from Imperial Pint to the rest
const imPtToL = function (value) {
  let liters = value * 0.568261;
  return liters.toFixed(3);
};
const imPtToMl = function (value) {
  let milliliters = value * 568.261;
  return milliliters.toFixed(3);
};
const imPtToµl = function (value) {
  let microliters = value * 568261;
  return microliters.toExponential(3);
};
const imPtToNl = function (value) {
  let nanoliters = value * 5.683e8;
  return nanoliters.toExponential(3);
};
const imPtToPl = function (value) {
  let picoliter = value * 5.683e11;
  return picoliter.toExponential(3);
};
const imPtToUsGal = function (value) {
  let usGallon = value * 0.50119;
  return usGallon.toFixed(3);
};
const imPtToUsQt = function (value) {
  let usQt = value * 0.600475;
  return usQt.toFixed(3);
};
const imPtToUsPt = function (value) {
  let usPt = value * 1.20095;
  return usPt.toFixed(3);
};
const imPtToUsFlOz = function (value) {
  let usFlOz = value * 19.2152;
  return usFlOz.toFixed(3);
};
const imPtToImGal = function (value) {
  let imGal = value * 0.125;
  return imGal;
};
const imPtToImQt = function (value) {
  let imQt = value * 0.5;
  return imQt;
};
const imPtToImFlOz = function (value) {
  let imFlOz = value * 20;
  return imFlOz;
};
