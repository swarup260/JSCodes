const canvas =  document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function init(){
    window.addEventListener('resize',()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
    });
    
}

init();


//Circle Object
function Circle (x,y,radius,dx,dy){
    this.x = x;
    this.y=y;
    this.radius = radius;
    this.dx= dx || 2;
    this.dy = dy||2;
    this.draw = ()=>{
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius,0,Math.PI*2);
        ctx.fill();
    };
    this.update =()=>{
        
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }/* BOUNCE EFFECT IN THE DIRECTION */
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();

    };
    this.gravity = () => {
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        var g = 0.5;
        this.y += this.dy*g;
        this.draw();
    }
        

    
}

//Instance of Circle 
let c = new Circle(200,300,50,2,2);
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    c.gravity();
}


animate();