const video = document.querySelector("video");
const nav = document.querySelector("nav");
const box = document.querySelector(".box");

nav.addEventListener("click", (event)=>{
    box.style.filter = 'blur(10px)'
});

window.addEventListener("keydown", (event) =>{
    if( event.key === "a" || event.key === "A" )
    video.requestFullscreen();
    event.video.style.backdroundSize = "cover";
});

window.addEventListener("keyup", (event)=>{
    if( event.key === "f" || event.key === "F" ){
        video.requestPictureInPicture();
    }
});


const ball = document.querySelector(".ball");

ball.addEventListener("keydown", (event)=>{
    if( event.key === 'w' || event.key === 'W'){
        ball.move
    }
});

