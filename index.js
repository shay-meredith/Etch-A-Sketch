const sketchContainer = document.getElementById("sketchContainer");

function createGrid() {
    while (sketchContainer.hasChildNodes()) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
  let size = document.getElementById("gridSize").value;
  sketchContainer.style = `grid-template: repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
  for (i = 0; i < size * size; i++) {
    addDiv();
    sketchContainer.childNodes[i].addEventListener("click", function() {
        this.classList.toggle("clicked");
      });
  }
}

function addDiv() {
  sketchContainer.appendChild(document.createElement("DIV"));
}

function clearGrid() {
    let gridCount = sketchContainer.children.length;
    for (i = 0; i < gridCount; i++) {
        sketchContainer.childNodes[i].classList.remove("clicked");
    }
}