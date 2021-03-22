const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ball1, ball2, link1, link2, ball3, link3, ball4, link4;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(400,50,700,20);

ball1 = new Ball(200,400,50,50);

link1 = new Chain(ball1.body,{x:200,y:50});

ball2 = new Ball(300,400,50,50);

link2 = new Chain(ball2.body,{x:300,y:50});

ball3 = new Ball(400,400,50,50);

link3 = new Chain(ball3.body,{x:400,y:50});

ball4 = new Ball(500,400,50,50);

link4 = new Chain(ball4.body,{x:500,y:50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  ground1.display();
  ball1.display(); 
  link1.display();
  ball2.display(); 
  link2.display();
  ball3.display(); 
  link3.display();
  ball4.display(); 
  link4.display();
  //drawSprites();
 
}



