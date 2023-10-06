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

// Function must return the computer's choice and the player's choice.
function gamePlay(playerSelection, computerSelection) {
// There must be conditional statements for each possible win and lose scenario that then return who wins.
    // if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")) {
    //    return "Computer wins. You lose!";
    //} else if ((playerSelection == "Rock" && (computerSelection == "Scissors" || computerSelection == "Oops, try again computer! Automatic win for human player.")) || (playerSelection == "Paper" && (computerSelection == "Rock" || computerSelection == "Oops, try again computer! Automatic win for human player.")) || (playerSelection == "Scissors" && (computerSelection == "Paper" || computerSelection == "Oops, try again computer! Automatic win for human player."))) {
    //    return "You beat the computer!";
    //} else if ((playerSelection == computerSelection)) {
    //    return "You tied with the computer!"
    //} 

        switch(playerSelection + computerSelection) {
            case "RockPaper":
            case "PaperScissors":
            case "ScissorsRock":
                return `Your choice: ${playerSelection}
                Computer's choice: ${computerSelection}
                Computer wins, you lose!`;

            case "RockScissors":
            case "ScissorsPaper":
            case "PaperRock":
                return `Your choice: ${playerSelection}
                Computer's choice: ${computerSelection}
                You beat the computer!`;
            
            case "RockRock":
            case "PaperPaper":
            case "ScissorsScissors":
                return `Your choice: ${playerSelection}
                Computer's choice: ${computerSelection}
                You tied with the computer`;

            case "RockOops, try again.":
            case "ScissorsOops, try again.":
            case "PaperOops, try again.":
                return `Your choice: ${playerSelection}
                Computer's choice: ${computerSelection}
                Computer made a mistake. Try again.`;
        }
}
// The function will be called in the console.
// The player's choice will be the first argument.  
// The computer's choice will be accessed through calling the getComputerChoice function as the second argument. 