const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.game-play > button');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const display = document.querySelector('h1');
const resultsDiv = document.querySelector('.results');
let playerPoint = 0;
let computerPoint = 0;

function computerSelection () {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound (playerChoice, computerChoice) {
    playerChoice = this.classList.value;
    computerChoice = computerSelection();
    document.body.classList.add('display-result');
    let p = document.createElement('p');

    if (((playerChoice === 'rock') && (computerChoice === 'scissors')) || 
        ((playerChoice === 'paper') && (computerChoice === 'rock')) ||
        ((playerChoice === 'scissors') && (computerChoice === 'paper'))) {
            playerPoint += 1;
            playerScore.innerText = playerPoint;
            p.innerText = `You win! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
            p.setAttribute('style', 'text-align: center; color:green; font-size: large');
    } else if (((playerChoice === 'paper') && (computerChoice === 'scissors')) || 
        ((playerChoice === 'scissors') && (computerChoice === 'rock')) ||
        ((playerChoice === 'rock') && (computerChoice === 'paper'))) {
            computerPoint += 1;
            computerScore.innerText = computerPoint;
            p.innerText = `You Lose ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}.`;
            p.setAttribute('style', 'text-align: center; color:red; font-size: large');
    } else {
        p.innerText = `It's a draw, You both chose ${computerChoice.toUpperCase()}.`;
        p.setAttribute('style', 'text-align: center; color:skyblue; font-size: large');
    };

    if (playerPoint == 5) {

        display.innerText = 'You Win!!! Hurray!!!';
        container.classList.add('new-game');
        setTimeout(() => container.classList.contains('new-game') && container.classList.add('new-game-active'));
        container.style.backgroundColor = 'green';
        

    } else if (computerPoint == 5) {

        display.innerText = 'You Lose';
        container.classList.add('new-game');
        setTimeout(() => container.classList.contains('new-game') && container.classList.add('new-game-active'));
        container.style.backgroundColor = 'red';
    
    }
    resultsDiv.appendChild(p);

}

function replay () {
    container.classList.remove('new-game', 'new-game-active');
    document.body.classList.remove('dispay-result');
    container.removeAttribute('style');
    computerPoint = 0;
    computerScore.innerText = 0;
    playerPoint = 0;
    playerScore.innerText = 0;
    resultsDiv.innerHTML = '';
}


buttons.forEach(button => button.addEventListener('click', playRound))