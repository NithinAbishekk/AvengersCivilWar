const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8;
var sbrick1, sbrick2, sbrick3, sbrick4, sbrick5, sbrick6, sbrick7;
var ironman, captain, rope, ground;
var suitupSound, attackingSound;

function preload() {
  bg = loadImage("images/gamingbackground1.jpg");

  suitupSound = loadSound("sounds/iron_man_2.mp3");
  attackingSound = loadSound("sounds/iron_man_repulsor.mp3");
}



function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  ironman = new Ironman(300,800,250);
  rope = new Rope(ironman.body, { x: 300, y: 50 });
  captain = new Captain(1000,550,300);

  brick1 = new Brick(650, 100);
  brick2 = new Brick(650, 100);
  brick3 = new Brick(650, 100);
  brick4 = new Brick(650, 100);
  brick5 = new Brick(650, 100);
  brick6 = new Brick(650, 100);
  brick7 = new Brick(650, 100);
  brick8 = new Brick(650, 100);

  sbrick1 = new Brick(750, 100);
  sbrick2 = new Brick(750, 100);
  sbrick3 = new Brick(750, 100);
  sbrick4 = new Brick(750, 100);
  sbrick5 = new Brick(750, 100);
  sbrick6 = new Brick(750, 100);
  sbrick7 = new Brick(750, 100);


  suitupSound.play();

  /*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
		
		Engine.run(engine);
		Render.run(render); */


}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();

  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  
  sbrick1.display();
  sbrick2.display();
  sbrick3.display();
  sbrick4.display();
  sbrick5.display();
  sbrick6.display();
  sbrick7.display();

  ironman.display();
  rope.display();
  captain.display();

  attackingSound.loop();

}


function mouseDragged(){
   Matter.Body.setPosition(ironman.body,{x:mouseX,y:mouseY});
}