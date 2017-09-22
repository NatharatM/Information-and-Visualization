/*
The Thick Circular Line Clock: The thickness of the line represents
which line represents the hour, minute, and second hand.

*/


var cx, cy; // center position of canvas
var hr;
var min;
var sec;
// Radius for hands of the clock

function setup() {

  createCanvas(500, 500);
  stroke(255);
  cx = 50;
  cy = 100;
  w = 400;
  h = 200;

}

function draw() {
  background(200); //grey

  //Digit blocks
  fill(255, 234, 181);
  noStroke();
  rect(cx, cy, w/3, h);
  fill(242, 216, 150);
  rect(cx + w/3, cy, w/3, h);
  fill(239, 207, 127);
  rect(cx + (2*w)/3, cy, w/3, h);

  //Clock Face
  noFill();
  //fill(255); // white clock face
  stroke(0);
  strokeWeight(10);
  rect(cx, cy, w, h, 20);

  //Geometric Shapes
  //HOUR
  hr = hour();
  strokeWeight(4);
  noFill();
  if (hr>1) {
    //console.log(hr);
    beginShape();
    for (var a = 0; a < 360; a+=360/hr) {
      var angle = radians(a);
      var x = cx+w/6 + cos(angle) * 50;
      var y = cy+h/2 + sin(angle) * 50;
      //console.log(x);
      vertex(x, y);
    }
    endShape(CLOSE);
  } else {
    if (hr==1) {
      strokeWeight(20);
      point(cx+w/6, cy+h/2);
    }
  }
  //MINUTE_FIRST
  min = floor(minute()/10);
  strokeWeight(4);
  noFill();
  if (min>1) {
    //console.log(hr);
    beginShape();
    for (var a = 0; a < 360; a+=360/min) {
      var angle = radians(a);
      var x = cx+w/2 + cos(angle) * 50;
      var y = cy+h/2 + sin(angle) * 50;
      //console.log(x);
      vertex(x, y);
    }
    endShape(CLOSE);
  } else {
    if (min==1) {
      strokeWeight(20);
      point(cx+w/2, cy+h/2);
    }
  }
  //MINUTE_Second
  min2 = minute()-(min*10);
  strokeWeight(4);
  noFill();
  if (min2>1) {
    //console.log(hr);
    beginShape();
    for (var a = 0; a < 360; a+=360/min2) {
      var angle = radians(a);
      var x = cx+(5*w)/6 + cos(angle) * 50;
      var y = cy+h/2 + sin(angle) * 50;
      //console.log(x);
      vertex(x, y);
    }
    endShape(CLOSE);
  } else {
    if (min2==1) {
      strokeWeight(20);
      point(cx+(5*w)/6, cy+h/2);
    }
  }



}
