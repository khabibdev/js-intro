// ----- 1 ----- //

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (var i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Test cases
// console.log(isPrime(2)); // true
// console.log(isPrime(3)); // true
// console.log(isPrime(4)); // false
// console.log(isPrime(29)); // true

// ----- 2 ----- //
