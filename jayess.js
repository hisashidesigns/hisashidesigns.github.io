const canvas = document.getElementById("myCanvas");
function draw() {
	var ctx = canvas.getContext("2D");
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	
	ctx.fillStyle = "red";
	ctx.fillRect = (0, 0, 175, 50);
}
