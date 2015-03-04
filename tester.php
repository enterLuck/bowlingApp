<html>
<head>
<script>

var r = {};
var r = {
	roll1:0,
	roll2:0,
	frameTotal:function(){
		return this.roll1+this.roll2;
	}
};

function roll1(){
	var rollFirst=0;
	console.log(document.getElementById('roll1').value);
	var roll1 = document.getElementById('roll1').value;
	rollFirst = roll1;
	var msg = "";
	if(roll1===10){
		msg="Strike";
	}else if(roll1===0){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="pins down: "+ roll1;
	}else{
		msg = "err";
	}
	console.log(msg);
	return msg;
};
function roll2(){
	console.log(document.getElementById('roll2').value);
	var roll2 = document.getElementById('roll2').value;
	var rolls=parseInt(rollFirst)+parseInt(roll2);
	console.log(rolls);
	var msg = "";
	if(rolls===10){
		msg="Spare";
	}else if(roll2===0){
		msg="Gutter Ball";
	}else if(rolls < 10){
		msg="Open Frame score of: "+ rolls;
	}else{
		msg = "err";
	}
	console.log(msg);
	return msg;
};




function addToScore(){
	var pinsDown = roll();
	var newScore = score.push(pinsDown);
 	console.log(newScore);
};

</script>
</head>
<body>



<input type="text" id="roll1"></input>
<input type="button" onclick="roll1();" value="Roll1"></input>
<input type="text" id="roll2"></input>
<input type="button" onclick="roll2();" value="Roll2"></input>


</body>
</html>