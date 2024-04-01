var firstName = "Will";
var lastName = "Smith";
var space = " ";

//1. + Operator

var fullNamePlus = firstName + space + lastName;

console.log(fullNamePlus);
console.log("________________");

//2. concat () method.
var fullNameConcat = firstName.concat(space, lastName);
console.log(fullNameConcat);

var city = "Brooklyn";
var state = "NY";
var address = city + space + state;
address = city.concat(space, state);

//3. Template literals
var fullName = `${firstName} ${lastName} lives in ${city}, ${state}`;
console.log(fullName);

var num1 = 23;
var num2 = 34;
//When we add num1 + num 2, we will get 57

var result = `When we add ${num1} to ${num2}, we will get ${num1 + num2}`;
console.log(result);

//4. assignment Operator
firstName = firstName + space + lastName;
console.log(firstName);
console.log(lastName);

var str1 = "Hello";
str1 += " world";
console.log(str1);
//Hello World
