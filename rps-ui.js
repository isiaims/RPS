const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.game-play > button');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const display = document.querySelector('h1');
let playerPoint = 0;
let computerPoint = 0;

function computerSelection () {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound (playerChoice, computerChoice) {
    playerChoice = this.classList.value;
    computerChoice = computerSelection();

    if (((playerChoice === 'rock') && (computerChoice === 'scissors')) || 
        ((playerChoice === 'paper') && (computerChoice === 'rock')) ||
        ((playerChoice === 'scissors') && (computerChoice === 'paper'))) {
            playerPoint += 1;
            playerScore.innerText = playerPoint;
    } else if (((playerChoice === 'paper') && (computerChoice === 'scissors')) || 
        ((playerChoice === 'scissors') && (computerChoice === 'rock')) ||
        ((playerChoice === 'rock') && (computerChoice === 'paper'))) {
            computerPoint += 1;
            computerScore.innerText = computerPoint;
    } else return;

    if (playerPoint == 5) {

        display.innerText = 'You Win!!! Hurray!!!';
        container.classList.add('new-game');
        container.style.backgroundColor = 'green';
        

    } else if (computerPoint == 5) {

        display.innerText = 'You Lose';
        container.classList.add('new-game');
        container.style.backgroundColor = 'red';
    
    }

}

function replay () {
    container.classList.remove('new-game');
    container.removeAttribute('style');
    computerPoint = 0;
    computerScore.innerText = 0;
    playerPoint = 0;
    playerScore.innerText = 0;
}


buttons.forEach(button => button.addEventListener('click', playRound))