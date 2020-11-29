var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score = 0;
var count = 0;
var gameState = "start"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

    for(var k = 0; k <=width; k = k + 80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for(var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

    for(var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

    for(var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
    }   
}

function draw(){
  background("black");
  textSize(20)
  fill("white");
  text("Score : "+score,20,40);
  
  textSize(20);
  text("500", 20, 520);
  text("500", 100, 520);
  text("500", 180, 520);
  text("500", 260, 520);
  text("500", 340, 520);
  text("500", 420, 520);
  text("500", 500, 520);
  text("500", 580, 520);
  text("500", 660, 520);
  text("500", 740, 520);
  Engine.update(engine);
  ground.display();
  
  
  for(var i = 0; i < plinkos.length; i++){
     plinkos[i].display();   
   }
   

  if(particle != null){
     particle.display();
     if(particle.body.position.y > 760){
        if(particle.body.position.x < 300){
           score = score+500
           particle = null;
           if(count >= 5){
              gameState = "end";
           }
        
     
         }else if(particle.body.position.x < 600 && particle.body.position.x > 301){
               score = score+200
               particle = null;
               if(count >= 5){
                  gameState = "end";
               }
         }else if(particle.body.position.x < 900 && particle.body.position.x > 601){
               score =  score+200;
               particle = null;
               if(count >= 5){
                  gameState = "end";
               }
            }
         }
      }

  if(gameState === "end"){
     textSize(100);
     text("Game Over", 150, 250);
  }

  for(var k = 0; k < divisions.length; k++){
   divisions[k].display();
   }
 
  
}

function mousePressed(){
     if(gameState !== "end"){
        count = count+1;
        particle = new Particle(mouseX, 10, 10);
     }
 }