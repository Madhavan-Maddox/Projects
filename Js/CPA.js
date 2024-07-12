// callback
function sum(a, b){
    console.log(a+b);
}
function calculate(a, b, sumfun){
    sumfun(a,b);
}

calculate(1,2,sum);


// CALLBACK HELL using getData and getNextData

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("Data =",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
getData(1, ()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});


// Promises 

const promise = ()=>{
    return new Promise((resolve, reject)=>{
        console.log("Promised.");
        resolve("yes you did.");
        // reject("You must have to keep your Promise");
    });
}

let onePromise = promise();
onePromise.then((res)=>{
    console.log("The Promise was Fulfilled.");
});

let twoPromise = promise();
twoPromise.catch((err)=>{
    console.log("You have to keep up yours promises.");
});


// Promise chain

function asyncFun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("Success");
        }, 5000);
    });
}

function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        }, 5000);
    });
}

console.log("Feteching Data1....");
asyncFun1().then((res)=>{
    setTimeout(()=>{console.log("Fetching Data2....");
    }, 1000);
    asyncFun2().then((res)=>{

    });
});


//  IIFE Immediatly Invoked Function Expression

function student(studentId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(studentId);
            resolve("Correct");
        }, 2000);
    });
}

async function stdList(){
    await student(1);
    console.log("Madhavan Neerati.");
    await student(2);
    console.log("sai");
    await student(3);
    console.log("Sumanth");
}

(async function() {
    await student(1);
    console.log("Madhavan Neerati.");
    await student(2);
    console.log("sai");
    await student(3);
    console.log("Sumanth");
}) ();