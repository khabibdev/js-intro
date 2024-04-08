var removeSpace = "I Love JavaScript";
var newRemoveSpace = removeSpace.replaceAll(" ", "");
console.log(newRemoveSpace);

console.log("-----------------");

var javascript = "javascript";
var firstSIdx = javascript.indexOf("s");
var part1 = javascript[0].toUpperCase();
var part2 = javascript.slice(1, firstSIdx);
var part3 = javascript[firstSIdx].toUpperCase();
var part4 = javascript.slice(firstSIdx + 1);
javascript = part1 + part2 + part3 + part4;
console.log(javascript);

console.log("-----------------");

var fullName1 = "Safarali Ramazonov";

var firstNameInitial = fullName1[0];
var spaceIdx = fullName1.indexOf(" ");
var lastNameUnitial = fullName1[spaceIdx + 1];
var initial = firstNameInitial + lastNameUnitial;
console.log(initial);

console.log("-----------------");

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var nameFirstLetter = "h";
var nameFirstLetterIdx = alphabet.indexOf(nameFirstLetter);
var alphabetWithoutMyNameFirstCharacter =
    alphabet.slice(0, nameFirstLetterIdx) + alphabet.slice(nameFirstLetterIdx + 1);
console.log(alphabetWithoutMyNameFirstCharacter);

console.log("-----------------");

var completeSentence = "The quick brown fox jumps over the lazy dog.";
var randomChar = "o";
randomChar = completeSentence.indexOf(randomChar);
var missingRandomCharString = completeSentence
    .slice(0, +randomChar)
    .concat(completeSentence.slice(+13));
console.log(missingRandomCharString);

console.log("-----------------");

var randomString = "Master Shifu is a great teacher!";
var randomChar = "a";
randomChar = randomString.replaceAll(randomChar, "");
randomString = randomString.length - randomChar.length;
console.log(randomString);
