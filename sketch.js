//Create variables here
var dog,happyDog;
var dogImage,happyDogImage;
var database;
var foods,foodStock;
function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,250);
  dog.addImage("dog",dogImage);
  dog.scale = 0.3
  database = firebase.database();
  foodStock = 1;
  //foodStock=database.ref('food');
 // foodStock.on("value",readStock)
}



function draw() {  
background(46,139,87);

keyPressed();
  drawSprites();
  //add styles here
  textSize(20);
  fill("red");
  stroke("blue");
  text("Stock:" + foodStock,100,250);

}

function keyPressed(){
  if(keyWentDown(UP_ARROW)){
   dog.addImage("dog",happyDogImage);
   dog.scale = 0.3
   foodStock = foodStock-1
   update(foodStock);
  }
}
function update(x){
  database.ref('/').update({
    food:x
  })
}
