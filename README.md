# Project: Etch-A-Sketch

**Pseudo code:**

1. **Create a webpage with a 16x16 grid of square divs.**
    
    ```jsx
    Frame:
    Html: 
    <div class = frame></div>
    
    CSS: 
    .container {
    	display = flex;
    	flex-wrap = wrap;
    	gap = 5px;
    }
    
    .square {
    	make it all square responsively
    }
    
    JS: 
    const numberOfDiv = 16
    createNewDiv
    appendNewDiv
    make every div < 25%
    repeat 16 times
    ```
    
    **Problem A: How to make a responsive square div?**
    
    display: flex;
    
    flex-basis(width of div)  = 1 / (number of squares in width) - (gap px)
    
    flex-wrap: wrap;
    
    flex-grow: 1;
    
    This way we will determine how many squares are in each row, and enlarge the squares to fill the flame.
    
    For example: If we want a 3 x 3 square, we set flex-basis = 33%, and we will have 3 squares in each row.
    
    **Problem B: How to create new divs in a loop?**
    
    - We can’t have the same element in two places.
    - When we append an element, we change its parent (node of DOM changed).
    - DocumentFragment: [DocumentFragment - Web APIs | MDN (mozilla.org)](https://developer.mozilla.org/zh-TW/docs/Web/API/DocumentFragment)
    - cloneNode: [https://www.w3schools.com/jsref/met_node_clonenode.asp](https://www.w3schools.com/jsref/met_node_clonenode.asp)
    - [重新學習 DOM — 筆記 ( DocumentFragment 節點) | by Julypenguin | Medium](https://julypenguin.medium.com/%E9%87%8D%E6%96%B0%E5%AD%B8%E7%BF%92-dom-%E7%AD%86%E8%A8%98-documentfragment-%E7%AF%80%E9%BB%9E-e64c9f65be96)
    
    ======================================================
    
    - After a few tries, I found that I can actually create multiple divs just using for loop with the same variable name. But using documentFragment is still a more efficient way to write the code.
    - We don’t need cloneNode here.
    
2. **Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.**
    - addEventListener(”mouseover”, changeColor);
    - function ChangeColor() ⇒ add new background CSS.

1. **Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.**
    - [How To Create Range Sliders (w3schools.com)](https://www.w3schools.com/howto/howto_js_rangeslider.asp)
    
    ```jsx
    // get n from user
    
    let square = n x n; // square = number of div needs to create
    
    let divSize = (1 / n) % - 1% // determine how many square in each row
    														 // eg.4x4: width of the square is 1/4 width of the row.
    														 // -1% for gap space
    
    node.Style.flexBasis = divSize;
    ```
    
    - Using the slider to create a new div, needs to delete all div first, otherwise, it will continue adding up.
    - Use addEventListner to trigger adding up events when changing the number in the slider.
    - Require 3 events: (1) remove old squares, (2) create new squares, (3) refresh slider value

1. **EXTRA: Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.**
    
    Q1. create random RGB?
    
    ```jsx
    function randomRBG() {
    	create random number from 0-255
    	create new css with rbg background color
    	remove old background color css
    	add new background css
    }
    
    // Random int inclusive
    Math.floor(Math.random() * (max - min + 1) + min
    ```
    
    Q2. add 10% black?
    
    - try rgba(0, 0, 0, 0.1)
    - add 0.1 every time mouse-over.
    
    ```jsx
    function darken() {
    	let rbgAlpha = 0;
    	let grey = `rbga(0, 0, 0, ${rbgAlpha}`;
    	rbgaAlpha += 0.1;
    	this.style.backgroundColor = grey;
    }
    
    allSquares.forEach(square => square.addEventListner("mouseover", darken));
    colorMode = "darken";
    ```
    
    - After trying to code this part, I found that this is actually the hardest part.
    - There are 2 parts to this mode. First initialize the background color to rgba(0, 0, 0, 0), when we touch the squares the first time.
    - Second, to increase alpha 0.1 every time we touch squares.
    - To use the same variable alphaValue in both parts, we need to create the second function inside the first function.
    - Separate this into 2 independent functions won’t work, because I can’t keep alphaValue to 2nd function.
    - Another hard part is the connection of 2 events.
    - After the initialization, we need to remove the first event for the touched square and add a new event for alpha change.
    - We need to do this one square by square, not all at once, so every square have it’s own event state to track.

Things worth remembering:

- To track current eventListner on squares, we can’t use the if statement on eventListner. But we can create a variable to record it.
- EX: 
colorMode = “black”, when we want black squares.
    
    colorMode = “random”, when we want random color squares.
    
    then we can use the if statement with colorMode:
    
    if (colorMode === “black”) {
    
    }
