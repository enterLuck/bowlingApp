<html>
<head>
<script>
var score=0;
var rollCount=1;
var frameCount=1;
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
	// console.log(pin1);
	// console.log(pin2);
	// console.log(pin3);
	// console.log(pin4);
	// console.log(pin5);
	// console.log(pin6);
	// console.log(pin7);
	// console.log(pin8);
	// console.log(pin9);
	// console.log(pin10);
	// console.log(pinsDown);
	return pinsDown;
}
function addToScore(){

	if(rollCount===1 && frameCount===1&&pinsDown){

	}
	var tempscore = document.getElementById("score").value;

	score = parseInt(score) + parseInt(tempscore);
	console.log(score);
};
</script>
</head>
<body>
<input type="text" id="score"></input>
<input type="button" onclick="addToScore();" value="Submit"></input>

</body>
</html>