// 1. concat()
//we will use link(add) strings together.

//2. includes()
var fullName = "Will Smith";
console.log(fullName.includes("T")); //false
console.log(fullName.includes(" ")); //true
console.log(fullName.includes("mit")); //true

var password = "Se123cret12";
console.log(password.includes("Secret")); //true

console.log(password.includes(123)); //true

// 3. endsWith();
console.log(password.endsWith(123)); //falce

//4. startsWith();
console.log(password.startsWith("Secret")); //false

//5. trim();
var anotherPassword = " hfmfmdlkmlggd23!?1 ";
console.log(anotherPassword.trim());

//6. trimEnd();
//7. trimStart();

//8. indexOf();

var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet[23]); // character =x
console.log(alphabet.indexOf("x")); //23
console.log(alphabet.indexOf("$")); // -1
console.log(alphabet.indexOf("abc"));

var firstName = "Will";
console.log(firstName.indexOf("ll")); //2

var animal = "TIGer";
console.log(animal.toLocaleLowerCase());

var anotherAnimal = "elephant";
console.log(anotherAnimal.toLocaleUpperCase());
