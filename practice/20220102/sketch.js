let bg = ["#dcdcdc"];
let s_col = ["#000000"];
let canvasSize = 600;
function setup() {
  createCanvas(windowWidth / 2, windowWidth / 2);
  background(bg);
  
  strokeWeight(1);
  smooth();

   let cells = 50;
   let offset = width / 20;
   let margin = offset / 1.5;
   let w = (width - offset * 2 - margin * (cells - 1)) / cells;
   let h = (height - offset * 2 - margin * (cells - 1)) / cells;

  console.log("width="+width);
  console.log("offset="+offset);
  startX=offset*5;
  endX=width-offset*5;
  console.log(startX);
  console.log(endX);
  
     for (let i = offset; i < height-offset*1.4; i+=4) {
     noiseLine(startX, i, endX, i);
    }

  stroke(10);
}

function noiseLine(x1,y1,x2,y2){
  stroke(s_col);
  strokeWeight(0.3);
  let step=10;
  let lastx=-999;
  let lasty=-999;
  let ynoise=random(10);
  let y;

  for(let x=x1;x<=x2;x+=step){
    y=y1+noise(ynoise)*10;
    if(lastx>-999){
      line(x,y,lastx,lasty);
      
    }
    lastx=x;
    lasty=y;
    ynoise+=0.1;
  }
}
