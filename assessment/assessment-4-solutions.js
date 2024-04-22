/* ---- 1 ---- */

var singleWord = "example"; // Assign a single word
var index1 = Math.floor(Math.random() * singleWord.length);
var index2 = Math.floor(Math.random() * singleWord.length);
var char1 = singleWord[index1];
var char2 = singleWord[index2];

if (char1 === char2) {
    console.log(true);
} else {
    console.log(false);
}
console.log((char1 + char2).toUpperCase());

/* ---- 2 ---- */

var randomNumber = Math.floor(Math.random() * 1000) + 1;
console.log(randomNumber % 2 !== 0);
console.log(randomNumber % 2 === 0);

/* ---- 3 ---- */

var numerator = Math.floor(Math.random() * (-100 + 1) - 1);
var denominator = Math.floor(Math.random() * (8 - 5 + 1) + 5);
var result = numerator / denominator;
console.log("Original result: " + result);
console.log("Rounded result: " + Math.round(result));

/* ---- 4 ---- */

var testNumber = Math.floor(Math.random() * (2500 - 25 + 1) + 25);
console.log(testNumber % 3 === 0 && testNumber % 5 !== 0);

/* ---- 5 ---- */

var divTest = Math.floor(Math.random() * (200 - 100 + 1) + 100);
console.log(divTest % 5 === 0 && divTest % 3 !== 0);

/* ---- 6 ---- */

var creativeString = "Exploring the vast universe of code can lead to unexpected discoveries.";
var randomIndex = Math.floor(Math.random() * creativeString.length);
var extractedText = creativeString.slice(randomIndex + 1);
console.log("Text after index " + randomIndex + ": " + extractedText);
