class Rect{
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.8,
            'friction' : 1.0,

        }
        this.body = Bodies.rectangle(x,y,width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display(){
        this.body.shapeColor= color("red");
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
    }
}