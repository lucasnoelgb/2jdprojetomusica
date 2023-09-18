var iw = 10000; //Image width
var ih = 643; //Image height
var sw = 968; //Canvas width
var sh = 643; //Canvas height
var cw = 50; //Character width
var ch = 50; //Character height
var speed = 15; //Character speed

var img = new Image(iw, ih);
const canvas = document.getElementById('canvas');
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
 ctx.fillStyle = 'tan';
 ctx.fillRect(pos.x , pos.y, cw, ch);
 
 //personagem


//carro

      // Corpo do carro 
      ctx.fillStyle = 'Gray';
      ctx.fillRect(9600, 270, 330, 50);
      ctx.fillStyle = 'LightGrey';
        ctx.fillRect(9670, 240, 105, 30);
        ctx.fillRect(9825, 240, 105, 30);

         // Desenhar o teto
        ctx.beginPath();
        ctx.moveTo(9670, 240);
        ctx.lineTo(9720, 200);
        ctx.lineTo(9890, 200);
        ctx.lineTo(9930, 240);
        ctx.closePath();
        ctx.fillStyle = 'Gray';
        ctx.fill();

    // Rodas do carro 
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(9700, 350, 30, 0, Math.PI * 2);
  ctx.arc(9900, 350, 30, 0, Math.PI * 2);
  ctx.fill();


  //npc 1(homem)
