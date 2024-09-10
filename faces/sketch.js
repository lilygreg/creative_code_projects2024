let bunnyhead;
let eyeball1;
let eyeball2;
let backdrop;

function preload() {
  bunnyhead = loadImage("bunnypng copy.png");
  eyeball1 = loadImage("bunnyeyeball1 copy.png");
  eyeball2 = loadImage("bunnyeyeball2 copy.png");
  backdrop = loadImage("BUNNYBACKDROP copy.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  imageMode(CENTER)
  
  fullscreen()
  image(backdrop,windowWidth/2,windowHeight/2, backdrop.width/2.5,backdrop.height/2.8);
}

function draw() {


  let f = new Face();
  f.display();
}


class Face {
  //properties
  constructor() {
    this.size = random(100, 200);
    this.x = random(width);
    this.y = random(height/2.5,height);
   
    this.eyeDimension = random(20, 60);
    this.eyeDistance = random(25,55);
    this.eyeHeight = random(-40, -5);
  }

  //methods
  display() {
    noStroke();
    //draw face
    image(bunnyhead,this.x, this.y, this.size/1.5,this.size);

    //draw eyes
     image(eyeball2,this.x + this.eyeDistance/2, this.y - this.eyeHeight,this.eyeDimension,this.eyeDimension)
    
   image(eyeball1,this.x - this.eyeDistance/2, this.y - this.eyeHeight, this.eyeDimension,this.eyeDimension);
   
   
  }
}
