var iss;
var issImg;

var spacecraft;
var spacecraftImg1;
var spacecraftImg2;
var spacecraftImg3;
var spacecraftImg4;

var bgImg;

var hasDocked = false;

function preload(){
  issImg = loadImage("Project-42-Images/Docking-undocking/iss.png");

  bgImg = loadImage("Project-42-Images/Docking-undocking/spacebg.jpg");

  spacecraftImg1 = loadImage("Project-42-Images/Docking-undocking/spacecraft1.png");
  spacecraftImg2 = loadImage("Project-42-Images/Docking-undocking/spacecraft2.png");
  spacecraftImg3 = loadImage("Project-42-Images/Docking-undocking/spacecraft3.png");
  spacecraftImg4 = loadImage("Project-42-Images/Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(1000,600);
  
  spacecraft = createSprite(Math.round(random(250, 500)), 450, 50, 50);
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale = 0.3;

  iss = createSprite(500, 250, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.9;
}

function draw() {
  background(bgImg);

  console.log(spacecraft.x, spacecraft.y);

  if(!hasDocked){
    if(keyWentDown("left")){
      spacecraft.x = spacecraft.x - 1;

      spacecraft.addImage(spacecraftImg3);
      spacecraft.changeImage(spacecraftImg3);
    }

    if(keyWentDown("right")){
      spacecraft.x = spacecraft.x + 1;

      spacecraft.addImage(spacecraftImg4);
      spacecraft.changeImage(spacecraftImg4);
    }

    if(keyWentDown("up")){
      spacecraft.y = spacecraft.y - 1;

      spacecraft.addImage(spacecraftImg2);
      spacecraft.changeImage(spacecraftImg2);
    }
  }

  if(spacecraft.x === 435 && spacecraft.y === 375){
    textSize(30);
    fill("white");
    textFont("Comic Sans Ms");
    text("Docking Successfull!", 350, 500);
  }

  drawSprites();
}