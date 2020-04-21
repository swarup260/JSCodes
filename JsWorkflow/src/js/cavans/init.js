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

/* Multiple Circle */
let circleArr = [];
let noOfCircle = 50;
for (let index = 0; index < noOfCircle; index++) {
    let radius = Math.random() * 50;
    let x = Math.random() * (innerWidth - (radius * 2)) + radius;
    let y = Math.random() * (innerHeight - (radius * 2)) + radius;
    let dx = Math.floor(Math.random() * 10) + 1;  
    let dy = Math.floor(Math.random() * 10) + 1;
    let fillColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    circleArr.push(new CircleBuilder(ctx)
        .setX(x)
        .setY(y)
        .setStrokeFlag(true)
        .setStrokeColor('black')
        .setFillColor(fillColor)
        .setFillFlag(true)
        .setRadius(radius)
        .setXvelocity(dx)
        .setYvelocity(dy)
        .build());
}

/* Canvas Resize */
window.addEventListener('resize',function (event) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
})

const mouseMovement = {
    x : undefined,
    y : undefined
};


window.addEventListener('mouseover',function (event) {
    mouseMovement.x = event.clientX;
    mouseMovement.y = event.clientY;
})
/* Animate */
function animate() {
    requestAnimationFrame(animate);
    /* Clear Canvas */
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    circleArr.forEach(circle => circle.gravity(9.8,0.9))
}



export function init() {
    animate();
}