let str1 = prompt('Enter your good name');
let str2 = '@';
let str3 = '145';
let str4 = str1.concat(str2+str3);

if (str4.length <= 9){
    console.log(str4);
} else {
    console.log('Not matched to given Length')
}

let btn = document.createElement("button");
btn.style.backgroundColor = "red";
btn.style.color = "White";
console.log (btn.innerText = "Click Me");

let bdy = document.querySelector("body");
console.log(bdy);

bdy.prepend(btn);


let para = document.querySelector(".pa");
console.log(para);

para.classList.add("ra");


let boxs = document.querySelectorAll(".box");
console.log(boxs);

let pragraph = document.querySelector(".pa");
console.log(pragraph.innerText + " HTML and CSS also.");