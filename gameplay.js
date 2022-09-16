//based on story context and gameplay- values can be changed
let playerName = "Camper";
let computerName = "Bear";
let playerScore = 0;
let computerScore = 0;
let winner = 5;

//audio sounds
let btnSound = document.querySelector('#btnSound');
let winSound = document.querySelector('#winSound');
let loseSound = document.querySelector('#loseSound');

//different pages of the game
const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");
const helpScreen = document.querySelector("#helpScreen");
const endScreen = document.querySelector("#endScreen");

//buttons used to navigate pages and play game
const startBtn = document.querySelector("#startBtn");
const helpBtn = document.querySelector("#helpBtn");
const exitBtn = document.querySelector("#exitBtn");
const playAgainBtn = document.querySelector("#playAgainBtn");
const choiceBtns = document.querySelectorAll('.choiceBtn');

//animation and skip animation
const skipBtn = document.querySelector("#skipBtn");
const contextLine1 = document.querySelector("#contextLine1");
const contextLine2 = document.querySelector("#contextLine2");
const contextLine3 = document.querySelector("#contextLine3");
const contextLine4 = document.querySelector("#contextLine4");

//display for score and game results
const results = document.querySelector("#results");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const winnerResult = document.querySelector("#winnerResult");
const winnerImg = document.querySelector("#winnerImg");

//rounds played not visible but can be changed to view
let roundsPlayed = 0;
const rounds = document.querySelector("#rounds");

//start button - navigate from start to game screen
startBtn.addEventListener('click',() => {
    btnSound.play()
    startScreenAnimation();
    window.setTimeout(() => {
        startScreen.classList.toggle('hidden');
        gameScreen.classList.toggle('hidden');        
    }, 1000);
    gameScreenAnimation();
});

//animation
function startScreenAnimation() {
    const title = document.querySelector("#title");
    const subtitle = document.querySelector("#subtitle");
    title.setAttribute('style','transform: translate(-50%, -145%); transition: transform 1s;');
    subtitle.setAttribute('style','opacity: 0; transition: opacity 1s;');
}

function gameScreenAnimation() {
    skipBtn.classList.toggle('conceal');
    contextLine1.classList.toggle('appear');
    //delayed animation to reveal story lines one at a time
    contextLine2.setAttribute('style','animation-delay: 3s;');
    contextLine2.classList.toggle('appear');
    contextLine3.setAttribute('style','animation-delay: 6s;');
    contextLine3.classList.toggle('appear');
    contextLine4.setAttribute('style','animation-delay: 9s;');
    contextLine4.classList.toggle('appear');
    window.setTimeout(() => {    
        //run only if animation was not skipped to avoid revealing skip button
        if (!skipBtn.classList.contains('hidden')) {
            endAnimation();
        }
    }, 12000);
}

//skip button - skips animation on game screen
skipBtn.addEventListener('click',()=>{
    btnSound.play();
    endAnimation();
});

//ends animation and reveals game 
function endAnimation() {
    skipBtn.classList.toggle('hidden');
    //reveals rest of game by toggling off conceal
    const conceal = document.querySelectorAll('.conceal');
    for (const items of conceal) {
        items.classList.toggle('conceal');
    }
    //toggling off animation from context for 'play again' games
    const appear = document.querySelectorAll('.appear');
    for (const items of appear) {
        items.classList.toggle('appear');
    }
    contextLine2.setAttribute('style','animation-delay: 0s;');
    contextLine3.setAttribute('style','animation-delay: 0s;');
    contextLine4.setAttribute('style','animation-delay: 0s;');
}

//gameplay 
choiceBtns.forEach((button) => {
    button.addEventListener('click',() => {
        btnSound.play()
        const computerSelection = getComputerChoice();
        const img = button.querySelector("img");
        const playerSelection = img.alt;
        playRound(playerSelection,computerSelection);
    });
})

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

function endGame() {
    gameScreen.classList.toggle('hidden');
    endScreen.classList.toggle('hidden');
    if (playerScore === winner) {
        winSound.play()
        winnerResult.textContent = "Congratulations, You Win!";
        winnerImg.setAttribute('src', 'img/camper.png');
    } else {
        loseSound.play()
        winnerResult.textContent = "Sorry, You Lose!";
        winnerImg.setAttribute('src', 'img/bear.png');
    }    
    reset()
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    results.textContent = "Camper vs. Bear";
    player.textContent = "";//`${playerName} Score:  ${playerScore}`; 
    computer.textContent = "";//`${computerName} Score: ${computerScore}`;
}

//help button - navigate from game to help screen
helpBtn.addEventListener('click',() => {
    btnSound.play()
    gameScreen.classList.toggle('hidden');
    helpScreen.classList.toggle('hidden');
});

//exit button - navigate from help to game screen
exitBtn.addEventListener('click',() => {
    btnSound.play()
    helpScreen.classList.toggle('hidden');
    gameScreen.classList.toggle('hidden');
});

//play again button - navigate from end to game screen
playAgainBtn.addEventListener('click',() => {
    btnSound.play()
    endScreen.classList.toggle('hidden');
    gameScreen.classList.toggle('hidden');
});

