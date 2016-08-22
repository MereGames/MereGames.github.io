/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/

var sizeMap = 50000;

//Player main
var mainPlayer = game.newAnimationObject({
	animation: tiles.newImage("img/player.png").getAnimation(0, 0, 109, 200, 1),
	delay: 20,
	x: 0, y: 0,
	w: 70, h: 120,
	angle: 0,
	alpha: 1,
	visible: true
});

//My data for obj 'player'
mainPlayer.setUserData({
	//Baze
	health: 10,
	defent: 4,
	dameg: 8,
	skilGmg: 2,
	speed: 6,

	activ: false,

	//num Frames
	strFram: 0,
	endFram: 1,

	playAnim: function (anim) {
		//Set Type Animation
		if(anim == "stop") {
			if(this.strFram != 0 || this.endFram != 1) {
				this.strFram = 0;
				this.endFram = 1;
			}
	    }else if(anim == "run") {
			if(this.strFram != 0 || this.endFram != 0) {
				this.strFram = 0;
				this.endFram = 0;
			}
	    }

	    //draw frames
	    this.drawFrames(this.strFram, this.endFram);
	}
});


//Move player
function movePlayer() {

	//Keyas move
	if(key.isDown("LEFT") && mainPlayer.x > 0) {
		mainPlayer.move(v2d(-mainPlayer.speed, 0));
		mainPlayer.setFlip(1, 0);
	}else if(key.isDown("RIGHT") && mainPlayer.x < sizeMap*scaneGame.w - mainPlayer.w) {
		mainPlayer.move(v2d(mainPlayer.speed, 0));
		mainPlayer.setFlip(0, 0);
	}

	if(key.isDown("UP") && mainPlayer.y > gameHeight/2 - 50) {
		mainPlayer.move(v2d(0, -mainPlayer.speed));
	}else if(key.isDown("DOWN") && mainPlayer.y < gameHeight - mainPlayer.h) {
		mainPlayer.move(v2d(0, mainPlayer.speed));
	}

	//Camera
	camera.setPosition(point(mainPlayer.x - gameWidth/2 + mainPlayer.w, 0));
	if(camera.getPosition().x <= 0) {
		camera.setPosition(point(0, 0));
	}else if(camera.getPosition().x + gameWidth >= sizeMap*scaneGame.w) {
		camera.setPosition(point(sizeMap*scaneGame.w - gameWidth, 0));
	}
}
