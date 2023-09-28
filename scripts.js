// Global Variables

let playerScore = 0;
let computerScore = 0;

// Game

function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    let newPlayerSelection = playerSelection.toLowerCase();
    if (newPlayerSelection === computerSelection) {
        return "tie";
    }

    // player win outcomes
    if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        playerScore++;
    }

    // computer win outcomes
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
    ) {
        computerScore++;
    }

    updateScoreboard();
}

/*
function game() {
    let playerWins = 0;
    let computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        let playerSelection = prompt("Choose rock, paper, or scissor.").toLowerCase();
        let pass = false;
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor") {
            pass = true;
        }
        while (!pass) {
            playerSelection = prompt("Invalid input. Please enter rock, paper, or scissor.").toLowerCase();
            if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor") {
                pass = true;
            }
        }
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === "player") {
            playerWins++;
        }
        else if (result === "computer") {
            computerWins++;
        }
        else {

        }
    }
    if (playerWins === 5) {
        console.log("You win!");
    }
    else {
        console.log("Computer wins!");
    }
}
*/

// UI

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");
const playerScoreParameter = document.getElementById("playerScore");
const computerScoreParameter = document.getElementById("computerScore");

rockButton.addEventListener('click', () => handleClick("rock"));
paperButton.addEventListener('click', () => handleClick("paper"));
scissorButton.addEventListener('click', () => handleClick("scissor"));


function handleClick(playerSelection) {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

function updateScoreboard() {
    playerScoreParameter.textContent = `${playerScore}`;
    computerScoreParameter.textContent = `${computerScore}`;
}