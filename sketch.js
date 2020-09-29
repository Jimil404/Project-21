var bullet1
var wall
var speed,weight
var deformation
var thickness

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  
 
  wall.shapeColor = (80,80,80);

  
  bullet1 = createSprite(1190,200,20,20);
  bullet1.veloctiyX = speed;
bullet1.depth = wall.depth+1;
}

function draw() {
  background(0);  
  
  


// if(wall.x-car.x < (car.width+ wall.width)/2);
// {

  if(hasCollided(bullet1, wall))
{
bullet1.veloctiyX = 0;
var damage = 0.5 *weight * speed * speed/(thickness *thickness *thickness);

if(damage>10)
{

  wall.shapeColor = "red"


}
if(damage<=10)
  

{
wall.shapeColor = "green"
}


}



// }
drawSprites();
}


function hasCollided(Lbullet,Lwall)
{
bulletRightEdge=Lbullet.x +Lbullet.width;
wallLeftEdge = Lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
    return true
}
return false
  
}