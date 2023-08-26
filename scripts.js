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

    else if (newPlayerSelection === "rock") {
        if (computerSelection === "paper") {
            return "computer";
        }
        else {
            return "player";
        }
    }

    else if (newPlayerSelection === "paper") {
        if (computerSelection === "scissor") {
            return "computer";
        }
        else {
            return "player";
        }
    }

    else {
        if (computerSelection === "rock") {
            return "computer";
        }
        else {
            return "player";
        }
    }
}


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

// UI

