// REVERSING A STRING

let revString = (str)=>{
    return str.split('').reverse().join('');
};

console.log(revString("madhavan"));


//  PALINDROME
let palString = (str) =>{
    let rev = revString(str);
    if( str === rev){
        console.log("The given string is a Palindrome.")
        return true;
    }else(console.log("The given string is NOT a Palindrome."))
}
palString("madam");
palString("madhavan");
palString("Madam, im Adam");


//  ANAGRAM 
let anaString = (str1, str2) =>{
    let string1 = str1.toLowerCase().replace(/[^a-z0-9]/gi,"");
    let string2 = str2.toLowerCase().replace(/[^a-z0-9]/gi,"");

    let sortS1 = string1.split('').sort().join('');
    let sortS2 = string2.split('').sort().join('');

    if( sortS1 === sortS2){
        console.log("The given string is a Anagram.");
    }else
    (console.log("The given string is NOT a Anagram."))
}
anaString("Listen", "Silent");

//  SUB STIRNG
let subString = (mainStr, subStr) =>{
    if(mainStr.includes(subStr)){
        console.log("The given string is a Substring of the main string.");
    }else(
        console.log("The given string is NOT a Substring of the main string.")
    );
}
subString("Hello, World!", "World");
subString("Hello World", "Universe");

//  PRINTING STRING LETTERS
let string  = "MADHAVAN";
 for (let str of string){
    console.log(str);
 }

 let stringLet = (str) =>{
    for (let letters of str){
        console.log(letters);
    }
 }
 stringLet("MANI");


//    NUMBER SERIES
//  FIBONACCI SERIES
let fibonSeries = (num) =>{
    let fibon = [0,1];
    for (let i = 2; i < num ; i++){
        fibon[i] = fibon[i-1] + fibon[i-2];
    }
    console.log(fibon);
}
fibonSeries(10);

// PRIME NUMBERS
let primeNum = (num) =>{
    if(num <= 1) return false;
    if(num === 2) return true;

    for( let i = 2 ; i < num ; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

for(let i = 1 ; i < 100 ; i++){
    if(primeNum(i)){
        console.log(i);
    }
}

//  FACTORIAL OF A NUMBER
let factorial = (num) =>{
    if(num === 0 || num === 1) return 1;

    let  fac = 1;
    for(let i = 1 ; i < num ; i++){
        fac = fac * i
    }
    console.log(fac);
}
factorial(10);


//  AMSTRONG NUMBER
let amstrongNum = (num) =>{
    let numStr = num.toString().length;
    //    console.log(numStr);

    let temp = num ; 
    let sum = 0;

    for(let i = 1 ; i < numStr ; i++){
        let digit = temp % 10 ;
        sum = sum + Math.pow (digit, numStr);
        temp = Math.floor(temp / 10);
    }
    return sum === num ;
}
console.log(amstrongNum(153));


//   PRINTTING PATTERNS
//  USING NESTED LOOP
let printPattern = (num) =>{
    for(let i = 1 ; i <= num ; i++){
        let row = " ";
        for(let j = 1 ; j<= i ; j++){
            row = row + j ;
        }
        console.log(row);
    }
}
(printPattern(6));
//                          WITH OUT USING NESTED LOOP
// let row = (ge) =>{
//     for (let i = 1 ; i <= ge ; i++){
//         let line = " " + "*".repeat(i*1);
//         console.log(line);
//     }
//     }
//     (row(6));

let triangle = (num) =>{
    for(let i = 1 ; i <= num ; i++){
        let row = " ".repeat( num - i) + "m".repeat(2 * i - 1);
        console.log(row);
    }
}
(triangle(6));

let inTriangle = (t) =>{
    for(let i = t ; i >= 1 ; i--){
        let row = " ".repeat(t - i) + "m".repeat(2 * i - 1);
        console.log(row);
    }
}
(inTriangle(6));

let triLoop = (r) =>{
    for(let i = r ; i >= 1 ; i--){
        let row = " ".repeat(r - i);
        for(let j = 1 ; j <= i ; j++){
            row = row + j ;
        }
        for(let j = i - 1 ; j >= 1 ; j--){
            row = row + j ;
        }
        console.log(row);
    }
}
(triLoop(6));


//  LEFT SPACE TRIANGLE
let leftSpace = (n) =>{
    for(let i = 1 ; i <= n ; i++){
        let row = " ";
        for(let j = 1 ; j <= n - i ; j++){
            row = row + " " ;
        }
        for(let k = 1 ; k <= i ; k++){
            row = row + i ;
        }
        console.log(row);
    }
}
(leftSpace(6));


//  SORTING ARRAYS
let sortArray = (arr) =>{
    let sortArrr = arr.sort((a,b) => (a-b)); 
    //it is an ascending order
    console.log(sortArrr);
}
(sortArray([6,5,5,3,8,9,2,0,4,1]));

let points = (arr) =>{
    let n = arr.length ;
    let sum = 0 ;
    for(let i = 0 ; i < n ; i +=2){
        sum = sum + arr[i] ; 
    }
    console.log(sum);
}
(points([1,2,3,4,5,6,7,8,9]));  // output = 25

let score = (arr) => {
    let m = arr.length ;
    let newScore ;
    if( m <= 4){
        newScore = arr[0] + arr[2] ;
    } else if( m >= 7){
        newScore = arr[0] + arr[2] + arr[4] + arr[6] ;
    } else{
        "No scorecard."
    }
    console.log(newScore);
}
(score([1,2,3,4,5,6,7,8,9]));