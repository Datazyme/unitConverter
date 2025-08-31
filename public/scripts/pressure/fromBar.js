//from Bar to the rest
const barToPa = function (value) {
  let pa = value * 100000;
  return pa.toExponential(3);
};

const barToKpa = function (value) {
  let kpa = value * 100;
  return kpa;
};

const barToTorr = function (value) {
  let torr = value * 750.062;
  return torr.toFixed(3);
};

const barToPsi = function (value) {
  let psi = value * 14.5038;
  return psi.toFixed(3);
};

const barToAtm = function (value) {
  let atm = value * 0.986923;
  return atm.toFixed(3);
};

const barToInHg = function (value) {
  let inHg = value * 29.53;
  return inHg.toFixed(3);
};
