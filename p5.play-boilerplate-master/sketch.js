
//variables
var car,wall;
var speed,weight;
var quality = "unknown";
function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 50, 50);
  wall = createSprite(700,200,40,height/2);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX=speed;
  
}

function draw() {
  background(0); 
  textSize(18); 
  text("QUALITY OF CAR: "+ quality,140,20);
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    var deformation = 0.5 * weight * speed *speed/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
      quality = "BAD"
      quality.shapeColor= color(255,0,0);
    }
    if (deformation<100){
      car.shapeColor=color(0,255,0);
      quality = "GOOD";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      quality = "OK";
    }
  }
  drawSprites();
}