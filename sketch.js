var bg,bgImg;
var bob, bobImg;
var eyebob,eyebobImg;
var bubblebass,bubblebassImg;
var dirtybubble,dirtybubbleImg;
var dutchman,dutchmanImg;
var gameover, gameoverImg;
var jelly,jellyImg;
var karen,karenImg;
var logo, logoImg;
var plankton, planktonImg;
var reset, resetImg;
var squid, squidImg;
var start,startImg;
var gameState=PLAY;
var PLAY=1;
var END=0;
var score=0;
var villainsGroup;


function preload (){
  bgImg=loadImage("background.png");
  eyebobImg=loadImage("bob4.png");
  bobImg=loadImage("bob3.png");
  bubblebassImg=loadImage("bubblebass.png");
  dirtybubbleImg=loadImage("dirtybubble.png");
  dutchmanImg=loadImage("dutchman.png");
  gameoverImg=loadImage("gameover.jpeg");
  jellyImg=loadImage("jellyfish.png");
  karenImg=loadImage("karen.png");
  logoImg=loadImage("logo.png");
  planktonImg=loadImage("plankton.png");
  resetImg=loadImage("reset.png");
  squidImg=loadImage("squidward.png");
  startImg=loadImage("start.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);
bg=createSprite(150,400,windowWidth,windowHeight);
bg.addImage(bgImg);
bg.x=bg.width/2;
bgvelocityX=-3;

bob=createSprite(150,350,30,60);
bob.addImage("RUNNING",bobImg);
bob.scale=0.4;
bob.setCollider("circle",0,0,100);
bob.debug=true;
ground=createSprite(600,550,windowWidth,10);
ground.x=ground.width/2
ground.velocityX=-3;
ground.visible=true;

start=createSprite(600,400,60,60);
start.addImage(startImg);
start.scale=0.3;

logo=createSprite(600,250,80,80);
logo.addImage(logoImg);
logo.scale=0.3;

gameover=createSprite(600,250,40,40);
gameover.addImage(gameoverImg)
gameover.scale=0.2;
gameover.visible=false;

reset=createSprite(600,450,60,60);
reset.addImage(resetImg);
reset.scale=0.3;
reset.visible=false;
villainsGroup=new Group();
}

function draw(){
 //background("blue");
 textSize(25);
 fill("white");
 text("SCORE: "+score,windowWidth-280,40);
  if (mousePressedOver(start)){
    gameState=PLAY;
    start.visible=false;
    logo.visible=false;
    bob.velocityY=-5
  }
  if(bg.x<0){  
    bg.x=bg.width/2;
    }

if (gameState===PLAY){
  score=score+Math.round(getFrameRate()/60);
  
  bg.velocityX=-3;
  if(ground.x<0){  
    ground.x=ground.width/2;
    }
ground.velocityX=-3; 
if (touches.length>0||keyDown("space")&&bob.y>=150){
bob.velocityY=-11
}
bob.velocityY=bob.velocityY+1.5;

bob.collide(ground);
villains();
if (villainsGroup.isTouching(bob)){
  gameState=END;
}
}

else if (gameState===END){
  gameover.visible=true;
  reset.visible=true;
  bob.velocityX=0;
  bob.velocityY=0;
  ground.velocityX=0;
  villainsGroup.setVelocityXEach(0);
  villainsGroup.setVelocityYEach(0);
  villainsGroup.destroyEach();
}
if (mousePressedOver(reset)){
  restart()
}
bob.collide(ground);
drawSprites();
}
function restart(){
  gameState=PLAY;
  gameover.visible=false;
  reset.visible=false;
  score=0;
  bob.x=150;
  bob.y=450;

}
function villains(){
  if (frameCount%100===0)
  {
    var villain=createSprite(1150,450,30,30);
    villain.velocityX=-6
    rand=Math.round(random(1,7));

    switch (rand){
      case 1: villain.addImage(bubblebassImg);
      villain.scale=0.3;
      break;;
      case 2: villain.addImage(dirtybubbleImg);
      villain.scale=0.3;
      break;
      case 3: villain.addImage(dutchmanImg);
      villain.scale=0.6;
      break;
      case 4: villain.addImage(jellyImg);
      villain.scale=0.4;
      break;
      case 5: villain.addImage(karenImg);
      villain.scale=0.6;
      break;
      case 6: villain.addImage(planktonImg);
      villain.scale=0.2;
      break;
      case 7: villain.addImage(squidImg);
      villain.scale=0.3;
      break;
    }
  villainsGroup.add(villain);

  }

}