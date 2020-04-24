import CircleBuilder from './circle';


/* Create And Append Canvas Element to Window */
const element = document.querySelector('body');
const canvas = document.createElement('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
element.appendChild(canvas);
canvas.style.backgroundColor = '#f1f1f1d4';
/* Set the Context */
const ctx = canvas.getContext('2d');


/* Canvas Resize */
window.addEventListener('resize',function (event) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
})

const mouseMovement = {
    x : undefined,
    y : undefined
};

window.addEventListener('mousemove',function (event) {
    mouseMovement.x = event.clientX;
    mouseMovement.y = event.clientY;
})


const getDistance = (x1,y1,x2,y2) => {
    let distanceX = x1 - x2;
    let distanceY = y1 - y2;
    return Math.sqrt(Math.pow(distanceX,2) + Math.pow(distanceY,2));
}

/* Multiple Circle */
/* let circleArr = [];
multiCircles(circleArr,100); */

/* Collision */
const circleA = new CircleBuilder(ctx)
            .setX(innerWidth/2)
            .setY(innerHeight/2)
            .setStrokeFlag(true)
            .setStrokeColor('black')
            .setFillColor('red')
            .setFillFlag(true)
            .setRadius(30)
            .setXvelocity(10)
            .setYvelocity(1)
            .build();

let coOrdinates = [];

let x = circleA.x ,y = circleA.y;


/* Animate */
function animate() {
    requestAnimationFrame(animate);
    /* Clear Canvas */
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    circleA.animate(mouseMovement);
    
    ctx.beginPath();
    ctx.moveTo(x,y);
    coOrdinates.forEach( point => ctx.lineTo( point.x , point.y))
    ctx.stroke()
    
    if (circleA.x > innerWidth - circleA.radius || circleA.x <  circleA.radius ) {
        x = circleA.x;
        // ctx.moveTo(x,y);
        
    }
    if (circleA.y > innerHeight - circleA.radius || circleA.y <  circleA.radius ) {
        y = circleA.y
    }
    
    coOrdinates.push({x :circleA.x , y : circleA.y });
    
    

}



export function init() {
    animate();
}