function Sprite(path)
{
	//this.image = new Image();
	this.image = document.getElementById(path);

	this.frameWidth = 4;
	this.frameHeight = 2;
	this.frameX = 0;	
	this.frameY = 0;	
	this.timer = 5;
}
Sprite.prototype.update = function(){
	this.timer --;
	if(this.timer < 0){
		this.timer = 5;
		this.frameX ++;	
		if(this.frameX >= this.frameWidth){
			this.frameY ++;
			this.frameX = 0;
			if(this.frameY >= this.frameHeight){
				this.frameY =0;
			}
		}
	}
	
}
Sprite.prototype.draw = function(){

	ctx.drawImage(this.image, 
		this.image.width / this.frameWidth * this.frameX,
		this.image.height / this.frameHeight * this.frameY,
		this.image.width / this.frameWidth, 
		this.image.height / this.frameHeight,
		0,
		0,
		this.image.width / this.frameWidth, 
		this.image.height/ this.frameHeight);
	
}