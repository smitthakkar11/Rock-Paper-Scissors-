let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gameDraw =() =>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw.";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner =(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You lose.  ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //generate computer choice ->modular
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice === compChoice){
        //Draw Game
        gameDraw();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp-> scissor,paper
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //comp-> scissors,rock
            userWin = compChoice==="scissors" ? false:true;
        }
        else{
            //user->scissors ; comp->rock,paper
            userWin = compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});