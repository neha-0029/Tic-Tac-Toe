let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO =true; // playerx, player O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,7],
    [6,7,8]

];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
       if(turnO === true){
        box.innerText = "O";
        turnO = false;
       }
       else{
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;

       checkWinner();
    });
});

const checkWinner = () => {
      for(let pattern of winPatterns){

        let posiVal1 = boxes[pattern[0]].innerText;
        let posiVal2 = boxes[pattern[1]].innerText;
        let posiVal3 = boxes[pattern[2]].innerText;
        
         
        if(posiVal1 != "" && posiVal2 != "" && posiVal3 != ""){
              if(posiVal1 === posiVal2 && posiVal2 === posiVal3){
                console.log("winner", posiVal1);

                  
                showWinner(posiVal1);
              } 
              
        }
      }
}

const showWinner = (winner)=>{
msg.innerText = `Congratulations, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
};



const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

