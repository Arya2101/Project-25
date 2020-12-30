
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boundary1;
var boundary2;
var boundary3;
var gr;
var ball;
var dustbin;
var dustbinImage;

function preload(){
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200,500);
	
	engine = Engine.create();
	world = engine.world;

	boundary1 = new boundary(1000,380,10,165);
	boundary2 = new boundary(920,380,10,165);
	boundary3 = new boundary(960,480,80,10);
	gr = new ground(600,500,1200,20);
	ball = new paper(90,400,30);
	dustbin = createSprite(970,370,10,10);
	dustbin.addImage(dustbinImage);
	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);
  
 boundary1.display();
 boundary2.display();
 boundary3.display();
 gr.display();
 ball.display();
 drawSprites();
 keyPressed();
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-15});
	}
}

