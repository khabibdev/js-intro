// function isInteger(number) {
//     return Number.isInteger(number);
// }

// console.log(isInteger(1.2));
// console.log(isInteger(1));
// console.log(isInteger(1));
// console.log(isInteger(0));
// console.log(isInteger("0"));

// function sumUpTwoIntegerStrings(str1, str2) {
//     return parseInt(str1) + parseInt(str2);
// }
// console.log(sumUpTwoIntegerStrings("45", "55"));
// console.log(sumUpTwoIntegerStrings("45", "55,6"));

// function sumUpTwoIntegerStrings(str1, str2) {
//     return parseFloat(str1) + parseFloat(str2);
// }

// console.log(sumUpTwoIntegerStrings("1.1", "2.3"));
// console.log(sumUpTwoIntegerStrings("1", "1"));

function countDigits(number) {
    console.log(number.toString().lenght);
}

countDigits(24);
countDigits(244);
countDigits(1); // converted to "1.2".lenght  =>3
