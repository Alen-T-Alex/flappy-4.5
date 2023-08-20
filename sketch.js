var bird,obstacle,bottom,ground;
var obstacleGroup,obstacle1,obstacle2


function preload(){
  birdImg =loadImage("bird.png");
  pipeImg=loadImage("pipe.jpg");
backImg = loadImage("flappy backround.png");
}

function setup() {
  createCanvas(400,400);




ground=createSprite(200,200,20,20);
ground.addImage(backImg);



obstacle=createSprite(300,350);
obstacle.addImage(pipeImg);
obstacle.scale=0.5;

ground.scale=1.6;

bird=createSprite(100,200,);
bird.addImage(birdImg);
bird.scale=0.12;
bottom=createSprite(200,390,400,20)
bottom.visible=false;


}

function draw() 
{

  background(180);



  if(keyDown("space")&& bird.y >=-400) {
    bird.velocityY = -5;
}

bird.velocityY=bird.velocityY+0.5;

ground.x =ground.x+-1;
if (ground.x < 116.9){
  ground.x = ground.width/2;
}
obstacle.x =obstacle.x+-1;
if (obstacle.x < 116.9){
  obstacle.x = obstacle.width/2;
}
bird.collide(bottom);
obstacle.collide(bird);


drawSprites();
}

 

