function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  

  fill(0, 250, 250);
  ellipse(width / 2, height / 2, 400, 200);
  
 
  fill(255);
  ellipse(width / 2 - 30, height / 2 - 20, 60, 60);
  ellipse(width / 2 + 40, height / 2 - 20, 60, 30);
  
 
  fill(0);
  ellipse(width / 2 - 40, height / 2 - 20, 20, 40);
  ellipse(width / 2 + 40, height / 2 - 20, 20, 20);
  

  fill(255, 204, 0);
  triangle(width / 2 - 20, height / 2 - 70, width / 2 - 80, height / 2 - 250, width / 2 - 60, height / 2 - 70); // 
  triangle(width / 2 + 20, height / 2 - 70, width / 2 + 80, height / 2 - 250, width / 2 + 60, height / 2 - 70);
fill(200,0,0)
circle(200,200,40)
  noFill();
  arc(150, 180, 200, 200, 120, 103);

}
