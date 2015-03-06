var pin1=pin2=pin3=pin4=pin5=pin6=pin7=pin8=pin9=pin10 = 0;
var pinCount = pin1+pin2+pin3+pin4+pin5+pin6+pin7+pin8+pin9+pin10;

function rollA(frameNum){	
	 pin1 = Math.floor(Math.random()*2);
	 pin2 = Math.floor(Math.random()*2);
	 pin3 = Math.floor(Math.random()*2);
	 pin4 = Math.floor(Math.random()*2);
	 pin5 = Math.floor(Math.random()*2);
	 pin6 = Math.floor(Math.random()*2);
	 pin7 = Math.floor(Math.random()*2);
	 pin8 = Math.floor(Math.random()*2);
	 pin9 = Math.floor(Math.random()*2);
	 pin10 = Math.floor(Math.random()*2);

	pinCount = pin1+pin2+pin3+pin4+pin5+pin6+pin7+pin8+pin9+pin10;
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
	calcSpareOnly(pinCount,frameNum);
}
function rollB(){
 		pin1=pin2=pin3=pin4=pin5=pin6=pin7=pin8=pin9=pin10 = 0;
		if(pins.pin1!=1){
		 pin1 = Math.floor(Math.random()*2);
		}
		if(pins.pin2!=1){
		 pin2 = Math.floor(Math.random()*2);
		}
		if(pins.pin3!=1){
		 pin3 = Math.floor(Math.random()*2);
		}
		if(pins.pin4!=1){
		 pin4 = Math.floor(Math.random()*2);
		}
		if(pins.pin5!=1){
		 pin5 = Math.floor(Math.random()*2);
		}
		if(pins.pin6!=1){
		 pin6 = Math.floor(Math.random()*2);
		}
		if(pins.pin7!=1){
		 pin7 = Math.floor(Math.random()*2);
		}
		if(pins.pin8!=1){
		 pin8 = Math.floor(Math.random()*2);
		}
		if(pins.pin9!=1){
		 pin9 = Math.floor(Math.random()*2);
		}
		if(pins.pin10!=1){
		 pin10 = Math.floor(Math.random()*2);
		}

		pinCount = pin1+pin2+pin3+pin4+pin5+pin6+pin7+pin8+pin9+pin10;
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
}
function calculatePinsUpRoll1(pinCount){
	return 10-pinCount;
}
function calculatePinsUpRoll2(rolls){
	return 10-rolls;
}

