const rockButton = document.querySelector('.rock');

rockButton.addEventListener('click', () => {console.log("You clicked a button.")});


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

function playRound(playerSelection, computerSelection) {

        switch(playerSelection + computerSelection) {
            case "RockPaper":
            case "PaperScissors":
            case "ScissorsRock":
                console.log(`Computer wins, you lose!`);

            case "RockScissors":
            case "ScissorsPaper":
            case "PaperRock":
                console.log(`You beat the computer!`);
            
            case "RockRock":
            case "PaperPaper":
            case "ScissorsScissors":
                console.log(`You tied with the computer`);
        }
}
