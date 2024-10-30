/**
 * Made with p5play!
 * https://p5play.org
 */

// Learn more about p5play here -> https://p5play.org/learn
let chairPic;
let tablePic;
let chair;
let table;

function preload() {
  chairPic = loadImage("yellowchair.png");
  tablePic = loadImage("sidetablecopy.png");
}

function setup() {
  createCanvas(1500, 800)
  world.gravity.y = 10
  chair = new Sprite();
	chair.scale = 1/4;
	chair.image = 'yellowchair.png';
 chair.image.offset.y = 6;
}

function draw() {
  clear();
  chair.debug = mouse.pressing();
  
  if (mouse.presses()) {
    table = new Sprite(mouse.x, mouse.y);
    table.image = "sidetablecopy.png";
    table.scale = 1/10;
    table.image.offset.y = -30;
    table.image.offset.x = 10;
  }

  
  if (mouse.dragging()) {
    table.moveTowards(mouse);
  }

  if (mouse.released() && !mouse.dragged()) {
    table.speed = random(0, 5);
    table.direction = random(0, 360);
  }

  // by default, all sprites are drawn by p5play
  // after the end of the draw function
}
