<html>
<head>
<script>

var r = {};
var r = {
	roll1:0,
	roll2:0,
	frame1total:function(){
		return parseInt(this.roll1)+parseInt(this.roll2);
	}	
};
var p = [];
var counter=1;
var inSide=1;
function anotherStrike(){
	var arr = [
	document.getElementById("roll2"),
	document.getElementById("roll3")	
	]
	if(pinCnt>9){
		console.log("Strike");
		if(inSide){
			counter=rollnum;
		}else{
			inside=0;
		}
	}	
	p.push(pinCnt);
	console.log(p.toString());
	rollnum++;
}

</script>
</head>
<body>



<input type="text" id="roll1"></input>
<input type="text" id="roll2"></input>
<input type="text" id="roll3"></input>
<input type="button" onclick="anotherStrike();" value="Strike"></input>


</body>
</html>