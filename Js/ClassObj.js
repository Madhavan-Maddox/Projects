const parent={
    fullName : "NMC",
    totMem : 4,
    love(){
        console.log("Equality");
    }
}

const child ={
    userName : "Maddox",
    style(){
        console.log("I Love Javascript");
    }
}

child.__proto__ = parent;
console.log(child);

// CLASS 

class Ferrari{
    constructor(monster){
        console.log("Wellcome")
       
    }
    start(){
        console.log("Ferrai is started");
    }
    speed(){
        console.log("Speed is 150 km/h");
    }
};

class Mustag {
    constructor(){
        console.log("Mustag is arrived.")
        
    }
    model(){
        console.log("This model is from 1959.");
    }
}
let crown = new Ferrari();
let bugati = new Mustag();


// Inheritance is passing parent class properties and methods to child class

class Father {
    
    properties(){
        console.log("Love is only Property.");
    }
    status(){
        console.log("Living in high status.");
    }
}

class Son extends Father{
    
    happy(){
        console.log("Living Happylly");
    }
}
let newChild = new Son();


// Super keywords

class Madhav{
    constructor(name){
        this.name = name;
    }
    proposal(){
        console.log("Will U Marry Me ");
    }
}

class Suji extends Madhav{
    constructor(name){
        super();
        this.name = name;
    }
    answer(){
        super.proposal();
        console.log("Yes, I will marry you.")
    }
}
let result = new Suji("Wedding");


// Practise Question 
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("View Data.");
    }
}

class Admin extends User{
    constructor(name, email){
        super();
        this.name = name;
        this.email = email;
    }
    editData(){
        console.log('Edit Data.');
    }
}
let profile = new Admin("Madhavan","madhavan@gmail.com");
