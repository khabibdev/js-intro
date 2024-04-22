for (var i = 43; i <= 99; i++) {
    if (i % 5 === 0) {
        continue;
    }
    console.log(i);
}

// 43
// 44
// 45, => skipped
// 46

for (var i = 1; i <= 30; i++) {
    if (i % 5 === 0 && i % 4 !== 0) {
        continue;
    }
    console.log(i);
}

for (var i = 5; i > 0; i--) {
    console.log(i);
}
