//from inches Hg to the rest
const hgToPa = function (value) {
  let pa = value * 3386.39;
  return pa.toExponential(3);
};

const hgToKpa = function (value) {
  let kpa = value * 3.38639;
  return kpa.toFixed(3);
};

const hgToBar = function (value) {
  let bar = value * 0.0338639;
  return bar.toFixed(3);
};

const hgToTorr = function (value) {
  let torr = value * 25.4;
  return torr;
};

const hgToPsi = function (value) {
  let psi = value * 0.491154;
  return psi.toFixed(3);
};

const hgToAtm = function (value) {
  let atm = value * 0.0334211;
  return atm.toFixed(3);
};
