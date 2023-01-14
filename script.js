function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);
    if (choice === 0) {return "Rock"}
    else if (choice === 1) {return "Paper"}
    else {return "Scissors"};
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    console.log("Player: " + playerSelection + ". Computer: " + computerSelection)

    if (playerSelection === 'rock') {
        if (computerSelection === 'Rock') {return "Tie. Rock ties Rock."}
        if (computerSelection === 'Paper') {return "You lose! Rock loses to Paper."}
        if (computerSelection === 'Scissors') {return "You win! Rock beats Scissors."}
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'Rock') {return "You win! Paper beats Rock."}
        if (computerSelection === 'Paper') {return "Tie. Paper ties Paper."}
        if (computerSelection === 'Scissors') {return "You lose! Paper loses to Scissors"}
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'Rock') {return "You lose! Scissors loses to Rock."}
        if (computerSelection === 'Paper') {return "You win! Scissors beats Paper."}
        if (computerSelection === 'Scissors') {return "Tie. Scissors ties Scissors"}
    }
}