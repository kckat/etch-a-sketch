 
 
 function createGrid(x) {
     for(let rows = 0; rows < x; rows++){
         for(let columns = 0; columns < x; columns++){
            $('#container').append("<div class='grid'></div>")
         }
     }
     
     
 }