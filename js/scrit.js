
draw();

function draw() {
	var ctx = document.getElementById('canvas').getContext('2d');
	var img = new Image();
	img.onload = function(){
		for (var i = 0; i< 1; i++){
			for (var j = 0; j<1; j++){
				ctx.drawImage(img,100,  20,100 , 100);
			}
		}
	};
	img.src = 'img/frente.png';
}
	
