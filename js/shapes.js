const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// canvas.style.backgroundColor = "white";

function filled_rectangle() {

    // canvas.style.backgroundColor = "white";
    // Draw a filled rectangle
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 100, 100);
}

// Draw a rectangle outline
function draw_a_rectangle_outline() {
ctx.strokeStyle = 'red';
ctx.strokeRect(200, 50, 100, 100);
}
// Draw a filled circle
function draw_a_filled_circle() {
ctx.beginPath();
ctx.arc(150, 250, 50, 0, Math.PI * 2); // (x, y, radius, startAngle, endAngle)
ctx.fillStyle = 'green';
ctx.fill();
}
// Draw a circle outline
function draw_a_circle_outline() {
ctx.beginPath();
ctx.arc(300, 250, 50, 0, Math.PI * 2);
ctx.strokeStyle = 'black';
ctx.stroke();
}

// ctx.beginPath();
// ctx.moveTo(50, 400); // Starting point
// ctx.lineTo(200, 400); // Ending point
// ctx.strokeStyle = 'black';
// ctx.lineWidth = 3;
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(300, 350); // First vertex
// ctx.lineTo(350, 450); // Second vertex
// ctx.lineTo(250, 450); // Third vertex
// ctx.closePath(); // Close the shape
// ctx.fillStyle = 'purple';
// ctx.fill();

// const gradient = ctx.createLinearGradient(0, 0, 500, 0);
// gradient.addColorStop(0, 'red');
// gradient.addColorStop(1, 'blue');
// ctx.fillStyle = gradient;
// ctx.fillRect(50, 300, 200, 50);


// // text
ctx.font = '20px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello, Canvas!', 50, 50);



// //curves

// Quadratic Curve
function draw_a_quadratic_curve() {
    ctx.beginPath();
    ctx.moveTo(50, 450);
    ctx.quadraticCurveTo(150, 300, 250, 450);
    ctx.stroke();
}
// Bezier Curve

function draw_a_bezier_curve() {
    ctx.beginPath();
    ctx.moveTo(300, 450);
    ctx.bezierCurveTo(350, 300, 400, 600, 450, 450);
    ctx.stroke();
}