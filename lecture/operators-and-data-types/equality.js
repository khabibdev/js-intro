console.log(typeof "hello"); //false
console.log("hello" === "hello"); //true
console.log("hi" === "Hi"); // false
console.log(1 > 2 === 3 > 5); //false === false => true
console.log(true === false); //false

console.log(true === "true"); // false => boolean, second one is string. as they different types, js will evaluate it to false

console.log(typeof false === "string"); //false
console.log(typeof false === "boolean"); //true
