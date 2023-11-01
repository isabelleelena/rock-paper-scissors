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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
        switch(playerSelection + computerSelection) {
            case "RockPaper":
            case "PaperScissors":
            case "ScissorsRock":
                    computerScore += 1;
                    results.innerText += `\nComputer wins, you lose! The score is currently player score: ${playerScore}, computer score: ${computerScore}.`;
                    break;
                

            case "RockScissors":
            case "ScissorsPaper":
            case "PaperRock":
                    playerScore += 1;
                    results.innerText += `\nYou beat the computer! The score is currently player score: ${playerScore}, computer score: ${computerScore}.`;
                    break;
            
            
            case "RockRock":
            case "PaperPaper":
            case "ScissorsScissors":
                    results.innerText += `\nYou tied with the computer! The score is currently player score: ${playerScore}, computer score: ${computerScore}.`;
                    break;
        }
}

const buttons = document.querySelectorAll('input');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value, getComputerChoice())
    })
})


