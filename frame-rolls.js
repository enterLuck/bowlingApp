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
	rollA(1);
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
	calcStrikeOnly(1,rolls);
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
	rollA(2);
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
	calcStrikeOnly(2,rolls);
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
	rollA(3);
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
	calcStrikeOnly(3,rolls);
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
	rollA(4);
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
	calcStrikeOnly(4,rolls);
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
	rollA(5);
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
	calcStrikeOnly(5,rolls);
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
	rollA(6);
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
	calcStrikeOnly(6,rolls);
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
	rollA(7);
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
	calcStrikeOnly(7,rolls);
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
	rollA(8);
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
	calcStrikeOnly(8,rolls);
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
	rollA(9);
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
	calcStrikeOnly(9,rolls);
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
	rollA(10);
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
	calcStrikeOnly(10,rolls);
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
	var nmb = 0;
	var tot = [];
	var temp1 = 0;
	var temp2 = 0;

	for(i=1;i<11;i++){
		temp1 = parseInt(fr["frame"+i+"storeTotal"]);
		temp2 = parseInt(fr["frame"+i+"total"]());
		console.log("temp1:"+i+" " +temp1);
		console.log("temp2:"+i+" " +temp2);
		if(temp1!=0){
			tot.push(temp1);
		}else{
			tot.push(temp2);
		}
	}
	console.log("FRAME TOTALS");
	console.log("fr1"+": "+ tot[0]);
	console.log("fr2"+": "+ tot[1]);
	console.log("fr3"+": "+ tot[2]);
	console.log("fr4"+": "+ tot[3]);
	console.log("fr5"+": "+ tot[4]);
	console.log("fr6"+": "+ tot[5]);
	console.log("fr7"+": "+ tot[6]);
	console.log("fr8"+": "+ tot[7]);
	console.log("fr9"+": "+ tot[8]);
	console.log("fr10"+": "+ tot[9]);


	var finalAggregate = parseInt(tot[0]) + 
	parseInt(tot[1]) + 
	parseInt(tot[2]) + 
	parseInt(tot[3]) + 
	parseInt(tot[4]) + 
	parseInt(tot[5]) + 
	parseInt(tot[6]) + 
	parseInt(tot[7]) + 
	parseInt(tot[8]) + 
	parseInt(tot[9]);
	// var pinscore = parseInt(fr.frame1total())+
	// parseInt(fr.frame2total())+
	// parseInt(fr.frame3total())+
	// parseInt(fr.frame4total())+
	// parseInt(fr.frame5total())+
	// parseInt(fr.frame6total())+
	// parseInt(fr.frame7total())+
	// parseInt(fr.frame8total())+
	// parseInt(fr.frame9total())+
	// parseInt(fr.frame10total());
	// console.log("Actual Pins Down: "+pinscore);
	
	console.log("Actual Score: "+ finalAggregate);

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
	var nmb = 0;
	var tot = [];
	var temp1 = 0;
	var temp2 = 0;
	for(i=1;i<11;i++){
		temp1 = parseInt(fr["frame"+i+"storeTotal"]);
		temp2 = parseInt(fr["frame"+i+"total"]());
		if(temp1>0){
			tot.push(temp1);
		}else{
			tot.push(temp2);
		}
	}
	console.log("FRAME TOTALS");
	console.log("fr1"+": "+ tot[0]);
	console.log("fr2"+": "+ tot[1]);
	console.log("fr3"+": "+ tot[2]);
	console.log("fr4"+": "+ tot[3]);
	console.log("fr5"+": "+ tot[4]);
	console.log("fr6"+": "+ tot[5]);
	console.log("fr7"+": "+ tot[6]);
	console.log("fr8"+": "+ tot[7]);
	console.log("fr9"+": "+ tot[8]);
	console.log("fr10"+": "+ tot[9]);

	var finalAggregate = parseInt(tot[0]) + 
	parseInt(tot[1]) + 
	parseInt(tot[2]) + 
	parseInt(tot[3]) + 
	parseInt(tot[4]) + 
	parseInt(tot[5]) + 
	parseInt(tot[6]) + 
	parseInt(tot[7]) + 
	parseInt(tot[8]) + 
	parseInt(tot[9]);
	// var pinscore = parseInt(fr.frame1total())+
	// parseInt(fr.frame2total())+
	// parseInt(fr.frame3total())+
	// parseInt(fr.frame4total())+
	// parseInt(fr.frame5total())+
	// parseInt(fr.frame6total())+
	// parseInt(fr.frame7total())+
	// parseInt(fr.frame8total())+
	// parseInt(fr.frame9total())+
	// parseInt(fr.frame10total());
	// console.log("Actual Pins Down: "+pinscore);
	
	console.log("Actual Score: "+ finalAggregate);


	console.log(msg);
	return msg;
	}else{
		msg="Sorry you did not get a spare or strike so no third roll";
		console.log(msg);
		return msg;
	}
};

