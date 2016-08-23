/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/



var photoUser = null;
var openOnHost = (window.location.hostname == "meregames.github.io") ? true : false;


if(openOnHost == true) {
	VK.api("users.get", {user_ids: 210700286, fields: "photo_100", name_case: "Nom"}, function (data) {
		photoUser = data.response[0].photo_100;
		log(data);
	});
}


