/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/



var timerStart = false;

var needType = 0;


//Draw enemy
function drawEnemys() {
	for(let p = arrEnemy.length; p--;) {
		if(arrEnemy[p].isInCamera()) {
		    arrEnemy[p].drawFrames(0, 0);
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
		setTimeout(function (){
		    for(let i = 0; i < numEn; i++) {
			    let enm = game.newAnimationObject({
                x: 90*i, y: 300,
                w: 85, h: 130,
                animation: tiles.newImage("maps/world_" + gameData.totlaWorld + "/img/enemy/enemy_" + needType + ".png").getAnimation(0, 0, 150, 200, 1),
                delay: 1,
            });
            enm.setUserData({
                radius: 400,
                health: 100,
                maxHealth: 100,
                speed: 2,
                activ: false,
                call: false,
                view: false
            });
            arrEnemy.push(enm);
		    }
		    timerStart = false;
	    }, 1000);
	    timerStart = true;
	}
}


//Move enemy
function moveEnemy() {
	for(let i = arrEnemy.length; i--;) {
		if((arrEnemy[i].x + arrEnemy[i].w) - arrEnemy[i].radius < mainPlayer.x + mainPlayer.w && arrEnemy[i].radius + arrEnemy[i].x + arrEnemy[i].w > mainPlayer.x + mainPlayer.w) {
			arrEnemy[i].activ = true;
		}else {
			arrEnemy[i].activ = false;
		}

		checkCollEnemy();
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
}


//Collisions
function checkCollEnemy() {
	/*for(let i = arrEnemy.length; i--;) {
		for(let j = arrEnemy.length; j--;) {
		    if(arrEnemy[i].isIntersect(arrEnemy[j]) && i!=j) {
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
	}*/
	OOP.forXY(arrEnemy.length, arrEnemy.length, function (i, j) {
		if(arrEnemy[i].isIntersect(arrEnemy[j]) && i!=j) {
		    	arrEnemy[i].call = true;
		    	arrEnemy[j].call = true;
		    	arrEnemy[i].activ = false;
		    	arrEnemy[j].x -= arrEnemy[j].speed;
		    	arrEnemy[i].x += arrEnemy[i].speed;
		    }else {
		    	arrEnemy[i].call = false;
		    	arrEnemy[j].call = false;
		    }
	});
}



