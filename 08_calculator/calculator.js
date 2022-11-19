const add = function(a, b) {
	return a + b
};
add(0, 0);
add(2,2);
add(2,6);
const subtract = function(c, d) {
	return c - d
};
subtract(10,4);
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
const sum = function(obj) {
  if (isEmpty(obj) === true) {
    return 0
  } else {
  let total = 0;
  for (let key in obj) {
    total += obj[key];
  }
  return total;
}
};
sum([]);
sum([7]);
sum([7, 11]);
sum([1,3,5,7,9]);

const multiply = function(obj) {
let total = 1;
for (let key in obj) {
  total *= obj[key];
}
return total;
};
multiply([2, 4]);
multiply([2,4,6,8,10,12,14]);
const power = function(x, y) {
	let total = 1;
  for (let i = 1; i <= y; i++) {
    total *= x;
  }
  return total;
};
power(4, 3);
const factorial = function(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) { 
    total *= i;
  }
  return total;
};
factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
