class Circle {
    constructor(context, x, y, radius, dx,dy ,fillFlag, fillStyle, strokeFlag, strokeStyle) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.fillFlag = fillFlag;
        this.fillStyle = fillStyle;
        this.strokeFlag = strokeFlag;
        this.strokeStyle = strokeStyle;
        this.dx = dx;
        this.dy = dy;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        if (this.fillFlag) {
            this.context.fillStyle = this.fillStyle;
            this.context.fill();
        }
        if (this.strokeFlag) {
            console.log("asd");
            
            this.context.strokeStyle = this.strokeStyle;
            this.context.stroke();
        }
    }

    animate(){
        if ((this.x + this.radius) > innerWidth || (this.x - this.radius) < 0 ) {
            this.dx = -this.dx;
        }
        if ((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0 ) {
            this.dy = -this.dy;
        }


        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}



export default class CircleBuilder {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = innerWidth / 2;
        this.y = innerHeight / 2;
        this.radius = 60;
        this.fillFlag = false;
        this.fillStyle = 'red';
        this.strokeFlag = true;
        this.strokeStyle = 'black';
        this.dx = 0;
        this.dy = 0;
    }

    setX(x) {
        this.x = x;
        return this;
    }
    setY(y) {
        this.y = y;
        return this;
    }

    setRadius(radius) {
        this.radius = radius;
        return this;
    }


    setFillFlag(fillFlag) {
        this.fillFlag = fillFlag;
        return this;
    }

    setFillColor(color) {
        this.fillStyle = color;
        return this;
    }

    setStrokeFlag(strokeFlag) {
        this.strokeFlag = strokeFlag;
        return this;
    }
    setStrokeColor(color) {
        this.strokeStyle = color;
        return this;
    }

    setXvelocity(dx){
        this.dx = dx;
        return this;
    }
    setYvelocity(dy){
        this.dy = dy;
        return this;
    }

    build() {
        return new Circle(
            this.ctx,
            this.x,
            this.y,
            this.radius,
            this.dx,
            this.dy,
            this.fillFlag,
            this.fillStyle,
            this.strokeFlag,
            this.strokeStyle
        );
    }

}