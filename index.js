function createGrid() {
    let size = document.getElementById("gridSize").value;
    const div = document.createElement("DIV");

    document.getElementById("sketchContainer").style = `grid-template: repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
    console.log(size);
    /*
    for (i = 0; i < size; i++){
        document.getElementById("sketchContainer").appendChild(div);
    }
    */
}