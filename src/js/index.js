import Game from './game';
import '../sass/style.sass';

let game;

startGame.addEventListener('click', () => {
    form.style.top = '-260px';
    startGame.disabled = true;
    game = new Game(fieldSize.value.trim(),
                        numberStorage.value.trim(), 
                        maxNumberBoxStorage.value.trim(),
                        maxNumberBoxCharacter.value.trim());
    game.createObjects();
})

document.addEventListener('keyup', event => {
    if(game !== undefined){
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
            if(numberBoxCell.innerHTML !== '' && +numberBoxCell.childNodes[0].innerHTML !== 0 && game.character.numberBoxCharacter < game.character.maxNumberBoxCharacter && numberBoxCell.innerHTML !== 'Склад'){
                numberBoxCell.childNodes[0].innerHTML -= 1; 
                game.character.newNumberBoxCharacter = game.character.numberBoxCharacter + 1;
                game.changeTextBoxCharacter()
            }
            else if(numberBoxCell.innerHTML === 'Склад' && game.character.numberBoxCharacter > 0){
                game.character.newNumberBoxCharacter = game.character.numberBoxCharacter - 1;
                game.grid.store.putStorage();
                game.changeTextBoxCharacter();
                if(game.grid.numberBoxMap === game.grid.store.numderBoxStore){
                    game = undefined;
                    field.style.opacity = '0';
                    player.style.opacity = '0';
                    textBoxCharacter.style.opacity = '0';
                    form.style.top = '0';
                    startGame.disabled = false;
                    setTimeout(() => {
                        app.removeChild(field);
                        app.removeChild(player);
                        document.body.removeChild(textBoxCharacter);
                    }, 500);
                }
            }

        }
    }
})