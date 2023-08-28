const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



ctx.beginPath();
ctx.arc(700, 320, 90, 0, Math.PI * 2);
ctx.fillStyle='red';
ctx.fill();

ctx.beginPath();
ctx.arc(700, 320, 60, 0, Math.PI * 2);
ctx.fillStyle='black';
ctx.fill();



ctx.beginPath();
ctx.arc(1100, 320, 90, 0, Math.PI * 2);
ctx.fillStyle='red';
ctx.fill();

ctx.beginPath();
ctx.arc(1100, 320, 60, 0, Math.PI * 2);
ctx.fillStyle='black';
ctx.fill();




