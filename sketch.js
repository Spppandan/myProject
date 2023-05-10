
var background_image;
var boy_run;
var boy;
var enemy;
var enemy1;
var Edges;
var enemyGroup;
var wall;
var wallGroup;
var btn;
var gameover;
var game;
var gamestate="play";
var gold,goldSprite,goldSprite1;
var score =0;

function preload() {
  background_image = loadImage("images/bacground.jpg");
  boy_run = loadAnimation(
    "images/boy/run/running_002.png",
    "images/boy/run/running_000.png",
    "images/boy/run/running_003.png",
    "images/boy/run/running_004.png",
    "images/boy/run/running_001.png",
    "images/boy/run/running_005.png",
    "images/boy/run/running_006.png",
    "images/boy/run/running_007.png",
    "images/boy/run/running_008.png",
    "images/boy/run/running_009.png",
    "images/boy/run/running_010.png",
    "images/boy/run/running_011.png",
    "images/boy/run/running_012.png",
    "images/boy/run/running_013.png",
    "images/boy/run/running_014.png",
    "images/boy/run/running_015.png",
    "images/boy/run/running_016.png",
    "images/boy/run/running_017.png",
    "images/boy/run/running_018.png",
    "images/boy/run/running_019.png",
    "images/boy/run/running_020.png",
    "images/boy/run/running_021.png",
    "images/boy/run/running_022.png",
    "images/boy/run/running_023.png",
    "images/boy/run/running_024.png",
    "images/boy/run/running_025.png",
    "images/boy/run/running_026.png",
    "images/boy/run/running_027.png",
    "images/boy/run/running_028.png",
    "images/boy/run/running_029.png",
    "images/boy/run/running_030.png",
    "images/boy/run/running_031.png",
    "images/boy/run/running_032.png",
    "images/boy/run/running_033.png",
    "images/boy/run/running_034.png",
    "images/boy/run/running_035.png",
    "images/boy/run/running_036.png",
    "images/boy/run/running_037.png",
    "images/boy/run/running_038.png",
    "images/boy/run/running_039.png",
    "images/boy/run/running_040.png",
    "images/boy/run/running_041.png",
    "images/boy/run/running_042.png",
    "images/boy/run/running_043.png",
    "images/boy/run/running_044.png",
    "images/boy/run/running_045.png",
    "images/boy/run/running_046.png",
    "images/boy/run/running_047.png",
    "images/boy/run/running_048.png",
    "images/boy/run/running_049.png");

  enemy1 = loadAnimation(
    "images/enemy/02-Walk/__Bandit02_Walk_000.png",
    "images/enemy/02-Walk/__Bandit02_Walk_001.png",
    "images/enemy/02-Walk/__Bandit02_Walk_002.png",
    "images/enemy/02-Walk/__Bandit02_Walk_003.png",
    "images/enemy/02-Walk/__Bandit02_Walk_004.png",
    "images/enemy/02-Walk/__Bandit02_Walk_005.png",
    "images/enemy/02-Walk/__Bandit02_Walk_006.png",
    "images/enemy/02-Walk/__Bandit02_Walk_007.png"
  )
  gameover=loadImage('gameover.png')
  gold=loadImage('gold.png');
}


function setup() {
  createCanvas(800, 700);
  boy = createSprite(376, 611);
  boy.addAnimation("running", boy_run);
  boy.scale = 0.4;

  enemy = createSprite(370, 444);
  enemy.addAnimation("enemy4", enemy1);
  enemy.scale = 0.1
  enemy.velocity.y = 2;
 enemyGroup=createGroup();
 enemyGroup.add(enemy);
 
 enemy = createSprite(56, 340);
 enemy.addAnimation("enemy4", enemy1);
 enemy.scale = 0.1
 enemy.velocity.x = 2;
 enemyGroup.add(enemy);
 enemy = createSprite(475, 144);
 enemy.addAnimation("enemy4", enemy1);
 enemy.scale = 0.1
 enemy.velocity.y = 2;
enemyGroup.add(enemy);

wallGroup= createGroup()
wall=createSprite(133,488,500,10); 
wallGroup.add(wall);
wall=createSprite(611,288,500,10);
wallGroup.add(wall);
  Edges = createEdgeSprites();
 

  gameoverSprite=createSprite(400,350);
  gameoverSprite.addImage(gameover);
  gameoverSprite.scale=1.25;
  gameoverSprite.visible=false;

   goldSprite1=createSprite(77,430);
  goldSprite1.addImage(gold);
  goldSprite1.scale=0.5
 
   goldSprite=createSprite(130,136);
  goldSprite.addImage(gold);
  goldSprite.scale=0.5;
 
}


//Create the Bodies Here.






function draw() {
  rectMode(CENTER);
  background(background_image);
  textSize(20);
  text(mouseX + ',' + mouseY, mouseX, mouseY);
  if (gamestate==="play"){
 
  if (keyIsDown(UP_ARROW)) {
    boy.position.y -= 5
  }
  if (keyIsDown(DOWN_ARROW)) {
    boy.position.y += 5
  }
  if (keyIsDown(LEFT_ARROW)) {
    boy.position.x -= 5
  }
  if (keyIsDown(RIGHT_ARROW)) {
    boy.position.x += 5
  }
  boy.bounceOff(Edges);
  enemyGroup.bounceOff(Edges);
  enemyGroup.bounceOff(wallGroup)
  boy.bounceOff(wallGroup);

  if(boy.isTouching(goldSprite)){
    goldSprite.visible=false;
    score-=5;
    score+=10;
  }

  if(boy.isTouching(goldSprite1)){
    goldSprite1.visible=false;
    score-=5;
    score+=5;
  }

  if (enemyGroup.isTouching(boy)){
    gamestate="end";
   
  
  }
}
   
  if(gamestate==="end"){
    boy.visible=false;
    enemyGroup.destroyEach();
    gameoverSprite.visible=true;
    goldSprite.visible=false;
    goldSprite1.visible=false;
  }

  if(score==10){
    gamestate="end";
  }
  
  drawSprites();
  fill("red");
  text("Score: "+score,50,37);

}



