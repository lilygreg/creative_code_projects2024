let castle;

function preload(){
    castle = loadImage("castlecode.jpg");
}

function setup(){
    createCanvas(1440, 778);
    imageMode(CENTER);

}

function draw(){
   push();
   imageMode(CORNER);
    image(castle, 0, 0, width, height)
    pop();
}