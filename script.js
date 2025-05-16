let buttons = document.querySelectorAll('.choice');
let humanScore = document.querySelector('#human');
let computerScore = document.querySelector('#computer');
let drawMsg = document.querySelector('#draw');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        let humanChoice = e.target.id;
        playRound(humanChoice);
    })
})

function playRound(choice) {
    let num = Math.floor(Math.random() * 3) + 1;
    let computerChoice = num == 1 ? 'rock' : num == 2 ? 'paper' : 'scissors';

    console.log(`humanChoice: ${choice} | computerChoice: ${computerChoice}`);
    if (choice == computerChoice) {
        drawMsg.textContent = 'Draw!';
    } else {
        drawMsg.textContent = '';
        if (choice == 'rock') {
            if (computerChoice == 'paper') {
                computerScore.textContent = ++computerScore.textContent;
            } else {
                humanScore.textContent = ++humanScore.textContent;
            }
        } else if (choice == 'paper') {
            if (computerChoice == 'rock') {
                humanScore.textContent = ++humanScore.textContent;
            } else {
                computerScore.textContent = ++computerScore.textContent;
            }
        } else {
            if (computerChoice == 'paper') {
                humanScore.textContent = ++humanScore.textContent;
            } else {
                computerScore.textContent = ++computerScore.textContent;
            }
        }
    }
}