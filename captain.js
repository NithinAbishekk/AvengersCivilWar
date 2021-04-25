class Captain {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("images/Captain-America.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var capPos=this.body.position;		
			push()
			translate(capPos.x, capPos.y-100);
			//rectMode(CENTER);
			//rect(0,0,this.r,this.r);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+50, this.r)
			pop()
			
	}
}
