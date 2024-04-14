var num1 = 20;
var num2 = 50;
var avarage = (num1 + num2) / 2;
console.log(avarage);

var num3 = 122;
var num4 = 266;
var avarage2 = (num3 + num4) / 2;
console.log(avarage2);

function calcAvarage(num1, num2) {
    var avarage = (num1 + num2) / 2;
    console.log(avarage);
}
calcAvarage(1000, 2000);
calcAvarage(89, 87);

/* Tax Calculation */

var price1 = 1200;
var taxRate = 0.07;
var total = price1 + price1 * taxRate;
console.log(total);

var price2 = 1200;
var taxRate2 = 0.04;
var total2 = price2 + price2 * taxRate2;
console.log(total2);

function calculateTotal(price2, taxRate2) {
    var total2 = price2 + price2 * taxRate2;
    console.log(total2);
}

/* Custom Greeting */
console.log("Hi,Welcome to NY, Habib aka");
console.log("Hi,Welcome to NY, Jamshid");
console.log("Hi,Welcome to SF, Master Shifu");

function greet(personName, cityName) {
    console.log(`Hi, Welcome to ${cityName}, ${personName}. How are you doing today!`);
}
greet("Ronaldo", "Tashkent");
greet("Shomurodov", "Miami");

/* Math */
Math.random(); //Generate number (0,1)
Math.ceil(number); //Always rounds up

var randomNumber1 = 75;

if (randomNumber1 % 3 === 0 && randomNumber1 % 5 !== 0) {
    console.log("Fiz");
} else if (randomNumber1 % 3 !== 0 && randomNumber1 % 5 === 0) {
    console.log("Buzz");
} else if (randomNumber1 % 3 === 0 && randomNumber1 % 5 == 0) {
    console.log("FizzBuzz");
}
