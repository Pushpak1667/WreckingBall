class Polygon{

constructor(x,y,w,h,a){
  var options = {
  //  isStatic : false,
  //  restitution : 0.3,
   frictionAir : 0.005,
   density : 1  
    }

  this.body = Bodies.rectangle(x,y,w,h,options);
 this.width = w;
 this.height = h;
  // this.image = loadImage("polygon.png")
  World.add(world, this.body);

}
    display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        // imageMode(CENTER);
        ellipse(0,0,this.width,this.height);
        pop();
    }

}