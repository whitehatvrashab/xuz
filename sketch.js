
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof(340,150,350,20,PI/2);
	bob1=new Bob(250,350,20,20);
	bob2=new Bob(330,350,20,20);
	bob3=new Bob(290,350,20,20);
	bob4=new Bob(370,350,20,20);
	bob5=new Bob(410,350,20,20);

	rope1=new Rope(bob1.body,roof.body,-92,10)
	

	rope2=new Rope(bob2.body,roof.body,-15,10)
	

	rope3=new Rope(bob3.body,roof.body,-50,10)
	

	rope4=new Rope(bob4.body,roof.body,25,10)
	

	rope5=new Rope(bob5.body,roof.body,65,10)
	

	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(350);
  
  
  drawSprites();
 
roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}

function keyPressed() {
    if(keyCode ===32){
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:0});
    }
}

