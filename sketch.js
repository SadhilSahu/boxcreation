var box;
function setup() {
  createCanvas(800,400);
  box = createSprite(400,200,55,55)
  box.shapeColor= "red";
edges=createEdgeSprites();
}

function draw() 
{
 
  background(30);
drawSprites();
if (keyIsDown(RIGHT_ARROW))
{ box.position.x = box.position. x+5; }
if(keyIsDown(LEFT_ARROW)){
box.position.x = box.position. x-5;
}
if(keyIsDown(UP_ARROW)){
box.position.y = box.position. y-5;
}
if(keyIsDown(DOWN_ARROW)){
box.position.y = box.position. y+5;
}
}




