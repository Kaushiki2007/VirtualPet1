class Food{
    constructor(x,y){
        var options = {
            'restitution':0.9,
            'friction':0.7,
            'density':0.5
    }
    this.body = Bodies.rectangle(x, y, options);
    this.body.x = this.body.position.x;
    this.body.y = this.body.position.y;
    World.add(this.body);
}
getCount(){
    var food = database.ref('food');
    foodRef.on("value",(data)=>{
    food = data.val();
    })
}
updateCount(food){
    database.ref('/').update({  
    });
  }
}