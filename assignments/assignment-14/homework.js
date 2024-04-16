// ---- 1 ---- //

function calculate(number) {
    var isOdd = calculate % 2 !== 0;
    console.log(isOdd);
}
// calculate(5);

function calculate1(number) {
    var isEven = calculate1 % 2 === 0;
    console.log(isEven);
}
// calculate1(3);

// ---- 2 ---- //
function isIncludes(mainString, targetString) {
    var isIncludesString = mainString.includes(targetString);

    console.log(isIncludesString);
}
// isIncludes("Hello world", "WORLD");
// isIncludes("Look here", "there");

// ---- 3 ---- //

function minValue(number1, number2) {
    if (number1 < number2) {
        console.log(number1);
    } else if (number2 < number1) {
        console.log(number2);
    } else {
        console.log("Both numbers are equal");
    }
}
// minValue(10, 20);
// minValue(30, 30);

// ---- 4 ---- //

function minValue1(number1, number2) {
    if (number1 < number2) {
        console.log(number2);
    } else if (number2 < number1) {
        console.log(number1);
    } else {
        console.log("Both numbers are equal");
    }
}
// minValue1(10, 20);
// minValue1(30, 30);

// ---- 5 ---- //

function power(base, exponent) {
    var result = base ** exponent;
    console.log(result);
}
// power(2, 3);
// power(5, 0);

// ---- 6 ---- //

function grater(num1, num2, num3) {
    if (num1 + num2 + num3 < num1 * num2 * num3) {
        console.log("Numbers are greater");
    } else {
        console.log("Numbers are not greater");
    }
}
// grater(1, 2, 3);

// ---- 7 ---- //
function swapFirstAndLastChars(string) {
    var firstLatterOfString = string[0];
    var middleLattersOfString = string.slice(1, -1);
    var lastLatterOfString = string.slice(-1);
    var result = lastLatterOfString + middleLattersOfString + firstLatterOfString;
    console.log(result);
}
// swapFirstAndLastChars("hello"); //oellh
// swapFirstAndLastChars("abcd"); //dbca

// ---- 8 ---- //
function firstHalf(string) {
    var firstHalfOfString = string.slice(0, 2);
    console.log(firstHalfOfString);
}
// firstHalf("hello"); // "he"
// firstHalf("four"); // "fo"

// ---- 9 ---- //
function getInitials(fullName) {
    var [first, middle, last] = fullName.split(" ");
    var initials = `${first[0].toUpperCase()} ${middle[0].toUpperCase()} ${last[0].toUppercase()}`;
    console.log(initials);
}

getInitials("John Fitzgerald Kennedy");
// getInitials("Martin Luther King");
