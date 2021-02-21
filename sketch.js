var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(23,83);


  bullet=createSprite(50, 200, 50, 25);
  wall=createSprite(700,200,30,60);
  wall.shapeColor="80,80,80";
  
}

function draw() {
  background(0,0,0);
  bullet.velocityX=speed;

  
if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage=>10)
{
  wall.shapeColor=color(255,0,0);

}
if(damage<10 )
{
  wall.shapeColor=color(255,0,0);
}



}
function hasCollided(bullet,wall)
{
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
        return true;
    }
    return false;
}


  drawSprites();
  }
  