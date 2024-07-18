let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".b2");
let play = document.querySelector(".b3")
let win = document.querySelector(".winner");
let para = document.querySelector("para");

let turnO = true;

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
    console.log("Btn clicked");

    if(turnO === true){
        box.innerText = "O";
        box.style.color = "darkgreen";
        box.classList.add("text");
        turnO = false;
    } else{
        box.innerText = "X";
        box.style.color = "blue";
        box.classList.add("text");
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
    });
});

let resetGame = () =>{
    turnO = true;
    win.style.display = "none";
    boxesEnable();
};

// making boxes disable //
let boxesDisabled = ()=>{
    boxes.forEach((box) =>{
       box.disabled = true;
    });
};

// making box enable to reset //
let boxesEnable = ()=>{
    boxes.forEach((box) =>{
        box.disabled = false;
        box.innerText = "";
    });
};

//    showing winner //

let showWinner = (pos1Val) =>{
    win.innerText = `Winner is "${pos1Val}" \n Congratulations`;
    win.style.display = "block";
    win.classList.add("w2");
    
   try{
    pos1Val.style.color = 'red';
   }catch{
    boxesDisabled();
   }
};

// win patterns and checking winner//
let winPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let checkWinner = () =>{
    for(let pattern of winPattern){
        // console.log(pattern);
        // console.log(pattern[0]);
        // console.log(pattern[1]);
        // console.log(pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        console.log(pos1Val, pos2Val, pos3Val);

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log(`Winner is ${pos1Val}`);
                
                showWinner(pos1Val);
            }
        }
    }
};

reset.addEventListener("click", resetGame);
play.addEventListener("click",resetGame);
