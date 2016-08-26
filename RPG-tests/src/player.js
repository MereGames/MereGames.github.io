/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/

var sizeMap = 2;
var maxSizeMap = 3;

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
	health: 27,
	maxHealth: 27,
	engMana: 20,
	maxEngMana: 30,
	superMana: 20,
	maxSuperMana: 100,

	level: 1,
	opit: 0,
	needOpit: 150,

	hit: 1,

	boom1: audio.newAudio("audio/sound/soun_0.mp3", 1),

	//Stat
	defent: 4,
	dameg: 8,
	skilDmg: 2,
	speed: 6,
	name: "player",

	reload: 0,
	_reload: 60,

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
	},

	//Draw ui
	drawUI: function () {

		//Draw imgs
		//UPdat

		//User img
		brush.drawImageS({
			file: photoUser,
			x: 5, y: 5,
			w: 100, h: 100
		});

		//UI
		widSTR = 200;
		for(let p = arrUIPlayer.length; p--;) {
			arrUIPlayer[p].setPositionS(point(0 + arrUIPlayer[p].addX, 0 + arrUIPlayer[p].addY));

			//lines width
			if(arrUIPlayer[p].class == "lineBar") {
				let id = arrUIPlayer[p].ID;
				arrUIPlayer[p].w = (id == 0) ? (this.health/this.maxHealth)*280 : (id == 1) ? (this.engMana/this.maxEngMana)*240 : (this.superMana/this.maxSuperMana)*200;
			}else if(arrUIPlayer[p].class == "lineLVL") {
				arrUIPlayer[p].w = (this.opit/this.needOpit)*(gameWidth - 20);
			}

		    //Draw bg stat
		    arrUIPlayer[p].draw();
		}

		//Draw text name
		brush.drawTextS({
			size: (this.name.length*10 > 90) ? 10 : 15,
			x: 55, y: (this.size == 15) ? 96 : 109,
			color: "lightgreen",
			text: this.name,
			font: "cursive",
			align: "center"
		});

		//Draw level
		brush.drawTextS({
			size: 20,
			x: gameWidth/2, y: gameHeight - 50,
			color: "orange",
			text: this.level + " Уровень",
			font: "cursive",
			align: "center"
		});

		//Text sts
		for(let i = 7; i--;) {
			textStat(i);
		}
	},

	atacing: function () {
		for(let i = arrEnemy.length; i--;) {
			if(this.x <= arrEnemy[i].x + arrEnemy[i].w && this.x + this.w*2.5 >= arrEnemy[i].x + arrEnemy[i].w) {
				arrEnemy[i].health -= this.dameg;
			}
		}

		this.reload = 0;
	}
});

//Draw text
function textStat(id) {
	if(id<4) {
	    brush.drawTextS({
		    size: (id!=3) ? 13 : 8,
		    x: (id!=3) ? widSTR : gameWidth/2, y: (id!=3) ? 20*id+10 : gameHeight - 20,
		    color: (id!=3) ? "#fff" : "#000",
		    text: (id==0) ? mainPlayer.health + "/" + mainPlayer.maxHealth : (id==1) ? mainPlayer.engMana + "/" + mainPlayer.maxEngMana : (id==2) ? mainPlayer.superMana + "/" + mainPlayer.maxSuperMana : mainPlayer.opit + "/" + mainPlayer.needOpit,
		    font: "cursive",
		    align: "center"
	    });
	    widSTR += 20;
	}else {
	    brush.drawTextS({
		    size: 13,
		    x: 110, y: (id-3)*20 - 11,
		    color: (id!=3) ? "#fff" : "#000",
		    text: (id==4) ? "Здоровье" : (id==5) ? "Мана" : "Ярость",
		    font: "cursive",
		    align: "left"
	    });
	}
}


//Move player
function movePlayer() {

	//Camera
	camera.setPosition(point(mainPlayer.x - gameWidth/2 + 40, 0));
	if(camera.getPosition().x <= 0) {
		camera.setPosition(point(0, 0));
	}else if(camera.getPosition().x + gameWidth >= maxSizeMap*scaneGame.w) {
		camera.setPosition(point(maxSizeMap*scaneGame.w - gameWidth, 0));
	}

    //Keyas move
	if(key.isDown("LEFT") && mainPlayer.x > 0) {
		mainPlayer.move(v2d(-mainPlayer.speed, 0));
		mainPlayer.setFlip(1, 0);
	}else if(key.isDown("RIGHT") && mainPlayer.x < maxSizeMap*scaneGame.w - mainPlayer.w) {
		mainPlayer.move(v2d(mainPlayer.speed, 0));
		mainPlayer.setFlip(0, 0);
	}

	if(key.isDown("UP") && mainPlayer.y > gameHeight/2 - 70) {
		mainPlayer.move(v2d(0, -mainPlayer.speed));
	}else if(key.isDown("DOWN") && mainPlayer.y < gameHeight - mainPlayer.h - 50) {
		mainPlayer.move(v2d(0, mainPlayer.speed));
	}
}


//timeer
setInterval(function () {
	regHitPlayer();
}, 1000);


//regineration hit player
function regHitPlayer() {
	if(mainPlayer.health < mainPlayer.maxHealth) {
		mainPlayer.health += mainPlayer.hit;
	}
	if(mainPlayer.engMana < mainPlayer.maxEngMana) {
		mainPlayer.engMana += mainPlayer.hit;
	}
}


//Game over
function gameOver() {
	mainPlayer.setPosition(point(mainPlayer.w*2, gameHeight/2 + mainPlayer.h - 90));
	mainPlayer.health = Math.floor(mainPlayer.maxHealth/2);
	mainPlayer.superMana = 0;
	mainPlayer.opit = 0;
}
