let yourname;

function preload() {
  yourname = loadImage("images/kiminonawa.jpg");
}

function setup() {
  createCanvas(500, 400);
  background(255); // White background

  // Clip and draw the kiminonawa image
  clipAndDraw(yourname, 47, 50, 300, 200, 0, 0, 500, 400);

  // Display the text
  fill(0, 102, 153); // Text color: dark blue
  textSize(16); // Text size
  textAlign(CENTER, CENTER); // Text alignment
  let textX = width / 2; // X position for the text
  let textY = 370; // Y position for the text
  text("I'd still love you in every universe", textX, textY);
}

function clipAndDraw(img, x, y, w, h, gx, gy, gw, gh) {
  let block = createGraphics(gw, gh); // Create a graphics object for the clipped image
  block.image(img, 0, 0, gw, gh); // Draw the image onto the graphics object
  image(block, gx, gy); // Draw the clipped image onto the main canvas
}
