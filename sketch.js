var box
var ball
var ball2

function setup() {
  createCanvas(500,500);
  box = createSprite(250,250,30,30);
  box.shapeColor = "white";
  ball = createSprite(20,20,20,25 );
  ball2 = createSprite(480,20,25,30);
}

function draw() 
{
  background("black");
  drawSprites()

  if(keyDown("RIGHT_ARROW")){

    box.position.x = box.position.x + 3;

  }

  if(keyDown("LEFT_ARROW")){

    box.position.x = box.position.x - 3;

  }

  if(keyDown("UP_ARROW")){

    box.position.y = box.position.y - 3;

  }

  if(keyDown("DOWN_ARROW")){

    box.position.y = box.position.y + 3;

  }
}




