/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/

var startFPS = 60;
var allObjsGame = [];

var mainPlayer = game.newAnimationObject({
	animation: tiles.newImage("img/player.png").getAnimation(0, 0, 109, 200, 1),
	x: 0, y: 0,
	w: 70, h: 120,
	angle: 0,
	alpha: 1,
	visible: true
});

allObjsGame.push(mainPlayer);

// ================ 'main' loop =============
game.newLoop('main', function () {
	//Clear All
	// ------ game.clear();

	//Fill canvas
	game.fill('#777');

	//Fps game
	fpsGame = system.getFPS();
	brush.drawTextS({
		x: gameWidth, y: 0,
		size: 25,
		align: "right",
		color: "#fff",
		text: fpsGame + "FPS"
	});

	//drawArrObjs
	OOP.drawArr(allObjsGame);
});

// Loop loading -------
game.newLoop('loading', function () {
	//Clear All
	// ---- game.clear();

	//Fill canvas
	game.fill('#999');

	//Fps game
	fpsGame = system.getFPS();
	brush.drawText({
		x: gameWidth, y: 0,
		size: 25,
		align: "right",
		color: "#fff",
		text: fpsGame + "FPS"
	});

	brush.drawText({
		x: gameWidth/2, y: gameHeight - 50,
		size: 25,
		align: "center",
		color: "#fff",
		font: "cursive",
		text: "Загрузка... " +  resources.getProgress() + "%",
	});

	if(resources.isLoaded()) {
		game.startLoop('main');
	}
});

game.startLoop('loading');
game.setFPS(startFPS);
