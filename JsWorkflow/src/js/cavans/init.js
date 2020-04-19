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
for (let index = 0; index < 2; index++) {
    let radius = Math.random() * 50;
    let x = Math.random() * (innerWidth - (radius * 2)) + radius;
    let y = Math.random() * (innerHeight - (radius * 2)) + radius;
    let dx = Math.random() * 10;
    let dy = Math.random() * 10;
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

element.addEventListener('mousemove', function(event){
    console.log(event.clientX, event.clientY);
})

/* Animate */
function animate() {
    requestAnimationFrame(animate);
    /* Clear Canvas */
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    circleArr.forEach( circle => circle.animate())
}


export function init() {
    animate();
}