//frame 1
function frame1roll1(){
	rollA();
	console.log("frame 1 roll 1 :"+pinCount);
	var pinsUp = calculatePinsUpRoll1(pinCount);
	var roll1 = pinCount;
	fr.frame1roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
		fr.frame1strike = "X";
	}else if(roll1<1){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="roll again you still have "+pinsUp+" pins standing.";
	}else{
		msg = "err";
	}
	console.log(msg);
	return msg;
};
function frame1roll2(){
	var msg = "";
	if(fr.frame1roll1>9){
		msg = "no second roll because you had a strike";
	}else{
		rollB();
	console.log("frame 1 roll 2 :"+pinCount);
	var roll2 = pinCount;
	fr.frame1roll2 = roll2;
	var rolls = parseInt(fr.frame1roll1)+parseInt(fr.frame1roll2);
	calcStrikeOnly(frameNum,rolls);
	var pinsUp = calculatePinsUpRoll2(rolls);
	var msg = "";
	if(roll2<1){
		msg="Gutter Ball";
	}else if( rolls > 9){
		msg="you have a spare.";
		fr.frame1spare = "/";
	}else if(rolls <10 && roll2>0){
		msg="you left an open frame with "+pinsUp +" pins up";
	}else{
		msg = "err";
	}
	// console.log("fr1r1-"+fr.frame1roll1);
	console.log("Frame 1 Total"+fr.frame1total());
	console.log(msg);
	return msg;
	}
};
//frame 2
function frame2roll1(){
	rollA();
	console.log("frame 2 roll 1 :"+pinCount);
	var pinsUp = calculatePinsUpRoll1(pinCount);
	var roll1 = pinCount;
	fr.frame2roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
		fr.frame2strike = "X";
	}else if(roll1<1){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="roll again you still have "+pinsUp+" pins standing.";
	}else{
		msg = "err";
	}
	console.log(msg);
	return msg;
};
function frame2roll2(){
	var msg = "";
	if(fr.frame2roll1>9){
		msg = "no second roll because you had a strike";
	}else{
		 rollB();
	console.log("frame 2 roll 2 :"+pinCount);
	var roll2 = pinCount;
	fr.frame2roll2 = roll2;
	var rolls = parseInt(fr.frame2roll1)+parseInt(fr.frame2roll2);
	calcStrikeOnly(frameNum,rolls);
	var pinsUp = calculatePinsUpRoll2(rolls);
	var msg = "";
	if(roll2<1){
		msg="Gutter Ball";
	}else if( rolls > 9){
		msg="you have a spare.";
		fr.frame2spare = "/";
	}else if(rolls <10 && roll2>0){
		msg="you left an open frame with "+pinsUp +" pins up";
	}else{
		msg = "err";
	}
	// console.log("fr1r1-"+fr.frame2roll1);
	console.log("Frame 2 Total"+fr.frame2total());
	console.log(msg);
	return msg;
	}
};
//frame 3
function frame3roll1(){
	rollA();
	console.log("frame 3 roll 1 :"+pinCount);
	var pinsUp = calculatePinsUpRoll1(pinCount);
	var roll1 = pinCount;
	fr.frame3roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
		fr.frame3strike = "X";
	}else if(roll1<1){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="roll again you still have "+pinsUp+" pins standing.";
	}else{
		msg = "err";
	}
	console.log(msg);
	return msg;
};
function frame3roll2(){
	var msg = "";
	if(fr.frame3roll1>9){
		msg = "no second roll because you had a strike";
	}else{
		rollB();
	console.log("frame 3 roll 2 :"+pinCount);
	var roll2 = pinCount;
	fr.frame3roll2 = roll2;
	var rolls = parseInt(fr.frame3roll1)+parseInt(fr.frame3roll2);
	calcStrikeOnly(frameNum,rolls);
	var pinsUp = calculatePinsUpRoll2(rolls);
	var msg = "";
	if(roll2<1){
		msg="Gutter Ball";
	}else if( rolls > 9){
		msg="you have a spare.";
		fr.frame3spare = "/";
	}else if(rolls <10 && roll2>0){
		msg="you left an open frame with "+pinsUp +" pins up";
	}else{
		msg = "err";
	}
	// console.log("fr3r1-"+fr.frame3roll1);
	console.log("Frame 3 Total"+fr.frame3total());
	console.log(msg);
	return msg;
	}
};
//frame 4
function frame4roll1(){
	rollA();
	console.log("frame 4 roll 1 :"+pinCount);
	var pinsUp = calculatePinsUpRoll1(pinCount);
	var roll1 = pinCount;
	fr.frame4roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
		fr.frame4strike = "X";
	}else if(roll1<1){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="roll again you still have "+pinsUp+" pins standing.";
	}else{
		msg = "err";
	}
	console.log(msg);
	return msg;
};
function frame4roll2(){
	var msg = "";
	if(fr.frame4roll1>9){
		msg = "no second roll because you had a strike";
	}else{
		 rollB();
	console.log("frame 4 roll 2 :"+pinCount);
	var roll2 = pinCount;
	fr.frame4roll2 = roll2;
	var rolls = parseInt(fr.frame4roll1)+parseInt(fr.frame4roll2);
	calcStrikeOnly(frameNum,rolls);
	var pinsUp = calculatePinsUpRoll2(rolls);
	var msg = "";
	if(roll2<1){
		msg="Gutter Ball";
	}else if( rolls > 9){
		msg="you have a spare.";
		fr.frame4spare = "/";
	}else if(rolls <10 && roll2>0){
		msg="you left an open frame with "+pinsUp +" pins up";
	}else{
		msg = "err";
	}
	// console.log("fr4r1-"+fr.frame4roll1);
	console.log("Frame 4 Total"+fr.frame4total());
	console.log(msg);
	return msg;
	}
};
//frame 5
function frame5roll1(){
	rollA();
	console.log("frame 5 roll 1 :"+pinCount);
	var pinsUp = calculatePinsUpRoll1(pinCount);
	var roll1 = pinCount;
	fr.frame5roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
		fr.frame5strike = "X";
	}else if(roll1<1){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="roll again you still have "+pinsUp+" pins standing.";
	}else{
		msg = "err";
	}
	console.log(msg);
	return msg;
};
function frame5roll2(){
	var msg = "";
	if(fr.frame5roll1>9){
		msg = "no second roll because you had a strike";
	}else{
		rollB();
	console.log("frame 5 roll 2 :"+pinCount);
	var roll2 = pinCount;
	fr.frame5roll2 = roll2;
	var rolls = parseInt(fr.frame5roll1)+parseInt(fr.frame5roll2);
	calcStrikeOnly(frameNum,rolls);
	var pinsUp = calculatePinsUpRoll2(rolls);
	var msg = "";
	if(roll2<1){
		msg="Gutter Ball";
	}else if( rolls > 9){
		msg="you have a spare.";
		fr.frame5spare = "/";
	}else if(rolls <10 && roll2>0){
		msg="you left an open frame with "+pinsUp +" pins up";
	}else{
		msg = "err";
	}
	// console.log("fr5r1-"+fr.frame5roll1);
	console.log("Frame 5 Total"+fr.frame5total());
	console.log(msg);
	return msg;
	}
};
//frame 6
function frame6roll1(){
	rollA();
	console.log("frame 6 roll 1 :"+pinCount);
	var pinsUp = calculatePinsUpRoll1(pinCount);
	var roll1 = pinCount;
	fr.frame6roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
		fr.frame6strike = "X";
	}else if(roll1<1){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="roll again you still have "+pinsUp+" pins standing.";
	}else{
		msg = "err";
	}
	console.log(msg);
	return msg;
};
function frame6roll2(){
	var msg = "";
	if(fr.frame6roll1>9){
		msg = "no second roll because you had a strike";
	}else{
		rollB();
	console.log("frame 6 roll 2 :"+pinCount);
	var roll2 = pinCount;
	fr.frame6roll2 = roll2;
	var rolls = parseInt(fr.frame6roll1)+parseInt(fr.frame6roll2);
	calcStrikeOnly(frameNum,rolls);
	var pinsUp = calculatePinsUpRoll2(rolls);
	var msg = "";
	if(roll2<1){
		msg="Gutter Ball";
	}else if( rolls > 9){
		msg="you have a spare.";
		fr.frame6spare = "/";
	}else if(rolls <10 && roll2>0){
		msg="you left an open frame with "+pinsUp +" pins up";
	}else{
		msg = "err";
	}
	// console.log("fr6r1-"+fr.frame6roll1);
	console.log("Frame 6 Total"+fr.frame6total());
	console.log(msg);
	return msg;
	}
};
//frame 7
function frame7roll1(){
	rollA();
	console.log("frame 7 roll 1 :"+pinCount);
	var pinsUp = calculatePinsUpRoll1(pinCount);
	var roll1 = pinCount;
	fr.frame7roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
		fr.frame7strike = "X";
	}else if(roll1<1){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="roll again you still have "+pinsUp+" pins standing.";
	}else{
		msg = "err";
	}
	console.log(msg);
	return msg;
};
function frame7roll2(){
	var msg = "";
	if(fr.frame7roll1>9){
		msg = "no second roll because you had a strike";
	}else{
		rollB();
	console.log("frame 7 roll 2 :"+pinCount);
	var roll2 = pinCount;
	fr.frame7roll2 = roll2;
	var rolls = parseInt(fr.frame7roll1)+parseInt(fr.frame7roll2);
	calcStrikeOnly(frameNum,rolls);
	var pinsUp = calculatePinsUpRoll2(rolls);
	var msg = "";
	if(roll2<1){
		msg="Gutter Ball";
	}else if( rolls > 9){
		msg="you have a spare.";
		fr.frame7spare = "/";
	}else if(rolls <10 && roll2>0){
		msg="you left an open frame with "+pinsUp +" pins up";
	}else{
		msg = "err";
	}
	// console.log("fr7r1-"+fr.frame7roll1);
	console.log("Frame 7 Total"+fr.frame7total());
	console.log(msg);
	return msg;
	}
};
//frame 8
function frame8roll1(){
	rollA();
	console.log("frame 8 roll 1 :"+pinCount);
	var pinsUp = calculatePinsUpRoll1(pinCount);
	var roll1 = pinCount;
	fr.frame8roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
		fr.frame8strike = "X";
	}else if(roll1<1){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="roll again you still have "+pinsUp+" pins standing.";
	}else{
		msg = "err";
	}
	console.log(msg);
	return msg;
};
function frame8roll2(){
	var msg = "";
	if(fr.frame8roll1>9){
		msg = "no second roll because you had a strike";
	}else{
		rollB();
	console.log("frame 8 roll 2 :"+pinCount);
	var roll2 = pinCount;
	fr.frame8roll2 = roll2;
	var rolls = parseInt(fr.frame8roll1)+parseInt(fr.frame8roll2);
	calcStrikeOnly(frameNum,rolls);
	var pinsUp = calculatePinsUpRoll2(rolls);
	var msg = "";
	if(roll2<1){
		msg="Gutter Ball";
	}else if( rolls > 9){
		msg="you have a spare.";
		fr.frame8spare = "/";
	}else if(rolls <10 && roll2>0){
		msg="you left an open frame with "+pinsUp +" pins up";
	}else{
		msg = "err";
	}
	// console.log("fr8r1-"+fr.frame8roll1);
	console.log("Frame 8 Total"+fr.frame8total());
	console.log(msg);
	return msg;
	}
};
//frame 9
function frame9roll1(){
	rollA();
	console.log("frame 9 roll 1 :"+pinCount);
	var pinsUp = calculatePinsUpRoll1(pinCount);
	var roll1 = pinCount;
	fr.frame9roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
		fr.frame9strike = "X";
	}else if(roll1<1){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="roll again you still have "+pinsUp+" pins standing.";
	}else{
		msg = "err";
	}
	console.log(msg);
	return msg;
};
function frame9roll2(){
	var msg = "";
	if(fr.frame9roll1>9){
		msg = "no second roll because you had a strike";
	}else{
		rollB();
	console.log("frame 9 roll 2 :"+pinCount);
	var roll2 = pinCount;
	fr.frame9roll2 = roll2;
	var rolls = parseInt(fr.frame9roll1)+parseInt(fr.frame9roll2);
	calcStrikeOnly(frameNum,rolls);
	var pinsUp = calculatePinsUpRoll2(rolls);
	var msg = "";
	if(roll2<1){
		msg="Gutter Ball";
	}else if( rolls > 9){
		msg="you have a spare.";
		fr.frame9spare = "/";
	}else if(rolls <10 && roll2>0){
		msg="you left an open frame with "+pinsUp +" pins up";
	}else{
		msg = "err";
	}
	// console.log("fr9r1-"+fr.frame9roll1);
	console.log("Frame 9 Total"+fr.frame9total());
	console.log(msg);
	return msg;
	}
};
//frame 10
function frame10roll1(){
	rollA();
	console.log("frame 10 roll 1 :"+pinCount);
	var pinsUp = calculatePinsUpRoll1(pinCount);
	var roll1 = pinCount;
	fr.frame10roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
		fr.frame10roll1strike = "X";
		fr.frame10get3check = true;
	}else if(roll1<1){
		msg="Gutter Ball";
	}else if(roll1 < 10){
		msg="roll again you still have "+pinsUp+" pins standing.";
	}else{
		msg = "err";
	}
	// console.log("fr10r1-"+fr.frame10roll1);
	console.log(msg);
	return msg;
};

