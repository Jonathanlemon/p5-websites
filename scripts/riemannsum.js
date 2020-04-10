var x;
var y;
var xIncrement;
var slider;
var sliderVal;
var area;
var drawArea;
var redone=1;

function setup() {
  createCanvas(1000,900);
  background(51);
  area=0;
  drawArea=0;
  slider = createSlider(4, 80, 4, 4);
  slider.position(50, 450);
  slider.style('width', '400px');
  noStroke();
  fill(255,255,255);
  textSize(32);
  text("Mr. Johnston's Riemann Sum Animation", 50, 50);
  textSize(32);
  text("As the number of rectangles approaches infinity and the width of each rectangle approaches 0, the sum of the areas of each rectangle become closer and closer to the actual area of the curve.", 50, 100,600,600);
  textSize(20);
  fill(0,255,0);
  text("Drag the slider to increase the number of rectangles", 50, 340,600,600);
  text("Area : ", 50,380);
  
  fill(255,255,255);
  textSize(15);
  text(0,0,815);
  text(1,800,815);
  text(1,810,15);
  textSize(32)
  text("This curve is x on the interval [0,1]", 50,850);
  textSize(16)
  text("2", 255,825);
  strokeWeight(1);
  stroke(255,255,255);
  line(0,800,800,800);
  line(800,800,800,0);
}

function draw() {
  if(sliderVal!=slider.value()){
    redo();
    sliderVal=slider.value();
  }
  
  if(x<800){
	  strokeWeight(1);
	  stroke(255,255,255);
	  fill(255,0,0);
	  rect(x,800-y,xIncrement,y);
	  x+=xIncrement;
	  y=800*(pow(x/800, 2.0));
	  area+=xIncrement/800*y/800;
  }
  else{
	  drawArea=1;
  }
  if(drawArea==1&&redone==1){
	noStroke();
	fill(0,255,0);
	text(area, 130,380);
	redone=0;
  }
  
}

function redo(){
  redone=1;
  area=0;
  drawArea=0;
  background(51);
  noStroke();
  fill(255,255,255);
  textSize(32);
  text("Mr. Johnston's Riemann Sum Animation", 50, 50);
  textSize(32);
  text("As the number of rectangles approaches infinity and the width of each rectangle approaches 0, the sum of the areas of each rectangle approaches the actual area of the curve.", 50, 100,600,600);
  textSize(20);
  fill(0,255,0);
  text("Drag the slider to increase the number of rectangles", 50, 340,600,600);
  text("Area : ", 50,380);

  fill(255,255,255);
  textSize(15);
  text(0,0,815);
  text(1,800,815);
  text(1,810,15);
  textSize(32)
  text("This curve is x on the interval [0,1]", 50,850);
  textSize(16)
  text("2", 255,825);
  strokeWeight(1);
  stroke(255,255,255);
  line(0,800,800,800);
  line(800,800,800,0);
  x=0;
  y=0;
  xIncrement=800/slider.value();
}
