// character
let defaultfaceImg;
let withnailsImg;
let withflowersImg;
let litupImg;
let peevedImg;
let listeningImg;
let scaryvacuumImg;

let pickedUp = false;

//images
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
let menu;

let things = [];

let robotState;

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
  litupImg = loadImage("litup!.png")
  peevedImg = loadImage("peeved.png");
  listeningImg = loadImage("listening.png");
  scaryvacuumImg = loadImage("scaryvacuum.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  //menu = new Thing(width - 50, 0, "menu", menuImg);

  nailpolish = new Thing(windowWidth * 9 / 10,150, "nail polish", nailpolishImg,withnailsImg);
  bouquet = new Thing( windowWidth * 9 / 10, 250, "bouquet", bouquetImg,withflowersImg);
  apple = new Thing( windowWidth * 9 / 10, 360, "apple", appleImg, peevedImg);
  lightbulb = new Thing( windowWidth * 9 / 10, 450, "lightbulb", lightbulbImg, litupImg);
  vacuum = new Thing( windowWidth * 9 / 10, 550, "vacuum", vacuumImg, scaryvacuumImg);
  music = new Thing( windowWidth * 9 / 10, 650, "music", musicImg, listeningImg);
  

  robotState = defaultfaceImg;

  things.push(nailpolish, bouquet, apple, lightbulb, vacuum, music)

}

function mouseDragged() {
  for (let i = 0; i < things.length; i++) {
    let thing = things[i];
    if (dist(mouseX, mouseY, thing.pos.x, thing.pos.y) < 100 && pickedUp == false) {
      thing.active = true;
      pickedUp = true;
      console.log(thing)
    }
    thing.update()
  }
}

function mouseReleased() {

  // find the active thing
  let activeThing;
  for (let i = 0; i < things.length; i++) {
    let thing = things[i];
    if(thing.active == true) {
      activeThing = thing;
    }
  }
  // MAKE ROBOT REACT IF ITEM IS DROPPED ON ROBOT
  // check if the active thing is near the robot
  // if it is, make robot react and return thing to its startPos
  if(dist(activeThing.pos.x, activeThing.pos.y,mouseX, mouseY)< 10){
   robotState = activeThing.reactionImage;


    let time = 2000; 
    // change robot reaction image for X amount of time
    function reaction(){
      robotState = defaultfaceImg;
    }
    setTimeout(reaction, time);
  }else{
    thing.pos = thing.startingpos;
  }

  // if it is not, return thing to its startPos

  // deactivate everything
  pickedUp = false;
  for (let i = 0; i < things.length; i++) {
    things[i].active = false;
  }
}


function draw() {
  clear();

  //menu base
  image(menuImg, windowWidth * 9 / 10, windowHeight / 2, menuImg.width / 2, menuImg.height / 1.8);

  image(robotState, windowWidth / 2.2, windowHeight / 1.7, robotState.width / 3.8, robotState.height / 3.8);

  for (let i = things.length - 1; i > 0; i--) {
    things[i].display()
  }


}

class Thing {

  constructor(x, y, name, image, reactionImage) {
    this.startPos = createVector(x, y);
    this.pos = this.startPos;
    this.name = name;
    this.startingpos = this.pos;
    this.image = image;
    this.reactionImage = reactionImage;
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