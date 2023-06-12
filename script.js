//scores for player and computer (resets upon reaching 3)
let p = 0
let c = 0

function checkWinner(){
    if (p == 3 || c == 3) {
        if (p == 3) {
            p = 0;
            c = 0;
            return setTimeout(() => {roundResult.textContent = "Player Wins!"; }, 1000);
        }
        if (c == 3) {
            p = 0;
            c = 0;
            return setTimeout(() => {roundResult.textContent = "Computer Wins!"; }, 1000);
        }
    }
}

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"]
    
    const min = Math.ceil(0);
    const max = Math.floor(2);
    let random = Math.floor(Math.random() * (max-min + 1) + min);

    return choice[random];
}

function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())
    computerSelection = computerSelection.toLowerCase()
    computerSelection = computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase())

    if ((playerSelection == 'Rock' && computerSelection == 'Scissor') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissor' && computerSelection == 'Paper')) {
        p += 1;
        return(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if ((playerSelection == 'Scissor' && computerSelection == 'Rock') || (playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissor')) {
        c += 1;
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        return("It's a Tie!");
    }
}

const display = document.querySelector('.display');
const roundResult = document.createElement('div');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

rock.addEventListener('click', () => {
    roundResult.textContent = (oneRound('rock', getComputerChoice()))
    player.textContent = `Player: ${p}`
    computer.textContent = `Computer: ${c}`
    checkWinner()
})

paper.addEventListener('click', () => {
    roundResult.textContent = (oneRound('paper', getComputerChoice()))
    player.textContent = `Player: ${p}`
    computer.textContent = `Computer: ${c}`
    checkWinner()
})

scissors.addEventListener('click', () => {
    roundResult.textContent = (oneRound('scissor', getComputerChoice()))
    player.textContent = `Player: ${p}`
    computer.textContent = `Computer: ${c}`
    checkWinner()
})

display.appendChild(roundResult);


