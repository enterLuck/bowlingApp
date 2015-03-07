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
									<li>Roll One: {{player.frames[3].rolls[0].total}}</li>
									<li>Roll Two: {{player.frames[3].rolls[0].total}}</li>
									<li>Score: {{player.frames[3].rolls[0].total+player.frames[3].rolls[1].total}}</li>
								</ul>	 
							</td>
							<?php } ?>

							<td id="col12" class="scoreCol bgColorLightest bgColorLightest borderDarkest">
								<p ng-totalScore>{{player.finalscore}}</p>
							</td>
						</tr>

					</table>		
				</section>	

			</body>
			<script type="text/javascript" src="angular/app.js"></script>
			<script type="text/javascript" src="angular/controller.js"></script>
			<script type="text/javascript" src="angular/directive.js"></script>


			<script>
			$( document ).ready(function(){
				
				$("#start").hover(
				function(){
					$("#start").attr("src","img/bowling-ball-start-hover.png");
				},
				function(){
					$("#start").attr("src","img/bowling-ball-start.png");
				});			

				$("#reset").hover(
				function(){
					$("#reset").attr("src","img/bowling-ball-reset-hover.png");
				},
				function(){
					$("#reset").attr("src","img/bowling-ball-reset.png");
				});				

				$("#bowl").hover(
				function(){
					$("#bowl").attr("src","img/bowling-ball-bowl-hover.png");
				},
				function(){
					$("#bowl").attr("src","img/bowling-ball-bowl.png");
				});

				$("#start").click(
				function(){
					startGame();
					var k = prompt("How many players? Up to 4");
					console.log(k);
					console.log(playerRangeChecker(k));
					if(playerRangeChecker(k)){
						//    var playerArr = [];
						// for(i=0;i<k;i++){
						//    var c = i+1;
						var msg = "Rules of the game. \nEach player will have 2 rolls to knock down 10 pins. The 2 rolls make up a frame. There are 10 frames in the game. In the final frame, Frame 10, a bonus third roll will be rewarded to a bowler who gets either a strike or spare. A strike is when a bowler knocks down all 10 pins in their first roll for that frame. A spare is when a bowler did not roll a strike on their first roll but knock down the rest of the pins on their second roll. Any left over pins standing at the end of the frame do not count toward your point. Points are awarded for each pin knocked down. But a strike and spare are special. A strike gets 10 points for knocking all the pins and adds the pins knocked down from their next 2 rolls to that frame. A spare gets the same 10 points and their next roll counted to the score for that frame. After each frame the next player takes their turn for that frame. If a bowler rolls a strike they do not take their second roll. He or she has completed that frame with the exception of frame 10. In frame 10 if a bowler gets a strike on their first roll the pins are reset and the same bowler rolls again. If the bowler gets a spare or another strike on frame 10 the pins are again reset and same bowler rolls again. \n\nAfter all scores are tallied the player with the highest score wins! \n\nPlease enter each player's name in the fields provided and press 'Bowl' to roll your turn.Once the game has completed feel free to restart or simply hit reset.And most importantly Remember to be safe and HAVE FUN!"
						   confirm(msg);
						   // var firstname = prompt("Please enter the name of Player ");
						   // playerArr.push(firstname);	
						   // console.log(firstname);
						   // console.log(addAplayer(playerArr));
						}else{
						alert("Game not started. Not a valid number of players. Please restart.");
					}
				});					
				$("#reset").click(
				function(){
					var bool = confirm("Reset Game?");
					if(bool){
						location.reload(1);
					}
				});		
				var rollCount=0;			
				$("#bowl").click(
				function(){
					if(gameStarted()){
						roll();
						rollCount = rollCount+1;
					}else{
						alert("You Have not started the game yet!");
					}
				});			

			});
			var gameStatus = false;
			function gameStarted(){
				return gameStatus;
			};
			function startGame(){
				gameStatus=true;
			};
			function playerRangeChecker(qty){
				if(qty.length==1&&((qty*1==1)||(qty*1==2)||(qty*1==3)||(qty*1==4))){
					return true;
				}else{
					return false;
				}
			}
			// function addAplayer(playerArray){
			// 	for (b=0;b<playerArray.length;b++){
			// 		$("#updateMe").val(playerArray[b]);
			// 		// console.log(player);
			// 	}
			// 	return ;
			// }

			</script>
			</html>