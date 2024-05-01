function numberUpTo(n) {
    var numbers = [];
    for (var i = 1; i <= n; i++) {
        numbers.push(i);
    }
    console.log(numbers);
    return numbers;
}

function numberMinAndMax(min, max) {
    var numbers = [];
    for (var i = min + 1; i < max; i++) {
        if (i === 0) {
            continue;
        }
        numbers.push(i);
    }
    console.log(numbers);
    return numbers;
}
numberMinAndMax(-5, 5);

numberUpTo(5); // [1, 2, 3, 4, 5]
numberUpTo(1); // [1]
numberUpTo(10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
