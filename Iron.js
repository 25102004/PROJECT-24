class Iron {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':30,
      };
      this.body = Bodies.rectangle(x, y, 100, height, options);
      this.width = 100;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
  
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("red");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  