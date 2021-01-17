class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness : 0.5,
            length:100
        }
       this.pointB = pointB
       this.launcher = Constraint.create(options);
       World.add(world,this.launcher);

    }
   fly(){
       this.launcher.bodyA = null;
   } 
   attached(body){
       this.launcher.bodyA = body;
   }
   display(){
       if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3);
        line(pointB.x,pointB.y,pointA.x,pointA.y);  
        pop(); 
       }
   }
}