// // ------ 1 ------ //

// var number1 = Math.floor(Math.random() * (31 - 15)) + 15;
// var number2 = Math.floor(Math.random() * (31 - 15)) + 15;

// var iqual = "The numbers are equal.";
// var greater = "The first number is greater.";
// var less = "The second number is greater than the first one.";

// if (number1 === number2) {
//     console.log(iqual);
// } else if (number1 > number2) {
//     console.log(greater);
// } else {
//     console.log(less);
// }

// // ------ 2 ------ //

var string1 = "examplestringonegenerated";
var string2 = "secondexamplestringgenerated";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var letterIndex1 = Math.floor(Math.random() * alphabet.length);
var letterIndex2 = Math.floor(Math.random() * alphabet.length);
var string1a = string1[letterIndex1];
var string2a = string2[letterIndex2];
var count1 = string1.split(string1a).length - 1;
var count2 = string2.split(string2a).length - 1;
console.log(string1a);
console.log(string2a);
console.log(count1);
console.log(count2);
if (count1 === count2) {
    console.log("Number of" + " " + string1a + " " + "is the same in both strings");
} else if (count1 > count2) {
    console.log(
        "Number of" + " " + string1a + " " + "in the first string is greater than the second one."
    );
} else if (count2 > count1) {
    console.log("The second one is greater.");
} else if (((count1 = 0), (count2 = 0))) {
    console.log("Character does not exist in each string");
}

// ------ 3 ------ //

// var randomNumber = Math.floor(Math.random() * 1000) + 1;

// if (randomNumber / 3 === 0 && randomNumber / 5 !== 0) {
//     console.log("Fizz");
// } else if (randomNumber / 5 === 0 && randomNumber / 3 !== 0) {
//     console.log("Buzz");
// } else randomNumber / 3 === 0 && randomNumber / 5 === 0;
// {
//     console.log("FizzBuzz");
//     console.log(randomNumber);
// }

// ------ 4 ------ //

// var sentence =
//     "I find myself reflecting on past adventures, realizing that my greatest discoveries were often right at home, hidden in plain sight, waiting to be appreciated.";

// var newSentence1 = sentence.replace("I", "We");
// var newSentence2 = newSentence1.replaceAll("my", "our");
// var newSentence3 = newSentence2.replaceAll("myself", "ourselves");
// var newSentence4 = newSentence3.replaceAll("mine", "ours");
// console.log(newSentence4);

// ------ 5 ------ //

var mainString = "Exploring the vast universe of code can lead to unexpected discoveries.";
var targetString = "universe";

// ------ 6 ------ //
//.trim() Taking away gaps from beginig and the end
//.trimEnd() Taking away gap from behing
//trimStart() Taking gap from start
