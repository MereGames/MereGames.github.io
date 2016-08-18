"use strict";
//Baze
var WIDTH = 800, HEIGHT = 500;
var pjs = new PointJS('2d', WIDTH, HEIGHT);

var vector = pjs.vector;
var log = pjs.system.log;
var game = pjs.game;
var point = vector.point;
var size = vector.size;
var camera = pjs.camera;
var brush = pjs.brush;
var OOP = pjs.OOP;
var math = pjs.math;
var tiles = pjs.tiles;


var key = pjs.keyControl;
key.initKeyControl();

var mouse = pjs.mouseControl;
mouse.initMouseControl();



//VK
/*VK.api("storage.set", {"key": "test"}, {"value": "jedsd"}, {"global": 1}, function (data) {
    console.log(data);
});

VK.api("storage.get", {"key": "test"}, {"global": 1}, function (data) {
    console.log(data);
});*/


window.location.href = 'https://oauth.vk.com/authorize?client_id=5505562&redirect_uri=https://vk.com/app5505562&display=popup&scope=status&response_type=token&v=5.53&state=1';



const NUM_IMG = 7;
//vars
var arrImgs = [];
var numPl = 0, numEm = 0;

//Images
for(let i = 0; i < NUM_IMG; i++) {
    var imgObj = game.newImageObject({
	    file: "img/img_"+ i +".png",
	    x: 0, y: 0,
	    w: 0, h: 0
    });
    arrImgs.push(imgObj);
}

var playerCat = game.newAnimationObject({
	animation: tiles.newAnimation("img/cat.png", 151, 192, 3),
	x: WIDTH/2,
	y: 353,
	w: 80,
	h: 80,
	delay: 3
});
var gravity = 2;
playerCat.spUp = 0;
playerCat.yP = 353;
playerCat.jumping = false;
playerCat.jump = function () {
	playerCat.spUp += gravity;
	playerCat.move(vector.v2d(0, -playerCat.spUp));
	if(playerCat.spUp >= 15) {
		gravity = -gravity;
	}
	if(playerCat.y >= playerCat.yP) {
		playerCat.jumping = false;
		playerCat.y = playerCat.yP;
		playerCat.spUp = 0;
		gravity = 2;
	}
}

for(let s = 0; s < NUM_IMG; s++) {
	if(s <= 2) {
		arrImgs[s].w = 76;
		arrImgs[s].h = 76;
	}else if(s <= 4) {
		arrImgs[s].scale = 1;
	}else {
		arrImgs[s].w = WIDTH;
		arrImgs[s].h = HEIGHT;
	}
}


//objs
var player = game.newRectObject({
	w: 25, h: 150,
	x: 20, y: HEIGHT/2 - 150/2,
	fillColor: "green"
});

player.setUserData({
	speed: 7
});

var enemy = game.newRectObject({
	w: 25, h: 150,
	x: WIDTH - 25*2, y: HEIGHT/2 - 150/2,
	fillColor: "red"
});

var ball = game.newCircleObject({
	radius: 10,
	fillColor: "black",
	x: WIDTH/2 - 10, y: HEIGHT/2 - 10
});
ball.setUserData({
	speedX: 6,
	speedY: 6
});


//game loop
game.newLoop('game', function () {
	if(pjs.resources.isLoaded() == false) {
		update();
		drawLoad();
	}else {
		update();
	    draw();
	}
});
//Start loop 'game'
game.startLoop('game');
game.setFPS(60);
log("start!");

//Draw
function draw() {
	game.fill("lightblue");

	ball.draw();
	player.draw();
	enemy.draw();

	brush.drawText({
		text: numPl + ":" + numEm,
		color: "#fff",
		size: 50,
		x: WIDTH/2, y: 0,
		align: "center"
	});
}

function update() {
	game.clear();

	if(key.isDown("S") && player.y < HEIGHT - player.h) {
		player.move(vector.v2d(0, player.speed));
	}else if(key.isDown("W") && player.y > 0) {
		player.move(vector.v2d(0, -player.speed));
	}

	ball.move(vector.v2d(ball.speedX, ball.speedY));

	if(ball.isIntersect(enemy) || ball.isIntersect(player)) {
		ball.speedX = -ball.speedX;
	}

	if(ball.y >= HEIGHT - ball.radius || ball.y <= 0) {
		ball.speedY = -ball.speedY;
	}

	if(ball.x >= WIDTH + ball.radius) {
		numPl += 1;
		ball.x = WIDTH/2 - 10;
		ball.y = HEIGHT/2 - 10;
	}else if(ball.x < ball.radius) {
		numEm += 1;
		ball.x = WIDTH/2 - 10;
		ball.y = HEIGHT/2 - 10;
	}

	if(enemy.y < ball.y) {
		    enemy.move(vector.v2d(0, player.speed - 2));
	}else {
		    enemy.move(vector.v2d(0, -(player.speed - 2)));
	}
}

function drawLoad() {
	arrImgs[5].draw();
	arrImgs[6].draw();

	brush.drawText({
		text: "Загрузка " + pjs.resources.getProgress() + "%",
		color: "red", 
		size: 100,
		x: WIDTH/2, y: HEIGHT/2,
		align: "center"
	});
}
