var randomNum1 = Math.ceil(Math.random() * 50);
var randomNum2 = Math.ceil(Math.random() * 50) + 50;
console.log(randomNum1, randomNum2);
for (var i = randomNum1; i <= randomNum2; i++) {
    if (i % 22 === 0) {
        console.log(i);
        break;
    }
}

for (var i = 1000000; i > 0; i--) {
    console.log(i);
    break;
}
