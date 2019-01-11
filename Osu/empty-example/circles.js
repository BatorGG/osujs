function Circles() {
  this.x = random(width-50);
  this.y = random(height-50);


  this.show = function() {
    outerCircleSize -= speed/100;
    ellipseMode(CENTER);

    strokeWeight(2);
    stroke(255);
    noFill()
    
    ellipse(circle.x, circle.y, outerCircleSize);
    console.log(outerCircleSize);

    fill(255);
    ellipse(this.x, this.y, circleSize);

    if (outerCircleSize < -25) {
      gameRunning = false;
      this.update();
    }

  }

  this.update = function() {
    outerCircleSize = outerCircle
    this.x = random(width-50);
    this.y = random(height-50);

  }
}

