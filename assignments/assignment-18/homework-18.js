// ---- 1 ---- //
function countDivisibleByThreeOrFive(n) {
    var divisibleNum = 0;
    for (var i = 1; i < n; i++) {
        if (i % 3 === 0 && i % 5 !== 0) divisibleNum += 1;
        else if (i % 5 === 0 && i % 3 !== 0) divisibleNum += 1;
    }
    return divisibleNum;
}
// console.log(countDivisibleByThreeOrFive(15));
// console.log(countDivisibleByThreeOrFive(10));
// console.log(countDivisibleByThreeOrFive(30));

// ---- 2 ---- //
function sumUpToBoth(num1, num2) {
    var sumUpNum1 = 0;
    for (var i = 1; i <= num1; i++) {
        sumUpNum1 += i;
    }
    var sumUpNum2 = 0;
    for (var i = 1; i <= num2; i++) {
        sumUpNum2 += i;
    }
    return sumUpNum1 + sumUpNum2;
}
// console.log(sumUpToBoth(5, 7));
// console.log(sumUpToBoth(3, 4));
// console.log(sumUpToBoth(6, 3));

// ---- 3 ---- //

function sumOfSquares(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
}

// console.log(sumOfSquares(3));
// console.log(sumOfSquares(5));
// console.log(sumOfSquares(2));

// ---- 4 ---- //

function countPerfectSquares(num1, num2) {
    var minNum = num1;
    if (num2 < minNum) minNum = num2;
    var maxNum = num1;
    if (num2 > maxNum) maxNum = num2;
    for (var i = minNum; i <= maxNum; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            return i;
        }
    }
}
// console.log(countPerfectSquares(1, 25)); // Outputs: 5 (1, 4, 9, 16, 25)
// console.log(countPerfectSquares(9, 49)); // Outputs: 5 (9, 16, 25, 36, 49)
// console.log(countPerfectSquares(30, 70)); // Outputs: 2 (36, 49)

// ---- 5 ---- //

function countDigitsSumDivisibleByThree(num1, num2) {
    var count = 0;

    for (var i = num1; i <= num2; i++) {
        if (((i % 10) + (i - (i % 10)) / 10) % 3 === 0) {
            count++;
        }
    }

    return count;
}

// console.log(countDigitsSumDivisibleByThree(7, 12));
