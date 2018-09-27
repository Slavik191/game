import Character from './Character';
import Grid from './Grid';

class Game{
    constructor(fieldSize, numberStorage, maxNumberBoxStorage,maxNumberBoxCharacter){
        this.character = new Character(maxNumberBoxCharacter, fieldSize);
        this.grid = new Grid(fieldSize, numberStorage, maxNumberBoxStorage);
        this.TextBoxCharacter = undefined;
    }

    createObjects(){
        this.grid.createField();
        this.character.createPlayer()
        this.createTextBoxCharacter();
    }

    createTextBoxCharacter(){
        let text = document.createElement('div');
        text.id = 'textBoxCharacter';
        text.className = 'textBoxCharacter';
        text.innerHTML = `рюкзак: ${this.character.numberBoxCharacter}/${this.character.maxNumberBoxCharacter}`;
        this.TextBoxCharacter = text;
        document.body.appendChild(text);
    }

    changeTextBoxCharacter(){
        this.TextBoxCharacter.innerHTML = `рюкзак: ${this.character.numberBoxCharacter}/${this.character.maxNumberBoxCharacter}`;
    }
}

export default Game;