var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var leavesImg
var apples,leaves = Math.round(random(1,2))

if(frameCount % 80 == 0){
  if(apples == 1){
    function createApples(){
      apples =  createSprite(random(50,350),40,10,10);
      apples.addImage(appleImg);
      apples.scale=0.05
      apples.lifetime = 5
  }else{
    function createLeaves(){
      leaves =  createSprite(random(50,350),40,10,10);
      leaves.addImage(leavesImg);
      leaves.scale=0.05
      leaves.lifetime = 5
    }
  }
  }

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg = loadImage("leaf.png")
}






function createLeaves(){
  leaves =  createSprite(random(50,350),40,10,10);
  leaves.addImage(leavesImg);
  leaves.scale=0.05
  leaves.lifetime = 5
}



function setup() {
  
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
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

 createApples()
 createLeaves()
  drawSprites();

}