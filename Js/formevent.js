const form = document.querySelector("form");
const username = document.querySelector(".name");
const pass = document.querySelector(".pass");
const p = document.querySelector(".para");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const strMinLength = 13;

// const char = /[@$#]/; //this is used to verify characters//
// const int = /\d/; //this will verify from 0-9 digits //

form.addEventListener("change", (e)=>{
    if( username.value === ""){
        p1.textContent = "Enter this field";
        p1.style.color = 'red';
    }
});

form.addEventListener("focusin", (event) =>{
    event.target.style.backgroundColor = "gray";
});

form.addEventListener("focusout", (e)=>{
    e.target.style = 'none';
    true;
})

form.addEventListener("change", (e)=>{
    if( pass.value.length < strMinLength){
        p2.textContent = "Pass must contain 13 characters";
        p2.style.color = 'red';
    }else{
        p2.textContent = 'Valid';
        p2.color = 'green';
    } 
});

form.addEventListener("submit",(e)=>{
    if( username.value === "" || pass.value.length < strMinLength){
        e.preventDefault();
        p.textContent = "Enter the details Correctly";
        p.style.color = 'red';
    
    }
});

