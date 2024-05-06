console.log("Habibulloh");
// Challenge-1
// Create a function compareStringAndArray that takes a numeric string and an array of numbers and do the following:

// If the input lengths of either the string or the array are not exactly 4, return "Length does not match."

// If all elements of the string correspond exactly to the elements of the array at the same index, return true.

// If there is any mismatch between the elements of the string and the array, return the sum of converting all string characters to numbers and the sum of all array elements.

// compareStringAndArray("1234", [1, 2, 3, 4]); // Output: true
// compareStringAndArray("1235", [1, 2, 3, 4])); // Output: 21 (sum of characters and elements)
// compareStringAndArray("12", [1, 2, 3]); // Output: "Length does not match."
function compareStringAndArray(str, arr) {
    if (str.length !== 4 || arr.length !== 4) {
        return "Length does not match.";
    }

    var sumOfString = 0;
    var sumOfArray = 0;

    for (var i = 0; i < 4; i++) {
        var digit = parseInt(str[i]);

        sumOfString += digit;
        sumOfArray += arr[i];
        var total = sumOfString + sumOfArray;
    }

    return total;
}
compareStringAndArray("1234", [1, 2, 3, 4]); // Output: true
compareStringAndArray("1235", [1, 2, 3, 4]); // Output: 21 (sum of characters and elements)
compareStringAndArray("12", [1, 2, 3]); // Output: "Length does not match."
