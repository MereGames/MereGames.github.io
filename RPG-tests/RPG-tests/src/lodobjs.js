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
const NUM_UI = 1;
const NUM_BUT_MENU = 4;
const NUM_SOUNDS = 2;
const NUM_SOUNDS_ENEMY = 2;
const NUM_SKILLS = 1;

var volumAudio = 1;
var stoping = false;

var arrPlusMenu = [];
var arrMinusMenu = [];
var arrUIPlayer = [];
var arrAudioBg = [];
var arrEnemyTypes = [];
var arrEnemy = [];
var arrMainSounds = [];
var arrTextUp = [];

var scaneGame = {};
var menuBg = {};
var rectMenu = {};
var inputObj = {};
var blankObj = {};

var dataMap = {};

var pogotInim = {};

//For Plus and Minus
var addY = -60; var addX = 47;

var widSTR = 200;





//Del path ---------
function deletPath(path, id, world) {
	scaneGame  = null;
    arrAudioBg = [];
    arrEnemyTypes = [];
    arrEnemy = [];
    arrUIPlayer = [];
    menuIconsObjs = [];
    arrMinusMenu = [];
    arrPlusMenu = [];
    arrMainSounds = [];
    arrTextUp = [];
    userImg = {};
    blankObj = {};
    rectMenu = {};
    pogotInim = {};

	if(path == "menu") {
	    menuIconsObjs = [];
	    arrMinusMenu = [];
	    arrPlusMenu = [];

	    menuBg = {};
	    rectMenu = {};
	    inputObj = {};
	    blankObj = {};
    }else if(path == "game") {
    	arrUIPlayer = [];
        arrAudioBg = [];
    }
}

