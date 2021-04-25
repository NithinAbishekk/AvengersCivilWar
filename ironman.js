class Ironman {
  constructor(x,y,r)
	{
		var options = { 
			density: 1, 
			frictionAir: 1
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("images/ironman.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var ironPos=this.body.position;		
			push()
			translate(ironPos.x, ironPos.y-100);
			//rectMode(CENTER);
		    //rect(0,0,this.r ,this.r);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r + 350, this.r)
			pop()
			
	}
}
