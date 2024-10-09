// character
let defaultfaceImg;

let nailsImg;
let withflowersImg;

let litupImg;

//thing
let nailpolishImg;
let bouquetImg;
let menuImg;
let appleImg;
let lightbulbImg;
let vacuumImg;
let musicImg;

// things
let nailpolish;
let bouquet;
let apple;
let lightbulb;
let vacuum;
let music;
//let menu;

let things = [];

function preload() {
  defaultfaceImg = loadImage("midterm_defaultface.png");
  withnailsImg = loadImage("withnails.png");
  nailpolishImg = loadImage("justnailpolish.png");
  withflowersImg = loadImage("withflowers!.png");
  bouquetImg = loadImage("bouquet.png");
  menuImg = loadImage("whitemenu.png");
  appleImg = loadImage("apple.png");
  lightbulbImg = loadImage("lightbulb.png");
  vacuumImg = loadImage("vacuum.png");
  musicImg = loadImage("music.png");
  //litupImg = loadImage("litup.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  nailpolish = new Thing(200, 100, "nail polish", nailpolishImg);
  bouquet = new Thing(200, 150, "bouquet", bouquetImg);
  apple = new Thing(200,100,"apple", appleImg);
  lightbulb = new Thing(200,100,"lightbulb", lightbulbImg);
  vacuum = new Thing(200,100,"vacuum", vacuumImg);
  music = new Thing(200,100,"music",musicImg);
  //menu = new Thing(200,100,"menu",menuImg);
  

  things.push(nailpolish, bouquet,apple,lightbulb,vacuum,music)

}

function mouseDragged() {
  for (let i = 0; i < things.length; i++) {
    let thing = things[i];
    if (dist(mouseX, mouseY, thing.pos.x, thing.pos.y) < min(thing.image.width/2, thing.image.height/2)) {
      thing.active = true;
      console.log(thing)
    } else {
      thing.active = false;
    }
    thing.update()
  }
}

// function mouseReleased(){
//   if(dist() < ){

//   }
//  else{
//   thing.pos = thing.startingpos
//  }
// }



function draw() {
  clear();
 
  for(let i=0; i < things.length; i++) {
    things[i].display()
  }

  //menu base
   image(menuImg,windowWidth*9/10,windowHeight/2,menuImg.width/2,menuImg.height/2);

   image(defaultfaceImg, windowWidth/2.2,windowHeight/1.7,defaultfaceImg.width/4,defaultfaceImg.height/4);


}

class Thing {

  constructor(x, y, name, image) {
    this.pos = createVector(x, y);
    this.name = name;
    this.startingpos = this.pos;
    this.image = image;
    this.scale = 1 / 4;
    this.active = false;
  }

  update() {
    if (this.active == true) {
      this.pos.x = mouseX;
      this.pos.y = mouseY;
    }
  }

  display() {
    image(this.image, this.pos.x, this.pos.y, this.image.width * this.scale, this.image.height * this.scale)


  }

}