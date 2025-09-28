const canvas = document.getElementById('turtleCanvas');
const ctx = canvas.getContext('2d');

canvas.style.backgroundColor = "white";
ctx.strokeStyle = "red";
ctx.lineWidth = 2;

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
}





function setPenColor(color) {
    ctx.strokeStyle = color;
}
function setLineWidth(width) {
    ctx.lineWidth = width;
}
function drawPolygon(x,y,sides, length) {
    const angle = 360 / sides;
    turtle.x = x + (canvas.width / 2);
    turtle.y = y + (canvas.height / 2);
    for (let i = 0; i < sides; i++) {
      forward(length);
      right(angle);
    }
}

// Example: Drawing a triangle
function drawTriangle() {
  canvas.style.backgroundColor = "white";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  for (let i = 0; i < 43; i++) {
    forward(100);
    left(120);
  }
  
}

// Example: Drawing a square
function drawSquare() {
  canvas.style.backgroundColor = "white";

  ctx.lineWidth = 2;
  
  for (let i = 0; i < 4; i++) {
    forward(100);
    right(90);
  }
}
function drawExamples() {
    left(180);
    setPenColor("green");
    drawPolygon(0,0,3, 100);
    drawPolygon(0,0,4, 100);
    drawPolygon(100,0,4, 10);
    drawPolygon(200,0,4, 10);
    setPenColor("red");
    drawPolygon(-100,0,4, 10);
    drawPolygon(-200,0,4, 10);
    setPenColor("blue");
    drawPolygon(0,100,4, 10);
    drawPolygon(0,200,4, 10);
    setPenColor("yellow");
    drawPolygon(0,-100,4, 10);
    drawPolygon(0,-200,4, 10);
    setPenColor("purple");
    drawPolygon(0,0,60, 6);
}
function drawSnowman(x,y,size) {
  const angle = 360 / 6;
  turtle.x = x + (canvas.width / 2);
  turtle.y = y + (canvas.height / 2);
  setPenColor("purple");

  for (let i = 0; i < 30; i++) {
    forward(size);
    right(6);
  }
  left(180);
  for (let i = 0; i < 30; i++) {
    forward(size/2);
    right(6);
  }
  left(180);
  for (let i = 0; i < 60; i++) {
    forward(size/3);
    right(6);
  }
  left(180);
  for (let i = 0; i < 30; i++) {
    forward(size/2);
    right(6);
  }
  left(180);
  for (let i = 0; i < 30; i++) {
    forward(size);
    right(6);
  }
}
 