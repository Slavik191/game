class DragAndDrop{
    constructor(linkStore, linkEndGame){
        this.linkStore = linkStore;
        this.linkEndGame = linkEndGame;
    }

    setDragAndDrope(){
        let allTdStore = field.querySelectorAll('td.black');
        let store = field.querySelectorAll('tr:last-child td:last-child');
        allTdStore.forEach(td => {
            td.draggable = 'true';

            td.addEventListener('dragstart', function (e) {
                e.dataTransfer.effectAllowed = 'copy';
                e.dataTransfer.setData('Text', this.id);
              });
        })

        store[0].addEventListener('dragover', function (e) {
            if (e.preventDefault) e.preventDefault(); 
            e.dataTransfer.dropEffect = 'copy';
            return false;
          });
          store[0].addEventListener('drop', function(e) {
            if (e.stopPropagation) e.stopPropagation();        
            var td = document.getElementById(e.dataTransfer.getData('Text'));
            this.linkStore.putStorage(+td.childNodes[0].innerHTML);
            td.childNodes[0].innerHTML = '0';
            this.linkEndGame();
          }.bind(this));
    }

}

export default DragAndDrop;