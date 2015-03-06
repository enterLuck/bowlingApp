function calcSpareOnly(pinCount,frameNum){
	// 1 frame ago spare equals current pins plus 10
	var previousFrameNum = frameNum - 1;
	if(fr["frame"+previousFrameNum+"spare"] =="/"){
		fr["frame"+previousFrameNum+"storeTotal"] = parseInt(fr.frame1total()) + parseInt(pinCount);
	}else{
		console.log("No recalculation necessary!");
	}
}
function calcStrikeOnly(rolls,frameNum){
	// 1 frame ago spare equals current pins plus 10
	var previousFrameNum = frameNum - 1;
	if(fr["frame"+previousFrameNum+"strike"] == "X"){
		if(fr["frame"+frameNum+"strike"] == "X"){

		}else{
			fr["frame"+previousFrameNum+"storeTotal"] = parseInt(fr["frame"+previousFrameNum+"total()"]) + parseInt(rolls);
		}
	}
}
function calcStrikeSpare(roll1,frameNum){
	// 2 frames ago strike previous frame spare
	var previousFrameNum = frameNum - 1;
	var beforePreviousFrameNum = frameNum - 2;
	if((fr["frame"+beforePreviousFrameNum+"strike"] == "X") && (fr["frame"+previousFrameNum+"spare"] == "/") && (roll1<10)){
			fr["frame"+beforePreviousFrameNum+"storeTotal"] = 20 + roll1;
	}
}
function calcTurkey(roll1,frameNum){
 	// 2 frames ago strike equals 30
	var previousFrameNum = frameNum - 1;
	var beforePreviousFrameNum = frameNum - 2;
	if((fr["frame"+beforePreviousFrameNum+"strike"] == "X") && (fr["frame"+previousFrameNum+"strike"] == "X") && (roll1>9)){
			fr["frame"+beforePreviousFrameNum+"storeTotal"] = 30;
	}
	return "turkey";
}
function calcSpareStrike(frameNum,rolls){
 	// 3 frames ago spare 2 frames ago strike
	var beforePreviousFrameNum = frameNum - 2;
	var before2PreviousFrameNum = frameNum - 3;
	if((fr["frame"+before2PreviousFrameNum+"spare"] == "/")&&(fr["frame"+beforePreviousFrameNum+"strike"] == "X")){
		fr["frame"+before2PreviousFrameNum+"storeTotal"] = 20 + rolls;
	}
}
