//@ Data baze for Big War: The origin of the war
//@ Data for link in main.js

//Loading game status
var loadingGame = [
    {loadMain: false},
    {loadMenu: false}
];

var gameSave = false;

//Data game
var gameConfig = [
    {position: "logo", pre_position: "none", endLoad: "menu", leng: "en"},
    {name: "Big War", fullName: "Big War: The origin of the war", version: "0.1.3"}
];

//Leng
var tranTexts = [
    //Russian
    {
    	ru: [
    	       {name: "company", tran: "Компания"},
               {name: "settings", tran: "Настройки"},
               {name: "mapEditor", tran: "Редактор карт"},
               {name: "freeGame", tran: "Свободная игра"},
               {name: "author", tran: "Авторы"},
               {name: "cross", tran: ""},
               {name: "leftLeng", tran: ""},
               {name: "rightLeng", tran: ""},
               {name: "on", tran: ""},
               {name: "off", tran: ""},
               {name: "back", tran: "Назад"},
               {name: "menu", tran: "Меню"},
               {name: "settings_menu", tran: "Настройки"},
               {name: "on", tran: ""},
               {name: "off", tran: ""},
               {name: "on", tran: ""},
               {name: "saveMap", tran: "Сохр. карту"},
               {name: "deleteMaps", tran: "Удалить карты"}
            ]
    },
    //Englend
    {
    	en: [
    		   {name: "company", tran: "Company"},
    		   {name: "settings", tran: "Sittings"},
    		   {name: "mapEditor", tran: "Map editor"},
    		   {name: "freeGame", tran: "Free game"},
    		   {name: "author", tran: "Authors"},
    		   {name: "cross", tran: ""},
    		   {name: "leftLeng", tran: ""},
               {name: "rightLeng", tran: ""},
               {name: "on", tran: ""},
               {name: "off", tran: ""},
               {name: "back", tran: "Back"},
               {name: "menu", tran: "Menu"},
               {name: "settings_menu", tran: "Sittings"},
               {name: "on", tran: ""},
               {name: "off", tran: ""},
               {name: "on", tran: ""},
               {name: "saveMap", tran: "Save map"},
               {name: "deleteMaps", tran: "Delete maps"}
    		]
    }
];

//Arrays for Iames
var menuImages = [];
var bordersInfo = [];
var buildImages = [];
var buttonImages = [];
var groundImages = [];
var objectImages = [];
var objectImagesEnemy = [];
var boomImages = [];
var otherImages = [];


//Prop for objsGame ------------- ----------- ------------
var objsProp = {
	//Player
	player: {
		robot: {
			reload: 55,
			speed: 1,
			ataca: 12,
			health: 70,
			price: 50
		},

		tank: {
			reload: 70,
			speed: 2,
			ataca: 17,
			health: 120,
			price: 80
		},

		tank_hard: {
			reload: 80,
			speed: 1,
			ataca: 33,
			health: 356,
			price: 150
		},

		tank_fast: {
			reload: 25,
			speed: 4,
			ataca: 6,
			health: 30,
			price: 105
		},

		tank_two: {
			reload: 75,
			speed: 2,
			ataca: 64,
			health: 1200,
			price: 270
		},

    tank_hard2: {
      reload: 70,
      speed: 1,
      ataca: 87,
      health: 1800,
      price: 680
    },

    tank_fast2: {
      reload: 10,
      speed: 4,
      ataca: 8,
      health: 70,
      price: 240
    }
	},

	//Enemy
	enemy: {
		tank_enemy: {
			reload: 75,
			speed: 2,
			ataca: 16,
			health: 120
		},
    tankHard_enemy: {
      reload: 170,
      speed: 1,
      ataca: 78,
      health: 530
    },
    boss1: {
      reload: 85,
      speed: 1,
      ataca: 154,
      health: 3500
    }
	}
};
