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

		startWorld: 0,
		startId: 0
	}

	//save
	saveData = [dataPlayer];
	stringData = OOP.toString(saveData);
}, saveTime);

if(openOnHost == true) {
	setInterval(function () {
		if(loadedSaves == true) {
			VK.api("storage.set", {key: "saveData", value: saveData, global: 0, user_id: 0}, function (data) {
				log(data);
			});
		}
	}, saveTime + 700);
}

