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

function determineRoundWinner(humanChoice, computerChoice) {
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
    
    if (isComputerWinner === true) {
        alert(`${computerChoice} beats ${humanChoice}. Computer wins!`);
        return "human";
    } else if (isHumanWinner === true) {
        alert(`${humanChoice} beats ${computerChoice}. Human wins!`);
        return "computer";
    }
    //also should never reach this, just used to C++
    return "";
}

function playGame(numberOfRounds) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            alert(`Both players chose ${humanChoice}. It's a draw!`);
        } else {
            const roundWinner = determineRoundWinner(humanChoice, computerChoice);
            switch(roundWinner) {
                case "human":
                    humanScore++;
                    break;
                case "computer":
                    computerScore++;
                    break;
            }
        }
    }

    function determineGameWinner(humanScore, computerScore) {
        if (humanScore === computerScore) {
            alert(`It's a draw! Score ${humanScore}-${computerScore}`);
        } else if (humanScore > computerScore) {
            alert(`You are the winner! Score ${humanScore}-${computerScore}`);
        } else {
            alert(`The computer wins! Score ${computerScore}-${humanScore}`);
        }
    }

    for (let round = 0; round < numberOfRounds; round++) {
        let humanPick = getHumanChoice();
        let computerPick = getComputerChoice();
        playRound(humanPick, computerPick);
    }
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    determineGameWinner(humanScore, computerScore);
}

playGame(5);