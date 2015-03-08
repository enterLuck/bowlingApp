<!doctype html>
<html lang="en" ng-app="bowlingApp">
<head>
	<meta charset="utf-8" />
	<title>Bowler World</title>
	<link rel="stylesheet" href="stylesheet.css" />
			<!--[if IE]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
			<![endif]--> 

			<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
			<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
			<script src="frame-rolls.js"></script>
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
				totalPins:0
			};var fr = {};
var fr = {
	frame1roll1:0,
	frame1roll2:0,
	frame1strike:"",
	frame1spare:"",
	frame1storeTotal:0,
	frame1total:function(){
		var total = parseInt(this.frame1roll1)+parseInt(this.frame1roll2);
		return total;
	},	
	frame2roll1:0,
	frame2roll2:0,
	frame2strike:"",
	frame2spare:"",
	frame2storeTotal:0,
	frame2total:function(){
		var total = parseInt(this.frame2roll1)+parseInt(this.frame2roll2);
		return total;
	},	
	frame3roll1:0,
	frame3roll2:0,
	frame3strike:"",
	frame3spare:"",
	frame3storeTotal:0,
	frame3total:function(){
		var total = parseInt(this.frame3roll1)+parseInt(this.frame3roll2);
		return total;
	},	
	frame4roll1:0,
	frame4roll2:0,
	frame4strike:"",
	frame4spare:"",	
	frame4storeTotal:0,
	frame4total:function(){
		var total = parseInt(this.frame4roll1)+parseInt(this.frame4roll2);
		return total;
	},	
	frame5roll1:0,
	frame5roll2:0,
	frame5strike:"",
	frame5spare:"",	
	frame5storeTotal:0,
	frame5total:function(){
		var total = parseInt(this.frame5roll1)+parseInt(this.frame5roll2);
		return total;
	},	
	frame6roll1:0,
	frame6roll2:0,
	frame6strike:"",
	frame6spare:"",	
	frame6storeTotal:0,
	frame6total:function(){
		var total = parseInt(this.frame6roll1)+parseInt(this.frame6roll2);
		return total;
	},	
	frame7roll1:0,
	frame7roll2:0,
	frame7strike:"",
	frame7spare:"",	
	frame7storeTotal:0,
	frame7total:function(){
		var total = parseInt(this.frame7roll1)+parseInt(this.frame7roll2);
		return total;
	},	
	frame8roll1:0,
	frame8roll2:0,	
	frame8strike:"",
	frame8spare:"",	
	frame8storeTotal:0,
	frame8total:function(){
		var total = parseInt(this.frame8roll1)+parseInt(this.frame8roll2);
		return total;
	},	
	frame9roll1:0,
	frame9roll2:0,
	frame9strike:"",
	frame9spare:"",	
	frame9storeTotal:0,
	frame9total:function(){
		var total = parseInt(this.frame9roll1)+parseInt(this.frame9roll2);
		return total;
	},	
	frame10roll1:0,
	frame10roll2:0,
	frame10roll3:0,
	frame10roll1strike:"",
	frame10spare:"",	
	frame10roll2strike:"",
	frame10get3check:false,
	frame10roll3strike:"",
	frame10storeTotal:0,
	frame10total:function(){
		var total = parseInt(this.frame10roll1)+parseInt(this.frame10roll2)+parseInt(this.frame10roll3);
		return total;
	}		
};
			</script>
			<script>
			// This variable is boolean whether or not game has started
			var gameStatus = false;
			// This variable is the number of bowlers
			var numberOfPlayers = 0;
			// This variable is the player who is currently bowling
			var activePlayer = 1;
			// This variable is the current frame all bowlers are bowling
			var currentFrame = 1;
			// This variable is the current roll count for a single player on a single frame
			var rollcnt = 1;

			//******
			// This function is triggered by clicking on the BOWL ui button
			// Its purpose is to bowl the ball for the current player
			// It triggers a roll which uses a pin generator 
			// It also updates the active player and frame
			// The pin generator also automatically triggers the roll count 
			//    that is output to the ui
			//******
			function bowl(){
			//****** Triggers the roll for the active player
				var rolling = "frame"+currentFrame+"roll"+rollcnt+"("+activePlayer+")";
				console.log(rolling);
				eval(rolling);
			//****** Updates activePlayer or currentFrame when necessary
				if(rollcnt<2){ // NOT ACCURATE FOR FRAME 10 if third roll occurs
					rollcnt++; // increment roll count
				}else{
					rollcnt=1; // reset roll count
					console.log(getNumberOfPlayers());
					if( activePlayer < getNumberOfPlayers() ){
						activePlayer++;
					}else{
						activePlayer=1;
						currentFrame++;
					} //end else
				} //end else
				return activePlayer; // return active player 
			};	// end bowl function
			
			//******** Helper Methods ***************

			// Returns the number of players
			function getNumberOfPlayers(){
				return numberOfPlayers;
			};

			// Takes the user popup input of the quantity of players and stores it
			function setNumberOfPlayers(num){
				numberOfPlayers = num;
			};

			// Returns true or false if game has started
			function gameStarted(){
				return gameStatus;
			};

			// Sets gameStatus variable to true when start ui button has been clicked.
			function startGame(){
				gameStatus=true;
			};

			function playersCheckingIn(num){
				if(num.length==1&&((num*1==1)||(num*1==2)||(num*1==3)||(num*1==4))){
					setNumberOfPlayers(num);
					return true;
				}else{
					return false;
				}
			};
			//***************************************


			// TESTING PURPOSES ONLY
			// var n = Math.floor(Math.random()*5);
			// 	setNumberOfPlayers(n);console.log(getNumberOfPlayers());
			// for(i=0;i<30;i++){
			// 	bowl();
			// };
