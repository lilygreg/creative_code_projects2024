


//scene 1 items
let castle;
let scene1Answer;
let raccoonImg;
// let raccoonImg2

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

let sceneCounter = 0;


function preload() {
    castle = loadImage("castlecode.jpg");
    scene1Answer = loadImage("scene1answer.jpg");
    drOffice = loadImage("scene2bg.jpg");
    scene2Answer = loadImage("scene2answer.jpg");
 // scene 1 items
    raccoonImg = loadImage("raccoon.png");
    // raccoonImg2 = loadImage("...")
    
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
    bgImg = backgrounds[sceneCounter].mainImg
}

function draw() {

    clear()

    push();
    imageMode(CORNER);

    image(bgImg, 0, 0, width, height)
    pop();

    // if (mouse.dragging()) {
    //     book.moveTowards(mouse);
    //   }
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
        if (tool.isTrigger) {
            triggerObject = tool;
        }

        if(tool.mouse.dragging()) {
            tool.moveTowards(mouse)
        }


        tool.overlap(triggerObject, function(){
           // do stuff when overlap happens (immediately)
           if(tool.isActivator) {
            
            triggerObject.image = triggerObject.reactionImage
            bgImg = backgrounds[sceneCounter].reactionImg
           // console.log("cool")
            
            // do stuff after X amount of time
            setTimeout(function(){
                console.log("nice")
                sceneCounter++;
                bgImg = backgrounds[sceneCounter].mainImg
            }, 3000)
           }
           
        })
    }
}