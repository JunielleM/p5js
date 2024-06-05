var img, x, y

function preload() { //to load the img
  img = loadImage('cotton.jpg');
}

function setup() {
  createCanvas (400, 400)
  background(0)
  noStroke()
}

function draw() {
  img.resize(600,600)
  x = random(width)
  y = random(height)
  //shapes being distributed 
  var c = img.get(x, y)
  fill(c[0], c[1], c[2], 200)
  ellipse (x, y, 60, 60)//circle size
}