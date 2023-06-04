

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

function game() {
    player = 0
    computer = 0
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice()
        playerSelection = prompt("Rock, Paper or Scissor?")
        round = oneRound(playerSelection, computerSelection)
        if (round == `You Win! ${playerSelection} beats ${computerSelection}`) {
            player += 1;
        } else if (`You Lose! ${computerSelection} beats ${playerSelection}`){
            computer += 1;
        }
    }
    if (player > computer) {
        return("Players Wins!");
    } else if (computer > player) {
        return("Computer Wins!");
    } else {
        return("It's a Tie!")
    }
}

console.log(game())
