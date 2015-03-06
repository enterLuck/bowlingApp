function calcStrikeOnly(rolls,frameNum){
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