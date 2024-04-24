//------ 1 ------/;

function sumStrings(stringInt1, stringInt2) {
    return (sums = parseInt(stringInt1) + parseInt(stringInt2));
}
// console.log(sumStrings("123", "456"));
// console.log(sumStrings("101", "899"));
// console.log(sumStrings("333", "666"));

//------ 2 ------/;

function sumDigits(stringInt) {
    var sums =
        parseInt(stringInt[0]) +
        parseInt(stringInt[1]) +
        parseInt(stringInt[2]) +
        parseInt(stringInt[3]);
    if (stringInt.length === 4) {
        return sums;
    }
}
// console.log(sumDigits("1234"));
// console.log(sumDigits("9009"));
// console.log(sumDigits("1111"));

//------ 3 ------/;
function multiplyRandomPositions(stringInt) {
    var random1 = Math.floor(Math.random() * stringInt.length);
    var random2 = Math.floor(Math.random() * stringInt.length);
    var result = stringInt[random1] * stringInt[random2];
    return result;
}

// console.log(multiplyRandomPositions("12345"));
// console.log(multiplyRandomPositions("67890"));
// console.log(multiplyRandomPositions("98765"));

//------ 4 ------/;

function multiplyHalves(stringInt) {
    var firstHalf = stringInt.slice(0, Math.floor(stringInt.length / 2));
    var secondHalf = stringInt.slice(Math.floor(stringInt.length / 2));
    var result = parseInt(firstHalf) * parseInt(secondHalf);
    return result;
}

// console.log(multiplyHalves("1234"));
// console.log(multiplyHalves("56789"));
// console.log(multiplyHalves("24680"));

//------ 5 ------/;

function isOddStringInteger(stringInt) {
    var number = parseInt(stringInt);
    console.log(number % 2 !== 0);
}

// isOddStringInteger("123"); // Outputs: true
// isOddStringInteger("2468"); // Outputs: false
// isOddStringInteger("1357"); // Outputs: true

//------ 6 ------/;

function roundAndConvert(floatingPointNumber) {
    var number = Math.round(floatingPointNumber);
    var string = number.toString();
    return string;
}
// console.log(roundAndConvert(3.56)); // Outputs: "4"
// console.log(roundAndConvert(7.1)); // Outputs: "7"
// console.log(roundAndConvert(5.499)); // Outputs: "5"

//------ 7 ------/;

function formatCurrency(floatingPointNumber) {
    var formatAmount = floatingPointNumber.toFixed(2);
    var result = "$" + formatAmount;
    return result.toString();
}
// console.log(formatCurrency(1500)); // Outputs: "$1500.00"
// console.log(formatCurrency(15.378)); // Outputs: "$15.38"
// console.log(formatCurrency(0.99)); // Outputs: "$0.99"

//------ 8 ------/;

function extractDecimal(number) {
    var string = number.toString();
    var result = string.slice(string.indexOf("."));
    if (number % 1 !== 0) {
        return result;
    } else {
        return 0;
    }
}
// console.log(extractDecimal(123.456)); // Outputs: ".456"
// console.log(extractDecimal(100)); // Outputs: "0"
// console.log(extractDecimal(89.0)); // Outputs: "0"

//------ 9 ------/;

function integerToString(num) {
    var convertToStr = num.toString();
    return convertToStr;
}
// console.log(integerToString(123)); // Outputs: "123"
// console.log(integerToString(-456)); // Outputs: "-456"
// console.log(integerToString(7890)); // Outputs: "7890"

//------ 10 ------/;

function displayAsPercentage(number) {
    var result = (number * 100).toFixed(2);
    return (result + "%").toString();
}
displayAsPercentage(0.1234);

//------ 11 ------/;

function convertToFahrenheit(number) {
    var fahrenheitTemp = number * (9 / 5) + 32;
    return fahrenheitTemp.toString() + "°" + "F";
}

//------ 12 ------/;

function addOrdinalSuffix(number) {
    var numberToString = number.toString();
    if (number % 10 === 1) {
        return numberToString + "st";
    } else if (number % 10 === 2) {
        return numberToString + "nd";
    } else if (number % 10 === 3) {
        return numberToString + "rd";
    } else {
        return numberToString + "th";
    }
}

//------ 13 ------/;

function addTimeSuffix(hour) {
    if (hour === 0) {
        return "12AM"; // Special case for midnight (hour 0)
    } else if (hour < 12) {
        return hour + "AM"; // Append "AM" for hours before 12
    } else if (hour === 12) {
        return "12PM"; // Special case for noon (hour 12)
    } else {
        return hour - 12 + "PM"; // Subtract 12 and append "PM" for hours from 13 to 23
    }
}
// console.log(addTimeSuffix(3)); // Outputs: "3AM"
// console.log(addTimeSuffix(15)); // Outputs: "3PM"
// console.log(addTimeSuffix(0)); // Outputs: "12AM"
// console.log(addTimeSuffix(12)); // Outputs: "12PM"
//------ 14 ------/;

function formatAsPhone(number) {
    var numberToString = number.toString();
    var first3Number = numberToString.slice(0, 3);
    var second3Number = numberToString.slice(3, 6);
    var last4Number = numberToString.slice(6);
    return `(${first3Number}) ${second3Number}-${last4Number}`;
}

// console.log(formatAsPhone(1234567890)); // Outputs: "(123) 456-7890"
// console.log(formatAsPhone(9876543210)); // Outputs: "(987) 654-3210"

//------ 15 ------/;

function convertToCelsius(num) {
    var convertToCelsiusNum = (num - 32) * (5 / 9);
    var roundedCelsius = Math.round(convertToCelsiusNum);
    return roundedCelsius.toString() + "." + "0" + "°" + "C";
}

//°C = (°F − 32) x 5/9
// console.log(convertToCelsius(32)); // Outputs: "0.0°C"
// console.log(convertToCelsius(-4)); // Outputs: "-20.0°C"
// console.log(convertToCelsius(82.4)); // Outputs: "28.0°C"
