// HTML nodes
const frame = document.querySelector(".frame");
const docFrag = document.createDocumentFragment();


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

createSquares(4);
// removeSquares();