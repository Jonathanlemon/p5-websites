var angle=0;//variable that changes each frame to change the y translation
var d;//dist between cylinders.
var slider,slider2;//Used to interact with the dist and to toggle the direction
var tog;
function setup(){
  createCanvas(500,500, WEBGL);
  slider=createSlider(10,100,60,1);
  slider2=createSlider(-1,1,-1,2);
}

function draw(){
  background(175);
  noStroke();
  rectMode(CENTER);
  normalMaterial();
  d=slider.value();//Update distance every frame based on slider value
  tog=slider2.value();//Update direction every frame based on slider2 value
  translate(-width/2+10,0,0);//starts the first shape at the far left
  for(x=0;x<width/d;x++){
    var offset=x*0.3*tog;//Determines each cylinder's unique offset value."Separation between their paths"
    var y=map(sin(angle+offset),-1,1,-100,100);//calculates the unique y by adding unique offset to the static angle
    push();//when translated up, the pop brings origin y back to center
    translate(0,-y,0);//moves origin up unique amount
    cylinder(10,100);//create cylinder at origin
    pop();//sets origin y back to center
    translate(d,0,0);//Moves to the right
  }

  angle+=0.1;//increase angle, changing the value for all cylinders. "Speed"
}
