var garden,rabbit,apple,orange,red;
var gardenImg,rabbitImg,appleImg,redImg,orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);


garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);

vermelinho();
laranjinha();
maça();

}

function draw() {
  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;



 var selectsprites = Math.round(random(1,3));

 if (frameCount % 80 === 0){
  if (selectsprites === 1){
    maça();
  }
 
   if (selectsprites === 2){
    laranjinha();
  }
  if(selectsprites === 3){
  vermelinho();
  }

 }

  drawSprites();


}
function maça(){

  apple= createSprite(random(50,350),40,30,30);
  apple.addImage("apple",appleImg);
  apple.velocityY=3;
  apple.scale =0.07;
  apple.lifeTime=150;
  
  }
  
  function laranjinha(){
  
  orange= createSprite(random(50,350),40,30,30);
  orange.addImage("orange",orangeImg);
  orange.velocityY=3;
  orange.scale =0.06;
  orange.lifeTime=150;
  }
  
  function vermelinho(){
  
  red= createSprite(random(50,350),40,30,30);
  red.addImage("red",redImg);
  red.velocityY=3;
  red.scale =0.06;
  red.lifeTime=150;
  
  }