function frame10roll2(){
	var msg = "";
		rollB();
	console.log("frame 10 roll 2 :"+pinCount);
	var roll2 = pinCount;
	fr.frame10roll2 = roll2;
	var rolls = parseInt(fr.frame10roll1)+parseInt(fr.frame10roll2);
	calcStrikeOnly(frameNum,rolls);
	var pinsUp = calculatePinsUpRoll2(rolls);
	var msg = "";
	if(fr.frame10roll1 > 9 && fr.frame10roll2 > 9){
		msg="Strike";
		fr.frame10roll2strike = "X";
	}else if(roll2<1){
		msg="Gutter Ball";
	}else if( rolls > 9){
		msg="you have a spare.";
		fr.frame10spare = "/";
	}else if(rolls <10 && roll2>0){
		msg="you left an open frame with "+pinsUp +" pins up";
	}else{
		msg = "err";
	}
	console.log("Frame Totals:"+fr.frame1total()+
		"fr2"+fr.frame2total()+
		"fr3"+fr.frame3total()+
		"fr4"+fr.frame4total()+
		"fr5"+fr.frame5total()+
		"fr6"+fr.frame6total()+
		"fr7"+fr.frame7total()+
		"fr8"+fr.frame8total()+
		"fr9"+fr.frame9total());
	var pinscore = parseInt(fr.frame1total())+
	parseInt(fr.frame2total())+
	parseInt(fr.frame3total())+
	parseInt(fr.frame4total())+
	parseInt(fr.frame5total())+
	parseInt(fr.frame6total())+
	parseInt(fr.frame7total())+
	parseInt(fr.frame8total())+
	parseInt(fr.frame9total());
	console.log("Actual Pins Down: "+pinscore);

	console.log(msg);
	return msg;
};
function autoCheckforRoll3(){
	var rolls = parseInt(fr.frame10roll1) + parseInt(fr.frame10roll2);
	if(fr.frame10roll1>9){
		fr.frame10get3check = true;
	}else if(rolls > 9){
		fr.frame10get3check = true;
	}else;
	return fr.frame10get3check;
}
function frame10roll3(){
	var msg = "";
	if(autoCheckforRoll3()){
		if(fr.frame10roll1strike==="X"&&fr.frame10roll2strike==="X"){
		var pin1=pin2=pin3=pin4=pin5=pin6=pin7=pin8=pin9=pin10 = 0;
		}
		if(fr.frame10spare==="/"){
		var pin1=pin2=pin3=pin4=pin5=pin6=pin7=pin8=pin9=pin10 = 0;
		}
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
	console.log("frame 10 roll 3 :"+pinCount);
	var roll3 = pinCount;
	fr.frame10roll3 = roll3;
	var frame10roll1and2 = parseInt(fr.frame10roll1)+parseInt(fr.frame10roll2);
	if(fr.frame10roll1>9&&fr.frame10roll2>9&&roll3>9){
		msg="Strike";
		fr.frame10roll3strike = "X";
		fr.frame10roll3 = 10;
		frame10total = 50;
	}else if(fr.frame10roll1<10&&roll3>9){
		msg="Strike";
		fr.frame10roll3 = 10;
		frame10total = 30;
	}else if(fr.frame10roll1<10&&roll3<10){
		fr.frame10roll3 = 10;
		frame10total = 20+parseInt(roll3);
	}else{
		msg = "err";
	}
	console.log("fr10r1-"+fr.frame10roll1);
	console.log("fr10r2-"+fr.frame10roll2);
	console.log("Frame Totals:"+"fr1"+fr.frame1total()+
		"fr2"+fr.frame2total()+
		"fr3"+fr.frame3total()+
		"fr4"+fr.frame4total()+
		"fr5"+fr.frame5total()+
		"fr6"+fr.frame6total()+
		"fr7"+fr.frame7total()+
		"fr8"+fr.frame8total()+
		"fr9"+fr.frame9total()+
		"fr10"+fr.frame10total());
	var pinscore = parseInt(fr.frame1total())+
	parseInt(fr.frame2total())+
	parseInt(fr.frame3total())+
	parseInt(fr.frame4total())+
	parseInt(fr.frame5total())+
	parseInt(fr.frame6total())+
	parseInt(fr.frame7total())+
	parseInt(fr.frame8total())+
	parseInt(fr.frame9total())+
	parseInt(fr.frame10total());
	console.log("Actual Pins Down: "+pinscore);
	
	console.log("Actual Score: ");


	console.log(msg);
	return msg;
	}else{
		msg="Sorry you did not get a spare or strike so no third roll";
		console.log(msg);
		return msg;
	}
};
