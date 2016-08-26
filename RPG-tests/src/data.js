/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/



var gameData = {
	leng: "ru",
	position: "none",
	totalScaneId: 0,
	totalScaneName: "menu",
	totlaWorld: 1,
	nextScaneId: 0,
	nextScaneName: "menu",
	nextWorld: 1,
	numEnemyTypes: 1,
	numEnemy: 1, 

	numMusik: 3,
	playMusik: true,

	newPlayer: true
};


var dataEnemy = [
     {
     	name: "en_0",
     	pointStr: {
     		x: 700,
     		y: gameHeight/2 + 20
     	},
     	spavnTime: 3000,
     	addXEn: 0,
     	health: 35,
     	dameg: 2,
     	speed: 2,
     	radius: 400,
     	reload: 50,
     	add: {
     		opit: 57,
     		dush: 1,
     		superMana: 6
     	}
     },

     {
     	name: "en_1",
     	pointStr: {
     		x: 3000,
     		y: gameHeight/2 + 20
     	},
     	spavnTime: 5000,
     	addXEn: 0,
     	health: 58,
     	dameg: 5,
     	speed: 6,
     	radius: 500,
     	reload: 60,
     	add: {
     		opit: 186,
     		dush: 1,
     		superMana: 16
     	}
     }
];

