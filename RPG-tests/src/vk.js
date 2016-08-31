/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/



var photoUser = null;
var openOnHost = (window.location.hostname == "meregames.github.io") || false;
var loadedSaves = false;
var savedData = undefined;


function reOpenVk() {
	openOnHost = (window.location.hostname == "meregames.github.io") || false;
	
    if(openOnHost == true) {
    	//User img
	    VK.api("users.get", {fields: "photo_100", name_case: "nom"}, function (data) {
		    photoUser = data.response[0].photo_100;
		    log("load photo...");
	    });

	    VK.api("storage.get", {key: "saveData", global: 0}, function(data) {
	    	if(data.response != "") {
	    		let resp = data.response;
	    		let dataSV = JSON.parse(resp);

	    		savedData = dataSV;
	    		mainPlayer.health = savedData[0].health;
                        mainPlayer.maxHealth = savedData[0].maxHealth;
                        mainPlayer.engMana = savedData[0].engMana;
                        mainPlayer.maxEngMana = savedData[0].maxEngMana;
                        mainPlayer.level = savedData[0].level;
                        mainPlayer.opit = savedData[0].needOpit;
                        mainPlayer.defent = savedData[0].defent;
                        mainPlayer.dameg = savedData[0].gameg;

	    		gameData.nextScaneId = 0;
                gameData.nextScaneName = "game";
                gameData.nextWorld = 1;
                gameData.numMusik = 3;
                checkBrow();
	    		
	    		gameData.newPlayer = false;

	    		loadedSaves = true;
	    	}else {
	    		loadedSaves = true;
	    	}
	     });
    }else {
    	loadedSaves = true;
    }
}
reOpenVk();


