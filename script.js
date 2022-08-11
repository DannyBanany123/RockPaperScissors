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
    let player = play.toLowerCase();
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
    return result;
}

function game() {
    playerCount = 0;
    cpuCount = 0;
    while (playerCount < 5 && cpuCount < 5) {
        let play = getPlayerChoice();
        let cpu = getComputerChoice();
        let result = playRound(play, cpu);
        console.log(result);
        if (result.length > 4) {
            if (result.substring(0, 7) === "You win") {
                playerCount++;
            } else {
                cpuCount++;
            }
        }
    }
    if (playerCount === 5) {
        console.log("Victory! You were the first to 5 wins.");
    } else {
        console.log("Defeated! Computer was the first to 5 wins.");
    }
}

function getPlayerChoice() {
    const choices = document.querySelectorAll(".buttons div");
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            return choice.getAttribute("class");
        });
    });
}

let playerCount = 0;
let cpuCount = 0;
game();