// HTML nodes
// square frame
const frame = document.querySelector(".frame");
const docFrag = document.createDocumentFragment();

//reset button
const resetButton = document.querySelector("#reset-button");

//randomRBG button
const randomButton = document.querySelector("#random-button");

//black button
const blackButton = document.querySelector("#black-button")

//slider number show on web
const squareRowValue = document.querySelector(".show-square-row");

//slider
const squareSlider = document.querySelector(".slider");

// switch to check color mode status
let whatMode = "black";


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
    allSquare.forEach(square => square.removeEventListener("mouseover", randomRBG));
    allSquare.forEach(square => square.addEventListener("mouseover", black));
    colorMode = "black";
    console.log(colorMode);
}

// Using slider to change number of square
function recreateSquare() {
    // if I use this.value, the value is fixed not dynamic
    let squareNumber = +document.querySelector(".slider").value;
    removeSquares();
    createSquares(squareNumber);
    squareRowValue.textContent = squareNumber;

    if (colorMode === "black") {
        blackSquare();
    }
    else randomColorSquare();
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
    allSquare.forEach(square => square.removeEventListener("mouseover", blackSquare));
    allSquare.forEach(square => square.addEventListener("mouseover", randomRBG));

    colorMode = "random";
    console.log(colorMode);
}


// button events
randomButton.addEventListener("click", randomColorSquare);
blackButton.addEventListener("click", blackSquare);
resetButton.addEventListener("click", recreateSquare);

//main default page setting
createSquares(4);
blackSquare();


// testing code
