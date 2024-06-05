let img;

function preload() {
  // to load the image
  img = loadImage("dumpty.jpg");
}

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(255); 

  // to translate the center of the page
  translate(width / 2, height / 2);

 // to rotate
  let angle = map(mouseX, 0, width, -PI / 4, PI / 4);

  // to rotate
  rotate(angle);

  // Translate to the top-left corner of the image and draw it
  imageMode(CENTER);
  image(img, 0, 0);

  // to blur the image
  let v = map(mouseX, 0, width, 2, 20); // Mouse interaction with filter
  filter(BLUR, v); // Apply blur filter

  // to reset filter
  resetMatrix();
}
