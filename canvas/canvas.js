const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

//Interaction

var mouse = function(){ //mouse X and Y
  this.x = undefined;
  this.y = undefined;
}

window.addEventListener('mousemove',function(e){
  mouse.x = e.x;
  mouse.y = e.x;
  console.log( mouse.x + " "+ mouse.y);
});








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
    ctx.fill();

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

    //Interaction of circle and mouse
    if(mouse.x - this.x < 50 && mouse.x - this.x > -50
    && mouse.y - this.y < 50 && mouse.y - this.y > -50){
      /* check the distance between mouse position of x and  the x position
      of circle if its less than 50 or more then 50 then increase the size of
      radius  and also check for Y */
      this.radius += 1;
    }else if(this.radius > 20){
      this.radius -= 1;
    }



    this.draw();
  }
}

var cArray = [];

for (var i = 0; i < 300; i++) {
  const radius = 50;
  const x = Math.random()* (window.innerWidth - 2*radius) +radius; //innerWidth
  const y = Math.random()* (window.innerHeight -2*radius) + radius;
  const dx = Math.random()*10;
  const dy = Math.random()*10;
  cArray.push(new Circle(x,y,dx,dy,radius));
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
