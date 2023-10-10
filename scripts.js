function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 1) {
       return "Paper";
    } else if (randomNumber == 2) {
        return "Rock";
    } else {
        return "Scissors";
    }
}

function gamePlay(playerSelection, computerSelection) {

        switch(playerSelection + computerSelection) {
            case "RockPaper":
            case "PaperScissors":
            case "ScissorsRock":
                return `Computer wins, you lose!`;

            case "RockScissors":
            case "ScissorsPaper":
            case "PaperRock":
                return `You beat the computer!`;
            
            case "RockRock":
            case "PaperPaper":
            case "ScissorsScissors":
                return `You tied with the computer`;
        }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i < 5; i++) {
        let round = gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice());
        if (round == `Computer wins, you lose!`){
            computerScore += 1;
            console.log(`Computer wins round ${(i+1)}. Score is ${computerScore}/${playerScore}.`)
        } else if (round == `You beat the computer!`){
            playerScore += 1;
            console.log(`You win round ${(i+1)}. Score is ${computerScore}/${playerScore}.`)
        } else {
            console.log(`You tied with the computer on round ${i+1}. Score is ${computerScore}/${playerScore}.`)
        }
    }
    if (computerScore > playerScore) {
        console.log(`Computer is the ultimate winner! Score is ${computerScore}/${playerScore}.`)
    } else if (computerScore < playerScore) {
        console.log(`You are the ultimate winner! Score is ${computerScore}/${playerScore}.`)
    } else {
        console.log(`You tied with the computer overall. Score is ${computerScore}/${playerScore}.`)
    }
}
