function setup() {
	createCanvas(windowWidth, windowHeight);

	noFill();

}

function draw() {
	// put drawing code here
// 	strokeWeight( random( 1,5 ) );
// 	stroke( random( 180,255 ) );
// 	circle( width / 2,height / 2,random( 50,300 ) );
	stroke(random(180,255))
	ellipse(random(width)  , height/2,random(50,300),random(50,600))
 }
