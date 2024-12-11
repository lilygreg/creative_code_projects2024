// GLOBAL VARIABLES

let toolSceneBank = []
let tools = []

let backgrounds = [];

let s0Tools = [];
let s1Tools = [];
let s2Tools = [];
let s3Tools = [];
let s4Tools = [];

//background
let bgImg;

// bg images
let castlebg;
let officebg;

function initAssets() {

    let bgS0 = {
        mainImg: startscreen
    }

    let bgS1 = {
        mainImg: castle,
        reactionImg: scene1Answer
    }

    let bgS2 = {
        mainImg: drOffice,
        reactionImg: scene2Answer
    }

    let bgS3 = {
        mainImg: livingroom,
        reactionImg: scene3answer
    }

    let bgS4 = {
        mainImg: endscreen
    }

    backgrounds.push(bgS0, bgS1, bgS2, bgS3, bgS4);

    // scene start and end tools
    let emptySprite = new Sprite();
    
    
    emptySprite.isActivator = true;
    emptySprite.isTrigger = true;
    emptySprite.visible = false;
    s0Tools.push(emptySprite)
    s4Tools.push(emptySprite);

    // scene1 tools
    let raccoon = new Sprite();
    raccoon.scale = 1/2
    raccoon.x = width / 2.2;
    raccoon.y = height *3.2/4;
    raccoon.name = "raccoon"
    raccoon.image = raccoonImg;
    // raccoon.reactionImage = cupcakeImg;
    raccoon.collider = "static";
    raccoon.isTrigger = true;

    let book = new Sprite();
    book.x = width *5.5/7;
    book.y = height *8/9;
    book.image = bookImg;
    book.isActivator = true;
    book.collider = "none";
    book.sleeping = true;

    let cupcake = new Sprite();
    cupcake.x = width/8;
    cupcake.y = height *11/12;
    cupcake.image = cupcakeImg;
    cupcake.collider = "none";

    let key = new Sprite();
    key.scale = 0.7;
    key.x = width * 1.45/2;
    key.y = height * 9.5/10;
    key.image = keyImg;
    key.collider = "none";

    let hammer = new Sprite();
    hammer.scale = 0.8;
    hammer.x = width/4.5;
    hammer.y = height/1.7;
    hammer.image = hammerImg;
    hammer.collider = "none";

    let ticket = new Sprite();
    ticket.scale = 0.8;
    ticket.x = width * 9.5/10;
    ticket.y = height *9.4/10;
    ticket.image = ticketImg;
    ticket.collider = "none";

    s1Tools.push(raccoon, book,cupcake,hammer, key,ticket);
    for (let tool of s1Tools) {
        tool.visible = false;
    }



    // scene2 tools

    let catdoc = new Sprite();
    catdoc.scale = .7
    catdoc.x = width*.75
    catdoc.y = height/2
    catdoc.image = catdocImg;
    catdoc.isTrigger = true;
    raccoon.collider = "none";


    let syringe = new Sprite();
    syringe.scale = 0.3;
    syringe.x = width/10;
    syringe.y = height/1.56;
    syringe.image = syringeImg;
    syringe.collider = "none";

    let apple = new Sprite();
    apple.image = appleImg;
    apple.scale = .8
    apple.x = width/4.6;
    apple.y = height/2.1;
    apple.isActivator = true;
    apple.collider = "none";
    apple.sleeping = true;


    let pill = new Sprite();
    pill.image = pillImg;
    pill.scale = .7
    pill.x = width*.94;
    pill.y = height*.77;
    pill.collider = "none";

    let shoe = new Sprite();
    shoe.image = shoeImg;
    shoe.x = width*.40;
    shoe.y = height*.90;
    shoe.collider = "none";

    let saw = new Sprite();
    saw.image = sawImg;
    saw.x = width/2;
    saw.y = height/2;
    saw.collider = "none";

    

    s2Tools.push(catdoc, syringe, apple, pill, shoe,saw)
    for (let tool of s2Tools) {
        tool.visible = false;
    }

    // scene3 tools

    let laptop = new Sprite();
   // laptop.scale = 
    laptop.x = width/2
    laptop.y = height/2
    laptop.image =laptopImg;
    laptop.collider ="none";

    let tshirt = new Sprite();
    tshirt.x = width/10;
    tshirt.y = height/1.56;
    tshirt.image = tshirtImg;
    tshirt.collider = "none";

    let plunger = new Sprite();
    plunger.image = plungerImg;
    plunger.scale = .8
    plunger.x = width*3.3;
    plunger.y = height/2.1;
    plunger.collider = "none";

    let chips = new Sprite();
    chips.image = chipsImg;
    chips.scale = .7
    chips.x = width*.94;
    chips.y = height*.77;
    chips.collider = "none";

    let cleaner = new Sprite();
    cleaner.image = cleanerImg;
    cleaner.x = width*.40;
    cleaner.y = height*.90;
    cleaner.isActivator = true;
    cleaner.collider = "none";
    cleaner.sleeping = true;

    let screen = new Sprite();
    screen.image = screenImg;
    screen.x = width*0.175;
    screen.y = height*0.315;
    screen.isTrigger = true;
    screen.collider = "static";


    s3Tools.push(laptop, tshirt, plunger, chips, cleaner, screen)
    for (let tool of s3Tools) {
        tool.visible = false;
    }


    

    toolSceneBank.push(s0Tools, s1Tools, s2Tools, s3Tools, s4Tools)

    function setVisibilityFalse() {
        // Set visibility to false for all tools in scene1
        for (let tool of s1Tools) {
            tool.visible = false;
        }
    
        // Set visibility to false for all tools in scene2
        for (let tool of s2Tools) {
            tool.visible = false;
        }
    
        // Set visibility to false for all tools in scene3
        for (let tool of s3Tools) {
            tool.visible = false;
        }
    }

}
