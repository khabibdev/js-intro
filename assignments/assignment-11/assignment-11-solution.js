/* ---- 1 ---- */
var correctPassword = "secure123"; // Store the correct password
var userInputPassword = "secure123"; // Simulate a user input
if (userInputPassword === correctPassword) {
    console.log("Access Granted.");
} else {
    console.log("Access Denied. Incorrect Password.");
}

/* ---- 2 ---- */
var userAge = 20; // Store the user's age
if (userAge >= 18) {
    console.log("You have access to the content.");
} else {
    console.log("Access restricted. You must be 18 years or older.");
}

/* ---- 3 ---- */
var username = "user1"; // Simulate a form input by storing a username
if (username.length >= 5) {
    console.log("Username is valid.");
} else {
    console.log("Username must be at least 5 characters long.");
}

/* ---- 4 ---- */
var correctAnswer = "42"; // Store the correct answer to a question
var userAnswer = "42"; // Simulate a user's answer
if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log("Correct! You may proceed.");
} else {
    console.log("Incorrect answer. Please try again.");
}
