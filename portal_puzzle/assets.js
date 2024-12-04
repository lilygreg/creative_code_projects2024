// GLOBAL VARIABLES

let tools = []

// let raccoon;
// let book;
// let cupcake;
// let key;
// let hammer;
// let ticket;

// //scene 2
// let catdoc;
// let syringe;
// let apple;
// let pill;
// let shoe;
// let saw;

let backgrounds = [];

let s1Tools = [];
let s2Tools = [];
let s3Tools = [];

//background
let bgImg;

// bg images
let castlebg;
let officebg;

function initAssets() {


    let bgS1 = {
        mainImg: castle,
        reactionImg: scene1Answer
    }

    let bgS2 = {
        mainImg: drOffice,
        reactionImg: scene2Answer
    }

    backgrounds.push(bgS1, bgS2);

    // let triggerObject = new Sprite();
    // triggerObject.width = 80;
    // triggerObject.height = 80;
    // triggerObject.x = width / 2;
    // triggerObject.y = height / 1.5;
    // triggerObject.name = "door";
    // triggerObject.collider = "trigger";


    // scene1 tools
    let raccoon = new Sprite();
    //raccoon = new Sprite();
    raccoon.scale = 1/2
    raccoon.x = width / 2.2;
    raccoon.y = height *3.2/4;
    raccoon.name = "raccoon"
    raccoon.image = raccoonImg;
    raccoon.reactionImage = cupcakeImg;
    raccoon.collider = "static";
    raccoon.isTrigger = true;

    let book = new Sprite();
    //book = new Sprite();
    book.x = width *5.5/7;
    book.y = height *8/9;
    book.image = bookImg;
    book.isActivator = true;

    let cupcake = new Sprite();
    //cupcake = new Sprite();
    cupcake.x = width/8;
    cupcake.y = height *11/12;
    cupcake.image = cupcakeImg;

    let key = new Sprite();
    //key = new Sprite();
    key.scale = 0.7;
    key.x = width * 1.45/2;
    key.y = height * 9.5/10;
    key.image = keyImg;

    let hammer = new Sprite();
    //hammer = new Sprite();
    hammer.scale = 0.8;
    hammer.x = width/4.5;
    hammer.y = height/1.7;
    hammer.image = hammerImg;

    let ticket = new Sprite();
    //ticket= new Sprite();
    ticket.scale = 0.8;
    ticket.x = width * 9.5/10;
    ticket.y = height *9.4/10;
    ticket.image = ticketImg;

    s1Tools.push(raccoon, book,cupcake,hammer, key);

    // scene2 tools
    // let catdoc = new Sprite();
    // catdoc = new Sprite();
    // catdoc.scale = .7
    // catdoc.x = width/2
    // catdoc.y = height/2
    // catdoc.image = catdocImg;

    // let syringe = new Sprite();
    // syringe = new Sprite();
    // syringe.scale = 0.3;
    // syringe.x = 
    // syringe.y = 
    // syringe.image = syringeImg;

    // scene3 tools
}