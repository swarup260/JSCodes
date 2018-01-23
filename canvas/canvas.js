const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');


function Circle(x,y,dx,dy,radius){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI *2);
    ctx.strokeStyle = "red";
    ctx.stroke();

  }
  this.update =function(){
    if(this.x + this.radius > innerWidth || this.x - this.radius  < 0){
      this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius  < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

var cArray = [];

for (var i = 0; i < 100; i++) {
  const x = Math.random()* (window.innerWidth - 2*50) -50;
  const y = Math.random()* (window.innerHeight -2*50) -50;
  const dx = Math.random()*10;
  const dy = Math.random()*10;
  cArray.push(new Circle(x,y,dx,dy,50));
}

console.log(cArray);

// var c1  = new Circle(100,200,2,2,50);
// c1.update();


function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,innerWidth,innerHeight);
  for (var i = 0; i < cArray.length; i++) {
    cArray[i].update();
  }
}

animate();
