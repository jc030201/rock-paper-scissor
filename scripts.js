function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}