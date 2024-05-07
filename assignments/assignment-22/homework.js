// ----- 1 ----- //

function combineArrays(array1, array2) {
    return array1.concat(array2);
}

// console.log(combineArrays([1, 2, 3], [4, 5, 6]));

// ----- 2 ----- //
function reverseOrder(array) {
    return array.reverse();
}

// console.log(reverseOrder([1, 2, 3]));

// ----- 3 ----- //
function checkValue(array, value) {
    return array.includes(value);
}

// console.log(checkValue([1, 2, 3], 2));
// console.log(checkValue(["apple", "banana", "cherry"], "apple"));

// ----- 4 ----- //
function isArray(text) {
    return Array.isArray(text);
}

// console.log(isArray([1, 2, 3]));
// console.log(isArray("not an array"));

// ----- 5 ----- //
function arraySlice(array, text1, text2) {
    return array.slice(text1, text2);
}

console.log(arraySlice([1, 2, 3, 4, 5], 1, 4));
console.log(arraySlice(["a", "b", "c", "d", "e"], 0, 3));
