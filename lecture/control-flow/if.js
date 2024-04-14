//Creater FB account

var createdPassword = "Secret";
var email = "info@example.com";

// Next day, you try to log in.
//Enter your password and email;

var typedPassword = "Secret";
var typedEmail = "info@example.com";

// You send this credential to backend (some program)
// Backend will find account with the email you typed.

if (email === typedEmail) {
    console.log("Account is found");
} else {
    console.log("Account is not found");
}

if (typedPassword === createdPassword) {
    console.log("Password match, here is your account");
}
