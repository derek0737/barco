var ship1;
var ship;
var sea1;
var sea;
function preload(){
ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea1=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(130,200,30,30);
  ship.addAnimation("movimiento",ship1);
  sea=createSprite(400,200);
  sea.addImage(sea1);
}

function draw() {
  background("blue");
 
}