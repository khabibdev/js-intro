// // ------ 1 ------ //

var singleWord = "Master";
var index1 = Math.floor(Math.random() * singleWord.length);
var index2 = Math.floor(Math.random() * singleWord.length);

var comp1 = singleWord[index1];
var comp2 = singleWord[index2];
console.log(comp1);
console.log(comp2);

if (comp1 === comp2) {
    console.log("The charcters are the same");
} else {
    console.log("The characters are not the same");
}

var upperCase = (comp1 + comp2).toUpperCase();

console.log(upperCase);

// // ------ 2 ------ //

var randomNumber = Math.floor(Math.random() * 1000) + 1;
var isOdd = randomNumber % 2 !== 0;
var isEven = !isOdd;
console.log("Random Number: " + randomNumber);
console.log("Is Odd? " + isOdd);
console.log("Is Even? " + isEven);

// // ------ 3 ------ //

var numerator = Math.floor(Math.random() * -100) - 1;

var denominator = Math.floor(Math.random() * 4) + 5;

var divisionResult = numerator / denominator;
var roundedResult = Math.round(divisionResult);

console.log("Original Division Result: " + divisionResult);
console.log("Rounded Result: " + roundedResult);

// // ------ 4 ------ //

var testNumber = Math.floor(Math.random() * (2500 - 25 + 1)) + 25;

var isDivisibleBy3ButNot5 = testNumber % 3 === 0 && testNumber % 5 !== 0;

console.log("Test Number: " + testNumber);
console.log("Is Divisible by 3 but not by 5? " + isDivisibleBy3ButNot5);

// // ------ 5 ------ //

var divTest = Math.floor(Math.random() * (200 - 100 + 1)) + 100;

var isDivisibleBy5ButNot3 = divTest % 5 === 0 && divTest % 3 !== 0;

console.log("divTest Number: " + divTest);
console.log("Is Divisible by 5 but not by 3? " + isDivisibleBy5ButNot3);

// // ------ 6 ------ //

var creativeString = "Exploring the vast universe of code can lead to unexpected discoveries.";

var randomIndex = Math.floor(Math.random() * creativeString.length);

var extractedText = creativeString.substring(randomIndex + 1);
console.log("Text after index " + randomIndex + ": " + extractedText);
