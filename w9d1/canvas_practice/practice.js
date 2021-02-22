document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext('2d');
  ctx.fillStyle = "cyan";
  ctx.fillRect(2, 2, 496, 496);

  ctx.beginPath();
  ctx.arc(250, 250, 175, 0, 2*3.1415);
  ctx.strokeStyle = "purple";
  ctx.lineWidth = 7;
  ctx.stroke();
  ctx.fillStyle = "black";
  ctx.fill();

});
