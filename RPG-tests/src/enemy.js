/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/



var timerStart = false;

var relodCheckColl = 10;
var maxReload = 10;

var addEn = 150;


//Draw enemy
function drawEnemys() {
	for(let p = arrEnemy.length; p--;) {
		if(arrEnemy[p].isInCamera()) {
		    arrEnemy[p].drawFrames(0, 0);
		    arrEnemy[p].drawHL();
		     arrEnemy[p].atacing();
		    arrEnemy[p].view == true;
	    }else {
	    	arrEnemy[p].view = false;
	    }
	}
}

//Update
function updateEnemys() {
	if(arrEnemy.length < gameData.numEnemy && timerStart == false) {
		var numEn = gameData.numEnemy - arrEnemy.length;
		var rand = math.random(0, 1, false);
		createEnemys(rand, 1, dataEnemy[rand].spavnTime);
	}
}

//Create enemys
function createEnemys(type, num, time) {
	setTimeout(function (){
		for(let i = 0; i < num; i++) {
			let enm = game.newAnimationObject({
                x: dataEnemy[type].pointStr.x + dataEnemy[type].addXEn, y: dataEnemy[type].pointStr.y,
                w: 85, h: 130,
                animation: tiles.newImage("maps/world_" + gameData.totlaWorld + "/img/enemy/enemy_" + 0 + ".png").getAnimation(0, 0, 150, 200, 1),
                delay: 1,
            });
            enm.setUserData({
                radius: dataEnemy[type].radius,
                health: dataEnemy[type].health,
                maxHealth: dataEnemy[type].health,
                speed: dataEnemy[type].speed,
                activ: false,
                typeEn: type,
                dameg: dataEnemy[type].dameg,
                reload: 0,
                boom: audio.newAudio("audio/sound/enemy/soun_" + type + ".mp3", volumAudio),
                _reload: dataEnemy[type].reload,
                call: false,
                view: false,
                add: dataEnemy[type].add,

                drawHL: function () {
                	brush.drawRect({
                		x: this.x, y: this.y - 10,
                		w: (this.health/this.maxHealth)*this.w, h: 10,
                		fillColor: "red"
                	});
                	brush.drawRect({
                		x: this.x, y: this.y - 10,
                		w: this.w, h: 10,
                		strokeColor: "#fff",
                		strokeWidth: 2
                	});
                	brush.drawText({
                		x: this.x + this.w/2, y: this.y - 10,
                		w: this.w, h: 10,
                		color: "#000",
                		align: "center",
                		text: this.health + "/" + this.maxHealth
                	});
                },
                atacing: function () {
                	if(this.activ == true && this.reload == this._reload) {
                		if(this.x - this.w/3 <= mainPlayer.x + mainPlayer.w && this.x + this.w*3 >= mainPlayer.x + mainPlayer.w) {
                			let randGMG = math.random(this.dameg/2, this.dameg, true);
                			mainPlayer.health -= randGMG;
                			this.boom.play();
                			this.reload = 0;
                			arrTextUp.push(getTextUp("-"+randGMG, "player", i, "red", 2));
                		}
                	}
                	if(this.reload < this._reload) {
                		this.reload += 1;
                	}
                }
            });
            dataEnemy[type].addXEn += addEn;
            arrEnemy.push(enm);
		}
		timerStart = false;
	}, time);
    timerStart = true;
}


//Move enemy
function moveEnemy() {
	for(let i = arrEnemy.length; i--;) {
		if((arrEnemy[i].x + arrEnemy[i].w) - arrEnemy[i].radius < mainPlayer.x + mainPlayer.w && arrEnemy[i].radius + arrEnemy[i].x + arrEnemy[i].w > mainPlayer.x + mainPlayer.w) {
			arrEnemy[i].activ = true;
		}else {
			arrEnemy[i].activ = false;
		}

		//Collisons
		if(relodCheckColl <= 0) {
			checkCollEnemy();
			relodCheckColl = maxReload;
		}
		relodCheckColl -= 1;

		//Move
		if(arrEnemy[i].activ == true) {
			if(arrEnemy[i].x < mainPlayer.x - mainPlayer.w - mainPlayer.speed && arrEnemy[i].call == false) {
				arrEnemy[i].move(v2d(arrEnemy[i].speed, 0));
				arrEnemy[i].setFlip(1, 0);
			}else if(arrEnemy[i].x > mainPlayer.x + mainPlayer.w + mainPlayer.speed && arrEnemy[i].call == false) {
				arrEnemy[i].move(v2d(-arrEnemy[i].speed, 0));
				arrEnemy[i].setFlip(0, 0);
			}

			if(arrEnemy[i].y < mainPlayer.y - arrEnemy[i].speed && arrEnemy[i].call == false) {
				arrEnemy[i].move(v2d(0, arrEnemy[i].speed));
			}else if(arrEnemy[i].y > mainPlayer.y + arrEnemy[i].speed && arrEnemy[i].call == false) {
				arrEnemy[i].move(v2d(0, -arrEnemy[i].speed));
			}
		}
	}

	//Kill enemy
    checkKillEnemy();
}


//Collisions
function checkCollEnemy() {
	for(let i = arrEnemy.length; i--;) {
		for(let j = arrEnemy.length; j--;) {
		    if(arrEnemy[i].isIntersect(arrEnemy[j]) && i != j) {
		    	arrEnemy[i].call = true;
		    	arrEnemy[j].call = true;
		    	arrEnemy[i].activ = false;
		    	arrEnemy[j].x -= arrEnemy[j].speed;
		    	arrEnemy[i].x += arrEnemy[i].speed;
		    }else {
		    	arrEnemy[i].call = false;
		        arrEnemy[j].call = false;
		    }
		}
	}
}


//Kill enemy
function checkKillEnemy() {
	for(let i = arrEnemy.length; i--;) {
		if(arrEnemy[i].health <= 0) {
			arrEnemy[i].health = 0;
			mainPlayer.opit += arrEnemy[i].add.opit;
		    dataEnemy[arrEnemy[i].typeEn].addXEn -= addEn;

			arrEnemy.splice(i, 1);
		}
	}
}



