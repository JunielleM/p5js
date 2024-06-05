function setup() {
  createCanvas(400, 400);
  background(0); // for bg folor
  
  // half a heart shape
  let heartSize = 30;

  // Loop to draw heart shapes across the canvas
  for (let x = 0; x < width; x += heartSize * 2) {
    for (let y = 0; y < height; y += heartSize * 2) {
      // Randomly decide whether to draw a heart or not
      if (random() > 0.5) {
        // draws a random heart inside the x and Y
        if (dist(x, y, mouseX, mouseY) < heartSize) {
          drawHeart(x, y, heartSize * 2, color(200, 0, 255)); // 
        } else {
          drawHeart(x, y, heartSize, color(200, 0, 255)); // 
        }
      }
    }
  }
}

function drawHeart(x, y, size, color) {
  fill(color);
  stroke(color);
  beginShape();
  vertex(x, y + size / 2);
  bezierVertex(x, y, x - size / 2, y - size / 2, x + size / 4, y - size / 2);
  bezierVertex(x + size / 2, y - size / 2, x + size / 2, y + size / 4, x, y + size / 2);
  endShape(CLOSE);
}

function draw() {
  // If mouse is pressed, redraw hearts with a black background
  if (mouseIsPressed) {
    setup();
  }
}

