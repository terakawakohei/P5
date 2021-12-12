import p5 from "p5";

const sketch = (p: p5) => {
  let bg = p.color("#dcdcdc");
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    p.background(bg);

    let cells = 40;
    let offset = p.windowWidth / 20;
    let margin = offset / 1.5;
    let w = (p.windowWidth - offset * 2 - margin * (cells - 1)) / cells;
    let h = (p.windowHeight - offset * 2 - margin * (cells - 1)) / cells;

    let addNoisex = p.random(10);
    let addNoisey = p.random(10);

    for (let j = 0; j < cells; j++) {
      for (let i = 0; i < cells; i++) {
        let x = offset + i * (w + margin);
        let y = offset + j * (h + margin);

        let d = w;

        let addx = p.noise(addNoisex) * w * 1.41;
        let addy = p.noise(addNoisey) * w * 1.41;

        p.line(x, y, x + addx, y + addy);
        addNoisex += 0.1;
        addNoisey += 0.1;
      }
    }
  };
};
new p5(sketch);
