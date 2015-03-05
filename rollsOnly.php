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
	pin10:0,
	pinCount:0,
	pinScore:0
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
		var total = parseInt(this.frame2roll1)+parseInt(this.frame2roll2);
		if(parseInt(this.frame2roll1)>9){
			this.frame2strike="X";
		}else if(total>9&&parseInt(this.frame2roll1)<10){
			this.frame2spare="/";
		}
		return total;
	},	
	frame3roll1:0,
	frame3roll2:0,
	frame3strike:"",
	frame3spare:"",
	frame3total:function(){
		var total = parseInt(this.frame3roll1)+parseInt(this.frame3roll2);
		if(parseInt(this.frame3roll1)>9){
			this.frame3strike="X";
		}else if(total>9&&parseInt(this.frame3roll1)<10){
			this.frame3spare="/";
		}
		return total;
	},	
	frame4roll1:0,
	frame4roll2:0,
	frame4strike:"",
	frame4spare:"",	
	frame4total:function(){
		var total = parseInt(this.frame4roll1)+parseInt(this.frame4roll2);
		if(parseInt(this.frame4roll1)>9){
			this.frame4strike="X";
		}else if(total>9&&parseInt(this.frame4roll1)<10){
			this.frame4spare="/";
		}
		return total;
	},	
	frame5roll1:0,
	frame5roll2:0,
	frame5strike:"",
	frame5spare:"",	
	frame5total:function(){
		var total = parseInt(this.frame5roll1)+parseInt(this.frame5roll2);
		if(parseInt(this.frame5roll1)>9){
			this.frame5strike="X";
		}else if(total>9&&parseInt(this.frame5roll1)<10){
			this.frame5spare="/";
		}
		return total;
	},	
	frame6roll1:0,
	frame6roll2:0,
	frame6strike:"",
	frame6spare:"",	
	frame6total:function(){
		var total = parseInt(this.frame6roll1)+parseInt(this.frame6roll2);
		if(parseInt(this.frame6roll1)>9){
			this.frame6strike="X";
		}else if(total>9&&parseInt(this.frame6roll1)<10){
			this.frame6spare="/";
		}
		return total;
	},	
	frame7roll1:0,
	frame7roll2:0,
	frame7strike:"",
	frame7spare:"",	
	frame7total:function(){
		var total = parseInt(this.frame7roll1)+parseInt(this.frame7roll2);
		if(parseInt(this.frame7roll1)>9){
			this.frame7strike="X";
		}else if(total>9&&parseInt(this.frame7roll1)<10){
			this.frame7spare="/";
		}
		return total;
	},	
	frame8roll1:0,
	frame8roll2:0,	
	frame8strike:"",
	frame8spare:"",	
	frame8total:function(){
		var total = parseInt(this.frame8roll1)+parseInt(this.frame8roll2);
		if(parseInt(this.frame8roll1)>9){
			this.frame8strike="X";
		}else if(total>9&&parseInt(this.frame8roll1)<10){
			this.frame8spare="/";
		}
		return total;
	},	
	frame9roll1:0,
	frame9roll2:0,
	frame9strike:"",
	frame9spare:"",	
	frame9total:function(){
		var total = parseInt(this.frame9roll1)+parseInt(this.frame9roll2);
		if(parseInt(this.frame9roll1)>9){
			this.frame9strike="X";
		}else if(total>9&&parseInt(this.frame9roll1)<10){
			this.frame9spare="/";
		}
		return total;
	},	
	frame10roll1:0,
	frame10roll2:0,
	frame10strike:"",
	frame10spare:"",	
	frame10get3check:false,
	frame10total:0,	
	frame10roll3:0
};
function speedBowler(){
	frame1roll1();
}
</script>

<script src="frame-rolls.js"></script>

</head>
<body>

<?php for($i=1;$i<11;$i++){ ?>
<input type="button" onclick="frame<?php echo $i;?>roll1();" value="Frame <?php echo $i;?> Roll 1"></input>
<input type="button" onclick="frame<?php echo $i;?>roll2();" value="Frame <?php echo $i;?> Roll 2"></input>
<br/>
<?php } ?>
<br/>
<input type="button" onclick="frame10roll3();" value="Frame 10 Roll 3 Check"></input>


</body>
</html>