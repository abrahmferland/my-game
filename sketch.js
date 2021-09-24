var ghostImg,captainPriceImg,roachImg,soapImg,backgroundImg,tankImg,esplosionImg;
var ghost,captainPrice,roach,soap,background,tank,esplosion;

function preload() {
  ghostImg = loadImage("img/uimg/Gost,walk.png")
  captainPriceImg = loadImage("img/uimg/Gost,walk.png")
  roachImg = loadImage("img/uimg/Gost,walk.png")
  soapImg = loadImage("img/uimg/Gost,walk.png")
  backgroundImg = loadImage("img/b1.2.png")
  esplosionImg = loadImage("b2.png")
  tankImg = loadImage("t1.png")

}
function setup() {
  roach = createSprite(30,100)
  roach.addImage(roachImg);

  captainPrice = createSprite(30,100)
  captainPrice.addImage(captainPriceImg);

  ghost =createSprite(30,100)
  ghost.addImage(ghostImg);

  soap = createSprite(30,100)
  soap.addImage(soapImg);

  
}
function draw() {
  background(backgroundImg)
drawSprites();
}