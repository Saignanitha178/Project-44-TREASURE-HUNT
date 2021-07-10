var bg,bg1,form,system,code,security;
var score=0;


function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg1 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(40);
  text('Score : '+ score,500,75);

  // Add code to display the end screen
  if(score === 3){
    clear();
    background(bg1);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED",250,200);
  }


  drawSprites()
}

