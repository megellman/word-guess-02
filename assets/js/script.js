var startBtn = document.querySelector('#start-btn');

var wordBank = ['river', 'mountain', 'sunshine', 'whisper', 'galaxy', 'sparkle', 'echo', 'twilight', 'breeze', 'harmony', 'adventure', 'serenity', 'journey', 'mystery', 'enigma', 'essence', 'fusion', 'glimmer', 'wonder', 'tranquility', 'radiance', 'cascade', 'meadow', 'forest', 'horizon', 'illusion', 'crystal', 'ripple', 'whirlwind', 'ember', 'solstice', 'mirage', 'glow', 'whimsy', 'enchantment', 'voyage', 'odyssey', 'reverie', 'miracle', 'dawn', 'tempest', 'serendipity', 'fantasy', 'infinity', 'labyrinth', 'paradise', 'zephyr', 'symphony', 'echoes', 'aurora', 'starlight', 'ebony', 'sapphire', 'emerald', 'nectar', 'tapestry', 'illusion', 'epiphany', 'marvel', 'revelation', 'ephemeral', 'charm', 'whispering', 'luminescence', 'melody', 'journey', 'elegance', 'grace', 'allure', 'mystique', 'captivate', 'poise', 'splendor', 'magnificence', 'enigma', 'tranquil', 'celestial', 'ethereal', 'arcane', 'vortex', 'kaleidoscope', 'quintessential', 'halcyon', 'luminous', 'inspiration', 'profound', 'whisper', 'radiant', 'resonance', 'wonder', 'solitude', 'panorama', 'harmony', 'timeless', 'infinitesimal'];

startBtn.addEventListener('click', function(){
    startBtn.style.visibility = 'hidden';

    var gameContainer = document.createElement('div');
    document.body.append(gameContainer);
    gameContainer.setAttribute('id', 'game-container')

    var displayContainer = document.createElement('div');
    displayContainer.setAttribute('id', 'display-container');
    gameContainer.append(displayContainer);
    
    var letterBank = document.createElement('div');
    letterBank.setAttribute('id', 'letter-bank')
    gameContainer.append(letterBank);

    var wordAnswer = generateWord();
    for(var i = 0; i < wordAnswer.length; i++){
        var wordDisplay = document.createElement('h1');
        wordDisplay.textContent = wordAnswer[i].toUpperCase();

        var letterDiv = document.createElement('div');
        letterDiv.append(wordDisplay);
        displayContainer.append(letterDiv);
        
        wordDisplay.setAttribute('class', 'word-display');
        letterDiv.setAttribute('class', 'letter-div');

    }
    generateLetterBox(letterBank)
})

function generateWord(){
    var word = wordBank[Math.floor(Math.random() * 100)];
    console.log(word);
    return word
}

function generateLetterBox(letterBank){
    var alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for(var i = 0; i < alphabetArr.length; i++){
        var letter = document.createElement('h2');
        letter.setAttribute('class', 'letter');
        letter.textContent = alphabetArr[i];
        letter.style.display = 'inline';
        letter.addEventListener('click', function(e){
            console.log(e.target.textContent)
            var hiddenLetters = document.querySelectorAll('.word-display');
            var hiddenLetterDivs = document.querySelectorAll('.letter-div');
            for(var i = 0; i < hiddenLetters.length; i++){
                if(hiddenLetters[i].textContent == e.target.textContent){
                    hiddenLetters[i].style.visibility = 'visible';
                    hiddenLetterDivs[i].style.borderBottom = 'none';
                    e.target.style.display = 'none';

                }
            }
        });
        letterBank.append(letter);
    }
}


