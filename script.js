




var pin1 = Math.floor(Math.random()*2);
var pin2 = Math.floor(Math.random()*2);
var pin3 = Math.floor(Math.random()*2);
var pin4 = Math.floor(Math.random()*2);
var pin5 = Math.floor(Math.random()*2);
var pin6 = Math.floor(Math.random()*2);
var pin7 = Math.floor(Math.random()*2);
var pin8 = Math.floor(Math.random()*2);
var pin9 = Math.floor(Math.random()*2);
var pin10 = Math.floor(Math.random()*2);

var pinCount = pin1+pin2+pin3+pin4+pin5+pin6+pin7+pin8+pin9+pin10;
var pinsUp = new Array();
var pinsDown = new Array();
for(i = 1;i<11;i++){
	if("pin"+i === 0){
		console.log(pinsUp.push("pin"+i));
	}
	else{
		console.log(pinsDown.push("pin"+i));
	}
}
console.log(pin1);
console.log(pin2);
console.log(pin3);
console.log(pin4);
console.log(pin5);
console.log(pin6);
console.log(pin7);
console.log(pin8);
console.log(pin9);
console.log(pin10);
var pin;
var pin2;
var pinsRemaining = "";
var pinsNotRemaining = "";
for(pin in pinsUp){
	if(pin)
	pinsRemaining+=pinsUp[pin];
};
for(pin2 in pinsDown){
	pinsNotRemaining+=pinsDown[pin2];
};
console.log(pinCount);
console.log(pinsRemaining);
console.log(pinsNotRemaining);


// var startPins = 10;
// var currentPins = 0;
// var currentFrame = 0;
// var allFrames = 10;
// function roll(){
// 	currentPins = startPins-firstRoll;
// 	return currentPins;
// }
// function frame(currentFrame){
// 	currentFrame = currentFrame - 1;
// 	return currentFrame;
// }
// function numberOfPlayers(n){

// }
// function numberOfPlayers(n){
// 	for(int i,i<n,i++){
// 		prompt("Please enter the name of player " + n + ": ");
// 	}
// }
// function totalFrame(){
	
// }
// function totalScore(){
	
// }
// function compareTotals(args){
// 	var winner = "";

// 	return winner;
// }
// function alertStrike(){
// 	prompt("Strike!");
// }
// function alertSpare(){
// 	prompt("Spare.");
// }
// function alertTurkey(){
// 	prompt("Gobble.Gobble.Gobble. Turkey!")
// }
// function currentScore(){
	
// 	return score;
// }




// var thirdRoll = Math.floor(Math.random()*ballsDown);