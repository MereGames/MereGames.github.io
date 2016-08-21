/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/


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
	    }

	    //draw frames
	    this.drawFrames(this.strFram, this.endFram);
	}
});
