// ----- 1 ----- //
function swapFirstAndLast(array) {
    if (array.length >= 2) {
        var temp = array[0];
        array[0] = array[array.length - 1];
        array[array.length - 1] = temp;
    }
    return array;
}

// var array1 = [1, 2, 3, 4];
// console.log(swapFirstAndLast(array1)); // returns [4, 2, 3, 1]

// ----- 2 ----- //
function swapArrayElements(array1, array2) {
    if (array1.length > 0 && array2.length > 0) {
        var temp1 = array1[0];
        array1[0] = array2[array2.length - 1];
        array2[array2.length - 1] = temp1;

        var temp2 = array1[array1.length - 1];
        array1[array1.length - 1] = array2[0];
        array2[0] = temp2;
    }

    return [array1, array2];
}
// var array1 = [1, 2, 3, 4];
// var array2 = [5, 6, 7, 8];
// var result = swapArrayElements(array1, array2);
// console.log(result); // Outputs: [[8, 2, 3, 5], [4, 6, 7, 1]]

// var array1 = [1, 2];
// var array2 = [4, 5, 6, 7, 8];
// var result = swapArrayElements(array1, array2);
// console.log(result); // Outputs: [[8, 4], [2, 5, 6, 7, 1]]

// var array1 = [1];
// var array2 = [3, 4, 5, 6];
// var result = swapArrayElements(array1, array2);
// console.log(result); // Outputs: [[1], [3, 4, 5, 6]]

// ----- 3 ----- //

function swapMiddleElements(array) {
    var length = array.length;

    if (length > 1) {
        var middleIndex = Math.floor(length / 2);

        if (length % 2 === 1) {
            var temp = array[0];
            array[0] = array[middleIndex];
            array[middleIndex] = temp;
        } else {
            var temp = array[middleIndex - 1];
            array[middleIndex - 1] = array[middleIndex];
            array[middleIndex] = temp;
        }
    }

    return array;
}

// var array1 = [1, 2, 3, 4, 5];
// swapMiddleElements(array1);
// console.log(array1); // Outputs: [3, 2, 1, 4, 5]

// var array2 = [4, 5, 6, 7];
// swapMiddleElements(array2);
// console.log(array2); // Outputs: [4, 6, 5, 7]

// ----- 4 ----- //
function swapUndefinedWithLengths(arrayStrings, arrayUndefined) {
    for (var i = 0; i < arrayStrings.length; i++) {
        if (arrayUndefined[i] === undefined) {
            arrayUndefined[i] = arrayStrings[i].length;
        }
    }
    return arrayUndefined;
}

var arrayStrings = ["hello", "world", "test"];
var arrayUndefined = [undefined, undefined, undefined];
var result = swapUndefinedWithLengths(arrayStrings, arrayUndefined);
// console.log(result);

// ----- 5 ----- //
function sumAdjacentPairs(inputArray) {
    var result = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
        result.push(inputArray[i] + inputArray[i + 1]);
    }
    return result;
}

var inputArray = [1, 2, 3, 4, 5, 6];
var result = sumAdjacentPairs(inputArray);
// console.log(result);
