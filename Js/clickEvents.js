let btn = document.querySelector("button");
console.log(btn);

let backgroundColor;

btn.addEventListener("click",()=>{
    if(backgroundColor === "Dark"){
       backgroundColor = "White";
       document.querySelector("body").style.backgroundColor = "white";
       btn.style.backgroundColor = 'black';
       btn.style.color = 'white';
    }else{
       backgroundColor = "Dark";
       document.querySelector("body").style.backgroundColor = "black";
       btn.style.backgroundColor = 'white';
       btn.style.color = 'black';
    }
     console.log(backgroundColor);
});


