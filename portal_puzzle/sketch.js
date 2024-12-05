


//scene 1 items
let castle;
let scene1Answer;
let raccoonImg;

let cupcakeImg;
let keyImg;
let hammerImg;
let ticketImg;
let bookImg;

//scene 2 items
let drOffice;
let scene2Answer
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



    for(let i = 0; i < tools.length; i++) {
        let tool = tools[i];
        if (tool.isTrigger) {
            triggerObject = tool;
        }
    
    tool.drag = 10 //stops them from flying off the page

        if(tool.mouse.dragging()) {
            tool.moveTowards(mouse)
        }


        tool.overlap(triggerObject, function(){
           // do stuff when overlap happens (immediately)
           if(tool.isActivator) {
            
            triggerObject.remove()
            bgImg = backgrounds[sceneCounter].reactionImg
           
            
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