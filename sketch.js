
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;
var ground,ground1,ground2,bg;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;


var launcherObj,gameState = "onLauncher";

function preload(){
bg = loadImage("tower.jpg");
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	polygon = new Polygon(100,100,60,60);

ground = new Ground(windowWidth/2,windowHeight - 40,width,25);


box1 = new Block(900,100,70,70);
box2 = new Block(900,100,70,70);
box3 = new Block(900,100,70,70);
box4 = new Block(900,100,70,70);
box5 = new Block(900,100,70,70);
box6 = new Block(900,100,70,70);
box7 = new Block(800,100,70,70);
box8 = new Block(800,100,70,70);

box9 = new Block(800,100,70,70);
box10 = new Block(800,100,70,70);
box11 = new Block(800,100,70,70);
box12 = new Block(800,100,70,70);
box13 = new Block(700,100,70,70);
box14 = new Block(700,100,70,70);
box15 = new Block(700,100,70,70);
box16 = new Block(700,100,70,70);
box17 = new Block(700,100,70,70);
box18 = new Block(700,100,70,70);
box19 = new Block(700,100,70,70);
box20 = new Block(700,100,70,70);




launcherObj = new Launcher(polygon.body,{x:140,y:320});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  

ground.display();
// ground1.display();
// ground2.display();
fill("yellow");
polygon.display();

fill("red")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

fill("blue")
box6.display();
box7.display();
box8.display();
box9.display();

fill("Yellow")
box10.display();
box11.display();
box12.display();

fill("purple");
box13.display();
box14.display();

box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();



launcherObj.display();

  drawSprites();

textSize(20)
fill(0)
  text("CHALLENGE YOU TO FALL ALL THE BUILDING!",100,100);
  text("Refresh the page to replay!",100,150);
}
function mouseDragged(){
    if(gameState !== "launch"){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
	
    }
}


function mouseReleased(){
    launcherObj.fly();
    gameState = "launch";
}