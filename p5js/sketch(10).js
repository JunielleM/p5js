let circles = []; // to store the variable circles

function setup() {
  createCanvas(800, 600);
  background(0); // Set background color to black
}

function draw() {
  // makes the background black on every circle
  background(0);

  // to display the circles
  for (let circle of circles) {
    circle.display();
  }
}

function mouseMoved() {
  // follows the mouse and leaves a trail of red tomatoes
  circles.push(new Circle(mouseX, mouseY));
}

function mouseClicked() {
  // to reset the canvas
  circles = [];
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 20;
  }

  // tomatoes
  display() {
    fill(255, 0, 0); // Set fill color to bright tomatoes
    ellipse(this.x, this.y, this.radius * 2);
  }
}
