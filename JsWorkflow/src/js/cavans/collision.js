import CircleBuilder from './circle';
import { getDistance} from './utils';

/* Create And Append Canvas Element to Window */
const element = document.querySelector('body');
const canvas = document.createElement('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
element.appendChild(canvas);
canvas.style.backgroundColor = '#f1f1f1d4';
/* Set the Context */
const ctx = canvas.getContext('2d');

const mouseMovement = {
    x: undefined,
    y: undefined
};


/* Event Listener */
window.addEventListener('resize', function (event) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
})



window.addEventListener('mousemove', function (event) {
    mouseMovement.x = event.clientX;
    mouseMovement.y = event.clientY;
})


/* mutli-circle with out touching each other  */
let multiCircleArr = [];
let noOfCircle = 100;
for (let i = 0; i < noOfCircle; i++) {
    let radius = 20;
    let x = Math.random() * (innerWidth - (radius * 2)) + radius;
    let y = Math.random() * (innerHeight - (radius * 2)) + radius;
    let dx = Math.floor(Math.random() * 10) + 1;
    let dy = Math.floor(Math.random() * 10) + 1;
    let fillColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

    if (i !== 0) {
        for (let j = 0; j < multiCircleArr.length; j++) {
            
            if (getDistance(x, y ,multiCircleArr[j].x, multiCircleArr[j].y) - radius *2 < 0) {
                 x = Math.random() * (innerWidth - (radius * 2)) + radius;
                 y = Math.random() * (innerHeight - (radius * 2)) + radius;
                 j = -1;
            }
            
        }
    }

    multiCircleArr.push(new CircleBuilder(ctx)
        .setX(x)
        .setY(y)
        .setStrokeFlag(true)
        .setStrokeColor('black')
        .setFillColor(fillColor)
        .setFillFlag(true)
        .setRadius(radius)
        .setXvelocity(dx)
        .setYvelocity(dy)
        .build())
}


/* Animate */
function animate() {
    requestAnimationFrame(animate);
    /* Clear Canvas */
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    /* Collision Detection between Two Circle  */
    // if (getDistance(circleA.x, circleA.y ,circleB.x ,circleB.y) < circleA.radius+circleB.radius) {
    //     circleA.fillStyle = 'black';
    // }else{
    //     circleA.fillStyle = 'red';
    // }

    // circleA.draw();
    // circleB.x = mouseMovement.x;
    // circleB.y = mouseMovement.y;
    // circleB.draw();
    multiCircleArr.forEach(circle => circle.collision(multiCircleArr, mouseMovement));
    // multiCircleArr.forEach(circle => circle.draw());

}



export function init() {
    animate();
}