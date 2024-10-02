let defaultface;
let nails;
let polish;

function preload(){
  defaultface = loadImage("midterm_defaultface.png");
  nails = loadImage("withnails.png");
 polish = loadImage("justnailpolish.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
//  background(220);
  image(defaultface,windowWidth/2.3,windowHeight/3.5,defaultface.width/4,defaultface.height/4);
  
  
}