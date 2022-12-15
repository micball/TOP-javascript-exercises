// maximum 2 inputs
const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let sumAll = arr.reduce((total, index) => {
    return total + index;
  },
  0 )
  return sumAll;
};

const multiply = function(arr) {
  return arr.reduce((total, nextNum) =>{
    return total*nextNum;
  }, 1);
};

const power = function() {
	return Math.pow(arguments[0], arguments[1]);
};

const factorial = function(num) {
	let arr = [];
  for (let i = num; i > 0; i--) {
    arr.push(i);
  }
  return arr.reduce((total, nextNum) =>{
    return total*nextNum;
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
