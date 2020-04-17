import CircleBuilder from './circle';


function setupCanvas(element = document.querySelector('body')) {
    /* Create and append the canvas element to the document*/
    const canvas = document.createElement('canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    element.appendChild(canvas);
    /* Canvas Content  */
    const ctx = canvas.getContext('2d')
    return {
        canvas,
        ctx
    };
}

function drawRectangle(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(300, 500, 200, 200);
    ctx.stroke();
}

function drawLine(ctx) {
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function drawCricle(ctx) {
    ctx.beginPath();
    ctx.arc(innerWidth / 2, innerHeight / 2, 50, 0, Math.PI * 2, false);
    ctx.strokeStyle = "red";
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
}

/* Animate */
function animate(circleArr){
    console.log(circleArr);
    
    requestAnimationFrame(animate);
}


export function init() {
    const {
        canvas,
        ctx
    } = setupCanvas();
    /* Setting up the canvas */
    canvas.style.backgroundColor = '#f1f1f1d4';
    /* Rectangle */
    // drawRectangle(ctx);
    /* Line  */
    // drawLine(ctx);
    /* Circle */
    // drawCricle(ctx);
    let circleArr = [];
    for (let index = 0; index < 1; index++) {
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        // let fillColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        let fillColor = "black";
        circleArr.push(new CircleBuilder(ctx)
        .setX(x)
        .setY(y)
        .setStrokeFlag(true)
        .setStrokeColor(fillColor)
        .setRadius(50)
        .build());
    }
    circleArr.forEach(circle => {
        circle.draw()
        circle.animate(10,10);
    })

    animate(circleArr);

}