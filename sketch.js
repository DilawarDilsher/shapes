const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
polygonImg=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(400,height/2+100,300,20);
    box1 = new Box(300,265,50,50);
    box2 = new Box(350,265,50,50);
    box3 = new Box(400,265,50,50);
    box4 = new Box(450,265,50,50);
    box5 = new Box(500,265,50,50);
    box6 = new Box(325,215,50,50);
    box7 = new Box(375,215,50,50);
    box8 = new Box(425,215,50,50);
    box9 = new Box(475,215,50,50);
    box10 = new Box(350,165,50,50);
    box11 = new Box(400,165,50,50);
    box12 = new Box(450,165,50,50);
    box13 = new Box(375,115,50,50);
    box14 = new Box(425,115,50,50);
    box15 = new Box(400,65,50,50);
    polygon = new Polygon(200,50);
    polygon.addImage("polygon",polygonImg);

}

function draw(){
background(56,44,44);
ground.display();
stand1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
polygon.display();

}

    function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


    function mouseReleased(){
    slingshot.fly();
}