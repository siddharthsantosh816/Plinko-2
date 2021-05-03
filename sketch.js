const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var PLAY=1;
var END=0;
var plinko;
var particle = null;
var plinkos=[];
var divisions=[];
var score=0;
var count=0;
var PLAY=1;
var END=0;
var gameState=PLAY;

function setup() {
	createCanvas(480, 680);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
		
	//Create the Bodies Here.
	ground = new Ground(0,675,1600,10);

    
	for(var x=0; x <=width; x=x+80){
        divisions.push(new Divisions(x,height-10, 10,350));
    }
    //Creating Plinkos
    for(var x=40; x<=width; x=x+50){
        for (var y = 50; y<=250; y=y+200) {
             plinkos.push(new Plinkos(x,y,5));
        }
    }
    for(var x=15; x<=width; x=x+50){
        for(var y =150; y<=350;y=y+200){
            plinkos.push(new Plinkos(x,y,5));
        }
    }
       
	Engine.run(engine);
}

function mousePressed(){
    if(gameState === PLAY){
        particle = new Particles(mouseX,random(5,30),6);
        console.log(particle);
    } 
 }

function draw() {
	background(0);
	fill("white");
    ground.display();
    
    for(var i=0; i <divisions.length; i++){
        divisions[i].display();  
    }
    for(var i=0; i <plinkos.length; i++){
        plinkos[i].display();   
    }
      //Creating Particles at every 60 frame    
    // if(frameCount%60===0){
    //     particles.push(new Particles(random(width/2-10, width/2+10),10,6));
    // }
      
        textSize(20);
        text("Score: "+ score, 20, 20);
        text("100",180,520);
        text("100",260,520);
        text("200",340,520);
        text("500",100,520);
        text("200",420,520);
        text("500",20,520);
        if (particle != null) {
            particle.display();
            if(particle.body.position.y>400) {
                if(particle.body.position.x<=80){
                    score=score+500;
                }
                else if(particle.body.position.x>160 && particle.body.position.x<=320){
                    score = score + 100;
                }
                else{
                    score=score+100;
                }
                particle=null;
            }
        }
	drawSprites();
 }
 
 

