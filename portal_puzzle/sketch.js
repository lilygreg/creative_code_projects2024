

//scene 1 items
let raccoonImg;
let cupcakeImg;
let keyImg;
let hammerImg;
let ticketImg;


let cupcake;
let key;
let hammer;
let ticket;


function preload() {
    castle = loadImage("castlecode.jpg");
    // scene 1 items
    raccoonImg = loadImage("raccoon.png");
    cupcakeImg = loadImage("cupcake.png");
    keyImg = loadImage("key.png");
    hammerImg = loadImage("hammer.png");
    ticketImg = loadImage("planeticket.png");
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