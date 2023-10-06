function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber == 1) {
       return "Paper";
    } else if (randomNumber == 2) {
        return "Rock";
    } else if (randomNumber == 3) {
        return "Scissors";
    } else {
        return "Oops, try again.";
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

            case "RockOops, try again.":
            case "ScissorsOops, try again.":
            case "PaperOops, try again.":
                return `Computer made a mistake. Try again.`;
        }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer wins, you lose!`) {
        computerScore += 1
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You beat the computer!`) {
        playerScore += 1
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You tied with the computer`) {
        console.log("It's a tie, try again!")
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer made a mistake. Try again.`) {
        if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer wins, you lose!`) {
            computerScore += 1
        } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You beat the computer!`) {
            playerScore += 1
        } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You tied with the computer`) {
            console.log("It's a tie, try again!")
        }
    }
    console.log(`Your score is ${playerScore}. The computer's score is ${computerScore}.`)
    if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer wins, you lose!`) {
        computerScore += 1
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You beat the computer!`) {
        playerScore += 1
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You tied with the computer`) {
        console.log("It's a tie, try again!")
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer made a mistake. Try again.`) {
        if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer wins, you lose!`) {
            computerScore += 1
        } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You beat the computer!`) {
            playerScore += 1
        } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You tied with the computer`) {
            console.log("It's a tie, try again!")
        }
    }
    console.log(`Your score is ${playerScore}. The computer's score is ${computerScore}.`)
    if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer wins, you lose!`) {
        computerScore += 1
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You beat the computer!`) {
        playerScore += 1
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You tied with the computer`) {
        console.log("It's a tie, try again!")
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer made a mistake. Try again.`) {
        if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer wins, you lose!`) {
            computerScore += 1
        } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You beat the computer!`) {
            playerScore += 1
        } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You tied with the computer`) {
            console.log("It's a tie, try again!")
        }
    }
    console.log(`Your score is ${playerScore}. The computer's score is ${computerScore}.`)
    if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer wins, you lose!`) {
        computerScore += 1
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You beat the computer!`) {
        playerScore += 1
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You tied with the computer`) {
        console.log("It's a tie, try again!")
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer made a mistake. Try again.`) {
        if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer wins, you lose!`) {
            computerScore += 1
        } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You beat the computer!`) {
            playerScore += 1
        } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You tied with the computer`) {
            console.log("It's a tie, try again!")
        }
    }
    console.log(`Your score is ${playerScore}. The computer's score is ${computerScore}.`)
    if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer wins, you lose!`) {
        computerScore += 1
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You beat the computer!`) {
        playerScore += 1
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You tied with the computer`) {
        console.log("It's a tie, try again!")
    } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer made a mistake. Try again.`) {
        if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `Computer wins, you lose!`) {
            computerScore += 1
        } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You beat the computer!`) {
            playerScore += 1
        } else if (gamePlay(prompt("Rock, Paper or Scissors?"), getComputerChoice()) == `You tied with the computer`) {
            console.log("It's a tie, try again!")
        }
    }
    console.log(`Your score is ${playerScore}. The computer's score is ${computerScore}.`)
    
    if (computerScore > playerScore) {
        return `Computer score is ${computerScore} and your score is ${playerScore}! Computer wins!`
    } else if (computerScore < playerScore) {
        return `Computer score is ${computerScore} and your score is ${playerScore}! You win!`
    } else {
        return `You are tied!`
    }
}
