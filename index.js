function createGrid() {
  let size = document.getElementById("gridSize").value;
  document.getElementById("sketchContainer").style = `grid-template: repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
  for (i = 0; i < size * size; i++) {
    addDiv();
    document.getElementById("sketchContainer").childNodes[i].addEventListener("click", function() {
        this.classList.toggle("clicked");
      });
  }
}

function addDiv() {
  document.getElementById("sketchContainer").appendChild(document.createElement("DIV"));
}
