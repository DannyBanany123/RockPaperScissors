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
    let play = player.toLowerCase();
    let result = "Tie!";
    if (play === "rock") {
        if (computer === "paper") {
            result = "You lose! Paper beats rock.";
        } else if (computer === "scissors") {
            result = "You win! Rock beats scissors.";
        }
    } else if (play === "paper") {
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

function game(playerChoice) {
    let play = playerChoice;
    let cpu = getComputerChoice();
    let result = playRound(play, cpu);
    announceRound(play, cpu, result);
    if (result.length > 4) {
        if (result.substring(0, 7) === "You win") {
            playerCount++;
        } else {
            cpuCount++;
        }
    }
    updateScore();
    if (gameOver()) {
        restartText();
        body.appendChild(restart);
    }

}

function gameOver() {
    return (playerCount === 5 || cpuCount === 5);
}

function removeAnimate(choices) {
    choices.forEach((choice) => {
        choice.setAttribute("id", "unanimated");
    });
}

function announceRound(play, cpu, result) {
    announce.textContent = `You chose ${play.toUpperCase()}, CPU chose ${cpu.toUpperCase()}`;
    summary.textContent = result;
}

function updateScore() {
    userScore.textContent = `Your score: ${playerCount}`;
    cpuScore.textContent = `CPU's score: ${cpuCount}`;
}

function restartGame() {
    playerCount = 0;
    cpuCount = 0;
    removeAnimate(choices);
    announce.textContent = "First to 5 is the winner!";
    summary.textContent = "Choose your weapon";
    updateScore();
    body.removeChild(restart);
}

function restartText() {
    restart.textContent = "";
    let again = " Click me to play again";
    let winner = "";
    if (playerCount === 5) {
        winner = "Victory!";
    } else {
        winner = "Defeat!";
    }
    restart.textContent = winner + again;
}

let playerCount = 0;
let cpuCount = 0;
let pick = "";

const announce = document.querySelector(".instructions");
const summary = document.querySelector(".choose");
const userScore = document.querySelector(".you");
const cpuScore = document.querySelector(".cpu");

const choices = document.querySelectorAll(".buttons > div");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // If either player has score of 5, disable click
        if (gameOver()) {
            return;
        } else {
            removeAnimate(choices);
            pick = choice.getAttribute("class");
            choice.setAttribute("id", "animate");
            game(pick);
        }
    });
});

const body = document.querySelector("body");
const restart = document.createElement("div");
restart.setAttribute("class", "restart");
restart.addEventListener("click", restartGame());
