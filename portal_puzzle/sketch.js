


//scene 1 items
let castle;
let raccoonImg;

let cupcakeImg;
let keyImg;
let hammerImg;
let ticketImg;
let bookImg;

//scene 2 items
let drOffice;
let catdocImg; 

let syringeImg;
let appleImg;
let pillImg;
let shoeImg;
let sawImg;


function preload() {
    castle = loadImage("castlecode.jpg");
    drOffice = loadImage("scene2bg.jpg")
 // scene 1 items
    raccoonImg = loadImage("raccoon.png");
    cupcakeImg = loadImage("cupcake.png");
    keyImg = loadImage("key.png");
    hammerImg = loadImage("hammer.png");
    ticketImg = loadImage("planeticket.png");
    bookImg = loadImage("book.png");
 //scene 2 items
    syringeImg = loadImage("syringe.png");
    appleImg = loadImage("apple.png");
    pillImg = loadImage("pillbottle.png");
    shoeImg = loadImage("brownshoe.png");
    sawImg = loadImage("handsaw.png");
    catdocImg = loadImage("catdr.png");
}

function setup() {
    createCanvas(1440, 778);
    initAssets();
    imageMode(CENTER);
    tools = s1Tools;
}

function draw() {
    push();
    imageMode(CORNER);
    image(castle, 0, 0, width, height)
    pop();

    // for (let i = 0; i < sprites.length; i++) {
    //     let s = sprites[i]
    //     s.overlap(sprite1, function () {
    //       sprite1.color = "#ff0000";
    //       console.log(s.text)
    //       if (s.specialItem === true) {
    //         sprite1.color = "#ffff00";
    //         setTimeout(function () {
    //           sprite1.remove();
    //         }, 3000);
    //       }
    //     });
    //   }

    for(let i = 0; i < tools.length; i++) {
        let tool = tools[i];

        // 


        tool.overlap(staticObject, function(){
           // do stuff when overlap happens
        })
    }
}