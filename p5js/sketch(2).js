let yourname;
let imgquote;
// to load the images inside the folder
function preload() {
  yourname = loadImage("images/kiminonawa.jpg");
  imgquote = loadImage("images/parallel.png", () => {
    setup();
  });
}

function setup() {
  createCanvas(500, 420);
  background("#00030F89");

  // to Clip and draw the kiminonawa image
  clipAndDraw(yourname, 47, 50, 300, 200, 0, 0, 500, 400);

  // to Mask and draw the quote image
  maskAndDraw(imgquote, 100, 340, 300, 100, 100, 90, 300,100);
}

function clipAndDraw(img, x, y, w, h, gx, gy, gw, gh) {
  let block = createGraphics(gw, gh); // Create a graphics object for the clipped image
  block.image(img, 0, 0, gw, gh); // Draw the image onto the graphics object
  image(block, gx, gy); // Draw the clipped image onto the main canvas
}

function maskAndDraw(img, x, y, w, h, gw, gh, mw, mh) {
  let block = createGraphics(gw, gh);
  block.rect(0, 0, mw, mh);
  img.mask(block);
  img.resize(w, h);
  image(img, x, y);
}
