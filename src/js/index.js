import Game from './game';
import '../sass/style.sass';

let game;

startGame.addEventListener('click', () => {
    form.style.display = 'none';
    game = new Game(fieldSize.value.trim(),
                        numberStorage.value.trim(), 
                        maxNumberBoxStorage.value.trim(),
                        maxNumberBoxCharacter.value.trim());
    game.grid.createField();
    game.character.createPlayer()
})

document.addEventListener('keyup', event => {
    if(event.keyCode === 39){
        game.character.right();
    }
    if(event.keyCode === 37){
        game.character.left();
    }
    if(event.keyCode === 38){
        game.character.top();
    }
    if(event.keyCode === 40){
        game.character.bottom();
    }
    if(event.keyCode === 32){
        console.log(game.character.numberBoxCharacter)
        let numberBoxCell = document.getElementById(`${ game.character.bottomPosition}${  game.character.topPosition}`);
        if(numberBoxCell !== '' && +numberBoxCell.innerHTML !== 0 && game.character.numberBoxCharacter < game.character.maxNumberBoxCharacter){
            numberBoxCell.innerHTML -= 1; 
            game.character.newNumberBoxCharacter = game.character.numberBoxCharacter + 1;
        }
    }
})