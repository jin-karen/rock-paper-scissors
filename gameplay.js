function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const pick = Math.floor(Math.random() * 3);
    return choices[pick];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a tie! You both played rock!";
        } else if (computerSelection === "paper") {
            computerScore = ++computerScore
            return "You lose! Paper beats rock!";
        } else if (computerSelection === "scissors") {
            playerScore = ++playerScore
            return "You win! Rock beats scissors!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore = ++playerScore
            return "You win! Paper beats rock!";
        } else if (computerSelection === "paper") {
            return "It's a tie! You both played paper!";
        } else if (computerSelection === "scissors") {
            computerScore = ++computerScore
            return "You lose! Scissors beats paper!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore = ++computerScore
            return "You lose! Rock beats scissors!";
        } else if (computerSelection === "paper") {
            playerScore = ++playerScore
            return "You win! Paper beats scissors!";
        } else if (computerSelection === "scissors") {
            return "It's a tie! You both played scissors!";
        }
    } else {
        const playerSelection = (prompt("Please pick a valid choice. Would you like to pick rock, paper, or scissors?")).toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = (prompt("Would you like to pick rock, paper, or scissors?")).toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score: " + playerScore + "; Computer Score: " + computerScore)
    }
}

let playerScore = 0;
let computerScore = 0;
game()