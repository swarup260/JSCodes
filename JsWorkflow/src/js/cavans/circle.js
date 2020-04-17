class Circle {
    constructor(context, x, y, radius, startAngle, endAngle, clockwise, fillFlag, fillStyle, strokeFlag, strokeStyle) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.clockwise = clockwise;
        this.fillFlag = fillFlag;
        this.fillStyle = fillStyle;
        this.strokeFlag = strokeFlag;
        this.strokeStyle = strokeStyle;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.clockwise);
        if (this.fillFlag) {
            this.context.fillStyle = this.fillStyle;
            this.context.fill();
        }
        if (this.strokeFlag) {
            this.context.strokeStyle = this.strokeStyle;
            this.context.stroke();
        }
    }

    animate(xVelocity, yVelocity){
        this.x += xVelocity;
        this.y+= yVelocity;
    }
}



export default class CircleBuilder {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = innerWidth / 2;
        this.y = innerHeight / 2;
        this.radius = 60;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.clockwise = false;
        this.fillFlag = false;
        this.fillStyle = 'red';
        this.strokeFlag = false;
        this.strokeStyle = 'black';
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

    setStartAngle(startAngle) {
        this.startAngle = startAngle;
        return this;
    }
    setEndAngle(endAngle) {
        this.endAngle = endAngle;
        return this;
    }

    setClockwise(clockwise) {
        this.clockwise = clockwise;
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

    build() {
        return new Circle(
            this.ctx,
            this.x,
            this.y,
            this.radius,
            this.startAngle,
            this.endAngle,
            this.clockwise,
            this.fillFlag,
            this.fillStyle,
            this.strokeFlag,
            this.strokeStyle
        );
    }

}