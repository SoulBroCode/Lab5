var lastUpdate;



function Game()
{		
  lastUpdate = Date.now();

  canvasInIt();
  this.coin =document.getElementById('coinSprite');
  this.timer = 5;
  this.j = 0;
  this.coinSprite = new Sprite('shadowSprite');
}

Game.prototype.keyClick = function(e)
{

}

Game.prototype.gameLoop = function()
{
var now = Date.now();
var dt = (now - lastUpdate) / 1000;
lastUpdate = now;


console.log(""+ dt);

	game.update();

	game.render();
	
	window.requestAnimationFrame(game.gameLoop);
}
Game.prototype.update = function()
{
	this.coinSprite.update();
}
Game.prototype.render = function()
{
  ctx.clearRect(0,0,canvas.width,canvas.height);
  this.coinSprite.draw();
}

function canvasInIt(){
	canvas = document.createElement("canvas");
	//ctx is to get context that we will draw on
	ctx = canvas.getContext("2d")

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}
/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}

 
 
