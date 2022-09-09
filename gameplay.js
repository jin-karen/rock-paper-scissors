function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const pick = Math.floor(Math.random()*3);
    const randomPlay = choices[pick]
    console.log(randomPlay)
}

computerPlay()

function playRound() {}