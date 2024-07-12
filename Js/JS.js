// Conditional Statements if, if else, else if

// else if
let age = 25;
if (age <= 18){
    console.log("Junior");
} else if (age > 50) {
    console.log("Senior");
}else {
    console.log("Middle");
}
 
let score = 50;
if (score >=90 && score <=100) {
    console.log("A")
} else if (score >=70 && score <=89) {
    console.log("B")
} else if (score >=60 && score <=69) {
    console.log("C")
} else if (score >=50 && score <=59) {
    console.log("D")
} else {
    console.log("F")
}



// LOOPs

for (let i=1; i<=100; i++){
    console.log("i=",i);
    if (i % 2 == 0){
        console.log("Even=",i);
    } else if(i % 3 == 0){
        console.log("Odd=",i);
    } 
}

for(let i=1; i<=200; i++){
    if(i % 2 && i % 3 && i % 5 != 0){
        console.log("PN=",i);
    }
}

// Question 2

let num = 27;
let userNum = prompt("Enter Number");
for(let i=0; i<=100; i++){
    if(userNum == num){
        console.log("Congrats, You entered Correct Number");
    } else if(userNum != num){
        userNum = prompt("Enter Correct Number");
        console.log("You entered Wrong Number, Try again");
    }    
}

// using while loop
let number = 30;
let userNumber = prompt("Enter Correct Number");
while(userNumber == number){
    console.log("Congrats");
}
 userNumber = prompt("Enter Valid Number");

//   STRINGS
let str1 = "@"
let str2 = prompt("Enter Name");
let str3 = str2.length;
let result = str1.concat(str2 + str3);
console.log(result);


// ARRAYS Question 1
let marks = [85, 97, 44, 37, 76, 60];
let answer = [arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5] / 2];
console.log(answer);
