const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Tank1, Tank2;
var map1, map2, map3;
var shield, healthPack;
var tripleShot, doubleDamage;
var canvas;
var gameState = "menu";
var engine, world;
var mountain, bullet;
var form;

function preload(){

}

function setup(){
    canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    //if (gameState === "play"){
        Tank1 = new Tank(100,600,50,50);
        Tank2 = new Tank(1100,600,50,50);
        mountain = new Tank(600,500,300,300);
        bullet = new Bullet(100,600);
        launcher = new Launcher(bullet.body,{x:100,y:600});
    // }

    //if (gameState === "menu"){
        //form = new Form();
    //}
}

function draw(){
    background(0,0,0);
    // if (gameState === "play"){
    Tank1.display();
    Tank2.display();
    mountain.display();
    bullet.display();
    launcher.display();
    // }
    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(bullet.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    
}

function keyPressed(){
    if (keyCode === RIGHT_ARROW){
        Matter.Body.setPosition(Tank1.body,{x: Tank1.body.position.x + 10, y: Tank1.body.position.y});
    }
    if (keyCode === LEFT_ARROW){
        Matter.Body.setPosition(Tank1.body,{x: Tank1.body.position.x - 10, y: Tank1.body.position.y});
    }
    if (keyCode === 32){
        //  Matter.Body.applyForce(bullet.body,bullet.body.position,{x:30,y:-30});
    }
}