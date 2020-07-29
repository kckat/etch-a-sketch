
const container = document.querySelector('#container') 

 function createGrid(x) {
    let size = (400/x) //size of boxes

     for(let rows = 0; rows < x; rows++){
        var row = document.createElement("div")
        row.classList.add('row')
         for(let columns = 0; columns < x; columns++){
            let div = document.createElement("div")
            window.div2 = div
            div.classList.add('grid')
            div.style.width = size +'px'
            div.style.height = size +'px'
            row.appendChild(div)
         }
         container.appendChild(row)
     }   
 }

 function fillBox(b) {
     this.style.backgroundColor = 'black'
 }

 function clearGrid() {
    const allBoxes = document.querySelectorAll('.grid');
    allBoxes.forEach(item => item.style.backgroundColor = '#9f9daf')
 }



 function boxSizing() {
     var newGridSize = prompt("How big should the new grid be?");
     if (newGridSize != null) {
         container.querySelectorAll('*').forEach(item => item.remove())
         clearGrid()
         createGrid(newGridSize)
         addEventListeners()
     }
     
 }

 function addEventListeners() {
     const allBoxes = document.querySelectorAll('.grid');
     allBoxes.forEach(item => item.addEventListener('mouseenter', fillBox))
 }

  gridSize = 16
 createGrid(gridSize);
 addEventListeners();

 
