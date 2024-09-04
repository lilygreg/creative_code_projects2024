let dogImage;

function preload(){
dogImage = loadImage("cute-cartoon-dog-free-png.png")
}


function setup() {
    createCanvas(400, 400);
  frameRate(10)
  }
  
  function draw() {
    //background(220);
   
    let f = new Face();
    f.display();
  }
  
  //blueprint for a face object
  class Face {
    //properties
    constructor() {
      this.size = random(30,60);
      this.x = random(width);
      this.y = random(height);
      this.skinColor = color(random(256), random(256), random(256));
      //random(256) = 0 - 255.99999999999
      this.eyeColor = color(random(256), random(256), random(256));
      this.eyeSize = random(5,15)
      this.eyeDistance = random(10,20);
      this.eyeHeight = random(-10,17);
      this.mouthSize = random(10,20);
      this.mouthPosition = random(-10,10);
  
    }
  
    //methods
    display() {
        noStroke()
      //draw face
      fill(this.skinColor);
      ellipse(this.x, this.y, this.size);
      
      //draw eyes
      fill(this.eyeColor);
      image(dogImage, this.x - this.eyeDistance/2, this.y - this.eyeHeight, this.eyeSize,this.eyeSize)
      text("👁️",this.x + this.eyeDistance/2,this.y - this.eyeHeight,this.eyeSize)
      
  
    }
  }
  