const GAME = document.querySelector('#game'),
    SUBMIT = document.querySelector('#guess-btn'),
    GUESS = document.querySelector('#guess-input'),
    MIN = document.querySelector('.min-num'),
    MAX = document.querySelector('.max-num'),
    MESSAGE = document.querySelector('#message');

let min = 1,
    max = 10,
    totalGuess = 3;
let NUMBER = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(NUMBER);

MIN.textContent = min;
MAX.textContent = max;

GAME.addEventListener('mousedown', (e) => {
    if (e.target.className === "play-again") {
        window.location.reload();
    }
})

SUBMIT.addEventListener('click', handleGuessNumber)

function handleGuessNumber(e) {
    let guessNumber = parseInt(GUESS.value);
    if (guessNumber < min || guessNumber > max || isNaN(guessNumber)) {
        setMessage(`Please enter a number between ${min} and ${max} `, 'red')
    }
    else if (guessNumber === NUMBER) {
        gameOver(true, `${NUMBER} is correct. You Win!`, 'green')
    } else {
        totalGuess--;
        if (totalGuess === 0) {
            gameOver(false, `Game over! You lost. Correct answer was ${NUMBER}`, 'red')
        } else {
            GUESS.style.borderColor = "red";
            setMessage(`${guessNumber} is Wrong Guess.You have ${totalGuess} guesses Left`, 'red')
            GUESS.value = '';
        }
    }
}

function gameOver(won, msg) {
    let color;
    color = won ? "green" : "red";
    GUESS.disabled = true;
    GUESS.style.borderColor = color;
    MESSAGE.style.color = color;
    setMessage(msg);
    SUBMIT.value = "Play Again?";
    SUBMIT.className += "play-again";

}


function setMessage(msg, color) {
    MESSAGE.textContent = msg;
    MESSAGE.style.color = color;
}