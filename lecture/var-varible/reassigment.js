//Assignment
var address; //Declaring
address = "Manhattan, NY 11201"; //Assigning

var age;
age = 34;

//or var address = "Manhattan, NY 11201";

//Reassignment Strings;

var welcomeMassage = "Welcome, Mr Ali";
console.log("Some action");
console.log(welcomeMassage, "1st day"); //"Welcome, Mr Ali"

welcomeMassage = "Welcome Ali";
console.log(welcomeMassage, "2nd day");

welcomeMassage = "Hey Ali";
console.log(welcomeMassage, "3rd day");

//Reassignment Numbers;
var availableFunds = 1000;
availableFunds + 3000; // it will not increment availableFunds; Prints 4000
console.log(availableFunds); //1000
availableFunds = availableFunds + 3000;
console.log(availableFunds); //4000

availableFunds = availableFunds + 3000;
console.log(availableFunds); //7000
availableFunds = availableFunds - 1500;
//availableFunds -=1500
console.log(availableFunds);

availableFunds = availableFunds * 2;
//Equal *2
console.log(availableFunds); //11000

availableFunds = availableFunds / 2;
//Devide *2
console.log(availableFunds); //5500

var tasbihCounter = 0;
tasbihCounter = tasbihCounter + 1;
tasbihCounter += 1;
tasbihCounter++;
console.log(tasbihCounter);

tasbihCounter = tasbihCounter - 1;
tasbihCounter -= 1;
tasbihCounter--;
console.log(tasbihCounter);
