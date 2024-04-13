var password = "Correct Password";
var correctPassword = "Correct Password";

if (password === correctPassword) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// ----   2   ---- //

var userName = "strong";
if (userName.length >= 5) {
    console.log("Username is valid");
} else {
    console.log("Username must be at least 5 characters");
}

// ----   3   ---- //

var question1 = "The Capitol of Great Britain?";
var correctAnswer = "London";
var userAnswer = "Tashkent";

if (userAnswer === correctAnswer) {
    console.log("Correct! You may proceed");
} else {
    console.log("Incorrect answer. Please try again");
}
