function initials(fullName) {
    var firstNameInitial = fullName[0];
    var lastNameInitialIndex = fullName.indexOf(" ") + 1;
    var lastNameInitial = fullName[lastNameInitialIndex];
    var initial = (firstNameInitial + lastNameInitial).toUpperCase();
    return initial;
}
// var result = initials("Will Smith");

// console.log(`Thanks for flying with us. ${result}`);
// console.log(`Dear customer ${result}. You can pick up your luggage at carousel #7`);
// console.log(`Fare from JFK to Brooklyn, Downtown is 56$. ${result}`);

function sign(fullName) {
    var document = `Lorem text dkjnfgkjb kb kfbnkdfjbngkdjb a knfgdljnfg kl ljdngk jbndfgk ${initials}. kdjnfkjsndfgkjsnddlfgm ldnklgj ldfkhmg ldlfkh dljk ${initials}.`;
    return document;
}

function isEvenOrOdd(number) {
    if (number % 2 !== 0) {
        return "Odd Number";
    }
    return "Even Number";
}

console.log(isEvenOrOdd(3));
