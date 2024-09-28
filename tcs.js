//        REVERSING THE STRING

//   USING IN-BULIT METHOD
let str = "madhavan";
console.log(str.split('').reverse().join(''));

//  USING FUNCTION
let reverse = (str)=>{
    return str.split('').reverse().join('');
};
console.log(reverse("madhavan neerati"));

//   USING LOOP
let ulta = (string)=>{
    let alpha = "";
    for(let i = string.length - 1; i>=0; i--){
        alpha += string[i];
    }
    return alpha;
}
console.log(ulta('manichandra'));

//       CHECKING PALINDROME
let palindrome = (i) =>{
    i.toLowerCase().replace(`/[^a-z0-9]/gi, ""`);
    let rev = i.split('').reverse().join("");

    return i === rev;
};

console.log(palindrome("123level321"));


//     PRIME NUMBER
    let checkPrime = (num)=>{
     if(num <= 1) return false;
     if(num === 2) return true;

        for(let i = 2; i < num; i++){
        if( num % i === 0){
            return false;
        }
        }
        return true;
    };
     
    let primeCount = 0;
    for(let i=1; i<50; i++){
        if(checkPrime(i)){
            console.log(i);
            primeCount++;
        }
    }
    console.log(primeCount);

    //  FINDING SUBSTRING
    let getTheSubstring = (mainstring, substring)=>{
        let index = mainstring.indexOf(substring);
        if(index !== -1){
            console.log("Substring is Found at:", index);
        } else{
            console.log("Substring is not found.");
        }
    };
    getTheSubstring("Madhavan","van")

    //   FINDING ANAGRAM STRING
    let findAnagram = (str1,str2)=>{
        let string1 = str1.toLowerCase().replace(/[^a-z0-9]/g, "");
        let string2 = str2.toLowerCase().replace(/[^a-z0-9]/g, "");
        
        let sortS1 = string1.split('').sort().join('');
        let sortS2 = string2.split('').sort().join('');

       return sortS1 === sortS2;
    };
    console.log(findAnagram("listen","silent"));


    //      FIBONACCI SERIES
    let fibonacciSeries = (n) =>{
        let fibon = [0,1];

        for(let i=2; i<n ; i++){
            fibon[i] = fibon[i-1] + fibon[i-2] ;
        }
        return fibon.slice(0,n);
    };
    console.log(fibonacciSeries(10));


    //      ARMSTRONG NUMBERS
    let armStrong = (n) =>{
        let sum = 0;
        let noOfDigits = n.toString().length ;

        let num = n ;
        for(let i=0 ; i<noOfDigits ; i++ ){
            let digit = num % 10 ; 
            sum = sum + Math.pow(digit, noOfDigits);
            num = Math.floor(num/10) ;
        }
        return sum === n ;
    }
    console.log(armStrong(371));
    console.log(armStrong(153));
    console.log(armStrong(2453));

    //  FACTORIAL OF NUMBER
    let factorial = (num) =>{
        if(num === 0 || num === 1){
           return 1 ;
        }
        
        let value = 1 ;
        for(let i=1 ; i<=num ; i++){
            value = value * i ;
        }
        return value ;
    }
    console.log(factorial(5));

    //                    PATTERN PRINTING
    //   RIGHT ANGLE TRIANGLE 
    let patternPrinting = (num) =>{
        for(let i=1 ; i<=num ; i++){
           let row = "" ;
            for(let j=1 ; j<=i ; j++){
                row = row + j ;
            }
            console.log(row);
        } 
    }
    console.log(patternPrinting(5));

    //  INVERT THE TRIANGLE
    let num = 5;

    for(let i = num ; i >= 1 ; i--){
        let row = "";
        for(let j = 1 ; j <= i ; j++){
            row = row + "*";
        }
        console.log(row);
    }

    //  PYRAMID
    let pyramid = 5;

    for(let i = 1 ; i <= pyramid ; i++){
        let row = " ".repeat(pyramid - i) + "*".repeat(2 * i - 1);
        console.log(row);
    }
   
    //  INVERT PYRAMID
    let invPy = 5;

    for(let i = invPy ; i >= 1 ; i--){
       let row = " ".repeat(invPy - i) + "*".repeat(i * 2 - 1 );
       console.log(row);  
    }

    // Daimond 
    let daimond = 6;
    for(let i = 1 ; i <= daimond ; i++){
        let row = " ".repeat(daimond - i) + "*".repeat(2 * i - 1);
        console.log(row);
    }
    for(let i = daimond ; i >=1 ; i--){
        let row = " ".repeat(daimond - i) + "*".repeat(2 * i - 1);
        console.log(row);
    }

    // // NUMBER PATTERN
    // let numPattern = 5;
    // for(let i = 1 ; i <= numPattern ; i++){
    //     let row = "".repeat(numPattern - i);
    //     for(let j = 1 ; j <= i ; j++){
    //         row = row + j ;
    //     }

    //     for(let j = numPattern - 1 ; j >= 1 ; j--){
    //         row = row + j ;
    //     }
    //     console.log(row);
    // }

    //  REMOVING REPEATED CHARACTER FROM STRING
    let remChar = (str) =>{
        let uniqueStr = new Set(str);
        return [...uniqueStr].join('');
    }

    console.log(remChar("Progrmming"));

    //REMOVING DUPLICATE FROM ARRAY
    let removeDup = (arr) =>{
        let uniqueArr = [... new Set(arr)];
        console.log(uniqueArr);
    }
    console.log("Removed duplicate values ", removeDup([1,2,3,4,5,6,4,3,2,5,6,7,8,9,8]));


    