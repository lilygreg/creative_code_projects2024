let robot;

let particles = [];

function preload(){
  robot = loadImage("robot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create all of our particles and store them in the particles[] array

  for (let i = 0; i < 100; i++) {
    let p = new Particle();
    particles.push(p);
  }
}

function draw() {
  background(150, 199, 82);

  //loop through all the Particles in the particles[] array, update and show them

  for (let i = 0; i < particles.length; i++) {
    let currentParticle = particles[i];
    currentParticle.update(); //update is a lot like step() from the random walker class
    currentParticle.show();
  }
}

class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-4, 4), random(-4, 4));
    this.acceleration = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    this.age = random(100,200)
  }
  //update is where all the calculating happens, show is where we display the particle based on what happened in update
  update() {
    //   this.position.add(this.acceleration);
    this.checkWalls();
    this.position.add(this.velocity);
    this.age--;
  }

  checkWalls() {
    //check top wall
    if (this.position.y < 0) {
      this.velocity.y *= -1; //reverse the y direction
    }

    if (this.position.y > height) {
      this.velocity.y *= -1;
    }

    if (this.position.x < 0) {
      this.velocity.x *= -1;
    }

    if (this.position.x > width) {
      this.velocity.x *= -1;
    }
  }

  show() {
    image(robot, this.position.x,this.position.y,this.age,this.age)
    //ellipse(this.position.x, this.position.y, 30, 30);
  }
}
