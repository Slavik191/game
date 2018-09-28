import Grid from "./Grid";

class Store{
    constructor(fieldSize){
        this.store = undefined;
        this.numderBoxStore = 0;
        this.fieldSize = fieldSize;
    }

    putStorage(value){
        this.numderBoxStore += value ;
        this.store.innerHTML = `Ящиков: ${this.numderBoxStore}`;
    }

    createStore(){
        let row = document.createElement("tr");
            for(let j = 0; j < this.fieldSize - 1; j++){
                let cell = document.createElement("td");
                if(j === this.fieldSize - 3){
                    cell.innerHTML = `Ящиков: ${this.numderBoxStore}`; 
                    cell.style.border = '1px solid grey';
                    cell.setAttribute('colspan', 2);
                    this.store = cell;
                }                   
                else if(j === this.fieldSize - 2){
                    cell.innerHTML = `Склад`; 
                    cell.style.border = '1px solid grey';
                    cell.id = `${this.fieldSize}${this.fieldSize - 1}`;
                }
                row.appendChild(cell);
            }
        return row;
    }
}

export default Store;