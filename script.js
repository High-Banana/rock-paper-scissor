const button = document.querySelectorAll(".btn");
const playerInputField = document.getElementById("playerChoice");
const computerInputField = document.getElementById("computerChoice");
const gameResultField = document.getElementById("gameResult");
const userScoreField = document.getElementById("user_score");
const computerScoreField = document.getElementById("computer_score");
const winnerField = document.getElementById("winner");

const options = ["rock", "paper", "scissor"];
let playerSelection;
let computerSelection;
let totalTries = 0;
let output;
let playerScore = 0;
let computerScore = 0;
let tries = 0;

    button.forEach((element) => {
        element.addEventListener("click", () => {
            playerSelection = (element.textContent).toLowerCase();
            
            //To get computer's selection from options array
            computerSelection = options[Math.floor(Math.random() * 3)];
            
            function displayGameOutput(){
                playerInputField.textContent = `You choose ${playerSelection}`; //Show player selection
                computerInputField.textContent = `Computer choose ${computerSelection}`; //Show CPU selection
                gameResultField.textContent = runGame(playerSelection, computerSelection); //Show result
                userScoreField.textContent = `${playerScore}`; //Show player score
                computerScoreField.textContent = `${computerScore}`; // Show computer score
            }
            displayGameOutput();
        })
    })

winnerField.text = displayWinner();



function runGame(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            output = `Tie! both choose ${playerSelection}`;
            break;
        case playerSelection === "rock" && computerSelection === "scissor":
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scissor" && computerSelection === "paper":
            output = `You win, ${playerSelection} beats ${computerSelection}`;
            playerScore++;
            break;
        case playerSelection === "rock" && computerSelection === "paper":
        case playerSelection === "paper" && computerSelection === "scissor":
        case playerSelection === "scissor" && computerSelection === "rock":
            output = `You lose, ${computerSelection} beats ${playerSelection}`;
            computerScore++;
            break;
        default:
            output = "Please enter a valid choice (Rock, paper or scissor)";
            totalTries--;
            break;
    }
    return output;
}

// while (totalTries < 5) {
//     totalTries++;
//     console.log(runGame(getUserInput(), getComputerSelection()));
// }

function displayWinner() {
    if (playerScore > computerScore) {
        return "*** YOU WON!!!! ***";
    } else if (playerScore === computerScore) {
        return "*** IT'S A DRAW!!! ***";
    } else {
        return "*** YOU LOST :( ***";
    }
}

function displayScore() {
    return `Your score: ${playerScore}\nComputer Score: ${computerScore}`;
}

// console.log(displayWinner());
// console.log(displayScore());
