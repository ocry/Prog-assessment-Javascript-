let circleResolution; 
let angle;
let radius;
let u;

class urchin{
	constructor(circleResolution, angle, radius, i){
		this.circleResolution = circleResolution;
		this.angle = angle;
		this.radius = radius;
		this.i = i;
	
  	createCanvas(windowWidth, windowHeight);
  	background(220, 220, 220);
  	stroke(0, 0, 0);
	}

	setangle(angle){
		this.angle = angle;
	}

	setradius(radius){
		this.radius = radius;
	}

	draw() {
  	translate(windowWidth/2, windowHeight/2);
		
		this.circleResolution = map(mouseY, 0, height, 2, 60);
		this.angle = 2*Math.PI / this.circleResolution;
		this.radius = mouseX - windowWidth/2 + 0.5;
		
		for (this.i = 0; this.i < 2*Math.PI + this.angle; this.i += this.angle) {
			line(0, 0, this.radius * Math.cos(this.i), this.radius * Math.sin(this.i));
  		}
	}
}

function setup(){
	u = new urchin();
}
	
function draw(){
	u.draw();
}
