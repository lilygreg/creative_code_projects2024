function setup() {
  createCanvas(400, 400);
  angleMode()
}

function draw() {
  background(255, 255,255);
  console.log(mouseX, mouseY);
  noStroke();

  //body
  fill(230, 249, 255);
  quad(156, 110, 227, 189, 251, 284, 102, 243); //back of neck
  ellipse(90, 400, 300); //front body
  ellipse(91, 280, 200, 80); //back
  ellipse(172, 260, 143, 136, 100); //bottom of neck
  ellipse(200, 274, 100, 200); //front bottom of neck
  ellipse(width / 2, height / 3, 100); //head
  ellipse(300, 200, 70); //snout
  quad(235, 98, 323, 175, 268, 214, 195, 184); //cheek

  //sparkle
  fill(247, 238, 114,100)
  ellipse(228,36,25)
 fill(247, 238, 114,50)
  ellipse(228,36,50)
  
  //horn
  fill(201, 233, 242);
  triangle(202, 84, 230, 30, 220, 94);
  ellipse(212, 88, 23, 15);

  //hair
  fill(202, 211, 250);
  ellipse(200, 95, 32,30);
  ellipse(180, 100, 34);
  ellipse(163, 118, 34);
  ellipse(150, 140, 34);
  ellipse(135, 160, 34);
  ellipse(120, 180, 34);
  ellipse(110, 200, 34);
  ellipse(100, 220, 34);
  ellipse(90, 240, 34);
  ellipse(230,92,40,30);

  //eye

   //lashes
  angleMode(degrees)
  push()
  rect(210,155,10,3);
  rect(210,160,10,3)
  pop()
  
  fill(255, 255, 255);
  ellipse(230, 148, 30, 40);
  fill(143, 146, 179);
  ellipse(239, 149, 15, 20);
  fill(230, 249, 255);
  square(215, 113, 30);

  //nostrils
  fill(143, 146, 179);
  ellipse(306,204,6,10)
  ellipse(320,200,4,8)
}
