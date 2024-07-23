const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

document.addEventListener("keydown", function (event) {
  // Handle the event here
  if (event.key == "d" || event.key == "ArrowRight") {
    console.log("right");
    player.x += 5;
  }
  if (event.key == "a" || event.key == "ArrowLeft") {
    console.log("left");
    player.x -= 5;
  }
});

function Snake() {
  this.color = "blue";
  this.size = 50;
  this.length = 1;
  this.x = 20;
  this.y = 30;

  this.draw = () => {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.stroke();
  };
}
let player = new Snake();

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.draw();
}
animate();
