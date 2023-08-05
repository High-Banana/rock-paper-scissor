let playerSelection;
let totalTries = 0;

function playerInput(){
    playerSelection = prompt("Enter your weapon: ");
    console.log(playerSelection);
}

while(totalTries<5){
    totalTries++;
    playerInput();
}