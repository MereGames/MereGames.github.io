//@ Save Data in Big War: The origin of the war


var dataForSave = [];

var saveGame = setInterval(function () {
	if(loadingGame[0].loadMain == true && loadingGame[1].loadMenu == true) {
	    localStorage.setItem("save_main", JSON.stringify(dataForSave));
    }
}, timeSave);

var updateData = setInterval(function () {
	if(loadingGame[0].loadMain == true && loadingGame[1].loadMenu == true) {
	    dataForSave = [
            {leng: gameConfig[0].leng},
            {gameMaps: mapsGame, dev: dev},
            {levelsMp: levels}
        ];
        console.log("save...");
    }
}, 200);