class Character{
    constructor(maxNumberBoxCharacter, fieldSize){
        this.topPosition = 0;
        this.bottomPosition = 0;
        this.numberBoxCharacter = 0;
        this.fieldSize = fieldSize;
        this.maxNumberBoxCharacter = maxNumberBoxCharacter;
    } 
    
    set newNumberBoxCharacter(value){
        if(this.numberBoxCharacter <= this.maxNumberBoxCharacter)
            return this.numberBoxCharacter = value;
    }

    createPlayer(){
        let player = document.createElement('div');
        player.className = 'player';
        player.id = 'player';
        player.style.top = `${document.getElementById('00').getBoundingClientRect().top + 21}px`;
        player.style.left = `${document.getElementById('00').getBoundingClientRect().left + 21}px`;
        app.appendChild(player);
    }

    right(){
        if(this.topPosition < this.fieldSize - 1){
            let left = player.style.left;
            player.style.left = `${Number(left.slice(0, left.length -2)) + 53}px`;
            this.topPosition += 1;
        }
    }

    left(){
        if(this.topPosition > 0){
            let left = player.style.left;
            player.style.left = `${Number(left.slice(0, left.length -2)) - 53}px`;
            this.topPosition -= 1;
        }
    }

    top(){
        if(this.bottomPosition > 0){
            let top = player.style.top;
            player.style.top = `${Number(top.slice(0, top.length -2)) - 53}px`;
            this.bottomPosition -= 1;
        }
    }

    bottom(){
        if(this.bottomPosition < this.fieldSize - 1){
            let top = player.style.top;
            player.style.top = `${Number(top.slice(0, top.length -2)) + 53}px`;
            this.bottomPosition += 1;
        }
    }
}

export default Character;