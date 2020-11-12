class Box 
{
    constructor(x,y)
    {
        
        this.x=x;
        this.y=y;
        this.width=200;
        this.height=100;
        this.thickness=20;
        this.angle=0;
        this.bottom=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
        World.add(world,this.bottom);

        this.left=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
        Matter.Body.setAngle(this.left,this.angle)
        World.add(world,this.left);

        this.right=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
        Matter.Body.setAngle(this.right,-1*this.angle)
        World.add(world,this.right);
    }
    display()
    {
        var bottompos=this.bottom.position;
        var leftpos=this.left.position;
        var rightpos=this.right.position;

        push()
        translate(leftpos.x, leftpos.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        strokeWeight(3);
        fill(255,0,0)
        rotate(this.angle)
        rect(0,0,this.thickness,this.height);
        pop() 
        
        push()
        translate(rightpos.x, rightpos.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        strokeWeight(3);
        fill(255,0,0)
        rotate(-1*this.angle)
        rect(0,0,this.thickness,this.height);
        pop() 

        push()
        translate(bottompos.x, bottompos.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        strokeWeight(3);
        fill(255,0,0)
        rect(0,0,this.width,this.thickness);
        pop() 
    }
}