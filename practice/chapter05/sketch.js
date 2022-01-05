function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
	colorMode(HSB,width,100,100)
}

function draw() {
	// put drawing code here
	
	clear()
	fill(mouseY,80,90)
	circle(mouseX,mouseY,100)
	
}
