class Character{
    constructor(maxNumberBoxCharacter){
        this.maxNumberBoxCharacter = maxNumberBoxCharacter;
    }    

    right(){
        let top = player.style.left;
        player.style.left = `${Number(top.slice(0, top.length -2)) + 53}px`
    }
}

export default Character;