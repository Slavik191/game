import Game from './game';
import '../sass/style.sass';

let game;

startGame.addEventListener('click', () => {
    let check = checkForm([fieldSize.value.trim(),
                            numberStorage.value.trim(), 
                            maxNumberBoxStorage.value.trim(),
                            maxNumberBoxCharacter.value.trim()]);
    if(check){
        form.style.top = '-355px';
        startGame.disabled = true;
        game = new Game(fieldSize.value.trim(),
                            numberStorage.value.trim(), 
                            maxNumberBoxStorage.value.trim(),
                            maxNumberBoxCharacter.value.trim());
        clearForm();
        game.createObjects();   
    }
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
function checkForm(arr){    
    let correctly = true;
    let checkText = /^\d+$/;
    arr.forEach(text => {
        if(!checkText.test(text)){
            correctly = false;
        }
    });
    if(arr[0] < 3){
        alert('Размер поля должен быть не меньше 3x3');
        correctly = false;
    }
    else if(+arr[1] > (+arr[0] * +arr[0])){
        alert('Количество складов не должно быть больше поля');
        correctly = false;
    }
    else if(!correctly){
        alert('Введены некоректные значения');
    }
    return correctly;
}

function clearForm(){
    fieldSize.value = '';
    numberStorage.value = '';
    maxNumberBoxStorage.value = '';
    maxNumberBoxCharacter.value = '';
}