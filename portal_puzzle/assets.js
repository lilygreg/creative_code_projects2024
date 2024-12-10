// GLOBAL VARIABLES

let tools = []

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

    let bgS3 = {
        mainImg: livingroom,
        reactionImg: livingroom
    }

    backgrounds.push(bgS1, bgS2);


    // scene1 tools
    let raccoon = new Sprite();
    raccoon.scale = 1/2
    raccoon.x = width / 2.2;
    raccoon.y = height *3.2/4;
    raccoon.name = "raccoon"
    raccoon.image = raccoonImg;
    raccoon.reactionImage = cupcakeImg;
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

    let key = new Sprite();
    key.scale = 0.7;
    key.x = width * 1.45/2;
    key.y = height * 9.5/10;
    key.image = keyImg;

    let hammer = new Sprite();
    hammer.scale = 0.8;
    hammer.x = width/4.5;
    hammer.y = height/1.7;
    hammer.image = hammerImg;

    let ticket = new Sprite();
    ticket.scale = 0.8;
    ticket.x = width * 9.5/10;
    ticket.y = height *9.4/10;
    ticket.image = ticketImg;

        s1Tools.push(raccoon, book,cupcake,hammer, key,ticket);


    // scene2 tools

    let catdoc = new Sprite();
    catdoc.scale = .7
    catdoc.x = width/2
    catdoc.y = height/2
    catdoc.image = catdocImg;
    catdoc.isTrigger = true;

    let syringe = new Sprite();
    syringe.scale = 0.3;
    syringe.x = width/10;
    syringe.y = height/1.56;
    syringe.image = syringeImg;

    let apple = new Sprite();
    apple.image = appleImg;
    apple.scale = .8
    apple.x = width/4.6;
    apple.y = height/2.1;

    let pill = new Sprite();
    pill.image = pillImg;
    pill.scale = .7
    pill.x = width*.94;
    pill.y = height*.77;

    let shoe = new Sprite();
    shoe.image = shoeImg;
    shoe.x = width*.40;
    shoe.y = height*.90;

    let saw = new Sprite();
    saw.image = sawImg;
    saw.x = width/2;
    saw.y = height/2;

        // s2Tools.push(catdoc, syringe, apple, pill, shoe,saw)

    // scene3 tools

    let laptop = new Sprite();
   // laptop.scale = 
    laptop.x = width/2
    laptop.y = height/2
    laptop.image =laptopImg;

    let tshirt = new Sprite();
    tshirt.scale = 0.3;
    tshirt.x = width/10;
    tshirt.y = height/1.56;
    tshirt.image = tshirtImg;

    let plunger = new Sprite();
    plunger.image = plungerImg;
    plunger.scale = .8
    plunger.x = width/4.6;
    plunger.y = height/2.1;

    let chips = new Sprite();
    chips.image = chipsImg;
    chips.scale = .7
    chips.x = width*.94;
    chips.y = height*.77;

    let cleaner = new Sprite();
    cleaner.image = cleanerImg;
    cleaner.x = width*.40;
    cleaner.y = height*.90;

    let screen = new Sprite();
    screen.image = screenImg;
    screen.x = width/2;
    screen.y = height/2;
    screen.isTrigger = true;
    screen.collider = "static";

}