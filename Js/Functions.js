
function myFunction(msg = 'Hi, Hello!'){

    console.log(msg);
}

myFunction();

// SUM OF NUMBERS
function sum(X, Y, Z){
    console.log(X+Y-Z);
}
sum(6, 4, 7);

// Using for-of LOOP

function countVowels(str){
let count = 0;
for(let char of str){
    if(char==='a' ||
       char==='e' ||
       char==='i' || 
       char==='o' || 
       char==='u' ){
        count++;
  }
}
   return count;
}

// Using forLoop ArrowFunction
const noofVowels = (str)=>{
    let count = 0;
    for(let i=0; i<=str.length; i++){
        if(str[i]==='a'||
           str[i]==='e'||
           str[i]==='i'||
           str[i]==='o'||
           str[i]==='u'){
            count++;
           }
    }
    return count;
}

//                  OR

const numVowels = (str) =>{
    let count = 0;
    for(let i=0; i<=str.length; i++){
        if(str.charAt(i)=== 'a'||
           str.charAt(i)=== 'e'||
           str.charAt(i)=== 'i'||
           str.charAt(i)=== 'o'||
           str.charAt(i)=== 'u'){
            count++;
        }
    }
    return count;
}

//  Using Arrays

// function usingArray(array){
//     let count = 0;
//     for(let i=0; i<array.length; i++){
//         if()
//     }
// }


//                   forEach loop

let nums = [1, 9, 7, 6];

nums.forEach((squares) => {
    console.log(squares ** squares);
});
//    or

let num = [1, 2, 3, 4, 5];
let newNum = num.map((numbers) => {
    return numbers * 2;
});

console.log(newNum);

//           Practice Questions

let marks = [87, 99, 80, 90, 95, 92, 98];

let supStud = marks.filter((goodMarks) => {
    return goodMarks > 90 ;
})

console.log(supStud);

//   2Question

let userNum = prompt('Enter a Number');
let arr = [];

for( let i=1; i<=userNum; i++){
    arr[i-1] = i;
}

console.log(arr);

let sumNum = arr.reduce((res, curr) => {
    return res * curr ;
})

console.log(sumNum);