//load path ---------
function loadPath(path, id, world) {
	//Scane
    scaneGame = game.newImageObject({
	    x: 0, y: 0,
	    w: gameWidth*2, h: gameHeight,
	    file: "maps/world_" + world + "/img/scane_" + id + ".png"
    });
    if(dataMap.pogod == true) {
        pogotInim = game.newImageObject({
            x: 0, y: -gameHeight,
            w: gameWidth, h: gameHeight*2,
            file: "maps/world_" + world + "/img/pog.png"
        });
    }

    //Menu load
    if(path == "menu") {
        //Musik menu
        for(let i = 3; i--;) {
            let aud = audio.newAudio("audio/world_" + world + "/aud_" + i + ".mp3", volumAudio);
            arrAudioBg.push(aud);
        }

    	//Icons Menu
        for(let i = 0; i < 4; i+= 1) {
	        let iconObj = game.newImageObject({
		        x: gameWidth/2 - 10, y: gameHeight/2 - 80 + (46*i),
		        w: 50, h: 50,
		        file: "img/icon_" + i + ".png"
	        });
	        menuIconsObjs.push(iconObj);
        }
        //Plus and Minus
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

        //Bg - menu
        menuBg = game.newImageObject({
	        x: 0, y: 0,
	        w: gameWidth, h: gameHeight,
	        file: "img/menu_bg.png"
        });
        //Hero bg menu
        rectMenu = game.newImageObject({
	        w: 400, h: 300,
	        x: gameWidth/2 - (200), y: gameHeight/2 - 150,
	        file: "img/menu.png"
        });
        //Input name player
        inputObj = game.newImageObject({
	        x: gameWidth/2 - 150, y: gameHeight - 88,
	        w: 300, h: 55,
	        file: "img/input.png"
        });

        //Help blank
        blankObj = game.newImageObject({
	        x: gameWidth/2 - 150, y: gameHeight - 88,
	        w: 300, h: 55,
	        file: "img/help_blank.png"
        });
    }else if(path == "game") {

        //Musik game ------------
        /*for(let i = gameData.numMusik; i--;) {
            let aud = audio.newAudio("audio/world_" + world + "/aud_" + i + ".mp3", volumAudio);
            arrAudioBg.push(aud);
        }*/
        for(let i = NUM_SOUNDS; i--;) {
            let sound = audio.newAudio("audio/sound/soun_" + i + ".mp3", volumAudio);
            arrMainSounds.push(sound);
        }

        for(let i = NUM_SOUNDS_ENEMY; i--;) {
            let sound = audio.newAudio("audio/sound/enemy/soun_" + i + ".mp3", volumAudio);
            arrMainSounds.push(sound);
        }

    	//Bg  main stat
    	for(let i = NUM_UI; i--;) {
    		let ui = game.newImageObject({
    			x: 0, y: 0,
    			file: "img/ui_"+i+".png",
    			w: 111, h: 162
    		});
    		ui.setUserData({
    			addX: 0,
    			addY: 0
    		});

    		arrUIPlayer.push(ui);
    	}
    	//Stat lines
    	widSTR = 200;
    	for(let i = 3; i--;) {
    		let strokStat = game.newRectObject({
    			x: 0, y: 0,
    			w: widSTR, h: 15,
    			strokeColor: "#fff",
    			fillColor: "#666",
    			strokeWidth: 2
    		});
    		strokStat.setUserData({
    			addX: 105,
    			addY: 20*i + 10
    		});

    		let rectStat = game.newImageObject({
    			x: 0, y: 0,
    			w: widSTR, h: 13,
                file: "img/bar_"+i+".png"
    		});
    		rectStat.setUserData({
    			addX: 105,
    			addY: 20*i + 12,
    			class: "lineBar",
    			ID: i
    		});

    		arrUIPlayer.push(rectStat);
    		arrUIPlayer.push(strokStat);
    		widSTR += 40;
    	}

    	//level player
    	let lvlBarSt = game.newRectObject({
    		x: 10, y: gameHeight - 20,
    		w: gameWidth - 20, h: 10,
    		strokeColor: "#fff", strokeWidth: 2,
    	});
    	lvlBarSt.setUserData({
    		addX: 10,
    		addY: gameHeight - 20
    	});
    	let lvlBar = game.newImageObject({
    		x: 10, y: gameHeight - 20,
    		w: gameWidth - 20, h: 10,
    		file: "img/bar_3.png"
    	});
    	lvlBar.setUserData({
    		addX: 10,
    		addY: gameHeight - 20,
    		class: "lineLVL"
    	});
    	//Save in arr
    	arrUIPlayer.push(lvlBarSt);
    	arrUIPlayer.push(lvlBar);

    	//But menu
    	let butMenu = game.newImageObject({
    		x: 0, y: 0,
    		file: "img/men_bt.png",
    		w: 32, h: 32
    	});
    	butMenu.setUserData({
    		addX: 39,
    		addY: 130,
    		class: "minMenu",
    		ID: 0,
    	});
    	arrUIPlayer.push(butMenu);

    	//Icons mini menu
    	for(let i = NUM_BUT_MENU; i--;) {
    		let butMenu = game.newImageObject({
    		    x: 0, y: 0,
    		    file: "img/bt_" + i + ".png",
    		    w: 45, h: 45
    	    });
    	    butMenu.setUserData({
    		    addX: 36,
    		    addY: 130,
    		    class: "minMenu",
    		    ID: i+1,
    	    });
    	    butMenu.visible = false;
    	    arrUIPlayer.push(butMenu);
    	} 

        //Load enemy
        for(let e = gameData.numEnemyTypes; e--;) {
            let enm = game.newAnimationObject({
                x: 300, y: 300,
                w: 85, h: 130,
                animation: tiles.newImage("maps/world_" + world + "/img/enemy/enemy_" + e + ".png").getAnimation(0, 0, 150, 200, 1),
                delay: 1,
            });
            enm.setUserData({
                radius: 400,
                health: 100,
                maxHealth: 100,
                speed: 2,
                activ: false
            });

            arrEnemyTypes.push(enm);
        }

         //Bords reload UI
        for(let i = 6; i--;) {
            let bordImg = game.newRectObject({
                x: 0, y: 0,
                w: 68, h: 68,
                fillColor: "black",
                alpha: 0.5
            });
            bordImg.setUserData({
                addX: (i!=5) ? gameWidth - 75*i : gameWidth - 410,
                addY: 73,
                class: "skillBordRel",
                ID: i,
            });

            arrUIPlayer.push(bordImg);
        }

        //Bords skills UI
        for(let i = 6; i--;) {
            let bordImg = game.newImageObject({
                x: 0, y: 0,
                w: 70, h: 70,
                file: "img/bord.png"
            });
            bordImg.setUserData({
                addX: (i!=5) ? gameWidth - 75*i : gameWidth - 410,
                addY: 5,
                class: "skillBord",
                ID: i+1,
            });

            arrUIPlayer.push(bordImg);
        }

        for(let i = NUM_SKILLS; i--;) {
            let bordImg = game.newImageObject({
                x: 0, y: 0,
                w: 68, h: 68,
                file: "img/skill_" + i + ".png"
            });
            bordImg.setUserData({
                addX: (i==0) ? gameWidth - (75*i + 75) : gameWidth - 75*i,
                addY: 5,
                class: "skillImg",
                ID: i+1,
            });

            arrUIPlayer.push(bordImg);
        }


    	//user img
    	if(photoUser == null) {
            reOpenVk();
            if(photoUser == null || photoUser == undefined) {
    		    photoUser = "img/user_img.png";
            }
    	}
    }

    //
}
