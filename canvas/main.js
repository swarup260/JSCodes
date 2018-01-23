const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
// Draw Rectangle
// ctx.fill(); //fill
// ctx.fillStyle = "yellow"; //Fill Style
// ctx.fillRect(100,200, 150,100);



//line and has style stroke

// ctx.beginPath();
// ctx.moveTo(200,300);
// ctx.lineTo(350,400);
// ctx.lineTo(400,530);
// ctx.stroke();

//Circle
// ctx.beginPath();
// ctx.arc(400,450,60,0,(Math.PI*2));
// ctx.strokeStyle = "red";
// ctx.stroke();


//Mutlipe Drawing using for loops
// for (var i = 0; i < 20; i++) {
//   //To center the cricle
//   const x = Math.random()* window.innerWidth;
//   const y = Math.random()* window.innerHeight;
//   ctx.beginPath();
//   ctx.arc(x,y,60,0,(Math.PI*2));
//   ctx.strokeStyle = "black 2px";
//   ctx.stroke();
//   ctx.fillStyle = "#f12";
//   ctx.fill();
// }



//Animate


var x = 200;
var dx = 3;
var y = 300;
var dy = 3;
var radius = 60
function animate() {
  requestAnimationFrame(animate); //Frame Create
    ctx.clearRect(0,0 ,innerWidth,innerHeight); //clear canvas

    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2,false);
    ctx.strokeStyle = "black";
    ctx.stroke();
    if(x + radius > innerWidth|| x - radius <0 ){
      dx = -dx;
    }/* BOUNCE EFFEXT IN THE DIRECTION X */
    if(y + radius > innerHeight|| y - radius <0 ){
      dy = -dy;
    }
    x += dx;
    y += dy;
}


animate();
