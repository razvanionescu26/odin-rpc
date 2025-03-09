function generateRandomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}

function getComputerChoice() {
    let computerValue = generateRandomNumber();
    console.log(`Generated computer value ${computerValue}`);
    if (computerValue >=1 && computerValue <=3) {
        return "rock";
    } else if (computerValue >=4 && computerValue <=6) {
        return "paper";
    } else if (computerValue >=7 && computerValue <=10) {
        return "scissor";
    }
}