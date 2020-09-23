var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1, rect2, rect3
var rect1Sprite,rect2Sprite,rect3Sprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1 = new Rect(400,650,120,20);
	rect2 = new Rect(340,720,20,120);
	rect3 = new Rect(340,590,20,120);
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	rect1 = Bodies.rectangle(400,650,120,20 , {isStatic:true}) ;
	World.add(world, rect1);
	

	Engine.run(engine);

  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false);
  }
}