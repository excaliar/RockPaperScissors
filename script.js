

function getComputerChoice() {
    choice = ["Rock", "Paper", "Scissor"]
    
    min = Math.ceil(0);
    max = Math.floor(2);
    random = Math.floor(Math.random() * (max-min + 1) + min);

    return choice[random];
}
