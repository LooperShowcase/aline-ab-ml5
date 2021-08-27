class Player {
  constructor() {
    this.size = 130;
    this.x = 70;
    this.y = height - 50;
    this.velocityY = 0;
    this.gravity = 1;
  }
  show() {
    fill("#95d5b2");
    image(playerImg, this.x, this.y, this.size, this.size);
  }
  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -47;
    }
  }
  move() {
    this.y += this.velocityY; // this.y = this.y + this.velocityY
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 50,
      this.size - 50,

      currentObs.x,
      currentObs.y,
      currentObs.size - 30,
      currentObs.size - 30
    );
    return isColliding;
  }
}
