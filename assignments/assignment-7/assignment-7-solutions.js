var greeting = "Hello, world!";

console.log(greeting[0]); // First character: 'H'

console.log(greeting[1]); // Second character: 'e'

console.log(greeting[2]); // Third character: 'l'

console.log(greeting[greeting.length - 1]); // Last character: '!'

console.log(greeting[greeting.length - 2]); // Second-to-last character: 'd'

var greeting = "Hello, ";
var name = "Alice";
var welcomeMessage = greeting.concat(name);
console.log(welcomeMessage); // Logs "Hello, Alice"

var announcement = "Today's event starts at 3 PM!";
var endsWithPM = announcement.endsWith("PM!");
console.log(endsWithPM); // Logs true

var sentence = "Looking for the hidden gems in the city.";
var containsHidden = sentence.includes("hidden");
console.log(containsHidden); // Logs true

var phrase = "Repeat after me: JavaScript is fun!";
var position = phrase.indexOf("JavaScript");
console.log(position); // Logs the starting index of "JavaScript": 17

var feedback = "This product is good!";
var updatedFeedback = feedback.replace("good", "excellent");
console.log(updatedFeedback); // Logs "This product is excellent!"

var shout = "can you hear me?";
console.log(shout.toUpperCase()); // Logs "CAN YOU HEAR ME"

var loud = "PLEASE LOWER YOUR VOICE";
console.log(loud.toLowerCase()); // Logs "please lower your voice"

var spaceyString = " JavaScript is awesome! ";
console.log(spaceyString.trim()); // Logs "JavaScript is awesome!"

var spaceyString = " JavaScript is awesome! ";
console.log(spaceyString.trimStart()); // Logs "JavaScript is awesome! "

var spaceyString = " JavaScript is awesome! ";
console.log(spaceyString.trimEnd()); // Logs " JavaScript is awesome!"

var greeting = "Hello, world!";
var hello = greeting.slice(0, 5);
var world = greeting.slice(7);
console.log(hello); // Logs "Hello"
console.log(world); // Logs "world!"
