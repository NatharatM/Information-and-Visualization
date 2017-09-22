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
  noStroke();
  for (var a = 0; a < 11*h/12; a+=h/12) {
    fill(12+(a*1.6), 219-(0.5*a), 247-(a));
    rect(cx, cy+a, w, h/12);
  }

  /*
  fill(255, 234, 181);
  rect(cx, cy, w, h/12);
  fill(242, 216, 150);
  rect(cx, cy+(h/12), w, h);
  fill(239, 207, 127);
  rect(cx, cy+(h/6), w, h);
*/


  //MOuntains
  //HOUR
  hr = hour();
  //strokeWeight(4);
  //noFill();
  noStroke();
  fill('green');

    beginShape();
      vertex(cx, cy+h);
      vertex(cx+w/4, cy+ (h-(hr*(h/12))));
      vertex(cx+w/2,cy+h);
    endShape(CLOSE);

  //MINUTE_FIRST
  min = minute();
  //strokeWeight(4);
  beginShape();
    vertex(cx+w/2, cy+h);
    vertex(cx+(3*w/4), cy+ (h-(min*(h/60))));
    vertex(cx+w,cy+h);
  endShape(CLOSE);

  //Clock Face
  //ellipse(cx+w/2, cy+h/2, w+50, h);
  noFill();
  //fill(255); // white clock face
  stroke(0);
  strokeWeight(15);
  rect(cx, cy, w, h, 10);

  //seconds bird
  stroke(255);
  var s = map(second(), 0, 60, cx+10, cx+w-5);
  point(s, cy+40);

/*
//Clock ticks
stroke(255);
strokeWeight(7);
beginShape(POINTS);
for (var a = 0; a < h; a+=h/12) {
  var x = cx+10;
  var y = cy + a;
    console.log(x);
  vertex(x, y);
}
endShape();
*/
}
