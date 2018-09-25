import Character from './Character';
import Grid from './Grid';

class Game{
    constructor(fieldSize, numberStorage, maxNumberBoxStorage,maxNumberBoxCharacter){
        this.character = new Character(maxNumberBoxCharacter, fieldSize)
        this.grid = new Grid(fieldSize, numberStorage, maxNumberBoxStorage)
    }
}

export default Game;