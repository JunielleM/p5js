let font;
let colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
let currentColorIndex = 0;

function setup() {
  createCanvas(800, 200);
  background(0); // black bg
  font = loadFont('Courier New'); // Load Courier New font
  textFont(font);
  textSize(40);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255); // 
  fill(0); // 
  strokeWeight(5); // O

  // to make the text into 6 different colors
  stroke(colors[currentColorIndex]);
  text('BATH SPA UNIVERSITY', width / 2, height / 2);
}

function mousePressed() {
  // when mouse is pressed the color changes
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

