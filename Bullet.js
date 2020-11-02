class Bullet{
    constructor(x,y){
        var options = {
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,15,15,options);
        this.width = 15;
        this.height = 15;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("RED");
        rect(0,0,this.width,this.height);
        pop();
    }
}