<html>
<head>
<script>

var fr = {};
var fr = {
	frame1roll1:0,
	frame1roll2:0,
	frame2roll1:0,
	frame2roll2:0,
	frame3roll1:0,
	frame3roll2:0,
	frame4roll1:0,
	frame4roll2:0,
	frame5roll1:0,
	frame5roll2:0,
	frame6roll1:0,
	frame6roll2:0,
	frame7roll1:0,
	frame7roll2:0,
	frame8roll1:0,
	frame8roll2:0,	
	frame9roll1:0,
	frame9roll2:0,
	frame10roll1:0,
	frame10roll2:0,
	frame10roll3:0,
	frame1total:function(){
		if(parseInt(this.frame1roll1)>9){
			console.log("Strike");
			return "X";
		}else if((parseInt(this.frame1roll1)+parseInt(this.frame1roll2)>9){
			console.log("Spare");
			return "/";
		}else{
			console.log(parseInt(this.frame1roll1)+parseInt(this.frame1roll2));
			return "open";
		}

	}	
	frame2total:function(){
		if(fr.frame1roll1>9){
			
		}else{

		}
	}	
	frame3total:function(){
		return parseInt(this.frame3roll1)+parseInt(this.frame3roll2);
	}	
	frame4total:function(){
		return parseInt(this.frame4roll1)+parseInt(this.frame4roll2);
	}	
	frame5total:function(){
		return parseInt(this.frame5roll1)+parseInt(this.frame5roll2);
	}	
	frame6total:function(){
		return parseInt(this.frame6roll1)+parseInt(this.frame6roll2);
	}	
	frame7total:function(){
		return parseInt(this.frame7roll1)+parseInt(this.frame7roll2);
	}	
	frame8total:function(){
		return parseInt(this.frame8roll1)+parseInt(this.frame8roll2);
	}	
	frame9total:function(){
		return parseInt(this.frame8roll1)+parseInt(this.frame8roll2);
	}	
	frame10total:function(){
		var temp = parseInt(this.frame9roll1)+parseInt(this.frame9roll2);
		if(temp>9){

		}
	}	
};
var p = [];
var counter=1;
var inSide=1;
function strike(){

}
function spare(){

}

</script>
</head>
<body>



<input type="text" id="roll1"></input>
<input type="button" onclick="strike();" value="Strike"></input>


</body>
</html>