const number = Math.floor(Math.random() * 1000);
const repeatString = function(string, num) {
let repeatedString = ''
while (num > 0) {
repeatedString +=string
num --
}
return  repeatedString
}
repeatString ('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('hey', number);
repeatString('', 10);
// Do not edit below this line
module.exports = repeatString
