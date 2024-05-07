// ---- 1 ---- //

function generateNumbersUpTo(num) {
    var arr = [];
    for (var i = num; i >= 1; i--) {
        arr.unshift(i);
    }
    return arr;
}

// console.log(generateNumbersUpTo(5)); // Returns: [1, 2, 3, 4, 5]
// console.log(generateNumbersUpTo(3)); // Returns: [1, 2, 3]

// ---- 2 ---- //
function generateNumbersDownTo(num) {
    var arr = [];
    for (var i = num; i >= 1; i--) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

// console.log(generateNumbersDownTo(5)); // Returns: [4, 2]
// console.log(generateNumbersDownTo(3)); // Returns: [2]

// ---- 3 ---- //

function findPrimesUpTo(num) {
    var arr = [];
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

// console.log(findPrimesUpTo(10)); // Returns: [2, 3, 5, 7]
// console.log(findPrimesUpTo(20)); // Returns: [2, 3, 5, 7, 11, 13, 17, 19]

// ---- 4 ---- //
function rotateLastToFront(arr) {
    var array = [];
    if (arr.length < 2) {
        array.push(arr);
    }
    var removeLastElement = arr.pop();
    array.unshift(arr);
    array.unshift(removeLastElement);

    return array;
}
// console.log(rotateLastToFront([1, 2, 3, 4]));
// console.log(rotateLastToFront(["apple", "banana", "cherry"]));

// ---- 5 ---- //
function rotateFrontToEnd(array) {
    if (array.length > 1) {
        var firstElement = array.shift(); // Remove the first element
        array.push(firstElement); // Add the first element to the end
    }
    return array;
}

// console.log(rotateFrontToEnd([1, 2, 3, 4]));
// console.log(rotateFrontToEnd(["apple", "banana", "cherry"]));
