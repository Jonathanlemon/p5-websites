var scl=20;//scale factor to multiple coordinates by
var trail=[];//array to hold all segments
var xVel=0;//head x vel
var yVel=0;//head y vel
var fpsDelay=0;//var to slow down fps
var aX=Math.round(Math.random()*19);//apple x
var aY=Math.round(Math.random()*19);//apple y
var title;

function setup(){
  createCanvas(400,400);//make 20x20 board
  title=document.getElementById("title");
  title.innerHTML="SCORE: 0";
  trail.push(new Segment(10,10));//make first segment at (10,10) aka (200,200)
}

function draw(){
  if(fpsDelay>5){
    background(145);
    fill(255,0,0);

    for(i=0; i<trail.length;i++){//draw all segments
      rect(trail[i].x*scl,trail[i].y*scl,scl,scl);
      if(trail[0].x==trail[i].x&&trail[0].y==trail[i].y){//check for collision
        if(i>0){
          restart();
        }
      }
    }

    if(trail[0].x==aX&&trail[0].y==aY){//check if head got the apple
      trail.push(new Segment(trail[trail.length-1].x,trail[trail.length-1].y));//add segment to end of snake
      aX=round(Math.random()*19);//spawn new food
      aY=round(Math.random()*19);
      title.innerHTML="SCORE: "+(trail.length-1);
    }

    for(i=trail.length-1; i>0;i--){//update trail locations
      trail[i].x=trail[i-1].x;
      trail[i].y=trail[i-1].y;
    }

    fill(0,255,0);//draw food
    rect(aX*scl,aY*scl,scl,scl);

    trail[0].x+=xVel;//move head
    trail[0].y+=yVel;

    if(trail[0].x<0){trail[0].x=19}//Checking for off the board
    if(trail[0].x>19){trail[0].x=0}
    if(trail[0].y<0){trail[0].y=19}
    if(trail[0].y>19){trail[0].y=0}

    fpsDelay=0;
  }
  fpsDelay++;
}

function Segment(paramx,paramy){//constructor for segments
  this.x=paramx;
  this.y=paramy;
}

function restart(){//if the snake hits itself
  xVel=0;
  yVel=0;
  trail=[];
  trail.push(new Segment(10,10));
}

window.addEventListener("keydown",function(event){//detect and change velocities based on User input
	if(event.key=="ArrowUp"){
    xVel=0;
    yVel=-1;
	}
	if(event.key=="ArrowDown"){
    xVel=0;
    yVel=1;
	}
	if(event.key=="ArrowLeft"){
    xVel=-1;
    yVel=0;
	}
	if(event.key=="ArrowRight"){
    xVel=1;
    yVel=0;
	}
});
