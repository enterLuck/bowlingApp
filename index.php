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
			 <!--<script type="text/json" src="frames.json"></script>
			 <script type="text/json" src="players.json"></script>-->

 <script>
// var numberOfplayers=4;
// function startGame(){
// 	numberOfplayers =prompt("How many Players");
// 	console.log("here it is"+numberOfplayers);
// 	for(i=0;i<numberOfplayers;i++){
// 		console.log("got here");
// 		prompt("What is the players name?");
// 	}
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
					<li><p>How many Players?</p>
						<select onchange="">
							  <option value="1">1</option>
							  <option value="2">2</option>
							  <option value="3">3</option>
							  <option value="4" selected>4</option>
						</select>
					</li>
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
								<input class="test" ng-model="player.name"></input>
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
					prompt("How many players?");
				});					
				$("#reset").click(
				function(){
					confirm("Reset Game?");
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

			</script>
			</html>