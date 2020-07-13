class Plinko {
    constructor(x, y, radius) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(26,242,91);
        ellipseMode(RADIUS);
        circle(0,0,this.radius);
        pop();
    }

};