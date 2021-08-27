let player;
let gameover;
let obstacles = [];
let playerImg;
let bg;
let obsImg;
let obsImg2;
let score = 0;
function preload() {
  playerImg = loadImage("player.png");
  bg = loadImage("bg.png");
  obsImg = loadImage("obstacle.png");
  obsImg2 = loadImage("akuma.png");
  gameover = loadImage("gameover.png");
  let options = { probabilityThreshold: 0.85 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}
function setup() {
  createCanvas(1200, 800);
  player = new Player();
  wordClassifier.classify(heardWord);
}
function heardWord(error, results) {
  console.log(results[0]);
  if (results[0].label === "up") {
    player.jump();
  }
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(bg);
  player.show();
  player.move();

  if (random(1) < 0.007) {
    // 0.7%
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      image(gameover, width / 4, height / 5, 600, 600);
      noLoop();
      textSize(50);
      fill(0);
      text("Score: " + score, width / 2 - 70, height / 1 - 170);
    }
    if (obs.x < 0 - obs.size) {
      let index = obstacles.indexOf(obs);
      obstacles.splice(index, 1);
      score++;
    }
  }
  player.show();
  player.move();
}
