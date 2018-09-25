class Game{
    constructor(fieldSize, numberStorage, maxNumberBoxStorage,maxNumberBoxCharacter){
        this.fieldSize = fieldSize;
        this.numberStorage = numberStorage;
        this.maxNumberBoxStorage = maxNumberBoxStorage;
        this.maxNumberBoxCharacter = maxNumberBoxCharacter;
    }

    createField(){
        let positionStorage = [];
        for(let i = 0; i < this.numberStorage; i++){
            positionStorage.push([Math.floor(Math.random() * this.fieldSize), Math.floor(Math.random() * this.fieldSize)]);
        }

        let field = document.createElement("table");
        for(let i = 0; i < this.fieldSize; i++){
            let row = document.createElement("tr");
            for(let j = 0; j < this.fieldSize; j++){
                let cell = document.createElement("td");
                cell.id = `${i}${j}`  
                positionStorage.forEach(position => {
                    if(position[0] === i && position[1] === j){
                        cell.style.background = 'black'
                        cell.innerHTML = `${Math.floor(Math.random() * this.maxNumberBoxStorage)}`
                    }
                })
                row.appendChild(cell);   
            }
            field.appendChild(row);
        }
        app.appendChild(field);
    }
}

export default Game;