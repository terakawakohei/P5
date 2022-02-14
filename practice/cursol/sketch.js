let bg = ["#dcdcdc"];
let canvasSize = 900;
function setup() {
  //   createCanvas((width - canvasSize) / 2, (height + canvasSize) / 2);
  createCanvas(windowWidth / 2, windowWidth / 2);
//   console.log(width);
//   console.log(canvasSize);


 
}
function draw(){
  clear()

  background(bg);
  let cells = 20;
  let offset = width / 20;
  let margin = offset / 1.5;
  let w = (width - offset * 2 - margin * (cells - 1)) / cells;
  let h = (height - offset * 2 - margin * (cells - 1)) / cells;

  lNoise = random(10);

//   addNoisex = constrain(mouseX,100,windowWidth-100)
//   addNoisey = constrain(mouseY,100,windowHeight-100)
//   console.log(addNoisex,addNoisey)
  for (let j = 0; j < cells; j++) {
    for (let i = 0; i < cells; i++) {
      let x = offset + i * (w + margin);
      let y = offset + j * (h + margin);

      let d = w;

      let angle = atan2(mouseY-y, mouseX-x);
    //length=2+noise(lNoise)*8 
    length=6

	push();
    translate(x, y);
    rotate(angle);
    line(-length/2,-length/2,length/2,length/2)
    pop();

    //lNoise += 0.1;
    //   addx = noise(addNoisex) * w * 1.41;
    //   addy = noise(addNoisey) * w * 1.41;

    //   console.log(x, y, x + addx, y + addy);
    //   line(x, y, x + addx, y + addy);
    //   addNoisex += 0.1;
    //   addNoisey += 0.1;
    }
  }

// for (let x =50; x<=700; x+=50) {
//     for (let y = 50; y<=700; y+=50) {
//       //let angle = atan2(mouseY-y, mouseX-x);
//       let angle = atan2(mouseY, mouseX);
//       fill(255);


// 			push();
//       translate(x, y);
//       rotate(angle);
// 			textAlign(CENTER,CENTER);
// 			textFont("futura");
// 			// let d = dist(x, y, mouseX, mouseY);
// 			// let sz = d * .3;
//       textSize(50);
// //			text('1', 0, 0);
// line(0,0,5,5)
//       pop();
//     }
//   }
}
