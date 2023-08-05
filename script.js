function getComputerChoice() {
    const options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random() * 3)];
}

const playerSelection = prompt("Enter your weapon: ").toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let result;
    switch (true) {
        case playerSelection === "rock" && computerSelection === "rock":
            result = "Tie, both choose rock";
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            result = "You lose!, paper beats rock";
            break;
        case playerSelection === "rock" && computerSelection === "scissor":
            result = "You win!, rock beats scissor";
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            result = "You win!, paper beats rock";
            break;
        case playerSelection === "paper" && computerSelection === "paper":
            result = "Tie!, both choose paper";
            break;
        case playerSelection === "paper" && computerSelection === "scissor":
            result = "You lose!, scissor beats paper";
            break;
        case playerSelection === "scissor" && computerSelection === "rock":
            result = "You lose!, rock beats scissor";
            break;
        case playerSelection === "scissor" && computerSelection === "paper":
            result = "You win!, scissor beats paper";
            break;
        case playerSelection === "scissor" && computerSelection === "scissor":
            result = "Tie!, both choose scissor";
            break;
        default:
            result = "Please enter a valid option (Rock, paper or scissor)";
            break;
    }
    console.log(result);
}

playRound(playerSelection, computerSelection);