// HTML nodes
// square frame
const frame = document.querySelector(".frame");
const docFrag = document.createDocumentFragment();

//reset button
const reset = document.querySelector(".reset");

//randomRBG button
const randomButton = document.querySelector("#random-button");

//slider number show on web
const squareRowValue = document.querySelector(".show-square-row");

//slider
const squareSlider = document.querySelector(".slider");


// Create n x n new square divs
function createSquares(number) {
    for (let i = 0; i < (number * number); i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");

        // width of square depend on number of square in each row
        newSquare.style.flexBasis = `${(1 / number) * 100}%`;

        // add everything to document fragment before adding to real node
        docFrag.appendChild(newSquare);
    }
    
    frame.appendChild(docFrag);
}

// Remove all square
function removeSquares() {
    frame.innerHTML = "";
}

// add black color to squares
function black() {
    this.style.backgroundColor = "black";
}

function blackSquare() {
    const allSquare = document.querySelectorAll(".square");
    allSquare.forEach(square => square.addEventListener("mouseover", black));
}

// Using slider to change number of square
function recreateSquare() {
    let squareNumber = +this.value;
    removeSquares();
    createSquares(squareNumber);
    blackSquare();
    squareRowValue.textContent = this.value;
}

squareSlider.addEventListener("input", recreateSquare);

// create random rgb color
// create random number 0-255
function random255() {
    return Math.floor(Math.random() * (255 + 1));
}

// change background color with random rgb
function randomRBG() {
    r = random255();
    b = random255();
    g = random255();

    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// remove black background css, change to randomRBG with RBG button
function randomColorSquare() {
    const allSquare = document.querySelectorAll(".square");
    allSquare.forEach(square => square.removeEventListener("mouseover", randomRBG));
    allSquare.forEach(square => square.addEventListener("mouseover", randomRBG));
}

randomButton.addEventListener("click", randomColorSquare);


//main default page setting
createSquares(4);
blackSquare();


// testing code
