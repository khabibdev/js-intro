// ---- 1 ---- //
function sumUp(number1, number2, number3, number4, number5) {
    var sum = 0;
    if (number1 % 2 === 0) {
        return (sum += number1);
    }
    if (number2 % 2 === 0) {
        return (sum += number2);
    }
    if (number3 % 2 === 0) {
        return (sum += number3);
    }
    if (number4 % 2 === 0) {
        return (sum += number4);
    }
    if (number5 % 2 === 0) {
        return (sum += number5);
    }
    return sum;
}

// sumUp(2, 4, 5, 7, 8); // Outputs: 14
// sumUp(1, 3, 5, 7, 9); // Outputs: 0
// sumUp(2, 2, 2, 2, 2); // Outputs: 10

// ---- 2 ---- //

function max(num1, num2, num3) {
    var maxNum = num1;
    if (num2 > maxNum) {
        console.log(num2);
    } else if (num3 > maxNum) {
        console.log(num3);
    } else {
        console.log(maxNum);
    }
    return maxNum;
}

// max(5, 9, 3);

// max(12, 5, 7);
// max(-1, -5, 0);

// ---- 3 ---- //

function min(num1, num2, num3) {
    var minNum = num1;
    if (num2 < minNum) {
        console.log(num2);
    } else if (num3 < minNum) {
        console.log(num3);
    } else {
        console.log(minNum);
    }
    return minNum;
}
// min(5, 9, 3);
// min(12, 5, 7);
// min(-1, -5, 3);

// ---- 4 ---- //

function longestString(string1, string2, string3) {
    if (
        string1.length === string2.length &&
        string1.length === string3.length &&
        string2.length === string3.length
    ) {
        return string1 + string2 + string3;
    } else if (string1.length > string2.length && string1.length > string3) {
        return string1;
    } else if (string2.length > string1.length && string2.length > string3) {
        return string2;
    } else {
        return string3;
    }
}

// ---- 5 ---- //

function longestString(string1, string2, string3) {
    if (
        string1.length === string2.length &&
        string1.length === string3.length &&
        string2.length === string3.length
    ) {
        return string1 + string2 + string3;
    } else if (string1.length < string2.length && string1.length < string3) {
        return string1;
    } else if (string2.length < string1.length && string2.length < string3) {
        return string2;
    } else {
        return string3;
    }
}
