import './scss/style.scss';
// import {init} from '../src/js/cavans/init'
import CircleBuilder from './js/cavans/circle';



// init();


const element = document.querySelector('body');
const canvas = document.createElement('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
element.appendChild(canvas);
canvas.style.backgroundColor = '#f1f1f1d4';
const ctx = canvas.getContext('2d');
// const circle = new CircleBuilder(ctx)
//     .setX(100)
//     .setY(200)
//     .setXvelocity(10)
//     .setYvelocity(1)
//     .build();

let circleArr = [];
for (let index = 0; index < 100; index++) {
    let radius = Math.random() * 50;
    let x = Math.random() * (innerWidth - (radius *2)) + radius;
    let y = Math.random() * (innerHeight - (radius * 2)) + radius;
    let dx = Math.random() * 10;
    let dy = Math.random() * 10;
    let fillColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
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

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    circleArr.forEach( circle => circle.animate())
}

animate();