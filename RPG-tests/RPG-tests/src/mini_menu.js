/**
*
* @ Copyryght Mere Games 2016
* @ support@meregames.ru
* @ Mail - meregames@mail.ru
*
**/





//MiniMenu
var miniMenu = {
	yList: 160,
	y: 130,
	speed: 10,

	//OPen
	openM: function () {
		this.yList = 160;
		for(let i = arrUIPlayer.length; i--;) {
			if(arrUIPlayer[i].class == "minMenu" && arrUIPlayer[i].ID != 0) {
				if(arrUIPlayer[i].visible == false) {
					arrUIPlayer[i].visible = true;
				}
				if(arrUIPlayer[i].y < this.yList) {
				    arrUIPlayer[i].addY += this.speed;
			    }else {
			    	this.yList += 50;
			    }
			}
		}
	},

	//Close
	closeM: function () {
		for(let i = arrUIPlayer.length; i--;) {
			if(arrUIPlayer[i].class == "minMenu" && arrUIPlayer[i].ID != 0) {
				if(arrUIPlayer[i].y > this.y && arrUIPlayer[i].visible == true) {
				    arrUIPlayer[i].addY -= this.speed;
			    }else {
			    	arrUIPlayer[i].visible = false;
			    }
			}
		}
	}
};




