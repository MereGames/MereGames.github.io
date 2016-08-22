/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/

//Init
var menuIconsObjs = [];
const NUM_ICONS = 4;
const NUM_SCANES = 1;

var arrPlusMenu = [];
var arrMinusMenu = [];

var scanesGameArr = [];

//backgrounds game ====================
for(let i = NUM_SCANES; i--;) {
	var scane = game.newImageObject({
	    x: 0, y: 0,
	    w: gameWidth, h: gameHeight,
	    file: "img/scane_0.png"
    });

    scanesGameArr.push(scane);
}

//Bg - menu
var menuBg = game.newImageObject({
	x: 0, y: 0,
	w: gameWidth, h: gameHeight,
	file: "img/menu_bg.png"
});



//Menu
var rectMenu = game.newImageObject({
	w: 400, h: 300,
	x: gameWidth/2 - (200), y: gameHeight/2 - 150,
	file: "img/menu.png"
});

var addY = -60; var addX = 47;
for(let i = 4; i--;) {

	let butPlus = game.newImageObject({
	    w: 20, h: 20,
	    x: 0, y: 0,
	    file: "img/plus.png"
    });
    let butMinus = game.newImageObject({
	    w: 20, h: 20,
	    x: 0, y: 0,
	    file: "img/minus.png"
    });

	butMinus.x = gameWidth/2 + addX;
	butPlus.x = gameWidth/2 + addX + 65;

	butMinus.y = gameHeight/2 + addY;
	butPlus.y = gameHeight/2 + addY;

	arrPlusMenu.push(butPlus);
	arrMinusMenu.push(butMinus);

	addY += 45;
}

//Input img
var inputObj = game.newImageObject({
	x: gameWidth/2 - 150, y: gameHeight - 88,
	w: 300, h: 55,
	file: "img/input.png"
});

//Icons for Menu
for(let i = 0; i < 4; i+= 1) {
	let iconObj = game.newImageObject({
		x: gameWidth/2 - 10, y: gameHeight/2 - 80 + (46*i),
		w: 50, h: 50,
		file: "img/icon_" + i + ".png"
	});
	menuIconsObjs.push(iconObj);
}

function deletPath(path) {
	//
}

function loadPath(path) {
	//
}
