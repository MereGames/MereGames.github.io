var pjs = new PointJS('2d', 950, 550);

var log = pjs.system.log;
var game = pjs.game;
var point = pjs.vector.point;
var camera = pjs.camera;
var brush = pjs.brush;
var OOP = pjs.OOP;
var math = pjs.math;
var vector = pjs.vector;
var v2d = vector.v2d;
var w2h = vector.w2h;
var system = pjs.system;
var resources = pjs.resources;
var tiles = pjs.tiles;

var key = pjs.keyControl;
key.initKeyControl();

pjs.system.initFPSCheck();

var mouse = pjs.mouseControl;
mouse.initMouseControl();

var gameWidth = game.getWH().w;
var gameHeight = game.getWH().h;

var fpsGame = pjs.system.getFPS();