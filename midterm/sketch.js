// images
let defaultfaceImg;
let nailsImg;
let nailpolishImg;
let bouquetImg;
let withflowersImg;
let menuImg;

// things
let defaultface;
let nails;
let nailpolish;
let bouquet;
let withflowers;
let menu;

let things = [];

function preload() {
  defaultfaceImg = loadImage("midterm_defaultface.png");
  withnailsImg = loadImage("withnails.png");
  nailpolishImg = loadImage("justnailpolish.png");
  bouquetImg = loadImage("bouquet.png");
  withflowersImg = loadImage("withflowers!.png");
  menuImg = loadImage("menu.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  nailpolish = new Thing(200, 100, "nail polish", nailpolishImg);
  bouquet = new Thing(200, 150, "bouquet", bouquetImg);

  things.push(nailpolish, bouquet)

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

  // nailpolish.display()
  // bouquet.display()

  image(withflowersImg, width/3,height/2,withflowers.size)

  for(let i=0; i < things.length; i++) {
    things[i].display()
  }
  // let t = new Thing();
  // t.display();

  //menu base
  // image(menu,windowWidth*4/5,windowHeight/2,menu.width/2,menu.height)

  //nail polish
  // image(polish,windowWidth*4/5,windowHeight/3,polish.width/4,polish.height/4);
  //flower bouquet
  // image(bouquet,windowWidth*4/5,windowHeight/2,bouquet.width/4,bouquet.height/4);

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