var startBtn = document.querySelector('#start-btn');

// click start button to run playGame function
startBtn.addEventListener('click', playGame);

var timer = document.querySelector('#timer');
var time = 10;

function playGame() {
    // timer function displays time and once reached 0, clears the timer function and runs the timesUp function
    var countdown = setInterval(function () {
        time--;
        timer.textContent = time;

        if (time === 0) {
            clearInterval(countdown);
            // reset timer
            time = 10;
            timesUp();
        }
    }, 1000);


    startBtn.style.display = 'none';

    // check if elements have already been created
    let ifExists = document.getElementById('game-container');

    // if exists, change display to be visible
    if (ifExists !== null) {
        document.querySelector('#game-container').style.display = 'block';
        var displayContainer = document.getElementById('display-container');
    } else {
        // if doesn't exist, create elements

        var gameContainer = document.createElement('div');
        document.body.append(gameContainer);
        gameContainer.setAttribute('id', 'game-container')

        var displayContainer = document.createElement('div');
        displayContainer.setAttribute('id', 'display-container');
        gameContainer.append(displayContainer);

        var letterBank = document.createElement('div');
        letterBank.setAttribute('id', 'letter-bank')
        gameContainer.append(letterBank);
        generateLetterBox(letterBank);
    }
    generateWord();
};

// generate a random word 
async function getWord() {
    const url = 'https://random-word-api.herokuapp.com/word';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json[0];
    } catch (error) {
        console.log(error.message);
        return null;
    }
}
async function generateWord() {
    const word = await getWord();
    if (word) {
        console.log(word);

        for (var i = 0; i < word.length; i++) {
            var wordDisplay = document.createElement('h1');
            wordDisplay.textContent = word[i].toUpperCase();

            var letterDiv = document.createElement('div');
            letterDiv.append(wordDisplay);
            var displayContainer = document.getElementById('display-container');
            displayContainer.append(letterDiv);

            wordDisplay.setAttribute('class', 'word-display');
            letterDiv.setAttribute('class', 'letter-div');
        }
    } else {
        console.log('Failed to retrieve word');
    }
}

function generateLetterBox(letterBank) {
    var alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (var i = 0; i < alphabetArr.length; i++) {
        var letter = document.createElement('h2');
        letter.setAttribute('class', 'letter');
        letter.textContent = alphabetArr[i];
        letter.style.display = 'inline';
        letter.addEventListener('click', function (e) {
            console.log(e.target.textContent)

            var hiddenLetters = document.querySelectorAll('.word-display');
            var hiddenLetterDivs = document.querySelectorAll('.letter-div');
            for (var i = 0; i < hiddenLetters.length; i++) {
                // guessed letters are faded
                e.target.style.opacity = '0.30';
                if (hiddenLetters[i].textContent == e.target.textContent) {
                    hiddenLetters[i].style.visibility = 'visible';
                    hiddenLetterDivs[i].style.borderBottom = 'none';
                    e.target.style.visibility = 'hidden';

                }
            }
        });
        letterBank.append(letter);
    }
}


function timesUp() {
    timer.style.visibility = 'hidden';
    document.querySelector('#game-container').style.display = 'none';
    let firstTime = true;

    // removes the child elements of the display container
    var displayContainer = document.getElementById('display-container');
    while (displayContainer.firstChild) {
        displayContainer.removeChild(displayContainer.firstChild);
    }

    var gameOver = document.createElement('h1');
    gameOver.textContent = 'Game Over';
    gameOver.setAttribute('id', 'time-up-msg');

    // if playAgain button exists (meaning the other game over elements exist), make them visible
    var ifExists = document.querySelector('#play-again');
    if (ifExists !== null) {
        ifExists.style.display = 'block';
    } else {
        // if not, create them
        var playAgainBtn = document.createElement('button');
        playAgainBtn.setAttribute('class', 'game-btn');
        playAgainBtn.setAttribute('id', 'play-again');

        playAgainBtn.addEventListener('click', function () {
            timer.textContent = time;
            timer.style.visibility = 'visible';
            playAgainBtn.style.display = 'none';
            gameOver.remove();
            var letters = document.querySelectorAll('.letter');
            for(var i = 0; i < letters.length; i++){
                letters[i].style.opacity = 1;
                letters[i].style.visibility = 'visible';
            }

            playGame();
        })
        playAgainBtn.textContent = 'Play Again?';
        document.body.append(playAgainBtn);
        document.body.append(gameOver);
    }

}
