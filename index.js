// HTML nodes
// square frame
const frame = document.querySelector(".frame");
const docFrag = document.createDocumentFragment();

//reset button
const reset = document.querySelector(".reset");

//slider number show on web
const squareRow = document.querySelector(".square-row");

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
function blackSquare() {
    const allSquare = document.querySelectorAll(".square");
    allSquare.forEach(square => square.addEventListener("mouseover", function() {
        square.classList.add("black-square");
    }))
}


//main
createSquares(10);
// removeSquares();
blackSquare();