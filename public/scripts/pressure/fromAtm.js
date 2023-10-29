//from Standard Atmosphere to the rest
const atmToPa = function (value) {
  let pa = value * 101325;
  return pa.toExponential(3);
};

const atmToKpa = function (value) {
  let kpa = value * 101.325;
  return kpa.toFixed(3);
};

const atmToBar = function (value) {
  let bar = value * 1.01325;
  return bar.toFixed(3);
};

const atmToTorr = function (value) {
  let torr = value * 760;
  return torr;
};

const atmToPsi = function (value) {
  let psi = value * 14.6959;
  return psi.toFixed(3);
};

const atmToInHg = function (value) {
  let inHg = value * 29.9213;
  return inHg.toFixed(3);
};
