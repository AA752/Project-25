class paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.1,
            friction:0.5,
            density:4
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body);

    }

    display(){
    
        var paperPos = this.body.position;
        push()
        translate(paperPos.x, paperPos.y);
        rectMode(CENTER)
        fill(255,0,255)
        imageMode(CENTER);
        image(this.image, 0, -10,this.r+40, this.r+40)
        pop()
    }

}