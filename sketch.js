
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ret1 = new Box(700, 645, 150, 20);
	ret2 = new Box(625, 605, 20, 100);
	ret3 = new Box(775, 605, 20, 100);

	paperSprite=createSprite(50, 600, 30, 30);
	paperSprite.shapeColor=color(255)
	paperBody = Bodies.circle(50, 600 , 5 , {restitution:0.6});
	World.add(world, paperBody);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paperSprite.x= paperBody.position.x;
  paperSprite.y= paperBody.position.y;

  ret1.display();
  ret2.display();
  ret3.display();

  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperSprite.body, paperSprite.body.position,{x:85,y:-85});
  }
  
  drawSprites();
 
}