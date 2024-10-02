let defaultface;
let nails;
let polish;
let bouquet;
let happyflowers;
let menu;

function preload(){
  defaultface = loadImage("midterm_defaultface.png");
  nails = loadImage("withnails.png");
 polish = loadImage("justnailpolish.png");
 bouquet = loadImage("bouquet.png");
  happyflowers = loadImage("withflowers!.png");
  menu = loadImage("menu.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

}

function draw() {
//background(220);

//default face
if(mouseX > windowWidth/4) {
  image(defaultface,windowWidth/3,windowHeight/2,defaultface.width/4,defaultface.height/4);
}
  
//nails
 if(mouseX < windowWidth/3) {
  image(nails,windowWidth/3,windowHeight/2,nails.width/4, nails.height/4);
  }

//holding flowers
if(mouseY > windowHeight/2)
image(happyflowers,windowWidth/3,windowHeight/2,happyflowers.width/4,happyflowers.height/4);


//menu base
image(menu,windowWidth*4/5,windowHeight/2,menu.width/2,menu.height)

//nail polish
image(polish,windowWidth*4/5,windowHeight/3,polish.width/4,polish.height/4);
//flower bouquet
image(bouquet,windowWidth*4/5,windowHeight/2,bouquet.width/4,bouquet.height/4);

}