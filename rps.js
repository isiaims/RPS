function computerSelection () {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}
function playRound (computerChoice, playerChoice) {
  let playerScore = 0;
  
  if (((computerChoice == 'rock') && (playerChoice == 'paper')) ||
      ((computerChoice == 'paper') && (playerChoice == 'scissors')) ||
      ((computerChoice == 'scissors') && (playerChoice == 'rock'))) {
    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
    playerScore += 1;
  } else {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
  }
  return playerScore;
}
function play (round) {
  let playerPoint = 0;
  let i = 0
  while (i < round) {
    let playerSelect = prompt('Choose');
    playerSelect = playerSelect.toLowerCase();
    let computerSelect = computerSelection();
    if ((playerSelect != 'rock') && (playerSelect != 'scissors') && (playerSelect != 'paper')) {
      continue
    }
    if (playerSelect == computerSelect) {
      console.log (`It's a draw, you both selected ${playerSelect}`);
      continue
    }
    playerPoint += playRound (computerSelect, playerSelect);
    i++;
  }
  
  // Announce winner
  if (playerPoint > (round / 2)) {
    return `You win! Your point: ${playerPoint}`;
  } else if (playerPoint == (round / 2)) {
    return `It's a tie.`;
  } else {return `You lose. Your point: ${playerPoint}`;}
}
