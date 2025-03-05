// logic for computer's choice
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    return num === 1 ? 'rock' : num === 2 ? 'paper' : 'scissors';
}

// logic to get human choice
function getHumanChoice() {
    let choice = prompt('Rock, Paper, or Scissors? (First to five wins)');
    return choice;
}

// score variables
let humanScore = 0;
let computerScore = 0;

// single round logic
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log('Draw!');
    }
    else {
        if (humanChoice == 'rock') {
            if (computerChoice == 'paper') {
                console.log("You lose! Paper beats Rock.")
                computerScore++;
            } else {
                console.log("You win! Rock beats Scissors.")
                humanScore++;
            }
        } else if (humanChoice == 'paper') {
            if (computerChoice == 'rock') {
                console.log("You win! Paper beats Rock.")
                humanScore++;
            } else {
                console.log("You lose! Scissors beats Paper.")
                computerScore++;
            }
        } else {
            if (computerChoice == 'paper') {
                console.log("You win! Scissors beats Paper.")
                humanScore++;
            } else {
                console.log("You lose! Rock beats Scissors.")
                computerScore++;
            }
        }
    }
    console.log(`you: ${humanScore}\t computer: ${computerScore}`);
}

// play game
function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    let result = (humanScore > computerScore) ? 'You win!' : 'Computer wins!';
    console.log(result); 
}

playGame();