var  wall,thickness
var bullet,speed, weight

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52)
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  car.velocityX=speed;
}

function draw() {


  background(0);  
  if(wall.x-car.x<(car.width+wall.width)/2)
    {car.velocityX=0;
      var damage=0.5* weight* speed* speed/thickness*thickness*thickness;
      if (damage>180) {
        car.shapeColor=color(255,0,0);
      }
      if (damage<180 && deformation>100) {
      car.shapeColor=color(230,230,0);  
      }
      if (damage<100) {
        car.shapeColor=color(0,255,0)
      }


    }



  drawSprites();
}