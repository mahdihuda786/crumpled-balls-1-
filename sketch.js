
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, ground;
var wall1, wall2, wall3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);
	
	engine = Engine.create();
	world = engine.world;

	paperBall = new Paper(150, 330, 15);	
	ground = new Grounds(500, 380, 1000, 10);
	wall1 = new Dustbins(650, 300, 20, 125);
	wall2 = new Dustbins(850, 300, 20, 125);
	wall3 = new Dustbins(750, 365, 180, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperBall.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:35, y:-40});
	}
}