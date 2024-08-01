let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");


const genCompChoice = () => {
    const options = ["Stone", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Is Draw, Play Again!";
    msg.style.backgroundColor = "blueviolet";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        playerScore++
        userScore.innerText = playerScore;
        msg.innerText = `You Won! Your ${userChoice} Beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++
        compScore.innerText = computerScore;
        msg.innerText = `You Loose! ${compChoice} Beats Your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Stone") {
            // Paper or Scissor
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            // Stone or Scissor
            userWin = compChoice === "Scissor" ? false : true;
        } else {
            // Stone or Paper
            userWin = compChoice === "Stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});