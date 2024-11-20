//background
let castle;

//scene 1 items
let raccoonImg; 
let cupcakeImg;
let keyImg;
let hammerImg;
let ticketImg;

let raccoon;
let cupcake;
let key;
let hammer;
let ticket;


function preload(){
    castle = loadImage("castlecode.jpg");
// scene 1 items
raccoonImg = loadImage("raccoon.png");
cupcakeImg = loadImage("cupcake.png");
keyImg = loadImage("key.png");
hammerImg = loadImage("hammer.png");
ticketImg = loadImage("planeticket.png");
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