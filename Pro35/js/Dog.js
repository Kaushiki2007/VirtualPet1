class Dog{
  constructor(x,y,width,height){
    var options = {
      'restitution':0.6,
      'friction':0.9,
      'density':0.8
  }
        this.dog = Bodies.rectangle(x, y, width, height, options);
        this.dog = Constraint.create(options);
        this.width = width;
        this.height = height;
        this.body.x = this.body.position.x;
        this.body.y = this.body.position.y;
        this.dog1 = loadImage("images/dogImg.png");
        this.dog2 = loadImage("images/dogImg1.png");
        World.add(world, this.dog);
  }
  display(){
   image(this.dog1,100,100);
   image(this.dog2,150,200);
   

   if(this.body.x > 250){
    image(this.dog2, 250,250)
   }
   else{
    image(this.dog1.display(), 100,100)
   }
  } 

}


