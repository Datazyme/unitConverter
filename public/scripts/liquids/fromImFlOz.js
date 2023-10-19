//from Imperial Fluid Oz. to the rest
const imFlOzToL = function (value) {
  let liters = value * 0.0284131;
  return liters.toFixed(3);
};
const imFlOzToMl = function (value) {
  let milliliters = value * 28.4131;
  return milliliters.toFixed(3);
};
const imFlOzToµl = function (value) {
  let microliters = value * 28413.1;
  return microliters.toExponential(3);
};
const imFlOzToNl = function (value) {
  let nanoliters = value * 2.841e7;
  return nanoliters.toExponential(3);
};
const imFlOzToPl = function (value) {
  let picoliter = value * 2.841e10;
  return picoliter.toExponential(3);
};
const imFlOzToUsGal = function (value) {
  let usGallon = value * 0.00750594;
  return usGallon.toExponential(3);
};
const imFlOzToUsQt = function (value) {
  let usQt = value * 0.0300237;
  return usQt.toFixed(3);
};
const imFlOzToUsPt = function (value) {
  let usPt = value * 0.0600475;
  return usPt.toFixed(3);
};
const imFlOzToUsFlOz = function (value) {
  let usFlOz = value * 0.9607;
  return usFlOz.toFixed(3);
};
const imFlOzToImGal = function (value) {
  let imGal = value * 0.00625;
  return imGal.toExponential(3);
};
const imFlOzToImQt = function (value) {
  let imQt = value * 0.025;
  return imQt.toFixed(3);
};
const imFlOzToImPt = function (value) {
  let imPt = value * 0.05;
  return imPt.toFixed(3);
};
