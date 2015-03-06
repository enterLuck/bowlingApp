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