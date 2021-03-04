document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext('2d');
  ctx.fillStyle = "cyan";
  ctx.fillRect(2, 2, 496, 496);

  ctx.beginPath();
  ctx.arc(100, 333, 30, 0, 2*3.1415);
  ctx.strokeStyle = "purple";
  ctx.lineWidth = 20;
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();

});
