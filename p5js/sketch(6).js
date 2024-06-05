function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Mazda
  fill('#300A3E'); // 
  rect(50, 200, 300, 100); // Main body
  rect(100, 150, 200, 50); // Front part

  // Wheels
  fill('#000000'); // 
  ellipse(100, 300, 60, 60); // Front wheel
  ellipse(300, 300, 60, 60); // Rear wheel

  // Spoilers
  fill('#C80802'); // 
  rect(80, 140, 120, 20); // Front spoiler
  rect(300, 220, 50, 20); // Rear spoiler

  // Headlights
  fill('#FFFF00'); // 
  ellipse(50, 250, 25, 25); // Left headlight
  ellipse(350, 250, 25, 25); // Right headlight

  // Taillights
  fill('#FF0000'); // 
  ellipse(50, 300, 25, 25); // Left taillight
  
  
}
