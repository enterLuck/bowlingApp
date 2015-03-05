<html>
<head>
<script>
var pins = {};
var pins = {
	pin1:0,
	pin2:0,
	pin3:0,
	pin4:0,
	pin5:0,
	pin6:0,
	pin7:0,
	pin8:0,
	pin9:0,
	pin10:0
};
var fr = {};
var fr = {
	frame1roll1:0,
	frame1roll2:0,
	frame1strike:"",
	frame1spare:"",
	frame1total:function(){
		var total = parseInt(this.frame1roll1)+parseInt(this.frame1roll2);
		if(parseInt(this.frame1roll1)>9){
			this.frame1strike="X";
		}else if(total>9&&parseInt(this.frame1roll1)<10){
			this.frame1spare="/";
		}
		return total;
	},	
	frame2roll1:0,
	frame2roll2:0,
	frame2strike:"",
	frame2spare:"",
	frame2total:function(){
		var total = parseInt(this.frame1roll1)+parseInt(this.frame1roll2);
		if(parseInt(this.frame1roll1)>9){
			this.frame1strike="X";
		}else if(total>9&&parseInt(this.frame1roll1)<10){
			this.frame1spare="/";
		}
		return total;
	},	
	frame3roll1:0,
	frame3roll2:0,
	frame3strike:"",
	frame3spare:"",
	frame3total:function(){
		var total = parseInt(this.frame1roll1)+parseInt(this.frame1roll2);
		if(parseInt(this.frame1roll1)>9){
			this.frame1strike="X";
		}else if(total>9&&parseInt(this.frame1roll1)<10){
			this.frame1spare="/";
		}
		return total;
	},	
	frame4roll1:0,
	frame4roll2:0,
	frame4strike:"",
	frame4spare:"",	
	frame4total:function(){
		var total = parseInt(this.frame1roll1)+parseInt(this.frame1roll2);
		if(parseInt(this.frame1roll1)>9){
			this.frame1strike="X";
		}else if(total>9&&parseInt(this.frame1roll1)<10){
			this.frame1spare="/";
		}
		return total;
	},	
	frame5roll1:0,
	frame5roll2:0,
	frame5strike:"",
	frame5spare:"",	
	frame5total:function(){
		var total = parseInt(this.frame1roll1)+parseInt(this.frame1roll2);
		if(parseInt(this.frame1roll1)>9){
			this.frame1strike="X";
		}else if(total>9&&parseInt(this.frame1roll1)<10){
			this.frame1spare="/";
		}
		return total;
	},	
	frame6roll1:0,
	frame6roll2:0,
	frame6strike:"",
	frame6spare:"",	
	frame6total:function(){
		var total = parseInt(this.frame1roll1)+parseInt(this.frame1roll2);
		if(parseInt(this.frame1roll1)>9){
			this.frame1strike="X";
		}else if(total>9&&parseInt(this.frame1roll1)<10){
			this.frame1spare="/";
		}
		return total;
	},	
	frame7roll1:0,
	frame7roll2:0,
	frame7strike:"",
	frame7spare:"",	
	frame7total:function(){
		var total = parseInt(this.frame1roll1)+parseInt(this.frame1roll2);
		if(parseInt(this.frame1roll1)>9){
			this.frame1strike="X";
		}else if(total>9&&parseInt(this.frame1roll1)<10){
			this.frame1spare="/";
		}
		return total;
	},	
	frame8roll1:0,
	frame8roll2:0,	
	frame8strike:"",
	frame8spare:"",	
	frame8total:function(){
		var total = parseInt(this.frame1roll1)+parseInt(this.frame1roll2);
		if(parseInt(this.frame1roll1)>9){
			this.frame1strike="X";
		}else if(total>9&&parseInt(this.frame1roll1)<10){
			this.frame1spare="/";
		}
		return total;
	},	
	frame9roll1:0,
	frame9roll2:0,
	frame9strike:"",
	frame9spare:"",	
	frame9total:function(){
		var total = parseInt(this.frame1roll1)+parseInt(this.frame1roll2);
		if(parseInt(this.frame1roll1)>9){
			this.frame1strike="X";
		}else if(total>9&&parseInt(this.frame1roll1)<10){
			this.frame1spare="/";
		}
		return total;
	},	
	frame10roll1:0,
	frame10roll2:0,
	frame10strike:"",
	frame10spare:"",	
	frame10roll3Check:function(){
		var total = parseInt(this.frame10roll1)+parseInt(this.frame10roll2);		
		if(frame10strike==="X"||frame10spare==="/"){
			return true;
		}else{
			return false;
		}
	},
	frame10total:function(){
		return parseInt(this.frame10roll1)+parseInt(this.frame10roll2);
	},	
	frame10roll3:0
};
function speedBowler(){
	frame1roll1();
}
</script>
<?php for($i=1;$i<11;$i++){ ?>
<script src="frame<?php echo $i;?>-rolls.js"></script>
<?php } ?>
</head>
<body>

<?php for($i=1;$i<11;$i++){ ?>
<input type="button" onclick="frame<?php echo $i;?>roll1();" value="Frame <?php echo $i;?> Roll 1"></input>
<input type="button" onclick="frame<?php echo $i;?>roll2();" value="Frame <?php echo $i;?> Roll 2"></input>
<br/>
<?php } ?>


</body>
</html>