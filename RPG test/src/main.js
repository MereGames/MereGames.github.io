var pjs = new PointJS('2d', 800, 450);

var log = pjs.system.log;
var game = pjs.game;
var point = pjs.vector.point;
var camera = pjs.camera;
var brush = pjs.brush;
var OOP = pjs.OOP;
var math = pjs.math;
var vector = pjs.vector;
var v2d = vector.v2d;
var w2h = vector.w2h;
var system = pjs.system;


var key = pjs.keyControl;
key.initKeyControl();

pjs.system.initFPSCheck();

var mouse = pjs.mouseControl;
mouse.initMouseControl();

var gameWidth = game.getWH().w;
var gameHeight = game.getWH().h;

var gameBg = game.newImageObject({
	x: 0,
	y: 0,
	w: gameWidth,
	h: gameHeight,
	file: "img/bg.png",
});

var player = game.newImageObject({
	file: "img/pl.png",
	x: 450/2 + 70,
	y: 230,
	w: 70,
	h: 120,
	scale: 1
});

var enemy = game.newImageObject({
	file: "img/en.png",
	x: 600,
	y: 260,
	w: 70,
	h: 120,
	scale: 1
});

enemy.setUserData({
	speed: 1,
	radius: 350,
	activ: false,
	layer: 1,
	call: false
});

player.setUserData({
	speed: 5,
	yMin: 230,
	layer: 1
});

var objsGame = [];
objsGame.push(player, enemy);

var mapSizeX = 1600;

var fpsGame = pjs.system.getFPS();

var but = pjs.GUI.newButton({
  x : 100, y : 10, 
  w : 100, h : 30, 
  text : "Нажми!", 
  events : { 
    click : function () { 
      system.resize(system.getWH().w, system.getWH().h);
      gameWidth = game.getWH().w;
      gameHeight = game.getWH().h;
      resizeObjs();
    } 
  } 
});

function resizeObjs() {
	gameBg.setSize(w2h(gameWidth, gameHeight));
	VK.callMethod("resizeWindow", gameWidth, gameHeight);
	system.initFullScreen();
}


game.newLoop('game', function () {
	game.fill('#fff');

	gameBg.draw();
	gameBg.simpleDraw(point(800, 0));
	OOP.forArr(objsGame, function (val, i, arr) {
		OOP.forArr(objsGame, function (val2, j, arr2) {
			if(i != j) {
				if(objsGame[i].layer > objsGame[j].layer) {
					objsGame[j].draw();
					objsGame[i].draw();
				}else {
					objsGame[i].draw();
					objsGame[j].draw();
				}
			}
	    });
	});

	moveEnemy();

	fpsGame = pjs.system.getFPS();

	if(player.y > enemy.y) {
		player.layer = 2;
	}else if(player.y < enemy.y) {
		player.layer = 1;
	}

	if(enemy.y > player.y) {
		enemy.layer = 2;
	}else if(enemy.y < player.y) {
		enemy.layer = 1;
	}

	brush.drawText({
		x: 0 + camera.getPosition().x,
		y: 0,
		text: "FPS: " + fpsGame,
		size: 25,
		color: "#fff"
	});

	if(key.isDown("RIGHT")) {
		if(checkCollPlat()) {
			player.setFlip(0, 0);
			player.move(v2d(player.speed, 0));
		}
	}else if(key.isDown("LEFT")) {
		if(checkCollPlat()) {
			player.move(v2d(-player.speed, 0));
			player.setFlip(1, 0);
		}
	}

	if(key.isDown("DOWN")) {
		if(checkCollPlat()) {
			player.move(v2d(0, player.speed))
		}
	}else if(key.isDown("UP")) {
		if(checkCollPlat()) {
			player.move(v2d(0, -player.speed));
		}
	}

	if(camera.getPosition().x >= 0 && camera.getPosition().x <= mapSizeX - player.w) {
	    camera.setPosition(point(player.x - 450/2 - 70, 0));
    }

    if(camera.getPosition().x < 0) {
    	camera.setPosition(point(0, 0));
    }else if(camera.getPosition().x > mapSizeX/2) {
    	camera.setPosition(point(mapSizeX/2, 0));
    }

	if(player.x < 0) {
		player.x = 0;
	}else if(player.x > mapSizeX - player.w) {
		player.x = mapSizeX - player.w;
	}

	if(player.y < player.yMin) {
		player.y = player.yMin;
	}else if(player.y > 450 - player.h) {
		player.y = 450 - player.h;
	}

	if(player.isIntersect(enemy) && player.y < enemy.y + enemy.h/6) {
		if(player.x < enemy.x) {
		    player.x = player.x - player.speed;
		    camera.setPosition(point(camera.getPosition().x - player.speed, 0));
	    }else {
	    	player.x = player.x + player.speed;
	    	camera.setPosition(point(camera.getPosition().x + player.speed, 0));
	    }
	}
});

function moveEnemy() {
	if(enemy.x + enemy.w + enemy.radius >= player.x + player.w && enemy.x + enemy.w - enemy.radius <= player.x + player.w) {
		enemy.activ = true;
	}else {
		enemy.activ = false;
	}

	if(enemy.x + enemy.w + player.w >= player.x + player.w && enemy.x + enemy.w - (player.w + player.speed) <= player.x + player.w) {
		enemy.activ = false;
	}

	if(enemy.activ == true) {
		if(enemy.x < player.x) {
			enemy.move(v2d(enemy.speed, 0));
			enemy.setFlip(1, 0);
		}else if(enemy.x > player.x) {
			enemy.move(v2d(-enemy.speed, 0));
			enemy.setFlip(0, 0);
		}

		if(enemy.y < player.y) {
			enemy.move(v2d(0, enemy.speed));
		}else if(enemy.y > player.y) {
			enemy.move(v2d(0, -enemy.speed));
		}
	}else {
		//
	}
}

function checkCollPlat() {
	if(player.isIntersect(enemy) && player.y < enemy.y + enemy.h/6) {
		return false;
	}

	if(player.x <= mapSizeX - player.w && player.x >= 0 && player.y >= player.yMin) {
		return true;
	}else {
		return false;
	}
}

game.startLoop('game');
