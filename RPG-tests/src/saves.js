/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/


var saveData = [];
var stringData = "";

setInterval(function () {
	//Player data
	var dataPlayer = {
		health: mainPlayer.health,
		maxHealth: mainPlayer.maxHealth,
		engMana: mainPlayer.engMana,
	    maxEngMana: mainPlayer.maxEngMana,
	    superMana: mainPlayer.superMana,
	    maxSuperMana: mainPlayer.maxSuperMana,

		defent: mainPlayer.defent,
		dameg: mainPlayer.dameg,
		skilDmg: mainPlayer.skilDmg,
		speed: mainPlayer.speed,
		name: mainPlayer.name,
		activ: mainPlayer.activ,

		hit: mainPlayer.hit,
		level: mainPlayer.level,
		opit: mainPlayer.opit,
		needOpit: mainPlayer.needOpit,

		startWorld: 0,
		startId: 0
	}

	//save
	saveData = [dataPlayer];
	stringData = JSON.stringify(saveData);
}, saveTime);

if(openOnHost == true) {
	setInterval(function () {
		if(loadedSaves == true && dataCleared == false && gameData.newPlayer == false) {
			VK.api("storage.set", {key: "saveData", value: stringData, global: 0}, function (data) {
				//
			});
		}
	}, saveTime + 30);
}

