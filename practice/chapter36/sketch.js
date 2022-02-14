const w = 25;
const h = 25;
const cellSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();

  const img = createImage(w, h);
  img.loadPixels("tile.png");

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < ceil(w / 2); x++) {
      if (random() < 0.5) {
        img.set(x, y, color(0, 0, 0));
      }
    }
  }

  img.updatePixels();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < floor(w / 2); x++) {
      const pixel = img.get(x, y);
      img.set(w - x - 1, y, pixel);
    }
  }

  img.updatePixels();
  image(img, 10, 10, w * cellSize, h * cellSize);
}
function mousePressed() {save("" + year() + month() + day() + hour() + minute() + second() + ".png");}