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
    if (playerSelection === computerSelection) {
        return "tie";
    }

    // player win outcomes
    if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        playerScore++;
        updateScore();
        return "player";
    }

    // computer win outcomes
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
    ) {
        computerScore++;
        updateScore();
        return "computer";
    }
}

// UI

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");
const playerScoreParameter = document.getElementById("playerScore");
const computerScoreParameter = document.getElementById("computerScore");
const playerChoiceParameter = document.getElementById("playerChoice");
const computerChoiceParameter = document.getElementById("computerChoice");

rockButton.addEventListener('click', () => handleClick("rock"));
paperButton.addEventListener('click', () => handleClick("paper"));
scissorButton.addEventListener('click', () => handleClick("scissor"));


function handleClick(playerSelection) {
    let computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
}

function updateScore() {
    playerScoreParameter.textContent = `${playerScore}`;
    computerScoreParameter.textContent = `${computerScore}`;
}

function updateChoices(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            playerChoiceParameter.textContent = "✊";
            break
        case "paper":
            playerChoiceParameter.textContent = "✋";
            break
        case "scissor":
            playerChoiceParameter.textContent = "✌️";
            break
    }

    switch(computerSelection) {
        case "rock":
            computerChoiceParameter.textContent = "✊";
            break
        case "paper":
            computerChoiceParameter.textContent = "✋";
            break
        case "scissor":
            computerChoiceParameter.textContent = "✌️";
            break
    }
}