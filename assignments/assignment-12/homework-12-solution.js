// Generate a Random Number from 1 to 10
var randomNumber1 = Math.floor(Math.random() * 10) + 1;

// Assign a Name Based on the Random Number
var name;
if (randomNumber1 >= 1 && randomNumber1 <= 3) {
    name = "Bob";
} else if (randomNumber1 >= 4 && randomNumber1 <= 7) {
    name = "Martin";
} else {
    name = "Jennifer";
}

// Generate Another Random Number from 1 to 4
var randomNumber2 = Math.floor(Math.random() * 4) + 1;

// Print a Greeting Based on the Second Random Number
if (randomNumber2 === 1) {
    console.log(
        "Dear " + name + ", wishing you a day filled with happiness and a year filled with joy."
    );
} else if (randomNumber2 === 2) {
    console.log("Dear " + name + ", sending you smiles for every moment of your special day.");
} else if (randomNumber2 === 3) {
    console.log("Dear " + name + ", have a wonderful time and a very happy day!");
} else {
    console.log("Dear " + name + ", hope your special day brings you all that your heart desires!");
}
