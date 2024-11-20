let bg;

function preload(){
    bg = loadImage("castlecode.jpg");
}

function setup(){
    createCanvas(1400, 800);
    imageMode(CENTER);

}

function draw(){
    push()
    imageMode(CORNER)
    image(bg, 0, 0, width, height)
    pop()

}