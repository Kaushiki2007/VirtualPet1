var canvas, dogImage, dogRunImg;
var dog;
var gameState = 0;
var playerCount;
var allPlayers;
var database;

var dog, happyDog, database, foodS, foodStock;

function preload()
{
	dogImage = loadImage("images/dogImg.png");
  dogRunImg = loadImage("iamges/dogImg1.png");
 
}

function setup() {
	createCanvas(500, 500);
  
  dog = new Dog(100,100);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {  
  background(46, 139, 87);

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  dog.display();
  dogImage.display();
  dogRunImg.display();
  drawSprites();
  

}


  

