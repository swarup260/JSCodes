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

var gravity = 1;
var friction = 0.9;
//Circle Object
function Circle (x,y,radius,dy){
    this.x = x;
    this.y=y;
    this.radius = radius;
    this.dy = dy||2;
    this.draw = ()=>{
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius,0,Math.PI*2);
        ctx.fill();
    };
    this.gravity = () => {
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy*friction;
        }else{
            this.dy += gravity;
        }
        this.y += this.dy;
        this.draw();
    }
        

    
}

let cArray = [];

for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.random() * window.innerWidth ; //innerWidth
    var y = Math.random() * window.innerHeight -radius;
    var dy = Math.random() * 10;
    cArray.push(new Circle(x, y, radius,dy));
}

console.log(cArray);
//Instance of Circle 
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for (let i = 0; i < cArray.length; i++) {
        cArray[i].gravity();
        
    }
    // c.gravity();
}


animate();