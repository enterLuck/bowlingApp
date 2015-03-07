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
						<?php include_once("title-column.php");?>


				
						<tr ng-repeat="player in players">
							
							<td id="col0" class="scoreCol bgColorLightest colorDarkest borderDarkest">
								<p ng-bind="player.name"></p>
								<input ng-model="player.name"></input>
							</td>
							<?php $numbersTo10 = array(1,2,3,4,5,6,7,8,9,10);foreach($numbersTo10 as $index=>$value){ ?>
							<td class="scoreCol bgColorLightest colorMediumHeavy borderDarkest" ng-repeat="frame in frame<?php echo $value;?>">
								<ul>
									<li>Roll One: <input type="text" value="{{frame.frame<?php echo $value;?>[0].roll1[10].rollTotal}}" readonly></input></li>
									<li>Roll Two: <input type="text"  value="{{frame.frame<?php echo $value;?>[1].roll2[10].rollTotal}}" readonly></input></li>
									<li>Score: <input type="text" value="{{player.frame<?php echo $value;?>score}}" readonly></input></li>
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
						for(i=0;i<k;i++){
						   var c = i+1;
						   var firstname = prompt("Please enter the name of Player "+c);
						   	console.log(firstname);
						   console.log(addAplayer(firstname,c));
						}

					}else{
						alert("Game not started. Not a valid number of players. Please restart.");
					}
				});					
				$("#reset").click(
				function(){
					var bool = confirm("Reset Game?");

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
			var playerArray=[];
			function addAplayer(name,num){
				playerArray.push(num+name);
				for (player in playerArray){
					console.log(player);
				}
				return playerArray.length;
			}

			</script>
			</html>