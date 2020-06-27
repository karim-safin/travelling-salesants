/**
 * Color of the ant's body (red)
 */
var antColor = "#dc322f ";

/**
 * Color of the vertex of a graph (brblack)
 */
var vertexColor = "#002b36";

/**
 * Color of the edge of a graph (black)
 */
var edgeColor = "#073642";

/**
 * The color of the empty space (brwhite)
 */
var backgroundColor = "#fdf6e3";

/**
 * How many units (on canvas) does the ant travel in one second
 */
var antSpeed = 100;

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Graph {
	constructor() {
		this.vertices = [];
	}

	addVertex(v) {
		this.vertices.push(v)
	}

	drawVertex(ctx, p) {
		ctx.fillStyle = vertexColor;
		ctx.fillRect(p.x - 10, p.y - 10, 20, 20);
	}

	drawEdge(ctx, p1, p2) {
		ctx.fillStyle = edgeColor;
		ctx.beginPath();
	    ctx.lineWidth = 1;
	    ctx.moveTo(p1.x, p1.y);
	    ctx.lineTo(p2.x, p2.y);
	    ctx.stroke();
	}

	draw(ctx) {
		for (var i = this.vertices.length - 1; i >= 0; i--) {
			for (var j = i - 1; j >= 0; j--) {
				this.drawEdge(ctx, this.vertices[i], this.vertices[j]);
			}
		}
		for (var i = this.vertices.length - 1; i >= 0; i--) {
			this.drawVertex(ctx, this.vertices[i]);
		}
	}
}

var graph = new Graph();

/**
 * An ant perpetually moves from one point to another one
 * @param Ant goes from this point
 * @param Ant goes to this point
 */
class Ant {
    constructor(a, b) {
        this.goesFrom = a;
        this.goesTo = b;
        this.startTime = Date.now();
        this.endTime = this.startTime + distance(a, b) / antSpeed;
    }
}

/**
 * Adds a point to the graph in the place in which the user clicked
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
	var c = document.getElementById("mainCanvas");
	console.log(c.width);
	console.log(c.height);
	for (var i = 10; i >= 0; i--) {
		graph.addVertex(new Point(Math.floor(Math.random() * c.width), Math.floor(Math.random() * c.height)));
	}
}

function drawBackground(ctx) {
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, 10000, 10000);
}

/**
 * Draws the whole scene: ants, the graph etc.
 */
function onDraw() {
	var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");
    drawBackground(ctx);
    graph.draw(ctx);
}

/**
 * Processes the resize event.
 */
function onResize() {
    var bodyWidth = document.body.clientWidth;
    var bodyHeight = document.body.clientHeight;
    setCanvasSize(bodyWidth * 0.95, bodyHeight * 0.95);
}
