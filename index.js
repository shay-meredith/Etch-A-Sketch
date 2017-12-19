const sketchContainer = document.getElementById("sketchContainer");

let size = document.getElementById("gridSize").value;

const bodyElement = document.body;
bodyElement.onload = createGrid;

const range = document.getElementById("gridSize");
range.onmouseup = createGrid;

const clearButton = document.getElementById("clear");
clearButton.onclick = clearGrid;

const clickContainer = document.getElementsByClassName("container")[0];
const clickCheckmark = document.getElementById("click");
const hoverContainer = document.getElementsByClassName("container")[1];
const hoverCheckmark = document.getElementById("hover");
const dragContainer = document.getElementsByClassName("container")[2];
const dragCheckmark = document.getElementById("drag");

//TODO: Change these when the next todo is fixed
clickContainer.onmouseup = radioChecked;
hoverContainer.onmouseup = radioChecked;
dragContainer.onmouseup = radioChecked;

function createGrid() {
  while (sketchContainer.hasChildNodes()) {
    sketchContainer.removeChild(sketchContainer.firstChild);
  }
  //let size = document.getElementById("gridSize").value;
  sketchContainer.style = `grid-template: repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
  for (i = 0; i < size * size; i++) {
    addDiv();
    ///sketchContainer.childNodes[i].addEventListener("click", function() {
      ///this.classList.toggle("clicked");
    ///});
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

function radioChecked() {
  if (this.childNodes[3].childElementCount < 1) {
    clickCheckmark.style.backgroundColor = "#eee";
    if (clickCheckmark.childElementCount > 0) {
      clickCheckmark.removeChild(clickCheckmark.childNodes[0]);
    }
    hoverCheckmark.style.backgroundColor = "#eee";
    if (hoverCheckmark.childElementCount > 0) {
      hoverCheckmark.removeChild(hoverCheckmark.childNodes[0]);
    }
    dragCheckmark.style.backgroundColor = "#eee";
    if (dragCheckmark.childElementCount > 0) {
      dragCheckmark.removeChild(dragCheckmark.childNodes[0]);
    }

    this.childNodes[3].style.backgroundColor = "#9a0007";
    const span = document.createElement("SPAN");
    this.childNodes[3].appendChild(span);
    this.childNodes[3].children[0].className = "checkedContainer";

    drawType(this);
  } else {
    this.childNodes[3].style.backgroundColor = "#eee";
    this.childNodes[3].removeChild(this.childNodes[3].childNodes[0]);
  }
}

function drawType(radioContainer) {
    if (radioContainer === clickContainer) {
        for (i = 0; i < size * size; i++) {
            sketchContainer.childNodes[i].removeEventListener("mouseover", hovered);
            sketchContainer.childNodes[i].removeEventListener("drag", dragged);
            sketchContainer.childNodes[i].addEventListener("click", clicked);
        }
    }
    else if (radioContainer === hoverContainer) {
        for (i = 0; i < size * size; i++) {
            sketchContainer.childNodes[i].removeEventListener("click", clicked);
            sketchContainer.childNodes[i].removeEventListener("drag", dragged);
            sketchContainer.childNodes[i].addEventListener("mouseover", hovered);
        }
    } else {
        for (i = 0; i < size * size; i++) {
            sketchContainer.childNodes[i].removeEventListener("click", clicked);
            sketchContainer.childNodes[i].removeEventListener("mouseover", hovered);
            sketchContainer.childNodes[i].addEventListener("mouseover", dragged);
        }
    }
}

function clicked() {
    this.classList.toggle("clicked");
}

function hovered() {
    this.classList.add("clicked");
}

function dragged() {
    this.onmousedown = function() {this.classList.toggle("clicked")};
}


//TODO: Finish radio select function (completely untested)
function selectDrawType() {
  if (document.getElementById("click").checked == true) {
    sketchContainer.childNodes[i].addEventListener("click", function() {
      this.classList.toggle("clicked");
    });
  } else if (document.getElementById("hover").checked == true) {
    sketchContainer.childNodes[i].addEventListener("hover", function() {
      this.classList.toggle("clicked");
    });
  } else {
    sketchContainer.childNodes[i].addEventListener("mousedown", function() {
      this.classList.toggle("clicked");
    });
  }
}
