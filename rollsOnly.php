<html>
<head>
<script>
var fr = {};
var fr = {
	frame1roll1:0,
	frame1roll2:0,
	frame1total:function(){
		return parseInt(this.frame1roll1)+parseInt(this.frame1roll2);
	},	
	frame2roll1:0,
	frame2roll2:0,
	frame3roll1:0,
	frame3roll2:0,
	frame4roll1:0,
	frame4roll2:0,
	frame5roll1:0,
	frame5roll2:0,
	frame6roll1:0,
	frame6roll2:0,
	frame7roll1:0,
	frame7roll2:0,
	frame8roll1:0,
	frame8roll2:0,	
	frame9roll1:0,
	frame9roll2:0,
	frame10roll1:0,
	frame10roll2:0,
	frame10roll3:0
};
var pins = {};
var pins = {
	pin1:0,
	pin2:0,
	pin3:0,
	pin4:0,
	pin5:0,
	pin6:0,
	pin7:0,
	pin8:0,
	pin9:0,
	pin10:0
}
var n = 1;
var c = 1;
function roll1(){
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
	pins.pin1 = pin1;
	pins.pin2 = pin2;
	pins.pin3 = pin3;
	pins.pin4 = pin4;
	pins.pin5 = pin5;
	pins.pin6 = pin6;
	pins.pin7 = pin7;
	pins.pin8 = pin8;
	pins.pin9 = pin9;
	pins.pin10 = pin10;
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
	console.log("pin cnt:"+pinCount);
	var pinsUp = 10-pinCount;
	var roll1 = pinCount;
	fr.frame1roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
	}else if(roll1<1){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="roll again you still have "+pinsUp+" pins standing.";
	}else{
		msg = "err";
	}
	console.log("fr1r1-"+fr.frame1roll1);
	console.log("fr1r2-"+fr.frame1roll2);
	// console.log(fr.frame2roll1);
	// console.log(fr.frame2roll2);
	// console.log(fr.frame3roll1);
	// console.log(fr.frame3roll2);
	// console.log(fr.frame4roll1);
	// console.log(fr.frame4roll2);
	// console.log(fr.frame5roll1);
	// console.log(fr.frame5roll2);
	// console.log(fr.frame6roll1);
	// console.log(fr.frame6roll2);
	// console.log(fr.frame7roll1);
	// console.log(fr.frame7roll2);
	// console.log(fr.frame8roll1);
	// console.log(fr.frame8roll2);	
	// console.log(fr.frame9roll1);
	// console.log(fr.frame9roll2);
	// console.log(fr.frame10roll1);
	// console.log(fr.frame10roll2);
	console.log(msg);
	return msg;
};
function roll2(){
	var msg = "";
	if(fr.frame1roll1>9){
		msg = "no second roll because you had a strike";
	}else{
		var pin1=pin2=pin3=pin4=pin5=pin6=pin7=pin8=pin9=pin10 = 0;
		if(pins.pin1!=1){
		var pin1 = Math.floor(Math.random()*2);
		}
		if(pins.pin2!=1){
		var pin2 = Math.floor(Math.random()*2);
		}
		if(pins.pin3!=1){
		var pin3 = Math.floor(Math.random()*2);
		}
		if(pins.pin4!=1){
		var pin4 = Math.floor(Math.random()*2);
		}
		if(pins.pin5!=1){
		var pin5 = Math.floor(Math.random()*2);
		}
		if(pins.pin6!=1){
		var pin6 = Math.floor(Math.random()*2);
		}
		if(pins.pin7!=1){
		var pin7 = Math.floor(Math.random()*2);
		}
		if(pins.pin8!=1){
		var pin8 = Math.floor(Math.random()*2);
		}
		if(pins.pin9!=1){
		var pin9 = Math.floor(Math.random()*2);
		}
		if(pins.pin10!=1){
		var pin10 = Math.floor(Math.random()*2);
		}

		var pinCount = pin1+pin2+pin3+pin4+pin5+pin6+pin7+pin8+pin9+pin10;
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
	console.log("pin cnt:"+pinCount);
	var roll2 = pinCount;
	fr.frame1roll2 = roll2;
	var rolls = parseInt(fr.frame1roll1)+parseInt(fr.frame1roll2);
	var pinsUp = 10-rolls;
	var msg = "";
	if(roll2<1){
		msg="Gutter Ball";
	}else if( rolls > 9){
		msg="you have a spare.";
	}else if(rolls <10 && roll2>0){
		msg="you left an open frame with "+pinsUp +" pins up";
	}else{
		msg = "err";
	}
	console.log("fr1r1-"+fr.frame1roll1);
	console.log("fr1r2-"+fr.frame1roll2);
	// console.log(fr.frame2roll1);
	// console.log(fr.frame2roll2);
	// console.log(fr.frame3roll1);
	// console.log(fr.frame3roll2);
	// console.log(fr.frame4roll1);
	// console.log(fr.frame4roll2);
	// console.log(fr.frame5roll1);
	// console.log(fr.frame5roll2);
	// console.log(fr.frame6roll1);
	// console.log(fr.frame6roll2);
	// console.log(fr.frame7roll1);
	// console.log(fr.frame7roll2);
	// console.log(fr.frame8roll1);
	// console.log(fr.frame8roll2);	
	// console.log(fr.frame9roll1);
	// console.log(fr.frame9roll2);
	// console.log(fr.frame10roll1);
	// console.log(fr.frame10roll2);
	console.log("Frame Total"+fr.frame1total());
	console.log(msg);
	return msg;
	}
};

</script>
</head>
<body>

<input type="button" onclick="roll1();" value="roll1"></input>
<input type="button" onclick="roll2();" value="roll2"></input>


</body>
</html>