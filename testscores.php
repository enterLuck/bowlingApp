<html>
<head>
<script>
function roll(){
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

	var pinsDown = pin1+pin2+pin3+pin4+pin5+pin6+pin7+pin8+pin9+pin10;
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
	return pinsDown;
}

var score = [];
var strike1 = [];
var strike2 = [];
var strike3 = [];
var strike4 = [];
var strike5 = [];
var strike6 = [];
var strike7 = [];
var strike8 = [];
var strike9 = [];
var strike10 = [];
var strike11 = [];
var strike12 = [];
var spare1 = [];
var spare2 = [];
var spare3 = [];
var spare4 = [];
var spare5 = [];
var spare6 = [];
var spare7 = [];
var spare8 = [];
var spare9 = [];
var spare10 = [];
var spare11 = [];

function addToScore(){
	var pinsDown = roll();
	var newScore = score.push(pinsDown);
 	console.log(newScore);
};

</script>
</head>
<body>
<input type="button" onclick="addToScore();" value="Submit"></input>

</body>
</html>