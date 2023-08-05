function getComputerChoice(){
    const options = ["rock", "paper", "scissor"];
    console.log(options[Math.floor(Math.random()*3)]);
}

getComputerChoice();