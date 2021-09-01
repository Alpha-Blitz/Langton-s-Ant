var start=0;
var steps=100;
var w;
var h;
var sqLen=10;
let squareGrid;
let slider;
let slider1;

var ant = {
  
  x: 200,
  y: 100,
  dir: 0,
  
  moveForward: function(){
    switch(this.dir){
      case 0:
        this.y=((this.y-sqLen)%h+h)%h;
        break;
      case 1:
        this.x=((this.x+sqLen)%w+w)%w;
        break;
      case 2:
        this.y=((this.y+sqLen)%h+h)%h;
        break;
      case 3:
        this.x=((this.x-sqLen)%w+w)%w;
    }
  },
  
  turnLeft: function(){
    this.dir=((this.dir-1)%4+4)%4;
  },
  
  turnRight: function(){
    this.dir=((this.dir+1)%4+4)%4;
  },
  
  invertSquare: function(){
    squareGrid[this.x][this.y]=1-squareGrid[this.x][this.y];
    
    //New Square Color
    let colr=255*(1-squareGrid[this.x][this.y]);
    strokeWeight(0.5);
    stroke(120);
    rectMode(CENTER);
    fill(colr);
    rect(this.x, this.y, sqLen, sqLen);
  }
}

function setup() {
  createCanvas(800, 800);
  background(255);
  h=height;
  w=width;
  squareGrid = Array(h).fill().map(() => Array(w).fill(0));
  
  slider = createSlider(1,40,2,1);
  slider.position(10, 10);
  slider.style('width', '120px');
  
  slider1 = createSlider(1,80,20,1);
  slider1.position(10, 30);
  slider1.style('width', '120px');
  //fullscreen();
}

function draw() {
  let fr=slider1.value();
  frameRate(fr);
  
  //Drawing the Initial Square Grid
  if(start==0){
    for(var k=0;k<=width;k=k+sqLen)
      {
        strokeWeight(0.5);
        stroke(120);
        line(k,0,k,height);
      }
    for(var l=0;l<=height;l=l+sqLen)
      {
        strokeWeight(0.5);
        stroke(120);
        line(0,l,width,l);
      }
  }
  
  //Drawing the Ant path
  if(start)
  {
  let steps=slider.value();
  for(var i=0;i<steps;i++)
  {
    
  //Each Step
  if(squareGrid[ant.x][ant.y]==1)
    ant.turnLeft();
  else
    ant.turnRight();
  
  ant.invertSquare();
  ant.moveForward();
  
  }
  }
}

function mouseClicked(){
  
  if(mouseX<width && mouseY<height){
    
  //Perfectly Aligned Ant Spawn
  ant.x=mouseX-((mouseX%sqLen)%sqLen)+sqLen/2;
  ant.y=mouseY-((mouseY%sqLen)%sqLen)+sqLen/2;
  
  start=1;
  }
}