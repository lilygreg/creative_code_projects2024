let defaultface;
let nails;
let polish;

function preload(){
  defaultface = loadImage("midterm_defaultface.png");
  nails = loadImage("withnails.png");
 polish = loadImage("justnailpolish.png");
  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
//  background(220);
  image(defaultface,width/2,height/2,defaultface.width,defaultface.height);
  
  
}