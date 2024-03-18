let x = 0; // Initial x position
let speed = 1; // Speed of movement

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(255, 0, 0); // Red color
  noStroke(); // No stroke around the square

  // Draw the square
  rect(x, height / 2 - 10, 40, 40); // 2 cm square (assuming 20 pixels = 1 cm)

  // Move the square
  x += speed;

  // Reverse direction if the square reaches the canvas boundaries
  if (x > width - 40 || x < 0) {
    speed *= -1;
  }
}
