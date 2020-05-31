var h1;
let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
  grid();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  grid();
  
  colorMode(RGB);
  
  scale(400);
  //background(220);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255);
  ellipse(food.x, food.y, 1);
  
  
}

function grid(){
  colorMode(HSL);
  rectMode(CENTER);

  scale(0.05);
  h1 = random(0,255);
  background(h1,100,50);
  noFill();
  stroke(0);
  rect(5,200,10,400);
  rect(15,200,10,400);
  rect(25,200,10,400);
  rect(35,200,10,400);
  rect(45,200,10,400);
  rect(55,200,10,400);
  rect(65,200,10,400);
  rect(75,200,10,400);
  rect(85,200,10,400);
  rect(95,200,10,400);
  rect(105,200,10,400);
  rect(115,200,10,400);
  rect(125,200,10,400);
  rect(135,200,10,400);
  rect(145,200,10,400);
  rect(155,200,10,400);
  rect(165,200,10,400);
  rect(175,200,10,400);
  rect(185,200,10,400);
  rect(195,200,10,400);
  rect(205,200,10,400);
  rect(215,200,10,400);
  rect(225,200,10,400);
  rect(235,200,10,400);
  rect(245,200,10,400);
  rect(255,200,10,400);
  rect(265,200,10,400);
  rect(275,200,10,400);
  rect(285,200,10,400);
  rect(295,200,10,400);
  rect(305,200,10,400);
  rect(315,200,10,400);
  rect(325,200,10,400);
  rect(335,200,10,400);
  rect(345,200,10,400);
  rect(355,200,10,400);
  rect(365,200,10,400);
  rect(375,200,10,400);
  rect(385,200,10,400);
  rect(395,200,10,400);
  
  rect(200,5,400,10);
  rect(200,15,400,10);
  rect(200,25,400,10);
  rect(200,35,400,10);
  rect(200,45,400,10);
  rect(200,55,400,10);
  rect(200,65,400,10);
  rect(200,75,400,10);
  rect(200,85,400,10);
  rect(200,95,400,10);
  rect(200,105,400,10);
  rect(200,115,400,10);
  rect(200,125,400,10);
  rect(200,135,400,10);
  rect(200,145,400,10);
  rect(200,155,400,10);
  rect(200,165,400,10);
  rect(200,175,400,10);
  rect(200,185,400,10);
  rect(200,195,400,10);
  rect(200,205,400,10);
  rect(200,215,400,10);
  rect(200,225,400,10);
  rect(200,235,400,10);
  rect(200,245,400,10);
  rect(200,255,400,10);
  rect(200,265,400,10);
  rect(200,275,400,10);
  rect(200,285,400,10);
  rect(200,295,400,10);
  rect(200,305,400,10);
  rect(200,315,400,10);
  rect(200,325,400,10);
  rect(200,335,400,10);
  rect(200,345,400,10);
  rect(200,355,400,10);
  rect(200,365,400,10);
  rect(200,375,400,10);
  rect(200,385,400,10);
  rect(200,395,400,10);
}