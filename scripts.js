function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    let newPlayerSelection = playerSelection.toLowerCase();
    if (newPlayerSelection === computerSelection) {
        return "It's a tie!";
    }

    else if (newPlayerSelection === "rock") {
        if (computerSelection === "paper") {
            return "Computer wins! Paper beats rock.";
        }
        else {
            return "You win! Rock beats scissor.";
        }
    }

    else if (newPlayerSelection === "paper") {
        if (computerSelection === "scissor") {
            return "Computer wins! Scissor beats paper.";
        }
        else {
            return "You win! Paper beats rock.";
        }
    }

    else {
        if (computerSelection === "rock") {
            return "Computer wins! Rock beats scissor.";
        }
        else {
            return "You win! Scissor beats paper.";
        }
    }
}

const playerSelection = 'scissor';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));