import { getDistance, rotate, resolveCollision } from './utils';

class Circle {
    constructor(context, x, y, radius, dx, dy, fillFlag, fillStyle, strokeFlag, strokeStyle, mass) {
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
        this.minRadius = 0;
        this.maxRadius = this.radius * 2;
        /* Collision */
        this.mass = mass;
        /* glow effect */
        this.alpha = 0.02;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.context.save();
        this.context.globalAlpha = this.alpha;
        if (this.fillFlag) {
            this.context.fillStyle = this.fillStyle;
            this.context.fill();
        }
        this.context.restore();
        if (this.strokeFlag) {
            this.context.strokeStyle = this.strokeStyle;
            this.context.stroke();
        }
    }

    collision(circles, mouseMovement) {

        for (let index = 0; index < circles.length; index++) {
            if (getDistance(this.x, this.y, circles[index].x, circles[index].y) - this.radius * 2 < 0) {
                resolveCollision(this, circles[index])

            }

        }

        if ((this.x + this.radius) > innerWidth || (this.x - this.radius) < 0) {
            this.dx = -this.dx;
        }
        if ((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0) {
            this.dy = -this.dy;
        }

        /* interactive */
        if (getDistance(this.x, this.y, mouseMovement.x, mouseMovement.y) < 100) {
            
            this.alpha += 0.02;
        }
        else if (this.alpha > 0) {
            this.alpha -= 0.02;
            this.alpha = Math.max(0, this.alpha);
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }


    animate(mouseMovement) {
        if ((this.x + this.radius) > innerWidth || (this.x - this.radius) < 0) {
            this.dx = -this.dx;
        }
        if ((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0) {
            this.dy = -this.dy;
        }


        this.x += this.dx;
        this.y += this.dy;


        // this.interactive(mouseMovement);
        /* interactve */
        this.interactive(mouseMovement);

        this.draw();
    }

    interactive(mouseMovement) {
        if (mouseMovement.x - this.x < 50 && mouseMovement.x - this.x > -50 &&
            mouseMovement.y - this.y < 50 && mouseMovement.y - this.y > -50
            && this.radius < this.maxRadius) {
            this.minRadius = this.radius;
            this.radius += 1;
        }
        else if (this.radius > this.maxRadius) {
            this.radius -= 1;
        }
    }

    gravity(gravityVelocity, friction) {
        if ((this.x + this.radius) > innerWidth || (this.x - this.radius) < 0) {
            this.dx = -this.dx;
        }
        if ((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0) {
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravityVelocity;
        }
        this.y += this.dy;
        this.x += this.dx;

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
        this.mass = 1;
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

    setXvelocity(dx) {
        this.dx = dx;
        return this;
    }
    setYvelocity(dy) {
        this.dy = dy;
        return this;
    }

    setMass(mass) {
        this.mass = mass;
        return this;
    }
    getMass() {
        return this.mass;
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
            this.strokeStyle,
            this.mass
        );
    }

}