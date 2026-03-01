let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];


function computerPlay() {
    const numIndex = Math.floor(Math.random() * 3);
    return choices[numIndex];
}

function playerChoice() {
    let choice = prompt('Enter your choice (rock, paper, scissors):').toLowerCase();
    if (choices.includes(choice)) {
        return choice;
    } else {
        alert('Invalid choice! Please try again.');
        return playerChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock' ||
        playerSelection === 'paper' && computerSelection === 'paper') {
        alert(`It's a tie! Both chose ${playerSelection}.`);
    }
    else if ((playerSelection === 'scissors' && computerSelection === 'scissors')){
        alert(`BOLLERAA! Ambos eligieron ${playerSelection}.`);
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
             (playerSelection === 'paper' && computerSelection === 'rock') ||
             (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        alert(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
    else {
        computerScore++;
        alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
    alert(`Score: You ${playerScore} - Computer ${computerScore}`);
}

function showWinner() {
    if (playerScore === 5) {
        alert('Congratulations! You won the game!');
    }
    else if (computerScore === 5) {
        alert('Sorry! The computer won the game!');
    }
}

function game() {
    alert('Welcome to Rock, Paper, Scissors!');
    alert('First to 5 wins!');
    alert('Let\'s start!');

    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = playerChoice();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    showWinner();
    alert('Thanks for playing! Refresh the page to play again.');
}

game();