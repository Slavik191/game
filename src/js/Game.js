import Character from './Character';
import Grid from './Grid';
import DragAndDrop from './DragAndDrop'

class Game{
    constructor(fieldSize, numberStorage, maxNumberBoxStorage,maxNumberBoxCharacter, linkEndGame){
        this.character = new Character(maxNumberBoxCharacter, fieldSize);
        this.grid = new Grid(fieldSize, numberStorage, maxNumberBoxStorage);
        this.TextBoxCharacter = undefined;
        this.dragAndDrop = new DragAndDrop(this.grid.store, linkEndGame);
    }

    createObjects(){
        this.grid.createField();
        this.character.createPlayer()
        this.createTextBoxCharacter();
        this.dragAndDrop.setDragAndDrope();
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