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
            return `You lose! Computer played ${computerSelection}! Paper beats rock!`;
        } else if (computerSelection === "scissors") {
            playerScore = ++playerScore
            return `You win! Computer played ${computerSelection}! Rock beats scissors!`;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore = ++playerScore
            return `You win! Computer played ${computerSelection}! Paper beats rock!`;
        } else if (computerSelection === "paper") {
            return "It's a tie! You both played paper!";
        } else if (computerSelection === "scissors") {
            computerScore = ++computerScore
            return `You lose! Computer played ${computerSelection}! Scissors beats paper!`;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore = ++computerScore
            return `You lose! Computer played ${computerSelection}! Rock beats scissors!`;
        } else if (computerSelection === "paper") {
            playerScore = ++playerScore
            return `You win! Computer played ${computerSelection}! Paper beats scissors!`;
        } else if (computerSelection === "scissors") {
            return "It's a tie! You both played scissors!";
        }
    } 
}
/*
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = (prompt("Would you like to pick rock, paper, or scissors?")).toLowerCase();
        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            playerSelection = (prompt("Please pick a valid choice. Would you like to pick rock, paper, or scissors?")).toLowerCase();
        }
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score: " + playerScore + "; Computer Score: " + computerScore)
    }
}

let playerScore = 0;
let computerScore = 0;
game()*/

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const body = document.querySelector("body");
const buttons = document.querySelector("#buttons");
const results = document.querySelector("#results");
const scores = document.querySelector("#scores");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const rounds = document.querySelector("#rounds");

rockBtn.addEventListener('click',() => {
    const computerSelection = getComputerChoice();
    let playerSelection = "rock";
    results.textContent = `${playRound(playerSelection,computerSelection)}`;
    player.textContent = `Player Score:  ${playerScore}`; 
    computer.textContent = `Computer Score: ${computerScore}`;
    roundsPlayed += 1;
    rounds.textContent = `Rounds Played: ${roundsPlayed}`;
});
paperBtn.addEventListener('click',() => {
    const computerSelection = getComputerChoice();
    let playerSelection = "paper";
    results.textContent = `${playRound(playerSelection,computerSelection)}`;
    player.textContent = `Player Score:  ${playerScore}`; 
    computer.textContent = `Computer Score: ${computerScore}`;
    roundsPlayed += 1;
    rounds.textContent = `Rounds Played: ${roundsPlayed}`;
});
scissorsBtn.addEventListener('click',() => {
    const computerSelection = getComputerChoice();
    let playerSelection = "scissors";
    results.textContent = `${playRound(playerSelection,computerSelection)}`;
    player.textContent = `Player Score:  ${playerScore}`; 
    computer.textContent = `Computer Score: ${computerScore}`;
    roundsPlayed += 1;
    rounds.textContent = `Rounds Played: ${roundsPlayed}`;
});

