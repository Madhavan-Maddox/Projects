//  Non-Primitive DataType (OBJECT)
const profile = {
    userName : "ShradhaKhapra",
    posts : 123,
    follow : true,
    followers : 100000,
};
console.log(profile.followers);

const product = {
    Name : "Ball Pen",
    cost : 50,
    offer : 5,
    rating : 4,
};
console.log(product);


// Declerative and Updates for VARIABLR using keywords (var, let, const)
var age = "18";
var age = "20";
var age = "24";
console.log(age);


let isName = "Madhavan";
isName = "MS";
isName = "MadMax";
console.log(isName); 

const userName = 'Madhavan Neerati'
console.log(userName);


//   Primitive DataType 7types
let number = "23";
console.log(number);

let Name = "Madhavan";
console.log(Name);

let isFollow = "True";
console.log(isFollow);

let X = BigInt('123');
console.log(X);

let Y = Symbol("Yo!");
console.log(Y);

let value;
console.log(value);

let set = null;
console.log(set);

// If we want to change values in Object(By using Keys:Values)
const bio ={
    userId : "Mad",
    rollNo : 17,
    student : true,
    Rank : 7,
};
bio.Rank = bio.Rank -1
console.log(bio);

