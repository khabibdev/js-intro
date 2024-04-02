var num1 = 10;
var num2 = 3;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulo:", num1 % num2);
console.log("Exponentiation:", num1 ** num2);

var total = 0;
var num1 = 30;
var num2 = 10;

total += num1 + num2;
console.log(total);

total -= num1;
console.log(total);

total *= num2;
console.log(total);

total /= num1;
console.log(total);

var num1 = 18;
var num2 = 7;
var total = 32;

console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 * num2 >= total);

var num1 = 10;
var num2 = 3;
num1++;
num2--;
console.log("Increment:", num1);
console.log("Decrement:", num2);

var num1 = 27;
var num2 = 9;
var total = 14;
var result = num1 + num2 - total;

console.log(result);

var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = "- Nelson Mandela";

// First, use the template literal method.
console.log(`${part1} ${part2} ${part3} ${part4} ${part5} ${author}`);

// Second, use the .concat() method.
console.log(part1.concat(" ", part2, " ", part3, " ", part4, " ", part5, " ", author));

// Third, use the + operator.
console.log(part1 + " " + part2 + " " + part3 + " " + part4 + " " + part5 + " " + author);

// Fourth, use the += operator.
console.log((part1 += " "), (part2 += " "), (part3 += " "), (part4 += " "), (part5 += " "), author);

var firstName = "John";
var age = 30;
var cityOfResidence = "New York";
var profession = "software engineer";
var hobby1 = "reading books";
var hobby2 = "playing the guitar";
var favoriteFood = "pizza";
var favoriteColor = "blue";
var dreamTravelDestination = "Tokyo";
var favoriteSeason = "autumn";

console.log(
    `Hello, my name is ${firstName} and I am ${age} years old. I live in ${cityOfResidence}, where I work as a ${profession}. In my free time, I enjoy ${hobby1} and ${hobby2}. My favorite food is ${favoriteFood} and my favorite color is ${favoriteColor}. My dream is to one day visit ${dreamTravelDestination}. My favorite season of the year is ${favoriteSeason} because of the beautiful changing colors of the leaves.`
);
