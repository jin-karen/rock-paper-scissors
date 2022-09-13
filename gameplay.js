//player synonymous with camper; computer synonymous with bear - can be changed with story context
let playerName = "Camper";
let computerName = "Bear";

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const pick = Math.floor(Math.random() * 3);
    return choices[pick];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            results.textContent = "It's a tie! You both played rock!";
        } else if (computerSelection === "paper") {
            computerScore = ++computerScore
            results.textContent = `You lose! ${computerName} played ${computerSelection}! Paper beats rock!`;
        } else if (computerSelection === "scissors") {
            playerScore = ++playerScore
            results.textContent = `You win! ${computerName} played ${computerSelection}! Rock beats scissors!`;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore = ++playerScore
            results.textContent = `You win! ${computerName} played ${computerSelection}! Paper beats rock!`;
        } else if (computerSelection === "paper") {
            results.textContent = "It's a tie! You both played paper!";
        } else if (computerSelection === "scissors") {
            computerScore = ++computerScore
            results.textContent = `You lose! ${computerName} played ${computerSelection}! Scissors beats paper!`;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore = ++computerScore
            results.textContent = `You lose! ${computerName} played ${computerSelection}! Rock beats scissors!`;
        } else if (computerSelection === "paper") {
            playerScore = ++playerScore
            results.textContent = `You win! ${computerName} played ${computerSelection}! Paper beats scissors!`;
        } else if (computerSelection === "scissors") {
            results.textContent = "It's a tie! You both played scissors!";
        }
    } 
    player.textContent = `${playerName} Score:  ${playerScore}`; 
    computer.textContent = `${computerName} Score: ${computerScore}`;
    roundsPlayed += 1;
    rounds.textContent = `Rounds Played: ${roundsPlayed}`;
    if (playerScore === winner || computerScore === winner) {
        endGame();
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let winner = 5;

const body = document.querySelector("body");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const results = document.querySelector("#results");
const scores = document.querySelector("#scores");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const rounds = document.querySelector("#rounds");

rockBtn.addEventListener('click',() => {
    const computerSelection = getComputerChoice();
    let playerSelection = "rock";
    playRound(playerSelection,computerSelection);
});
paperBtn.addEventListener('click',() => {
    const computerSelection = getComputerChoice();
    let playerSelection = "paper";
    playRound(playerSelection,computerSelection);
});
scissorsBtn.addEventListener('click',() => {
    const computerSelection = getComputerChoice();
    let playerSelection = "scissors";
    playRound(playerSelection,computerSelection);
});

function endGame() {
    if (playerScore === winner) {
        results.textContent = "Congratulations, You Win!";
    } else {
        results.textContent = "Sorry, You Lose!";
    }        
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}
