let color = "black";

/* LOAD BOARD AS DEFAULT 16X16 */
document.addEventListener("DOMContentLoaded", function(){
    sizeOne();
})

/* 16X16 BOARD */
function sizeOne() {
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(16,1fr)`;
    board.style.gridTemplateRows = `repeat(16,1fr)`;
    
    let numDivs = 16 * 16;
        
    for(let i = 0; i < numDivs; i++) {
        let divs = document.createElement("div");
        divs.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", divs);
    }
}

/* 32X32 BOARD */
function sizeTwo() {
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(32,1fr)`;
    board.style.gridTemplateRows = `repeat(32,1fr)`;
    
    let numDivs = 32 * 32;
        
    for(let i = 0; i < numDivs; i++) {
        let divs = document.createElement("div");
        divs.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", divs);
    }
}

/* 64X64 BOARD */
function sizeThree() {
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(64,1fr)`;
    board.style.gridTemplateRows = `repeat(64,1fr)`;
    
    let numDivs = 64 * 64;
        
    for(let i = 0; i < numDivs; i++) {
        let divs = document.createElement("div");
        divs.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", divs);
    }
}

/* SET COLOR */
function colorDiv() {
    if(color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = 'black'
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

/* RESET BOARD */
function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white")
}