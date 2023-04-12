var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");

// Dibuja el fondo del paisaje
ctx.fillStyle = "#D3E6F5";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Dibuja la nieve
ctx.fillStyle = "#FFFFFF";
for (var i = 0; i < 200; i++) {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var tamaño = Math.random() * 5 + 1;
  ctx.beginPath();
  ctx.arc(x, y, tamaño, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}