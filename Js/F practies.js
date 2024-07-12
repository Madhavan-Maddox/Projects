//  1.Palindrome

function myFunction(str) {
     
for(let i=0; i<=str.length; i++){
    if(str.charAt(i) === str.charAt(i-1)-1){
        return true;
    } 
} 
}
console.log(myFunction);


let str;
for(let i=0; i<=str.length; i++){
    if(str.charAt(i) === str.charAt(i-1)-1){
        console.log('Palindrome');}
        else{
            console.log('NP')
        }
}