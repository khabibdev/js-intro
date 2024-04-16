var randomNumber = Math.floor(Math.random() * 10) + 1;
var name1 = "Bob";
var name2 = "Martin";
var name3 = "Jennifer";
console.log(randomNumber);
if (randomNumber >= 1 && randomNumber <= 3) {
    console.log(name1);
} else if (randomNumber >= 4 && randomNumber <= 7) {
    console.log(name2);
} else console.log(name3);

// ----- 2 ----//

var randomNumber2 = Math.floor(Math.random() * 4) + 1;
var name = "Master Shifu";

if (randomNumber2 === 1) {
    console.log(` Sensey ${name}, you are the best master in the world!`);
} else if (randomNumber2 === 2) {
    console.log(`Sensey ${name}, We need pratcise more`);
} else if (randomNumber2 === 3) {
    console.log(`Sensey ${name}, We need do all homeworks on time`);
} else {
    console.log(`Sensey ${name}, We will be Champiuons!`);
}
