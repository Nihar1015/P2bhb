
var wall,thickness
var speed,weight

function setup() {
  createCanvas(1600,400);
  
  
  speed=random(223,321);
  weight=random(30,52);
  bullet= createSprite(50,200,50,50);
  bullet.shapeColor=color(255);
  bullet.velocityX = speed;
  thickness=random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  

}

function draw() {
  background(255,255,255); 
  bullet.collide(wall);

  
  
  if(wall.x-bullet.x <= (bullet.width + wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}