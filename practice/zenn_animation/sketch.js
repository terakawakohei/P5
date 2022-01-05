let r,x,s;
function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
	r=min(width,height)/6;
	x=r;
s="0";
}

function draw() {
	// put drawing code here
		x+=10;
	if(x>width+r){
		//中心が右端に出たら
		x=-r;
		//左側に折り返す
	}

	clear();
	noStroke();
    fill(0);
	text(s,20,20);
	
	circle(x,height/2,r*2);

	text(frameCount,width/2,height/2);
	console.log(frameRate());	
	if(frameCount%30===0){
		//toFixed() : 数を固定小数点表記にする　数字は小数点のあとに現れる桁の数
		s=frameRate().toFixed(0);
	}
	push();
	noStroke();
    fill(0);
	text(s,20,20);
	pop();
}
