const iterations = 20;
const size = 4;
let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10)
  stroke(240);
  noFill();

  x = floor(width / 2);
  y = floor(height / 2);
}

function draw() {
  walk();
}

function walk() {
  const tx = x + 10*random([-size, size]);
  const ty = y + 10*random([-size, size]);

  line(x, y, tx, ty);
  strokeWeight(10)
  x = tx;
  y = ty;
}
function mousePressed() {save("" + year() + month() + day() + hour() + minute() + second() + ".png");}