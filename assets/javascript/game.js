var obi = "";
var yoda = "";
var vader = "";
var luke = "";

function start() {
	obi = new fighter("Obi Wan Kenobi", 150, 8, 10);
	yoda = new fighter("Yoda", 200, 6, 25);
	vader = new fighter("Darth Vader", 300, 16, 30);
	luke = new fighter("Luke Skywalker", 180, 20, 15);	
}
function fighter(name, health, attack, counter){
	this.name=name;
	this.health=health;
	this.attack=attack;
	this.counter=counter;
	$("#starting-point").html('<img src="../images/luke.jpg" id="profile-pic">');
}
document.onload = start();
