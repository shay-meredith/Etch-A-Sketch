const sketchContainer = document.getElementById("sketchContainer");

const bodyElement = document.body;
bodyElement.onload = createGrid;

const range = document.getElementById("gridSize");
range.onmouseup = createGrid;

const clearButton = document.getElementById("clear");
clearButton.onclick = clearGrid;


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

/*
TODO: Finish radio select function (completely untested)
function selectDrawType {
    if (document.getElementById("clickType").checked == true) {
        sketchContainer.childNodes[i].addEventListener("click", function() {
        this.classList.toggle("clicked");
    }
    else if (document.getElementById("hoverType").checked == true) {
        sketchContainer.childNodes[i].addEventListener("hover", function() {
        this.classList.toggle("clicked");
    }
    else {
        sketchContainer.childNodes[i].addEventListener("mousedown", function() {
        this.classList.toggle("clicked");
    }
}
*/