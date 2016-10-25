//@ Buldings for Big War: The origin of the war

var preBuild = {
	x: 0,
	y: 0,
	empty: false
};

var buildings = [
    {name: "army", price: 700, select: false, radius: 64*3, time: 70, faer: false, reload: 0, ataca: 0, health: 540, addRes: {name: "noen", num: 0}},
    {name: "factory_1", price: 660, select: false, radius: 64*3, time: 0, faer: false, reload: 0, ataca: 0, health: 430, addRes: {name: "money", num: 47}},
    {name: "touer", price: 1540, select: false, radius: 64*3, time: 0, faer: true, reload: 90, ataca: 55, health: 750, addRes: {name: "none", num: 0}},
    {name: "armyHard", price: 1860, select: false, radius: 64*3, time: 120, faer: false, reload: 0, ataca: 0, health: 980, addRes: {name: "noee", num: 0}},
    {name: "armyFast", price: 1630, select: false, radius: 64*3, time: 90, faer: false, reload: 0, ataca: 0, health: 360, addRes: {name: "none", num: 0}},
    {name: "healthReg", price: 5100, select: false, radius: 64*3, time: 0, faer: false, reload: 0, ataca: 0, health: 650, addRes: {name: "health", num: 5}},
    {name: "armyTwo", price: 6300, select: false, radius: 64*3, time: 160, faer: false, reload: 0, ataca: 0, health: 1860, addRes: {name: "noen", num: 0}},
    {name: "factory_2", price: 2240, select: false, radius: 64*3, time: 0, faer: false, reload: 0, ataca: 0, health: 810, addRes: {name: "money", num: 61}},
    {name: "touer2", price: 5500, select: false, radius: 64*3, time: 0, faer: true, reload: 100, ataca: 110, health: 1400, addRes: {name: "none", num: 0}},
    {name: "armyHard2", price: 8560, select: false, radius: 64*3, time: 230, faer: false, reload: 0, ataca: 0, health: 2780, addRes: {name: "noee", num: 0}},
    {name: "armyFast2", price: 6630, select: false, radius: 64*3, time: 40, faer: false, reload: 0, ataca: 0, health: 1250, addRes: {name: "none", num: 0}},
    {name: "healthReg2", price: 9900, select: false, radius: 64*3, time: 0, faer: false, reload: 0, ataca: 0, health: 2400, addRes: {name: "health", num: 10}}
];
