alert("Happy Learning");

const header = document.getElementById("head");
console.log(header);
console.dir(header);

const hand = document.getElementsByClassName("h2");
console.log(hand);
console.dir(hand);

const three = document.getElementsByTagName("h1")
console.log(three);
console.dir(three);

const one = document.querySelectorAll(".name");
console.dir(one);


let java = document.querySelector("#heading");
console.dir(java);
console.log(java.innerText + ' from Apna College');
//   TO make a CHANGE in Current webpage
java.innerText = java.innerText + " from Apna College";
java.style.backgroundColor = 'aqua';

const iam = java.getAttribute('id');
console.log(iam);

const you = java.setAttribute('id', 'square');
console.log(you);

const dabba = document.querySelectorAll('.box');
console.log(dabba);

dabba[0].style.backgroundColor = 'orange';
dabba[0].style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
dabba[0].style.boxShadow = '5px 5px 10px orange';

dabba[2].style.clipPath = ' polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
dabba[2].style.boxShadow = '5px 5px 10px green';
dabba[2].style.overFlow = 'scroll';


dabba[1].style.borderRadius = '50%';
dabba[1].style.boxShadow = '5px 5px 10px blue';

// DOM INsert Elements

let btn = document.createElement("div");
console.log(btn.innerText = 'Madhavan');

btn.style.width = '100px';
btn.style.height = '100px'
btn.style.backgroundColor = 'lightblue';
btn.style.display = 'flex';
btn.style.justifyContent = 'center';
btn.style.alignItems= 'center';


let bdy = document.querySelector(".maindiv");
console.log(bdy);

bdy.append(btn);

btn.style.width = 100, height = 100, backgroundColor = "white"; 

// created a div, now creating a button in the div. 

let now = document.createElement("button");
console.log(now.innerText = 'Click Me');

now.style.backgroundColor = 'red';
now.style.width = '90px';
now.style.height = '20px';
now.style.marginLeft = '4px';
now.style.marginTop = '4px';
now.style.color = 'white';
now.style.cursor = 'pointer';
now.style.border = 'none';
now.style.hover = 'scale(1.2)';

let newone = document.querySelector(".maindiv");
console.log(newone);

newone.append(now);

