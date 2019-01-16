# Striated Urchin documentation
## Overview

Code is originally from [Openprocessing.](https://www.openprocessing.org/sketch/470364)

The original creator of this code is [Laker.](https://www.openprocessing.org/user/102596)

Laker created Striated Urchin on November 3rd 2017.

The program generate an urchin that will expand if the mouse cursor is moved away from the centre.

The purpose of this program is to learn more about p5.js and adapt it to a reusable component.
## index.html
To run the program, the user must first open this file.

Below is a block of code from index.html, it is to link the html file with p5.js library and class and urchin.js.
```javascript
<script src="https://cdn.jsdelivr.net/npm/p5@0.5.16/lib/p5.min.js" type="text/javascript"></script>
    <script src="urchin.js" type="text/javascript"></script>
```

Below is the code for the button in the top left corner of the page.

```javascript
<form>
	<input type="button" onclick="alert('Move your mouse around to see the urchin grow!')" value="Click Me!">
</form>
```

## urchin.js 
### class urchin
### Argument
#### constructor(circleResolution, angle, radius, i)
```javascript
constructor(circleResolution, angle, radius, i){
		this.circleResolution = circleResolution;
		this.angle = angle;
		this.radius = radius;
		this.i = i;
```

##### circleResolution:
The value of circleResolution is map(mouseY, 0, height, 2, 60) as shown below.
```javascript
this.circleResolution = map(mouseY, 0, height, 2, 60);
```

##### angle:
The value of angle is 2*Math.PI / this.circleResolution as shown below.
```javascript
this.angle = 2*Math.PI / this.circleResolution;
```

##### radius:
The value of radius is mouseX - windowWidth/2 + 0.5 as shown below.
```javascript
this.radius = mouseX - windowWidth/2 + 0.5;
```

##### i:
The default value of i is 0 
```javascript
for (this.i = 0; this.i < 2*Math.PI + this.angle; this.i += this.angle)
```

##### Getters and setters
The get syntax binds an object property to a function that will be called when that property is looked up.
The set syntax binds an object property to a function to be called when there is an attempt to set that property.

The example below is the set function used in the code.
```javascript
setangle(angle){
		this.angle = angle;
	}

setradius(radius){
		this.radius = radius;
	}
```

#### draw()
Draw the urchin using the p5 function, if cursor is moved from the centre draw again.

##### translate()
The translate() function allows objects to be moved to any location within the window, the synxtax for the translate function is translate(x, y).
Below is the translate function in the code.
```javascript
translate(windowWidth/2, windowHeight/2);
```

### End class

### function 
Function is use to call the class

Create a variable 'u' to call the class
```javascript
function setup(){
	u = new urchin();
}
```

Below is the code written to call the draw function inside the class
```javascript
function draw(){
	u.draw();
}
```

## Licensing
Striated Urchin by Laker [Link here.](https://www.openprocessing.org/sketch/470364)

Licensed under Creative Commons Attribution ShareAlike [Link here.](https://creativecommons.org/licenses/by-sa/3.0/)

Free to share and adapt.
