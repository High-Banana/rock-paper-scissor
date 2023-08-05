let playerSelection;
let totalTries = 0;

function playerInput() {
    playerSelection = prompt("Enter your weapon: ");
    console.log(playerSelection);
}

function computerInput() {
    const options = ["rock", "paper", "scissor"];
    let computerSelection = options[Math.floor(Math.random() * 3)];
    console.log(computerSelection);
    return computerSelection;
}

while (totalTries < 5) {
    totalTries++;
    computerInput();
    playerInput();
}

