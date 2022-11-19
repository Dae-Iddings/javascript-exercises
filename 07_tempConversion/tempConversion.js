const ftoc = function(fah) {
let cel = (fah - 32) * (5/9);
let roundedCel = Math.round(cel * 10) / 10;
return roundedCel;
};
// npm test tempConversion.spec.js
const ctof = function(cel) {
let fah = (cel * (9 / 5) + 32)
let roundedFah = Math.round(fah * 10) / 10;
return roundedFah;
};
ftoc(32);
ftoc(100);
ftoc(-100);
ctof(0);
ctof(73.2);
ctof(-10);
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
