function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var result = add(1, 2);
result === NaN;
if (Number.isNaN(result)) {
    /*it is ni=ot NaN */
    console.log("Result is Nan");
} else if (result) {
    console.log(result * 5);
}

function isNumber(number) {
    return typeof number === "number" && !Number.isNaN(number);
}

console.log(isNumber(4));
console.log(isNumber(4, 2));
console.log(isNumber("4"));
console.log(isNumber(NaN));
console.log(isNumber(undefined));
