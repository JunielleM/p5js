var table;

function preload() {
  // Load the CSV file
  table = loadTable("Procastination.csv", "csv", "header"); // to load the programs at the left side of the bar
}

function setup() { // for canvas
  createCanvas(475, 325);
  background(255);
  noStroke();
}

function draw() {
  background(255,255); // background color
  push();
  textSize(18);
  textStyle(BOLD); // background and the text function for How long do I procastinate?
  text('How long do I procrastinate?', 50, 50);
  textSize(14);
  textStyle(NORMAL);
  translate(0, 275);

  var data = table.getColumn('Hours'); // to get how much hours i procastianate
  
  for (let i = 0; i < table.getRowCount(); i++) {
    
    var rectHeight = map(data[i], 1, 6, 200, 200); // Adjust the range based on your data
    push(); // push works like pop, so it can revert it from transforming in the old canva
    translate(i * 66 + 20, 0); // spacing between bars
    var lerpAm = map(data[i], 200, 6, 0, 1); // data range
    var lerpCol = lerpColor(color(64, 126, 214), color(237, 40, 59), lerpAm);
    fill(lerpCol);
    textAlign(CENTER);
    rect(0, 0, 40, -rectHeight);
    fill(275,0,0);
    text(data[i], 20, -rectHeight - 1);
    text(table.getString(i, 'Day'),20, 20); // days of the week
    pop();
  }
  pop();
}

