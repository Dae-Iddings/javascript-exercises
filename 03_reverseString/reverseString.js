const reverseString = function(string) {
const myArray = string.split('');
const revesedArray = myArray.reverse();
const newString = revesedArray.toString();
const revesedString = newString.replace (/,/g, '');
return revesedString;
};
reverseString('Hello')
reverseString('hello there')
reverseString('123! abc!')
reverseString('')
// Do not edit below this line
module.exports = reverseString;
