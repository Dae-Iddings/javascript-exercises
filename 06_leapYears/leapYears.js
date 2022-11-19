const leapYears = function(year) {
if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) { // if the year is divisible by 4, 100, and 400 return true
    return true
} else if (year % 4  == 0 && year % 100 !== 0) { // if the year is divisible by 4 and not 100 return true
    return true
}else if (year % 4 !== 0) { // if the year is not divisible by 4 return false
    return false 
} else {
    return false;
};
}
leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);
// Do not edit below this line
module.exports = leapYears;
