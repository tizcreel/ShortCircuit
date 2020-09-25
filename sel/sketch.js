var y; 
var xOff;
var inc; 
var start; 
let sCol;


function setup() {
  createCanvas(800, 600);
  start=0;
  sCol = 0; 
}


function draw() {
  background(0,40);
  stroke(255);
  sCol++;
  
  //circle
    fill(random(sCol)); 
    ellipse(noise(frameCount/60)*width, height/2, 125, 125);
  
  //ellipse
  fill(100)
  ellipse(width/3+sin(frameCount/30)*width/2,height/2,80,30);
  
  fill(150);
  ellipse(width/2,height/2+sin(frameCount/30)*height/2,30,80);
    
  fill(200);
  ellipse(noise(frameCount/30)*width,noise(30+frameCount/30)*height,80,30);
  
  fill(0);
  ellipse(width/2+sin(frameCount/30)*width/2,height/2+cos(frameCount/20)*height/3, 80,30);
  
  // rotate (frameCount);
  
  // line 2
  stroke(255, 247, 92); 
  strokeWeight(15);
  noFill();
  inc = 0.05;
  xOff=start;
  beginShape();
  for(i=0; i<width+10;i++){
    xOff+=0.005;
    y = map(noise (xOff), -.01,2,0, height);
      vertex (i, y); 
  }
  
  endShape ();
  start+=inc;
  
  // line 2 
  stroke(255, 251, 181); 
  strokeWeight(15);
  noFill();
  inc = 0.04;
  xOff=start;
  beginShape();
  for(i=0; i<width+10;i++){
    xOff+=0.005;
    y = map(noise (xOff), -3,1,0, height);
      vertex (i, y); 
  }
  
  endShape ();
  start+=inc;
  
} 



