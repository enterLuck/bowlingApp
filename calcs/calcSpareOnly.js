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