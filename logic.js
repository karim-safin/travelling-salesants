/**
 * Color of the ant's body
 */
var antColor = "#002b36"

/**
 * Draws an ant cell at (x, y)
 */
function drawAnt(context, x, y) {
    context.fillStyle = antColor;
    context.fillRect(x - 10, y - 10, 20, 20);
}

/**
 * Haven't decided what this function will do.
 */
function onMouseClick(event) { }

function setCanvasSize(width, height) {
    var canvas = document.getElementById("mainCanvas");
    width = Math.floor(width);
    height = Math.floor(height);
    canvas.width = width;
    canvas.height = height;
}

/**
 * Does nothing (yet)
 */
function setup() {

}

/**
 * Makes sure that the canvas will fit into body but won't be larget than
 * maxCanvasSize declared at the beginning of the file
 */
function onResize() {
    var bodyWidth = window.innerWidth;
    var bodyHeight = window.innerHeight;
    if (bodyWidth < bodyHeight) {
        setCanvasSize(bodyWidth * 0.9, bodyWidth * 0.9);
    } else {
        setCanvasSize(bodyHeight * 0.9, bodyHeight * 0.9);
    }
    if (game != undefined) {
        drawGame();
    }
}
