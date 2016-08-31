/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/



var photoUser = null;
var openOnHost = (window.location.hostname == "meregames.github.io") || false;


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
	    		log(data);
	    	}
	    	loadedSaves = true;
	     });
    }
}
reOpenVk();


