let d,bgColor,circleColor;
function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
	noStroke();
	circleColor=color(random(255),random(255),random(255))


	reset()
}
function reset(){
	
	d=0;//直径の初期化
	bgColor=circleColor
	circleColor=color(random(255),random(255),random(255))
}

function draw() {
	// put drawing code here
	d+=23;
	if(d/2>dist(0,0,width/2,height/2)){
		reset()
	}
	clear()
	background(bgColor)
	fill(circleColor)
	circle(width/2,height/2,d)
}
function mouseClicked(){
	reset()
}