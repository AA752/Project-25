class Ground{
    //to create similar objects to repeat the code
      constructor(x,y,width,height){
          var ground_options={ // What is "ground_options" ?? Just a name, a different name for "options" below.
              isStatic : true
            }
          
            this.x = x;
            this.y = y;    
            this.width = width;
            this.height = height;    
            this.ground = Bodies.rectangle(this.x,this.y,this.width,this.height,ground_options)
            World.add(world,this.ground);
      }
      display(){
          noStroke();
          fill(188,67,67);
          rectMode(CENTER);
          rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
      }
    }