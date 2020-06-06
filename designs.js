
// Select color input
let picker = document.getElementById('sizePicker');
let grid  = document.getElementById('pixelCanvas');
let color = document.getElementById('colorPicker');

// Select size input
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;

// When size is submitted by the user, call makeGrid()
picker.addEventListener('submit', function(event){
    let height = document.getElementById('inputHeight').value; 
    let width = document.getElementById('inputWidth').value; 
    let grid = document.getElementById('pixelCanvas'); 
    event.preventDefault(); 
    makeGrid(height, width)
}); 

function makeGrid(height, width) {
    grid.innerHTML = "";
    for (var i= 0; i <= height; i++){
        let row = grid.insertRow(i); 
        for (var q = 0; q <= width; q ++){
            let cell = row.insertCell(q)
            cell.addEventListener('click', function(ed){
                cell.style.backgroundColor = color.value;
            })
        }
    }



}