function calcSpareOnly(pinCount,frameNum){
	// 1 frame ago spare equals current pins plus 10
	var previousFrameNum = frameNum - 1;
	console.log(frameNum);
	console.log(previousFrameNum);
	if(fr["frame"+previousFrameNum+"spare"] =="/"){
		console.log(parseInt(pinCount));

		fr["frame"+previousFrameNum+"storeTotal"] = parseInt(fr["frame"+previousFrameNum+"total"]()) + parseInt(pinCount);
			console.log(fr["frame"+previousFrameNum+"storeTotal"]);
			return fr["frame"+previousFrameNum+"storeTotal"];
	}else{
		console.log("No recalculation necessary!");
		return "No recalculation necessary!";
	}
};

function calcStrikeOnly(frameNum,rolls){
	// 1 frame ago spare equals current pins plus 10
	var previousFrameNum = frameNum - 1;
	if(fr["frame"+previousFrameNum+"strike"] == "X"){
		if(fr["frame"+frameNum+"strike"] == "X"){
			console.log("do nothing");
		}else{
			fr["frame"+previousFrameNum+"storeTotal"] = parseInt(fr["frame"+previousFrameNum+"total"]()) + parseInt(rolls);
			console.log(fr["frame"+previousFrameNum+"storeTotal"]);
		}
	}
};

function calcTurkey(roll1,frameNum){
 	// 2 frames ago strike equals 30
	var previousFrameNum = frameNum - 1;
	var beforePreviousFrameNum = frameNum - 2;
	if((fr["frame"+beforePreviousFrameNum+"strike"] == "X") && (fr["frame"+previousFrameNum+"strike"] == "X") && (roll1>9)){
			fr["frame"+beforePreviousFrameNum+"storeTotal"] = 30;
			console.log(fr["frame"+beforePreviousFrameNum+"storeTotal"]);
	}
	return "turkey";
}
function calcStrikeSpare(roll1,frameNum){
	// 2 frames ago strike previous frame spare
	var previousFrameNum = frameNum - 1;
	var beforePreviousFrameNum = frameNum - 2;
	if((fr["frame"+beforePreviousFrameNum+"strike"] == "X") && (fr["frame"+previousFrameNum+"spare"] == "/") && (roll1<10)){
			fr["frame"+beforePreviousFrameNum+"storeTotal"] = 20 + roll1;
			console.log("running:"+calcSpareOnly(roll1,frameNum));
			console.log(fr["frame"+beforePreviousFrameNum+"storeTotal"]);
			return fr["frame"+beforePreviousFrameNum+"storeTotal"];
	}else{
		return "nada";
	}

}
function calcSpareStrike(frameNum,rolls){
 	// 3 frames ago spare 2 frames ago strike
	var previousFrameNum = frameNum - 1;
	var beforePreviousFrameNum = frameNum - 2;
	if((fr["frame"+beforePreviousFrameNum+"spare"] == "/")&&(fr["frame"+previousFrameNum+"strike"] == "X")){
		fr["frame"+beforePreviousFrameNum+"storeTotal"] = 20 + rolls;
		console.log(fr["frame"+beforePreviousFrameNum+"storeTotal"]);
		return fr["frame"+beforePreviousFrameNum+"storeTotal"];
	}else{
		return "nada";
	}
}






