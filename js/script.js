var iw = 2000; //Image width
var ih = 643; //Image height
var sw = 968; //Canvas width
var sh = 643; //Canvas height
var cw = 50; //Character width
var ch = 50; //Character height
var speed = 10; //Character speed

var img = new Image(iw, ih);
img.src = "http://i.imgur.com/QnBufq4.jpg";
var ctx = canvas.getContext("2d");
var pos = {x: 0, y: ih - 140};
var camera = {x: 0, y: 0}

function draw() {
 //Faz a esquerda da câmera começar meia tela antes do personagem, mas só se tiver imagem suficiente pra isso
 camera.x = Math.min(iw - sw, Math.max(0,pos.x - sw/2));
 //Reseta as transformações do canvas
 ctx.setTransform(1,0,0,1,0,0);
 //Limpa o canvas
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 //Desloca o mundo inteiro, simulando uma câmera
 ctx.translate(-camera.x, -camera.y);
 //Desenha o fundo
 ctx.drawImage(img, 0, 0, sw, sh, 0, 0, iw, ih);
 //Desenha o personagem
 ctx.fillRect(pos.x, pos.y, cw, ch);

 window.requestAnimationFrame(draw);
 //sol 
 ctx.fillStyle = 'yellow';
  ctx.arc(400,80,50,0,Math.PI* 2);
  ctx.fill();
}

document.addEventListener('keydown', function(e) {
 var key = e.which || e.key || e.keyCode;
 switch(key) {
  case 37: pos.x-=speed; break;
  case 39: pos.x+=speed; break;
 }
 pos.x = Math.max(0, Math.min(iw - cw,pos.x));
});

window.requestAnimationFrame(draw);