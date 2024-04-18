/* ---- isOdd ---- */
function isOdd(number) {
    var result = number % 2 !== 0;
    console.log(result);
}

/* ---- isEven ---- */
function isEven(number) {
    var result = number % 2 === 0;
    console.log(result);
}

/* ---- isIncludes ---- */
function isIncludes(mainString, targetString) {
    var lowerMainString = mainString.toLowerCase();
    var lowerTargetString = targetString.toLowerCase();
    var result = lowerMainString.indexOf(lowerTargetString) !== -1;
    console.log(result);
}

/* ---- minValue ---- */
function minValue(number1, number2) {
    if (number1 === number2) {
        console.log(number1 + ", " + number2);
    } else if (number1 < number2) {
        console.log(number1);
    } else {
        console.log(number2);
    }
}

/* ---- maxValue ---- */
function maxValue(number1, number2) {
    if (number1 === number2) {
        console.log(number1 + ", " + number2);
    } else if (number1 > number2) {
        console.log(number1);
    } else {
        console.log(number2);
    }
}

/* ---- power ---- */
function power(base, exponent) {
    var result = base ** exponent;
    console.log(result);
}

/* ---- isProductGreater ---- */
function isProductGreater(num1, num2, num3) {
    var product = num1 * num2 * num3;
    var sum = num1 + num2 + num3;
    console.log(product > sum);
}

/* ---- swapFirstAndLastChars ---- */
function swapFirstAndLastChars(string) {
    if (string.length > 1) {
        var firstChar = string[0];
        var lastChar = string[string.length - 1];
        var middle = string.slice(1, string.length - 1);
        var newString = lastChar + middle + firstChar;
        console.log(newString);
    } else {
        console.log(string); // Handles case where string is only one character or empty
    }
}

/* ---- firstHalf ---- */
function firstHalf(string) {
    var halfIndex = Math.floor(string.length / 2);
    console.log(string.slice(0, halfIndex));
}

/* ---- getInitials ---- */
function getInitials(fullName) {
    var firstSpaceIndex = fullName.indexOf(" ");
    var lastSpaceIndex = fullName.lastIndexOf(" ");
    var initial1 = fullName[0];
    var initial2 = fullName[firstSpaceIndex + 1];
    var initial3 = fullName[lastSpaceIndex + 1];
    var initials = initial1 + initial2 + initial3;
    console.log(initials.toUpperCase());
}
