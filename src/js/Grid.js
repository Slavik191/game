import Store from './Store'

class Grid{
    constructor(fieldSize, numberStorage, maxNumberBoxStorage){
        this.store = new Store(fieldSize)
        this.fieldSize = fieldSize;
        this.numberStorage = numberStorage;
        this.maxNumberBoxStorage = maxNumberBoxStorage;
        this.numberBoxMap = 0;
    }

    createField(){
        let positionStorage = [];
        for(let i = 0; i < this.numberStorage; i++){
            let add = true;
            let left = Math.floor(Math.random() * this.fieldSize);
            let top =  Math.floor(Math.random() * this.fieldSize)
            positionStorage.forEach(position => {
                if(position[0] === left && position[1] === top)
                    add = false;
            })
            if(add)
                positionStorage.push([left, top])
            else
                i--
        }

        let field = document.createElement('table');
        field.id = 'field';
        for(let i = 0; i < this.fieldSize; i++){
            let row = document.createElement('tr');
            for(let j = 0; j < this.fieldSize; j++){
                let cell = document.createElement('td');
                cell.id = `${i}${j}`  
                positionStorage.forEach(position => {
                    if(position[0] === i && position[1] === j){
                        //cell.style.background = 'black';
                        cell.className = 'black';
                        let numberBoxCell = Math.floor(Math.random() * +this.maxNumberBoxStorage + 1);
                        let numberContainer = document.createElement('div');
                        numberContainer.className = 'numbrBox';
                        numberContainer.innerHTML = `${numberBoxCell}`
                        cell.appendChild(numberContainer);
                        this.numberBoxMap += numberBoxCell;
                    }
                })
                row.appendChild(cell);   
            }
            field.appendChild(row);
        }
        let store = this.store.createStore();
        field.appendChild(store);
        app.appendChild(field);
    }
}

export default Grid;

