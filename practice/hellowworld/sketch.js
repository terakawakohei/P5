let bg = ["#dcdcdc"];
let canvasSize = 600;
function setup() {
  //   createCanvas((width - canvasSize) / 2, (height + canvasSize) / 2);
  createCanvas(windowWidth / 3, windowWidth / 3);
  console.log(width);
  console.log(canvasSize);


 
}
function draw(){
  clear()

  background(bg);
  let cells = 40;
  let offset = width / 20;
  let margin = offset / 1.5;
  let w = (width - offset * 2 - margin * (cells - 1)) / cells;
  let h = (height - offset * 2 - margin * (cells - 1)) / cells;


  //addNoisex = random(10);
  //addNoisey = random(10);
  addNoisex = constrain(mouseX,100,windowWidth-100)
  addNoisey = constrain(mouseY,100,windowHeight-100)
  console.log(addNoisex,addNoisey)
  for (let j = 0; j < cells; j++) {
    for (let i = 0; i < cells; i++) {
      let x = offset + i * (w + margin);
      let y = offset + j * (h + margin);

      let d = w;

      addx = noise(addNoisex) * w * 1.41;
      addy = noise(addNoisey) * w * 1.41;

      console.log(x, y, x + addx, y + addy);
      line(x, y, x + addx, y + addy);
      addNoisex += 0.1;
      addNoisey += 0.1;
    }
  }
}
