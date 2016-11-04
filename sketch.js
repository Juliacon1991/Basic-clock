function setup() {
  createCanvas(800,600)
  angleMode(DEGREES)
}

function draw() {
  background(253,255,217)
  translate(width/2,height/2)
  
  noStroke();
  fill(20,100,12)
  ellipse(0,0,520)
  
  noStroke();
  fill(255)
  ellipse(0,0,500)
  
  textSize(32);
  textAlign(CENTER);
  fill(0)
  for(var i = 1; i <= 12; i++) {
  push();
  rotate(i * 30);
  text(i, 0, -210);
  pop();
  }
  
  textSize(22)
  var d = day()
  if(d <= 9){
    d = "0" + d;
  }
  text(d,125,0);
  noFill()
  stroke(0)
  strokeWeight(1)
  rect(105,-23,40,30)
  
  fill(0)
  ellipse(0,0,20)
  

  // seconds
  drawNendle(second(),60,1,200,[220,60,12])
  
  //minutes
  drawNendle(minute(),60,3,150,[20])
  
  //hours
  if(hour()>12){
    var hour12 = hour()-12
  }else{
    var hour12 = hour()
  }
  drawNendle(hour12,12,5,90,[0])
  
}

function drawNendle(needlevalue,needlerange,needleweight,needleradius,needlecol){
  var angle = map(needlevalue,0,needlerange,-90,270)
  stroke(needlecol)
  strokeWeight(needleweight)
  line(0,0,needleradius*cos(angle),needleradius*sin(angle))
}