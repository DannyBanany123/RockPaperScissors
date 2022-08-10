function getComputerChoice() {
    let number = Math.floor((Math.random() * 3) + 1);
    let choice;
    if (number === 1) {
        choice = "rock";
    } else if (number === 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function playRound(player, computer) {
    let result = "Tie!";
    if (player === "rock") {
        if (computer === "paper") {
            result = "You lose! Paper beats rock.";
        } else if (computer === "scissors") {
            result = "You win! Rock beats scissors.";
        }
    } else if (player === "paper") {
        if (computer === "scissors") {
            result = "You lose! Scissors beats paper."
        } else if (computer === "rock") {
            result = "You win! Paper beats rock.";
        }
    } else {
        if (computer === "paper") {
            result = "You win! Scissors beats paper.";
        } else if (computer === "rock") {
            result = "You lose! Rock beats scissors.";
        }
    }
}