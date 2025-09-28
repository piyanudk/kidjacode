const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to hold snowflakes
const snowflakes = [];

  // Load your custom image
  const img = new Image();
  img.src = '../images/white.png'; // Replace with the path to your image
  
  // Create a snowflake
  function createSnowflakes_new() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 50 + 10, // Random size for the image
      speed: Math.random() * 1 + 0.5
    };
  }
// Function to create snowflakes
function createSnowflakes() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 4 + 1; // Random radius between 1 and 5
  const speed = Math.random() * 2 + 1; // Random speed
  snowflakes.push({ x, y, radius, speed });
}

// Function to draw snowflakes
function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  ctx.fillStyle = "white";
  addText();

  snowflakes.forEach((flake) => {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Function to update snowflakes' positions
function updateSnowflakes() {
  snowflakes.forEach((flake) => {
    flake.y += flake.speed; // Move snowflake down
    flake.x += Math.sin(flake.y / 20); // Add a slight sway

    // Reset position if snowflake moves out of view
    if (flake.y > canvas.height) {
      flake.y = 0;
      flake.x = Math.random() * canvas.width;
    }
  });
}

// Animation loop
function animate() {
  drawSnowflakes();
  updateSnowflakes();
  requestAnimationFrame(animate);
}

// Create initial snowflakes and start animation
for (let i = 0; i < 100; i++) {
  createSnowflakes();
}

animate();

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function addText() {
    // text
  ctx.font = '70px Cursive';
  ctx.fillStyle = 'white';
  ctx.fillText('Merry Christmas', 600, 300);
  ctx.fillText('&', 800, 400);
  ctx.fillText('Happy New Year', 600, 500);
}