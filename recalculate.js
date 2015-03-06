function recalculateFrame1(pinCount){
	//placed on frame 2 roll 1
	if(fr.frame1spare ==="/"){
		fr.frame1storeTotal = parseInt(fr.frame1total()) + parseInt(pinCount);
	}else{
		console.log("No recalculation necessary!");
	}
}
