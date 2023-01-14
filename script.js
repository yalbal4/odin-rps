let playerScore = 0;
let computerScore = 0;

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
        if (computerSelection === 'Rock') {
            return "Tie. Rock ties Rock."
        }
        if (computerSelection === 'Paper') {
            computerScore++;
            return "You lose! Rock loses to Paper."
        }
        if (computerSelection === 'Scissors') {
            playerScore++;
            return "You win! Rock beats Scissors."
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'Rock') {
            playerScore++;
            return "You win! Paper beats Rock."
        }
        if (computerSelection === 'Paper') {
            return "Tie. Paper ties Paper."
        }
        if (computerSelection === 'Scissors') {
            computerScore++;
            return "You lose! Paper loses to Scissors"
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'Rock') {
            computerScore++;
            return "You lose! Scissors loses to Rock."
        }
        if (computerSelection === 'Paper') {
            playerScore++;
            return "You win! Scissors beats Paper."
        }
        if (computerSelection === 'Scissors') {
            return "Tie. Scissors ties Scissors"
        }
    }
}

function game() {
    // reset scores before each game
    playerScore = 0;
    computerScore = 0;
    for (let round = 0; round < 3; round++) {
        let playerSelection = prompt("Enter your rock-paper-scissors selection.");
        console.log(playRound(playerSelection,getComputerChoice()));
    }
    console.log("Player score: " + playerScore + ". Computer score: " + computerScore);
    console.log(declareWinner(playerScore,computerScore));
}

function declareWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "You won the game!"
    }
    if (computerScore > playerScore) {
        return "You lost the game :("
    }
    return "You tied."
}