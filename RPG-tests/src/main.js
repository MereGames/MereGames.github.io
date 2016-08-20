/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/

var viewFPS = true;
var startFPS = 60;

var allObjsGame = [];

var numPoints = 10;

//Rects
var rectMenu = game.newImageObject({
	w: 400, h: 300,
	x: gameWidth/2 - (200), y: gameHeight/2 - 150,
	file: "img/border.png"
});

allObjsGame.push(mainPlayer);

// ================ 'game' loop =============
game.newLoop('game', function () {
	//Clear All
	// ------ game.clear();

	//Fill canvas
	game.fill('#777');

	draw();

	//Fps game
	if(viewFPS == true) {
	    fpsGame = system.getFPS();
	    brush.drawTextS({
		    x: gameWidth, y: 0,
		    size: 25,
		    align: "right",
		    color: "#fff",
		    text: fpsGame + "FPS"
	    });
    }
});

// -- Loop menu game --
game.newLoop('menu', function () {
	//Clear All
	// ------ game.clear();

	//Fill canvas
	game.fill('#555');

	rectMenu.draw();

	key.setInputMode(true);

	var char = key.getInputChar();
    var iKey = key.getInputKey();

    if(inputText.length < 10 && char) {
    	inputText += char;
    }

    if(iKey) {
    	 if (iKey == 'BACKSPACE') {
          inputText = inputText.substr(0, inputText.length - 1);
        }
    }

	brush.drawText({
		x: gameWidth/2, y: gameHeight - 50,
		size: 25,
		align: "center",
		color: "#fff",
		font: "cursive",
		text: inputText,
	});

	mainPlayer.drawFrames(0,1);
	mainPlayer.setPosition(point(gameWidth/2 - rectMenu.w/2 + 70, gameHeight/2 - mainPlayer.h/2 + 20));

	//Fps game - end layer
	if(viewFPS == true) {
	    fpsGame = system.getFPS();
	    brush.drawTextS({
		    x: gameWidth, y: 0,
		    size: 25,
		    align: "right",
		    color: "#fff",
		    text: fpsGame + "FPS"
	    });
    }
});

// -- Loop loading --
game.newLoop('loading', function () {
	//Clear All
	// ---- game.clear();

	//Fill canvas
	game.fill('#999');


	brush.drawText({
		x: gameWidth/2, y: gameHeight - 50,
		size: 25,
		align: "center",
		color: "#fff",
		font: "cursive",
		text: "Загрузка... " +  resources.getProgress() + "%",
	});

	if(resources.isLoaded()) {
		game.startLoop('menu');
		gameLog('Go to menu', 'RPG');
	}

	//Fps game - and layer
	if(viewFPS == true) {
	    fpsGame = system.getFPS();
	    brush.drawTextS({
		    x: gameWidth, y: 0,
		    size: 25,
		    align: "right",
		    color: "#fff",
		    text: fpsGame + "FPS"
	    });
    }
});

//Draw ------
function draw() {
	//drawArrObjs
	testBg.draw();
	//OOP.drawArr(allObjsGame);
	mainPlayer.drawFrames(0,0);
}

//Analog console.log...
function gameLog(text, type) {
	console.log("*------------------------------*\n[" + type + "]" + text + "\n*------------------------------*");
}

game.startLoop('loading');
game.setFPS(startFPS);


//Window
window.location.indexOf = "";