</script>
		</head>
		<body ng-controller="playerController">
			<h1 class="white roboto">Bowler World 2015!</h1>
			<h3 class="white roboto">by Tim </h1>
			<aside>
				<ul>
					<li><img src="img/bowling-ball-start.png" id="start" /></li>
					<li><img src="img/bowling-ball-reset.png" id="reset" /></li>
					<li><img src="img/bowling-ball-bowl.png" id="bowl" /></li>
				</ul>	
				<div id="result"></div>
			</aside>	
			<section id="main">
					<table id="scoreboard" class="borderDarkest bgColorMedium">
						<th class="colorDarkest roboto colorLtYellow font22">LET'S BOWL!</th>	
						<!-- This row holds titles of the columns as follows: Name,Frame1......Frame10,Total -->

						<!-- Scoreboard Title on separate page for code readability -->
						<tr>
							<td id="col0" class="scoreCol bgColorLightest colorDarkest borderDarkest">
								<p>Players</p>
							</td>
							<?php for($i=1;$i<11;$i++){ ?>
							<td class="scoreCol bgColorLightest colorMediumHeavy borderDarkest">Frame <?php echo $i; ?></td>										
							<?php } ?>
							<td id="col12" class="scoreCol bgColorLightest bgColorLightest borderDarkest">Total</td>
						</tr>


				
						<tr ng-repeat="player in players">
							
							<td id="col0" class="scoreCol bgColorLightest colorDarkest borderDarkest">
								<p ng-bind="player.name"></p>
								<input ng-model="player.name"></input>
							</td>
							<?php for($i=1;$i<11;$i++){ ?>
							<td class="scoreCol bgColorLightest colorMediumHeavy borderDarkest">
								<ul style="width:80px;">
									Roll One: <li id="r1f<?php echo $i;?>{{$index+1}}" ng-model="player.frames[3].rolls[0].total">{{player.frames[3].rolls[0].total}}</li>
									Roll Two: <li id="r2f<?php echo $i;?>{{$index+1}}" ng-model="player.frames[3].rolls[1].total">{{player.frames[3].rolls[1].total}}</li>
									Score: <li></li>
								</ul>	 
							</td>
							<?php } ?>

							<td id="col12" class="scoreCol bgColorLightest bgColorLightest borderDarkest">
								<p ng-totalScore>{{player.finalscore}}</p>
							</td>
						</tr>

					</table>		
				</section>
	
		<script type="text/javascript" src="angular/app.js"></script>
		<script type="text/javascript" src="angular/controller.js"></script>
		<script type="text/javascript" src="angular/directive.js"></script>

		<script>
		$( document ).ready(function(){
			
			//**************************
			// UI hover effects
			//**************************
			// Hover effect for the ui start button
			$("#start").hover(
			function(){
				$("#start").attr("src","img/bowling-ball-start-hover.png");
			},
			function(){
				$("#start").attr("src","img/bowling-ball-start.png");
			});			

			// Hover effect for the ui reset button
			$("#reset").hover(
			function(){
				$("#reset").attr("src","img/bowling-ball-reset-hover.png");
			},
			function(){
				$("#reset").attr("src","img/bowling-ball-reset.png");
			});				

			// Hover effect for the ui bowl button
			$("#bowl").hover(
			function(){
				$("#bowl").attr("src","img/bowling-ball-bowl-hover.png");
			},
			function(){
				$("#bowl").attr("src","img/bowling-ball-bowl.png");
			});


			//**************************
			// UI onclick triggers
			//**************************

			// Click on start ui button and requested for number of players
			$("#start").click(
			function(){
				startGame(); // game started
				var k = prompt("How many players? Up to 4");
				// TESTING PURPOSES ONLY
				//console.log(k);
				//console.log(playersCheckingIn(k));

				// If valid number of players provided show rules popup else reject
				if(playersCheckingIn(k)){
					var msg = "Rules of the game. \nEach player will have 2 rolls to knock down 10 pins. The 2 rolls make up a frame. There are 10 frames in the game. In the final frame, Frame 10, a bonus third roll will be rewarded to a bowler who gets either a strike or spare. A strike is when a bowler knocks down all 10 pins in their first roll for that frame. A spare is when a bowler did not roll a strike on their first roll but knock down the rest of the pins on their second roll. Any left over pins standing at the end of the frame do not count toward your point. Points are awarded for each pin knocked down. But a strike and spare are special. A strike gets 10 points for knocking all the pins and adds the pins knocked down from their next 2 rolls to that frame. A spare gets the same 10 points and their next roll counted to the score for that frame. After each frame the next player takes their turn for that frame. If a bowler rolls a strike they do not take their second roll. He or she has completed that frame with the exception of frame 10. In frame 10 if a bowler gets a strike on their first roll the pins are reset and the same bowler rolls again. If the bowler gets a spare or another strike on frame 10 the pins are again reset and same bowler rolls again. \n\nAfter all scores are tallied the player with the highest score wins! \n\nPlease enter each player's name in the fields provided and press 'Bowl' to roll your turn.Once the game has completed feel free to restart or simply hit reset.And most importantly Remember to be safe and HAVE FUN!"
					   var cnF = confirm(msg);
					}else{
					alert("Game not started. Not a valid number of players. Please restart.");
				}
			}); // end start click		

			// Click on reset ui button and refresh page
			$("#reset").click(
			function(){
				var bool = confirm("Reset Game?");
				if(bool){
					location.reload(1);
				}
			}); // end reset click

			// Click on bowl ui button and roll the ball for the current player
			$("#bowl").click(
			function(){
				if(gameStarted()){
					bowl();
				}else{
					alert("You Have not started the game yet!");
				}
			}); // end bowl click			

		}); // end the ready load
		</script>
	</body>			
</html>