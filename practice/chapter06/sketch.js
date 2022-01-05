let route, t, i;
function setup() {
  createCanvas(windowWidth, windowHeight);

  //点の座標
  //この三点は定点であり、動かない

  route = [
    { x: 100, y: 100 },
    { x: 300, y: 300 },
    { x: 300, y: 100 },
  ];
  t = 0;
  i = 0;
}

function draw() {
  // put drawing code here
  clear();

  //定点を表示
  route.forEach((r) => {
    circle(r.x, r.y, 20);
  });
  //prev~nextまでを線形補間して、tの位置に円を移動させる

  const prev = route[i];
  const next = route[(i + 1) % route.length]; //iよりひとつ次の数
  //x,yは動く点の座標が格納される
  //x軸、y軸ごとにtを増やして線形補間すると、prevからnextまで真っ直ぐ進む
  const x = lerp(prev.x, next.x, t);
  const y = lerp(prev.y, next.y, t);
  circle(x, y, 10);

  t += 0.01;
  if (t > 1) {
    t = 0;
    i++;
    i %= route.length;
  }
}
