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

function initAssets() {


    staticObject = new Sprite();
    staticObject.width = 80;
    staticObject.height = 80;
    staticObject.x = width / 2;
    staticObject.y = height / 1.5;
    staticObject.color = "#7364d1";
    staticObject.name = "door";
    staticObject.collider = "static";


    // scene1 tools
    let raccoon = new Sprite();
    raccoon = new Sprite();
    raccoon.width = 50;
    raccoon.height = 50;
    raccoon.x = width / 2;
    raccoon.y = height / 3;
    raccoon.color = "#fcba03";
    raccoon.text = "raccoon"
    
    // let key = new Sprite();

    s1Tools.push(raccoon)

    // scene2 tools


    // scene3 tools
}