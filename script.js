let humanScore = 0;
let computerScore = 0;

function generateRandomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}

function getComputerChoice() {
    let computerValue = generateRandomNumber();
    console.log(`Generated computer value ${computerValue}`);
    if (computerValue >= 1 && computerValue <= 3) {
        return "rock";
    } else if (computerValue >= 4 && computerValue <= 6) {
        return "paper";
    } else if (computerValue >= 7 && computerValue <= 10) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanValue = prompt("Make your choice! Rock 🪨, Paper 📄 or Scissors ✂️?");
    return humanValue.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        alert(`Both players chose ${humanChoice}. It's a draw!`);
    } else {
        determineWinner(humanChoice, computerChoice);
    }
}

function determineWinner(humanChoice, computerChoice) {
    let isComputerWinner = false;
    let isHumanWinner = false;
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                isComputerWinner = true;
            } else {
                isHumanWinner = true;
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                isComputerWinner = true;
            } else {
                isHumanWinner = true;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                isComputerWinner = true;
            } else {
                isHumanWinner = true;
            }
            break;
        default:
            //should never reach this case
            console.log("This is a big whoopsie in the implementation!");
            break;
    }
    printWinner(humanChoice, computerChoice, isComputerWinner, isHumanWinner);
}

function printWinner(humanChoice, computerChoice, isComputerWinner, isHumanWinner) {
    if (isComputerWinner === true) {
        alert(`${computerChoice} beats ${humanChoice}. Computer wins!`);
        computerScore++;
    } else if (isHumanWinner === true) {
        alert(`${humanChoice} beats ${computerChoice}. Human wins!`);
        humanScore++;
    }
}

playRound(getHumanChoice(), getComputerChoice());