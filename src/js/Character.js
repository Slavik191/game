class Character{
    constructor(maxNumberBoxCharacter, fieldSize){
        this.leftPosition = 0;
        this.topPosition = 0;
        this.numberBoxCharacter = 0;
        this.fieldSize = fieldSize;
        this.maxNumberBoxCharacter = maxNumberBoxCharacter;
        this.player = undefined;
    } 
    
    set newNumberBoxCharacter(value){
        if(this.numberBoxCharacter <= this.maxNumberBoxCharacter)
            return this.numberBoxCharacter = value;
    }

    createPlayer(){
        this.player = document.createElement('div');
        this.player.className = 'player';
        this.player.id = 'player';
        this.player.style.top = `${document.getElementById('00').getBoundingClientRect().top + 21}px`;
        this.player.style.left = `${document.getElementById('00').getBoundingClientRect().left + 21}px`;
        app.appendChild(this.player);
    }

    right(){
        if(this.leftPosition < this.fieldSize - 1){
            let left = this.player.style.left;
            this.player.style.left = `${Number(left.slice(0, left.length -2)) + 53}px`;
            this.leftPosition += 1;
        }
    }

    left(){
        if(this.leftPosition > 0 && this.topPosition < this.fieldSize ){
            let left = this.player.style.left;
            this.player.style.left = `${Number(left.slice(0, left.length -2)) - 53}px`;
            this.leftPosition -= 1;
        }
    }

    top(){
        if(this.topPosition > 0){
            let top = this.player.style.top;
            this.player.style.top = `${Number(top.slice(0, top.length -2)) - 53}px`;
            this.topPosition -= 1;
        }
    }

    bottom(){
        if(this.topPosition < this.fieldSize - 1){
            let top = this.player.style.top;
            this.player.style.top = `${Number(top.slice(0, top.length -2)) + 53}px`;
            this.topPosition += 1;
        }
        else if(this.topPosition < this.fieldSize && this.leftPosition === this.fieldSize - 1){
            let top = this.player.style.top;
            this.player.style.top = `${Number(top.slice(0, top.length -2)) + 53}px`;
            this.topPosition += 1;
        }
    }
}

export default Character;