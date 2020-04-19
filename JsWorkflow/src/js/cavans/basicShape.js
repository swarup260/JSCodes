/* Rectangle*/

function drawRectangle(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(300, 500, 200, 200);
    ctx.stroke();
}

/* Line */

function drawLine(ctx) {
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(200, 100);
    ctx.stroke();
}


/* Circle */
function drawCricle(ctx) {
    ctx.beginPath();
    ctx.arc(innerWidth / 2, innerHeight / 2, 50, 0, Math.PI * 2, false);
    ctx.strokeStyle = "red";
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
}

export default {
    drawRectangle,
    drawLine,
    drawCricle
}