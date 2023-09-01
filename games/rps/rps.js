let userScore = 0;
let compScore = 0;
const options = ["ROCK", "PAPER", "SCISSORS"];

const userBtns = document.querySelectorAll('.userChoice');
let userScoreID = document.getElementById('userScore');
let compScoreID = document.getElementById('compScore');
let resultDiv = document.querySelector('.result > p');

let resetBtn = document.getElementById('reset');

/* COMPUTER CHOICE */
function computerPlay() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

/* CHECK FOR WINNER */
function checkWinner(userChoice, compChoice) {
    if (userChoice == compChoice) {
        return "Tie";
    } else if (
        (userChoice == "ROCK" && compChoice == "SCISSORS") ||
        (userChoice == "SCISSORS" && compChoice == "PAPER") ||
        (userChoice == "PAPER" && compChoice == "ROCK")
    )
        return "User";
    else {
        return "Computer";
    }
}

/* GAME FUNCTION */
function game(userChoice, compChoice) {
    const winner = checkWinner(userChoice, compChoice);

    if (winner === "User") {
        userScore++;
        resultDiv.innerHTML = userChoice + " BEATS " + compChoice;
    } else if (winner === "Computer") {
        compScore++;
        resultDiv.innerHTML = compChoice + " BEATS " + userChoice;
    }

    userScoreID.textContent = userScore;
    compScoreID.textContent = compScore;

    if (userScore === 5 || compScore === 5) {
        endGame();
    }
}

/* USER CHOICE */
function userClick() {
    userBtns.forEach(userBtn => {
        userBtn.onclick = () => game(userBtn.value, computerPlay());
    });
}

userClick();

/* END GAME + RESET */
function endGame() {
    if (compScore > userScore) {
        resultDiv.innerHTML = "GAME OVER LOSER";
    } else {
        resultDiv.innerHTML = "GAME OVER - YOU WIN!";
    }
    userBtns.forEach(userBtn => {
        userBtn.onclick = null;
    });
    userScore = 0;
    compScore = 0;
    resetBtn.className = 'reset-focus';
    resetBtn.id = "";
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    resultDiv.innerHTML = "TAKE YOUR PICK";
    userScoreID.textContent = "0";
    compScoreID.textContent = "0";
    resetBtn.className = '';
    resetBtn.id = 'reset';

    userBtns.forEach(userBtn => {
        userBtn.onclick = () => game(userBtn.value, computerPlay());
    });
}
