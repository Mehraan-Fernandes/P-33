const {Engine,
      World,
      Bodies} = Matter 


var plinkos = [];
var divisions = [];

var particle;

var divisionHeight = 300;
var score = 0;
var turn = 0
var block1,block2
var gameState = "play"
function setup() {
  
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


 


  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75, 10));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175, 10));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275, 10));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375, 10));
  }


}



function draw() {
  background("black");
  textSize(20)
  text("Score : " + score, 20, 30);
  Engine.update(engine);
  displayText();

  
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (particle != null) {
    particle.display();

  if (particle.body.position.y > 760 && particle.body.position.x < 320) {
    score = score + 500
    particle = null
    }
  }
  if (particle != null) {
    particle.display();
    
  if (particle.body.position.y > 760 && particle.body.position.x < 560 && particle.body.position.x > 300) {
    score = score + 100
    particle = null
  }
  }
  if (particle != null) {
    particle.display();
    
  if (particle.body.position.y > 760 && particle.body.position.x < width && particle.body.position.x > 560) {
    score = score + 200
    particle = null
    }
  }
    
  

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

 // drawSprites();
  if (gameState === "end") {
    textSize(45)
    text("Game Over",width/2-105,height/2-165)
  }
  
}

function mousePressed() {
  //if(mouseIsPressed) {
  if (gameState === "play") {
    particle = new Particle(mouseX, 10, 10);
    turn++
    if(turn >= 5 ){
      gameState = "end";
    }
  }
}




function displayText() {
  for (var i = 20; i < 261; i = i + 80) {
    fill("white")
    textSize(25)
    text("500", i, 650)
  }

  for (var i = 340; i < 501; i = i + 80) {
    text("100", i, 650)
  }

  for (var i = 580; i < 741; i = i + 80) {
    text("200", i, 650)
  }
}