ctx.beginPath();
ctx.arc(950, 240, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'PapayaWhip';
ctx.fillRect(965, 260, 10, 45,);
ctx.fillRect(925, 260, 10, 45,);
ctx.fill();
ctx.closePath();

    
      ctx.fillStyle = 'Gray';
      ctx.fillRect(935, 260, 30, 65,);  
      ctx.closePath();

      ctx.fillStyle = 'DodgerBlue';
      ctx.fillRect(935, 325, 10, 50,);
      ctx.fillRect(955, 325, 10, 50,);
      ctx.fillRect(940, 325, 15, 8,);

      ctx.fillStyle = 'black';
      ctx.fillRect(930, 375, 15, 5,);
      ctx.fillRect(950, 375, 15, 5,);




        //npc 2(uma mulher)
      
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(1770,235,25,0,Math.PI* 1,true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'PeachPuff';
ctx.beginPath();

ctx.arc(1770, 240, 20, 0, 2 * Math.PI);
ctx.fillRect(1785, 260, 10, 45,);
ctx.fillRect(1745, 260, 10, 45,);
ctx.fillRect(1755, 325, 10, 50,);
ctx.fillRect(1775, 325, 10, 50,);
ctx.fillRect(1760, 325, 15, 8,);
ctx.fill();
ctx.closePath();





//cabelo
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(1770,230,15,0,Math.PI* 1,true);
ctx.fill();


    //roupa
      ctx.fillStyle = 'darkred';
      ctx.fillRect(1755, 260, 30, 65,);  
      ctx.closePath();

      

      ctx.fillStyle = 'black';
      ctx.fillRect(1750, 375, 15, 5,);
      ctx.fillRect(1770, 375, 15, 5,);

      ctx.beginPath();
      ctx.fillStyle = 'darkred';
      ctx.arc(1770,340,25,0,Math.PI* 1,true);
      ctx.fill();
      ctx.beginPath();


             //npc 3(homem)
ctx.beginPath();
ctx.arc(2570, 240, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'PeachPuff';
ctx.fillRect(2585, 260, 10, 45,);
ctx.fillRect(2545, 260, 10, 45,);
ctx.fillRect(2555, 325, 10, 50,);
ctx.fillRect(2575, 325, 10, 50,);
ctx.fillRect(2560, 325, 15, 8,);
ctx.fill();
ctx.closePath();

//chapeu
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc (2570,220,20,0,Math.PI* 1,true);
ctx.fillRect  (2545, 220, 50, 5,);
ctx.fill();


    
    ctx.fillStyle = 'white';
    ctx.fillRect(2555, 260, 30, 65,);  
    ctx.closePath();

    ctx.fillStyle = 'SlateGray';
    ctx.fillRect(2555, 325, 10, 50,);
    ctx.fillRect(2575, 325, 10, 50,);
    ctx.fillRect(2560, 325, 15, 8,);

    ctx.fillStyle = 'black';
    ctx.fillRect(2550, 375, 15, 5,);
    ctx.fillRect(2570, 375, 15, 5,);




// npc 4 ( mulher)      
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(3270,235,25,0,Math.PI* 1,true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'BurlyWood';
ctx.beginPath();

ctx.arc(3270, 240, 20, 0, 2 * Math.PI);
ctx.fillRect(3285, 260, 10, 45,);
ctx.fillRect(3245, 260, 10, 45,);
ctx.fillRect(3255, 325, 10, 50,);
ctx.fillRect(3275, 325, 10, 50,);
ctx.fillRect(3260, 325, 15, 8,);
ctx.fill();
ctx.closePath();





//cabelo
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(3270,230,15,0,Math.PI* 1,true);
ctx.fill();


    //roupa
      ctx.fillStyle = 'MediumVioletRed';
      ctx.fillRect(3255, 260, 30, 65,);  
      ctx.closePath();

      

      ctx.fillStyle = 'black';
      ctx.fillRect(3250, 375, 15, 5,);
      ctx.fillRect(3270, 375, 15, 5,);

      ctx.beginPath();
      ctx.fillStyle = 'MediumVioletRed';
      ctx.arc(3270,340,25,0,Math.PI* 1,true);
      ctx.fill();
      ctx.beginPath();



       // npc 5 (homem)
ctx.beginPath();
ctx.arc(4050, 240, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'Chocolate';
ctx.fillRect(4065, 260, 10, 45,);
ctx.fillRect(4025, 260, 10, 45,);
ctx.fill();
ctx.closePath();

    
      ctx.fillStyle = 'Snow';
      ctx.fillRect(4035, 260, 30, 65,);  
      ctx.closePath();

      ctx.fillStyle = 'DarkOliveGreen';
      ctx.fillRect(4035, 325, 10, 50,);
      ctx.fillRect(4055, 325, 10, 50,);
      ctx.fillRect(4040, 325, 15, 8,);

      ctx.fillStyle = 'Silver';
      ctx.fillRect(4030, 375, 15, 5,);
      ctx.fillRect(4050, 375, 15, 5,);



      // npc 6 (mulher)      
ctx.beginPath();
ctx.fillStyle = 'OrangeRed';
ctx.arc(4870,235,25,0,Math.PI* 1,true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'BurlyWood';
ctx.beginPath();

ctx.arc(4870, 240, 20, 0, 2 * Math.PI);
ctx.fillRect(4885, 260, 10, 45,);
ctx.fillRect(4845, 260, 10, 45,);
ctx.fillRect(4855, 325, 10, 50,);
ctx.fillRect(4875, 325, 10, 50,);
ctx.fillRect(4860, 325, 15, 8,);
ctx.fill();
ctx.closePath();





//franja
ctx.beginPath();
ctx.fillStyle = 'OrangeRed';
ctx.arc(4870,230,15,0,Math.PI* 1,true);
ctx.fill();


    //roupa
      ctx.fillStyle = 'black';
      ctx.fillRect(4855, 260, 30, 65,);  
      ctx.closePath();

      
//sapato
      ctx.fillStyle = 'black';
      ctx.fillRect(4850, 375, 15, 5,);
      ctx.fillRect(4870, 375, 15, 5,);

      ctx.beginPath();   
      ctx.arc(4870,340,25,0,Math.PI* 1,true);
      ctx.fill();
      ctx.beginPath();


      //npc 7 (homem)
ctx.beginPath();
ctx.arc(5670, 240, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'PeachPuff';
ctx.fillRect(5685, 260, 10, 45,);
ctx.fillRect(5645, 260, 10, 45,);
ctx.fillRect(5655, 325, 10, 50,);
ctx.fillRect(5675, 325, 10, 50,);
ctx.fillRect(5660, 325, 15, 8,);
ctx.fill();
ctx.closePath();

//chapeu
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(5670,220,20,0,Math.PI* 1,true);
ctx.fillRect(5640, 220, 50, 5,);
ctx.fill();


    
    ctx.fillStyle = 'Silver';
    ctx.fillRect(5655, 260, 30, 65,);  
    ctx.closePath();

    ctx.fillStyle = 'black';
    ctx.fillRect(5655, 325, 10, 50,);
    ctx.fillRect(5675, 325, 10, 50,);
    ctx.fillRect(5660, 325, 15, 8,);

    ctx.fillStyle = 'black';
    ctx.fillRect(5650, 375, 15, 5,);
    ctx.fillRect(5670, 375, 15, 5,);



          // npc 8(mulher)      
ctx.beginPath();
ctx.fillStyle = 'SaddleBrown';
ctx.arc(6470,235,25,0,Math.PI* 1,true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'BurlyWood';
ctx.beginPath();

ctx.arc(6470, 240, 20, 0, 2 * Math.PI);
ctx.fillRect(6485, 260, 10, 45,);
ctx.fillRect(6445, 260, 10, 45,);
ctx.fillRect(6455, 325, 10, 50,);
ctx.fillRect(6475, 325, 10, 50,);
ctx.fillRect(6460, 325, 15, 8,);
ctx.fill();
ctx.closePath();





//franja
ctx.beginPath();
ctx.fillStyle = 'SaddleBrown';
ctx.arc(6470,230,15,0,Math.PI* 1,true);
ctx.fill();


    //roupa
      ctx.fillStyle = 'Gold';
      ctx.fillRect(6455, 260, 30, 65,);  
      ctx.closePath();

      
//sapato
      ctx.fillStyle = 'black';
      ctx.fillRect(6450, 375, 15, 5,);
      ctx.fillRect(6470, 375, 15, 5,);
      ctx.fillStyle = 'gold';

      ctx.beginPath();   
      ctx.arc(6470,340,25,0,Math.PI* 1,true);
      ctx.fill();
      ctx.beginPath();



                   //npc 9(homem)
ctx.beginPath();
ctx.arc(7470, 240, 20, 0, 2 * Math.PI);
ctx.fillStyle = 'SandyBrown';
ctx.fillRect(7485, 260, 10, 45,);
ctx.fillRect(7445, 260, 10, 45,);
ctx.fillRect(7455, 325, 10, 50,);
ctx.fillRect(7475, 325, 10, 50,);
ctx.fillRect(7460, 325, 15, 8,);
ctx.fill();
ctx.closePath();

//chapeu
ctx.beginPath();
ctx.arc (7470,220,20,0,Math.PI* 1,true);
ctx.fillStyle = 'DarkBlue';

ctx.fillRect  (7445, 220, 50, 5,);
ctx.fill();


    
    ctx.fillStyle = 'white';
    ctx.fillRect(7455, 260, 30, 65,);  
    ctx.closePath();

    ctx.fillStyle = 'MediumBlue';
    ctx.fillRect(7455, 325, 10, 50,);
    ctx.fillRect(7475, 325, 10, 50,);
    ctx.fillRect(7460, 325, 15, 8,);

    ctx.fillStyle = 'black';
    ctx.fillRect(7450, 375, 15, 5,);
    ctx.fillRect(7470, 375, 15, 5,)

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