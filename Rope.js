class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.constraint = this.constraint
        this.offsetX =offsetX;
        this.offsetY = offsetY;
        
        var options = {
            
            bodyA : bodyA,
            bodyB : bodyB,
            
            pointB:{x:this.offsetX , y:offsetY}
        }   
        
     this.rope = Matter.Constraint.create(options);
       World.add(world,this.rope)

    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        
        
        
        var anchor1X = pointA.x;
        var anchor1Y = pointA.y;

        var anchor2X = pointB.x + this.offsetX;
        var anchor2Y = pointB.y + this.offsetY;
        strokeWeight(4);
        line(anchor1X,anchor1Y,anchor2X,anchor2Y);
    }
}