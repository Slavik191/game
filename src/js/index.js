import Game from './game';
import Character from './Character'
import '../sass/style.sass';

let character;

startGame.addEventListener('click', () => {
    form.style.display = 'none';
    let game = new Game(fieldSize.value.trim(),
                        numberStorage.value.trim(), 
                        maxNumberBoxStorage.value.trim(),
                        maxNumberBoxCharacter.value.trim());
    game.createField();
    character = new Character(maxNumberBoxCharacter.value.trim());
    let player = document.createElement('div');
    player.className = 'player';
    player.id = 'player';
    player.style.top = `${document.getElementById('00').getBoundingClientRect().top + 21}px`;
    player.style.left = `${document.getElementById('00').getBoundingClientRect().left + 21}px`;
    app.appendChild(player);
})

document.addEventListener('keyup', event => {
    if(event.keyCode === 39){
        character.right();
    }
})