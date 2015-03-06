function calcSpare(pinCount){
	//placed on frame 2 roll 1
	if(fr.frame1spare ==="/"){
		fr.frame1storeTotal = parseInt(fr.frame1total()) + parseInt(pinCount);
	}else{
		console.log("No recalculation necessary!");
	}
}
function calcStrike(rolls){
	if(fr.frame1strike === "X"){
		if(fr.frame2strike === "X"){

		}else if(fr.frame2spare === "/"){

		}
		else{
		fr.frame1storeTotal = parseInt(fr.frame1total()) + parseInt(rolls);
		}
	}
}
function calcStrikeSpare(){

}
function calcStrikeStrike(){}


