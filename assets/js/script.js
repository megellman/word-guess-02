var startBtn = document.querySelector('#start-btn');

var wordBank = ['river', 'mountain', 'sunshine', 'whisper', 'galaxy', 'sparkle', 'echo', 'twilight', 'breeze', 'harmony', 'adventure', 'serenity', 'journey', 'mystery', 'enigma', 'essence', 'fusion', 'glimmer', 'wonder', 'tranquility', 'radiance', 'cascade', 'meadow', 'forest', 'horizon', 'illusion', 'crystal', 'ripple', 'whirlwind', 'ember', 'solstice', 'mirage', 'glow', 'whimsy', 'enchantment', 'voyage', 'odyssey', 'reverie', 'miracle', 'dawn', 'tempest', 'serendipity', 'fantasy', 'infinity', 'labyrinth', 'paradise', 'zephyr', 'symphony', 'echoes', 'aurora', 'starlight', 'ebony', 'sapphire', 'emerald', 'nectar', 'tapestry', 'illusion', 'epiphany', 'marvel', 'revelation', 'ephemeral', 'charm', 'whispering', 'luminescence', 'melody', 'journey', 'elegance', 'grace', 'allure', 'mystique', 'captivate', 'poise', 'splendor', 'magnificence', 'enigma', 'tranquil', 'celestial', 'ethereal', 'arcane', 'vortex', 'kaleidoscope', 'quintessential', 'halcyon', 'luminous', 'inspiration', 'profound', 'whisper', 'radiant', 'resonance', 'wonder', 'solitude', 'panorama', 'harmony', 'timeless', 'infinitesimal'];

startBtn.addEventListener('click', function(){
    startBtn.style.visibility = 'hidden';
    var gameContainer = document.createElement('div');
    document.body.append(gameContainer);
    gameContainer.setAttribute('style', 'width:100%')
    var displayContainer = document.createElement('div');
    displayContainer.setAttribute('style', 'width:50%; margin:auto; display:flex');
    gameContainer.append(displayContainer);
    var wordAnswer = generateWord();
    for(var i = 0; i < wordAnswer.length; i++){
        var wordDisplay = document.createElement('h1');
        wordDisplay.textContent = wordAnswer[i].toUpperCase();

        var letterDiv = document.createElement('div');
        letterDiv.append(wordDisplay);
        displayContainer.append(letterDiv);
        
        wordDisplay.setAttribute('style', 'display:inline;  visibility:hidden;');
        letterDiv.setAttribute('style', 'display:inline; margin:0 20px; border-bottom:solid black 5px; width:50%;');

        console.log(wordDisplay);
    }
})

function generateWord(){
    var word = wordBank[Math.floor(Math.random() * 100)];
    console.log(word);
    return word
}