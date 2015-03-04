<html>
<head>
<script>

var r = {};
var r = {
	roll1:0,
	roll2:0,
	frame1total:function(){
		return parseInt(this.roll1)+parseInt(this.roll2);
	}	
};

function roll1(){
	console.log(document.getElementById('roll1').value);
	var roll1 = document.getElementById('roll1').value;
	r.roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
	}else if(roll1<1){
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
	var msg = "";
	if(r.roll1>9){
		msg = "no second roll because you had a strike";
	}else{
	console.log(document.getElementById('roll2').value);
	var roll2 = document.getElementById('roll2').value;
	r.roll2 = roll2;
	var rolls=parseInt(r.roll1)+parseInt(roll2);
	console.log(rolls);
	if(rolls>9){
		msg="Spare";
	}else if(roll2<1){
		msg="Gutter Ball";
	}else if(rolls < 10){
		msg="Open Frame score of: "+ rolls;
	}else{
		msg = "err";
	}
	}
	console.log(msg);
	console.log("Frame Total"+r.frame1total());
	return msg;
};
	var rollTracker=[];
function strikePlayer1(roll1){
	rollTracker.push(roll1);
}
function sparePlayer1(){
	
}



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