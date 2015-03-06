
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
}

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
}
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






