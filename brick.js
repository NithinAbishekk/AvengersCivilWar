class Brick {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':20,
    }
    this.body = Bodies.rectangle(x, y, 70, 70, options);
    this.width = 70;
    this.height = 70;
    this.image = loadImage("images/brick.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //rectMode(CENTER);
    //rect(0,0,this.width,this.height);
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height+50);
    pop();
  }
}