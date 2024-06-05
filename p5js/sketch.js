let img; // Variable for the image

function preload() {
  // Load the image
  img = loadImage("gandeeth.png");
}

function setup() {
  createCanvas(400, 400); 
  background(0); 
}

function draw() {
  background(0);
  
  image(img, 0, 0, width, height);
  
  //  mouse coordinates
  let x = mouseX;
  let y = mouseY;
  
  // coords for the canvas
  if (x >= 0 && x < width && y >= 0 && y < height) {
    // pixel color
    let c = get(x, y);
    
    // to fill the pixel square
    fill(c);
    
    // coordinates for the pixel square
    rect(x, y, 30, 30);
  }
}
