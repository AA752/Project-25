const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var ground;
var ball;
var block2;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ball = new paper(130, 370, 20);
	//Create the Bodies Here.
	ground = new Ground(800, 700, 1600, 10);


	block2 = new Dustbin(400,600,200,200);



}


function draw() {
  rectMode(CENTER);
  background(255);

	Engine.update(engine);

  ball.display();

  block2.display();

  ground.display();


  keyPressed();

  createEdgeSprites();
  
  drawSprites();

 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:1.3,y:-12});
		Engine.run(engine);
	}
}