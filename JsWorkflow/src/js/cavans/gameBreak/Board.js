export class Board {
    constructor(context, x, y, width, height, dx, dy) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dx = dx;
        this.dy = dy;
        this.mass = 1;
    }


    draw() {
        this.context.beginPath();
        this.context.fillStyle = 'red';
        this.context.fillRect(this.x,this.y,this.width,this.height);
        this.context.stroke();
    }

    interactive(code){
        
        if (code == 'ArrowRight' && (this.x+ this.width) < innerWidth) {
            this.x += this.dx;
        } else if (code == 'ArrowLeft') {
            this.x -= this.dx;
        }

        
        this.draw();
    }
}