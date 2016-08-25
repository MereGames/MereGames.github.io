<<<<<<< HEAD
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
    }
}
reOpenVk();


=======
/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/



var photoUser = null;
var openOnHost = (window.location.hostname == "meregames.github.io") || false;


if(openOnHost == true) {
	VK.api("users.get", {fields: "photo_100", name_case: "nom"}, function (data) {
		photoUser = data.response[0].photo_100;
		log("load photo...");
	});
}


>>>>>>> origin/master
