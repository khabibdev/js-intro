var name = "";
var friends = [];
// friends.push("Ali");
// console.log(friends);
// friends.push("Ramazon");
// console.log(friends);
// friends.unshift("Bahtiyor aka");
// console.log(friends);
// friends.push("Jon", "Toshmatov");
// friends.unshift("Rustam", "Abbos");
// console.log(friends);

// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);

// Push => It add adds an element to the end of the array
// beginning <- [] -> end

console.log(friends.push("Shif"));
console.log(friends.push("Shifu"));
// console.log(friends.push("Shifur").push("Kamol")); // Not valid as push does not work on numbers
console.log(friends.unshift("Frank"));
console.log(friends); // [Frank, Shif, Shifu]
console.log(friends.pop().length);
console.log(friends.shift());

// Concat
var nums1 = [1, 2, 3];
var nums2 = [4, 5, 6];
var concattedNembers = nums1.concat(nums2);
console.log(concattedNembers);
console.log(nums1);
console.log(nums2);

// includes

var boys = ["John", "Bob", "Jack", "Mark"];
console.log(boys.includes("Jack"));
console.log(boys.includes("ack"));

// Array .isArray
var data = [];
console.log(Array.isArray(data));

// Letters
var letters = ["a", "b", "c", "d"];
console.log(letters.reverse());
console.log(letters);

var letter1 = ["e", "f", "g"];
console.log(letter1.toReversed());
console.log(letter1);

//Slice
// Works exactly the same as string slice method
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(numbers.slice(1));
console.log(numbers);
