// function printHello10() {
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
// }
for (var i = 0; i < 3; i = i + 1) {
    console.log("Hello");
}

//Loop parts
// 1 - Initialization
// 2 - Condition
// 3- Increment

// i =0, i < 3 => Log Hello
//i += 1; i < 3 => log Hello
// i +=1 ; i < 2 =>log Hello
// i += 1 ; 3 < 3 => it does not log Hello, because condition is not met

for (var i = 0; i < 3; i = i + 2) {
    console.log("Hello");
}

// i = 0 ; 0<3 => log hello
// i +2; 2 <3 => log hello
// i +=2 ; 4 < 3 => This will not print Hello, loop exits

//Never prints Hello
for (var i = 0; i < 0; i++) {
    console.log("Hello");
}

//Prints only once
for (var i = 0; i <= 0; i++) {
    console.log("Hello");
}

for (var i = 999; i <= 1005; i++) {
    console.log(i);
}

//
var start = 75;
var end = 140;
for (var i = start; i <= end; i++) {
    if (i % 13 === 0) {
        console.log(i);
    }
}
