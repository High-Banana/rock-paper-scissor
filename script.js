const options = ["rock", "paper", "scissor"];
let playerSelection;
let computerSelection;
let totalTries = 0;

function playerInput() {
    playerSelection = prompt("Enter your weapon: ").toLowerCase();
    return playerSelection;
}

function computerInput() {
    computerSelection = options[Math.floor(Math.random() * 3)];
    return computerSelection;
}

while (totalTries < 5) {
    totalTries++;
    computerInput();
    playerInput();
}

