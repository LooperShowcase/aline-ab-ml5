class Obstacle {
  constructor() {
    this.size = 100;
    this.x = width;
    this.y = height - this.size;
    this.option = random(1);
  }
  show() {
    if (this.option > 0.5) {
      image(obsImg, this.x, this.y, this.size, this.size);
    } else {
      image(obsImg2, this.x, this.y, this.size, this.size);
    }
  }
  move() {
    this.x -= 9; //this.x=this.x-6
  }
}
