var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf,leafImg;
var orangeLeaf, orangeLeafImg;
var redLeaf, readLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redLeafImg = loadImage("redImage.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApple();
  createLeaves();

  drawSprites();
}

function createApple(){
  if(frameRate % 60 === 0){
  apple = createSprite(random(50,350),30,50);
  apple.addImage("apple", appleImg);
  apple.scale = 0.1;
  apple.velocityY = 2;
  apple.lifetime = 200
  }
}

function createLeaves(){
  
  if(frameRate % 60 === 0){
    redLeaf = createSprite(Math.round(random(50,350),30,50));
    redLeaf.addImage("redLeaf", redLeafImg);
    redLeaf.scale = 0.1;
    redLeaf.velocityY = 2;
    redLeaf.lifetime = 200;
  
  }

  if(frameRate % 60 === 0){
  orangeLeaf = createSprite(Math.round(random(50,350),30,50));
  orangeLeaf.addImage("orangeLeaf", orangeLeafImg);
  orangeLeaf.scale = 0.1;
  orangeLeaf.velocityY = 2;
  orangeLeaf.lifetime = 200;
  }
  
  if(frameRate % 60 === 0){
  leaf = createSprite(Math.round(random(50,350),30,50));
  leaf.addImage("leaf", leafImg);
  leaf.scale = 0.1;
  leaf.velocityY = 2;
  leaf.lifetime = 200;
  }
 
}