let bg = ["#dcdcdc"];
let bgNum = [220];
function setup() {
  createCanvas(windowWidth / 3, windowWidth / 2);
  // put setup code here
  background(bg);
}

function draw() {
  let cells = 40;
  let offset = width / 20;
  let margin = offset / 1.5;
  let center = height / 2;
  let weight = 0.5;
  line(offset, height / 2, width - offset, height / 2);
  stroke(30);
  strokeWeight(weight);
  //上方向と下方向にforを回す
  //上側
  let upperValue = 30;
  for (let upper = center; upper > offset; upper -= 10) {
    line(offset, upper, width - offset, upper);
    stroke(upperValue);

    strokeWeight(weight);
    upperValue += 10;
    if (upperValue > bgNum) break;
  }
  //下側
  let lowerValue = 30;
  for (let lower = center; lower < height - offset; lower += 10) {
    line(offset, lower, width - offset, lower);
    stroke(lowerValue);

    strokeWeight(weight);
    lowerValue += 10;
    if (lowerValue > bgNum) break;
  }
}
