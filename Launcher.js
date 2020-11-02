class Launcher{
    constructor(bodyA,pointB){
        var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 5  
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    display(){
      var posA = this.launcher.bodyA.position;
      var posB = this.pointB;
      push();
      stroke("green");
      line(posA.x, posA.y, posB.x, posB.y);
      pop();
    }
}