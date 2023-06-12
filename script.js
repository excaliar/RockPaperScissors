

function getComputerChoice() {
    choice = ["Rock", "Paper", "Scissor"]
    
    min = Math.ceil(0);
    max = Math.floor(2);
    random = Math.floor(Math.random() * (max-min + 1) + min);

    return choice[random];
}

function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())
    computerSelection = computerSelection.toLowerCase()
    computerSelection = computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase())

    if ((playerSelection == 'Rock' && computerSelection == 'Scissor') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissor' && computerSelection == 'Paper')) {
        return(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if ((playerSelection == 'Scissor' && computerSelection == 'Rock') || (playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissor')) {
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        return("It's a Tie!");
    }
}

const display = document.querySelector('.display');
const roundResult = document.createElement('div');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

rock.addEventListener('click', () => {
    roundResult.textContent = (oneRound('rock', getComputerChoice()))
})

paper.addEventListener('click', () => {
    roundResult.textContent = (oneRound('paper', getComputerChoice()))
})

scissors.addEventListener('click', () => {
    roundResult.textContent = (oneRound('scissor', getComputerChoice()))
})

display.appendChild(roundResult);

