const ftoc = function(temp) {
  return (Math.round(10*(temp-32)*(5/9)))/10;
};

const ctof = function(temp) {
  return (Math.round(10*(temp*(9/5)+32)))/10;
};


//Cels to Far formula: (temp*(9/5)+32)
//Far to Cels formula: (temp-32)*(5/9)
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
