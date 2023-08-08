const options = ["Rock", "Paper", "Scissor"];
const button = document.querySelectorAll(".game_button");
const userChoice = document.getElementById("user_choice");
const computerChoice = document.getElementById("computer_choice");
const gameResult = document.getElementById("game_result");
const playerScoreField = document.getElementById("player_score");
const computerScoreField = document.getElementById("computer_score");
const winnerField = document.getElementById("output_winner");
const resultDisplaySection = document.getElementById("display_result_section");
let playerSelection, computerSelection, output;
let totalTries = 0;
let playerScore = 0;
let computerScore = 0;


button.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const selectedButton = button.textContent;
        playerSelection = selectedButton.toLowerCase();
        const computerText = options[Math.floor(Math.random() * 3)];
        computerSelection = computerText.toLowerCase();
        
        function displayOutput(){
            userChoice.textContent = selectedButton;
            computerChoice.textContent = computerText;
            gameResult.textContent = runGame(playerSelection, computerSelection);
            playerScoreField.textContent = playerScore;
            computerScoreField.textContent = computerScore;
            if(playerScore==5||computerScore==5){
                if(playerScore>computerScore){
                    winnerField.textContent = "YOU WIN!!";
                }else{
                    winnerField.textContent = "YOU LOSE :(";
                }
            }
        }
        if(playerScore==5||computerScore==5){
            return;
        }else{
            displayOutput();
        }
    })
})

function runGame(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            output = `Tie! both choose ${playerSelection}`;
            break;
        case playerSelection === "rock" && computerSelection === "scissor":
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scissor" && computerSelection === "paper":
            output = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
            break;
        case playerSelection === "rock" && computerSelection === "paper":
        case playerSelection === "paper" && computerSelection === "scissor":
        case playerSelection === "scissor" && computerSelection === "rock":
            output = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
            break;
        default:
            totalTries--;
            break;
    }
    return output;
}

// while (totalTries < 5) {
//     totalTries++;
//     console.log(runGame(getuserInput(), getComputerSelection()));
// }

function displayWinner(){
    if(playerScore>computerScore){
        return "*** YOU WON!!!! ***";
    }else if(playerScore===computerScore){
        return "*** IT'S A DRAW!!! ***";
    }else{
        return "*** YOU LOST :( ***";
    }
}

function displayScore(){
    return `Your score: ${playerScore}\nComputer Score: ${computerScore}`;
}

// console.log(displayWinner());
// console.log(displayScore());