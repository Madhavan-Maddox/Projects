
let btn = document.querySelector(".div");
 
function random(number){
    return Math.floor(Math.random()*(number +1));
}

btn.addEventListener("focusin", (event)=>{
    const randColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = randColor;
});

btn.addEventListener("focusout", ()=>{
    const randColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.background = randColor;
});