
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

function randomNum (){
    return Math.floor(Math.random() * 256)
}


 function clearGrid() {
    const allBoxes = document.querySelectorAll('.grid');
    allBoxes.forEach(item => item.style.backgroundColor = '#9f9daf')
 }



 function boxSizing() {
     var newGridSize = prompt("Enter a number between 1 and 100");
     if (newGridSize != null && newGridSize > 0 && newGridSize <= 100) {
         container.querySelectorAll('*').forEach(item => item.remove(),
         clearGrid(),
         createGrid(newGridSize),
         addEventListeners()) } else {
            alert('Error. Please enter a valid number.')
         } 
     
     }

 function addEventListeners() {
     const allBoxes = document.querySelectorAll('.grid');
     allBoxes.forEach(item => item.addEventListener('mouseenter', fillBox))
 }

 function fillRainbow() {
     clearGrid()
     const allBoxes = document.querySelectorAll('.grid');
     allBoxes.forEach(item => item.addEventListener('mouseenter', fillRainbow))
 }

  gridSize = 16
 createGrid(gridSize);
 addEventListeners();

 
