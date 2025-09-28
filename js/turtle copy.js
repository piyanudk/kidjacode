const canvas = document.getElementById('turtleCanvas');
const ctx = canvas.getContext('2d');

// Turtle's initial state
let turtle = {
  x: canvas.width / 2, // Start in the center
  y: canvas.height / 2,
  angle: 0, // Facing right (0 degrees)
  penDown: true, // Pen is down for drawing
};

// Convert degrees to radians
const degToRad = (degrees) => (degrees * Math.PI) / 180;

// Move the turtle forward
function forward(steps) {
  const radians = degToRad(turtle.angle);
  const newX = turtle.x + Math.cos(radians) * steps;
  const newY = turtle.y + Math.sin(radians) * steps;

  if (turtle.penDown) {
    ctx.beginPath();
    ctx.moveTo(turtle.x, turtle.y);
    ctx.lineTo(newX, newY);
    ctx.stroke();
  }

  turtle.x = newX;
  turtle.y = newY;
}

// Rotate the turtle clockwise
function right(degrees) {
  turtle.angle += degrees;
}

// Rotate the turtle counterclockwise
function left(degrees) {
  turtle.angle -= degrees;
}

// Pen up (stop drawing)
function penUp() {
  turtle.penDown = false;
}

// Pen down (start drawing)
function penDown() {
  turtle.penDown = true;
}

// Clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.backgroundColor = "white";
}

// Example: Drawing a square
function drawSquare() {
  canvas.style.backgroundColor = "white";
  for (let i = 0; i < 4; i++) {
    forward(100);
    right(90);
  }
}

// Example usage
// clearCanvas();
// ctx.strokeStyle = "blue";
// ctx.lineWidth = 2;

// drawSquare();
// right(45);
// ctx.strokeStyle = "red";
// forward(100);


function setPenColor(color) {
    ctx.strokeStyle = color;
}
function setLineWidth(width) {
    ctx.lineWidth = width;
}
function drawPolygon(sides, length) {
    const angle = 360 / sides;
    for (let i = 0; i < sides; i++) {
      forward(length);
      right(angle);
    }
}
      