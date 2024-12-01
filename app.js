const choices = ["rock", "paper", "scissors"];
const resultDiv = document.getElementById("result");

//choice randomly
function getRandomChoice(){
    const randomItem = Math.floor(Math.random()* choices.length);
    return choices[randomItem];
}

function determineWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "It is a tie! Handshake!";
    }
    if((playerChoice  === "rock" && computerChoice === "scissors") ||
    (playerChoice  === "scissors" && computerChoice === "paper") ||
    (playerChoice  === "paper" && computerChoice === "rock")){
        return "You win! Party time!";
    }
    else{
        return "Computer wins!";
    }
}

function playGame(playerChoice){
    const computerChoice = getRandomChoice();
    const result = determineWinner(playerChoice,computerChoice);
    let text = `<p>Your chose: ${playerChoice}</p> <p>Computer chose: ${computerChoice}</p> <p>${result}</p>`;
    resultDiv.innerHTML =text;
}

//binding buttons
document.getElementById("rock").addEventListener("click",()=>playGame("rock"));
document.getElementById("paper").addEventListener("click",()=>playGame("paper"));
document.getElementById("scissors").addEventListener("click",()=>playGame("scissors"));