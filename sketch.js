var drawing =[];
var database;

function setup() {
  createCanvas(800,400);
 database = firebase.database();
}

function draw() {
  background("black");  

if(mouseIsPressed) {
var point ={
	x: mouseX,
	y: mouseY
}
drawing.push(point);
}

stroke(255);
strokeWeight(4);
Fill("green");
for(var i = 0;i < drawing.length; i++){
vertex(drawing[i].x , drawing[i].y)
}
}