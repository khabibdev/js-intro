var removeSpace = "I Love JavaScript";
var newRemoveSpace = removeSpace.replaceAll(" ", "");
console.log(newRemoveSpace);

console.log("-----------------");

var javascript = "javascript";
javascript = javascript
    .slice(+10)
    .concat("J", javascript.slice(+1, +4))
    .concat("S", javascript.slice(+5));
console.log(javascript);

console.log("-----------------");

var firstNames = "Safarali";
var lastNames = "Ramazonov";
var fullNames = firstNames[0].concat(lastNames[0]);
console.log(fullNames);

console.log("-----------------");

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetWithoutMyNameFirstCharacter = alphabet.replace("h", "");
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
