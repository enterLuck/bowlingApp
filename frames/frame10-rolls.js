//frame 10
function frame10roll1(){
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
	console.log("frame 10 roll 1 :"+pinCount);
	var pinsUp = 10-pinCount;
	var roll1 = pinCount;
	fr.frame10roll1 = roll1;
	var msg = "";
	if(roll1>9){
		msg="Strike";
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
	console.log("frame 10 roll 2 :"+pinCount);
	var roll2 = pinCount;
	fr.frame10roll2 = roll2;
	var rolls = parseInt(fr.frame10roll1)+parseInt(fr.frame10roll2);
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

function frame10roll3(){
	var msg = "";
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

	console.log(msg);
	return msg;
};
