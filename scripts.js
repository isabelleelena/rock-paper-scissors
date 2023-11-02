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

const results = document.querySelector('div');
const resultText = document.createElement('p');
results.appendChild(resultText);

let playerScore = 0;
let computerScore = 0;
let round = 0;

function playRound(playerSelection, computerSelection) {
    if (playerScore < 5 && computerScore < 5) {
        switch(playerSelection + computerSelection) {
            case "RockPaper":
            case "PaperScissors":
            case "ScissorsRock":
                computerScore += 1;
                round += 1;
                resultText.innerText = `Round ${round}: You played ${playerSelection}. Computer played ${computerSelection}. Computer wins round ${round}! \nYour score: ${playerScore}. Computer score: ${computerScore}.`;
                break;

            case "RockScissors":
            case "ScissorsPaper":
            case "PaperRock":
                playerScore += 1;
                round += 1;
                resultText.innerText = `Round ${round}: You played ${playerSelection}. Computer played ${computerSelection}. You win round ${round}! \nYour score: ${playerScore}. Computer score: ${computerScore}.`;
                break;

            case "RockRock":
            case "PaperPaper":
            case "ScissorsScissors":
                round += 1;
                resultText.innerText = `Round ${round}: You tied with the computer! \nYour score: ${playerScore}. Computer score: ${computerScore}.`;
                break;
        }
    } 
    
    if (playerScore == 5) {
        resultText.innerText += "\nPlayer is the ultimate winner!"
    } else if (computerScore == 5) {
        resultText.innerText += "\nComputer is the ultimate winner!"
    }
}

function checkWinner (pScore, cScore) {
    if (pScore == 5) {
        results.innerText(`Player is the ultimate winner!`);
    } else if (cScore == 5) {
        results.innerText(`Computer is the ultimate winner!`);
    }
}

const buttons = document.querySelectorAll('input');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value, getComputerChoice());
        //checkWinner(playerScore, computerScore)
    })
})


