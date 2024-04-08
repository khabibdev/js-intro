//Math.sqrt
var number = 36;
console.log(Math.sqrt(number));
console.log(Math.sqrt(441));
console.log(Math.sqrt(144));

// Math, pow
var num = 2;
console.log(num ** 2); //4
console.log(num ** 3); //8

console.log(Math.pow(num, 2));
console.log(Math.pow(num, 3));
console.log(Math.pow(num, 4));

// Math.round
// var float1 = 4.7; //5
// var float2 = 4.49; //4
// var float3 = 4.51; //5
// var float4 = 4.5; //5
console.log(Math.round(float2));

//  Math.floor
// var float1 = 4.7; //5
// var float2 = 4.49; //4
// var float3 = 4.51; //5
// var float4 = 4.5; //5
console.log(Math.floor(float1));
console.log(Math.floor(float2));
console.log(Math.floor(float3));
console.log(Math.floor(float4));

//Math.ceil

var float1 = 4.7; //5
var float2 = 4.49; //4
var float3 = 4.51; //5
var float4 = 4.5; //5
var float5 = -4.1; //5
var float6 = -4.5; //5
var float7 = -4.9; //5
console.log(Math.ceil(float1));
console.log(Math.ceil(float2));
console.log(Math.ceil(float3));
console.log(Math.ceil(float4));

//Math.abs

// var negative = -5;
// var positive = negative * -1;
// console.log(positive);
// console.log(Math.abc(negative));

//Math.random()
// Generates from 0 up to 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// Min value of Math.random() 0
// Max max value of Math.rendom() 0.9999999999, never hits 1
console.log(0.999999 > 1);

//Generate a number between 0 and 9

var randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//Generate a number between 0 and 10

var randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);

//Generate a number between 1 10
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
