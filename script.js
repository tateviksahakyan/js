var color = 'pink'
var images="url('img.jpg')"

var puzzle = document.createElement('img');
document.body.append(puzzle);
puzzle.src = "https://img.icons8.com/doodle/48/000000/wrong-puzzle-piece.png"
puzzle.style.height = "50px";
puzzle.style.width = "50px";
puzzle.style.marginLeft = '50%';

var eraser = document.createElement('img');
document.body.append(eraser);
eraser.src = 'https://img.icons8.com/nolan/64/erase.png'
eraser.style.height = "50px";
eraser.style.width = "50px";
 

puzzle.onclick = function () {
    
    var table=document.createElement('table')
    table.style.width = "500px";
    table.style.height = "600px";
    table.style.marginTop = "50px";
    table.style.marginLeft = '40%';
    table.style.borderCollapse = 'collapse';
    table.style.backgroundImage = images
    var tBody = document.createElement('tbody');
    table.append(tBody)

    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr")
        for (var j = 0; j < 10; j++) {
            var td = document.createElement("td");
            row.appendChild(td);
            td.style.backgroundColor = color;
            td.onmouseover = function () {
                this.style.backgroundColor = color;
              }
            }
            tBody.appendChild(row)
        }
        document.body.appendChild(table)
}

eraser.onclick = function () {
    color = 'transparent'
}