const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
const maxSnowflakes = 100;

// Load your custom image
const img = new Image();
img.src = '../images/white.png'; // Replace with the path to your image

// Create a snowflake
function createSnowflake() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 50 + 10, // Random size for the image
    speed: Math.random() * 1 + 0.5
  };
}

// Initialize snowflakes
for (let i = 0; i < maxSnowflakes; i++) {
  snowflakes.push(createSnowflake());
}

// Draw snowflakes using the custom image
function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  addText();
  snowflakes.forEach(flake => {
    ctx.drawImage(img, flake.x, flake.y, flake.size, flake.size);
  });
}

// Update snowflakes
function updateSnowflakes() {
  snowflakes.forEach(flake => {
    flake.y += flake.speed;

    // Reset to the top when the snowflake moves out of view
    if (flake.y > canvas.height) {
      flake.y = -flake.size;
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

// Start animation once the image is loaded
img.onload = () => {
  animate();
};

// Handle screen resizing
window.addEventListener('resize', () => {
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