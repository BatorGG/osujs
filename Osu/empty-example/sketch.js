var circleSize = 50;
var outerCircle = 300;
var clickTime = 300; //Frames 
var outerCircleSize = outerCircle;
var points = 0;
var speed = 300;
var showText = 50;
var currentText = '';
var gameRunning = false;

function setup() {
  createCanvas(700, 700);
  frameRate(60);
  circle = new Circles();
 
}

function draw() {
  background(0);
  if (gameRunning === true){
  circle.show();

  console.log(points);

  fill(255)
  textSize(20);
  text('Score: ' + points , 20, 680);

  if (showText < 25){
    if (currentText === '-300') fill(255, 0, 0);
    else fill(0, 255, 0);
    text(currentText, mouseX, mouseY);
    showText++;
  }
  }
  else {
    fill(255)
    textSize(30);
    text('Your score was: ' + points , 200, 350);
  }
}

function mouseClicked() {
  if (gameRunning === true){
  if(mouseX >= circle.x - circleSize/2 && mouseX <= circle.x + circleSize/2 && mouseY >= circle.y - circleSize/2 && mouseY <= circle.y + circleSize/2){
    if (outerCircleSize > 100) {
      circle.update();
      points -= 300;
      currentText = '-300';
    }
    if (outerCircleSize > 50 && outerCircleSize <= 100) {
      circle.update();
      points += 50;
      currentText = '50';
    }
    if (outerCircleSize > 25 && outerCircleSize <= 50) {
      circle.update();
      points += 100;
      currentText = '100';
    }
    if (outerCircleSize > -10 && outerCircleSize <= 25) {
      circle.update();
      points += 300;
      currentText = '300';
    }
    if (outerCircleSize > -25 && outerCircleSize <= -10) {
      circle.update();
      points += 100;
      currentText = '100';
    }
  }
  else {
    gameRunning = false;
    circle.update();
  }
  showText = 0;
  speed += 10;
  }
  else {
    gameRunning = true;
    points = 0;
    speed = 300;
  }
}