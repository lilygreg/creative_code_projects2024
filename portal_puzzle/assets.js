// GLOBAL VARIABLES

let tools = []
let staticObject

let s1Tools = [];
let s2Tools = [];
let s3Tools = [];

//background
let bgImg;

// bg images
let castlebg;
let officebg;

function initAssets() {


    staticObject = new Sprite();
    staticObject.width = 80;
    staticObject.height = 80;
    staticObject.x = width / 2;
    staticObject.y = height / 1.5;
    staticObject.name = "door";
    staticObject.collider = "static";


    // scene1 tools
    let raccoon = new Sprite();
    raccoon = new Sprite();
    raccoon.scale = 1/2
    raccoon.x = width / 2.2;
    raccoon.y = height *3.2/4;
    raccoon.name = "raccoon"
    raccoon.image = raccoonImg;
    raccoon.collider = "static";
    
    // let key = new Sprite();

    s1Tools.push(raccoon)

    // scene2 tools


    // scene3 tools
}