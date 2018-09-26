import Game from './game';
import '../sass/style.sass';

let game;

startGame.addEventListener('click', () => {
    form.style.display = 'none';
    game = new Game(fieldSize.value.trim(),
                        numberStorage.value.trim(), 
                        maxNumberBoxStorage.value.trim(),
                        maxNumberBoxCharacter.value.trim());
    game.createObjects();
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
        let numberBoxCell = document.getElementById(`${ game.character.topPosition}${  game.character.leftPosition}`);    
        if(numberBoxCell.innerHTML !== '' && +numberBoxCell.innerHTML !== 0 && game.character.numberBoxCharacter < game.character.maxNumberBoxCharacter && numberBoxCell.innerHTML !== 'Склад'){
            numberBoxCell.innerHTML -= 1; 
            game.character.newNumberBoxCharacter = game.character.numberBoxCharacter + 1;
            game.changeTextBoxCharacter()
        }
        else if(numberBoxCell.innerHTML === 'Склад' && game.character.numberBoxCharacter > 0){
            game.character.newNumberBoxCharacter = game.character.numberBoxCharacter - 1;
            game.grid.store.putStorage();
            game.changeTextBoxCharacter();
            if(game.grid.numberBoxMap === game.grid.store.numderBoxStore){
                console.log("Красавчик")
            }
        }

    }
})