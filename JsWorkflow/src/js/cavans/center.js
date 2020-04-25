import {Board } from './gameBreak/Board';
import CircleBuilder from './circle';

/* Create And Append Canvas Element to Window */
const element = document.querySelector('body');
const canvas = document.createElement('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
element.appendChild(canvas);
canvas.style.backgroundColor = '#f1f1f1d4';
const ctx = canvas.getContext('2d');

/* Set the Context */

let key;
window.addEventListener('keydown',function (event) {
    key = event.key;
})

const board = new Board(ctx, 0, innerHeight - 20, 150, 10,5,1);

const ball = new CircleBuilder(ctx)
    .setX(innerWidth/2)
    .setY(innerHeight/2)
    .setStrokeFlag(true)
    .setStrokeColor('black')
    .setFillColor('orange')
    .setFillFlag(true)
    .setRadius(20)
    .setXvelocity(5)
    .setYvelocity(5)
    .build();


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);        
    board.interactive(key);
    // ball.collision([board]);
}

export function init() {
    animate();
}