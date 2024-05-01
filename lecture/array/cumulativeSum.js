function cumulativeSum(n) {
    var sums = [];
    var runningSum = 0;
    for (i = 1; i <= n; i++) {
        runningSum = runningSum + i;
        sums.push(runningSum);
    }
    console.log(sums);
    return sums;
}
cumulativeSum(10); // [1, 3, 6, 10, 15];
// 1 2 3 4 5

// Soccer Team: Pakhtakor. For this month it will have 5 games
// Game - 1; 1. After 1
// Game - 2; 2. After 3
// Game - 3; 3. After 6
// Game - 4; 4. After 10
// Game - 5; 5. After 15
