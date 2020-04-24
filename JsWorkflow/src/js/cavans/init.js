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

function multiCircles(circleArr,noOfCircle) {
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
            .setRadius(100)
            .setXvelocity(1)
            .setYvelocity(1)
            .build();

const cricleB = new CircleBuilder(ctx)
            .setStrokeFlag(true)
            .setStrokeColor('black')
            .setFillColor('orange')
            .setFillFlag(true)
            .setRadius(50)
            .setXvelocity(1)
            .setYvelocity(1)
            .build();






/* Animate */
function animate() {
    requestAnimationFrame(animate);
    /* Clear Canvas */
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    // circleArr.forEach(circle => circle.gravity(9.8,0.9))
    // circleArr.forEach(circle => circle.animate(mouseMovement))
    /* Collision */
    if (getDistance(circleA.x ,circleA.y ,cricleB.x,cricleB.y) < circleA.radius + cricleB.radius) {
        circleA.fillStyle = "";
    }else{
        circleA.fillStyle = "black";
    }
    circleA.draw();
    cricleB.x = mouseMovement.x;
    cricleB.y = mouseMovement.y;
    cricleB.draw();

    


}



export function init() {
    animate();
}