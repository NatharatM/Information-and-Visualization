/*
The Thick Circular Line Clock: The thickness of the line represents
which line represents the hour, minute, and second hand.

*/


var cx, cy; // center position of canvas
// Radius for hands of the clock
var secondsRadius;
var minutesRadius;
var hoursRadius;
var clockDiameter;

function setup() {

  createCanvas(500, 500);
  stroke(255);


  var radius = min(width, height) / 2; // this is the maximum possible radius
//  secondsRadius = radius * 0.60;
//  minutesRadius = radius * 0.70;
//  hoursRadius = radius * 0.80;
  clockDiameter = radius * 1.8;


  cx = width / 2;
  cy = height / 2;
}

function draw() {
  background(150); //grey

  // Draw the clock background
  fill(0); // black clock
  noStroke();
  ellipse(cx, cy, clockDiameter, clockDiameter);


  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  var s = map(second(), 0, 60, 0, clockDiameter);
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, clockDiameter);
  var h = map(hour() + norm(minute(), 0, 60), 0, 12, 0, clockDiameter);

  //Draw the arc hands of the clock
  stroke(75,244,66); //light neon green
  strokeWeight(7);
  noFill();
  ellipse(cx, cy, h, h);
  stroke(247, 12, 78); // pink red
  strokeWeight(4);
    noFill();
  ellipse(cx, cy, m, m);
  stroke(115,204,211);
  strokeWeight(2);
    noFill();
  ellipse(cx, cy, s, s);


/*
  // Draw the hands of the clock
  stroke(255); //white
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
*/

/*
  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (var a = 0; a < 360; a+=6) {
    var angle = radians(a);
    var x = cx + cos(angle) * secondsRadius;
    var y = cy + sin(angle) * secondsRadius;
      console.log(x);
    vertex(x, y);
  }
  endShape();
*/

// Draw the 5 minute ticks
strokeWeight(3);
beginShape(POINTS);
for (var a = 0; a <= clockDiameter; a+=clockDiameter/24) {
  var x = cx- clockDiameter/2 + a;
  var y = cy;
    //console.log(x);
  vertex(x, y);
}
endShape();

strokeWeight(5);
beginShape(POINTS);
for (var a = 0; a <= clockDiameter; a+=3*clockDiameter/24) {
  var x = cx- clockDiameter/2 + a;
  var y = cy;
    //console.log(x);
  vertex(x, y);
}
endShape();

}
