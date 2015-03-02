<!doctype html>
<html lang="en" ng-app="bowlingApp">
<head>
	<meta charset="utf-8" />
	<title></title>
	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/themes/smoothness/jquery-ui.css" />

	<link rel="stylesheet" href="stylesheet.css" />
			<!--[if IE]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
			<![endif]--> 
<script>
var numberOfplayers=4;
function startGame(){
	numberOfplayers =prompt("How many Players");
	console.log("here it is"+numberOfplayers);
	for(i=0;i<numberOfplayers;i++){
		console.log("got here");
		prompt("What is the players name?");
	}
};
</script>			
		</head>
		<body>
			<h1 class="white roboto">Bowler World 2015!</h1>
			<h3 class="white roboto">by Tim Brown </h1>
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
						<!-- This row holds titles of the columns as follows: Name,Frame1......Frame10,Total -->

						<!-- Scoreboard Title on separate page for code readability -->
						<?php include_once("title-column.php");?>


				
						<tr ng-repeat="player in players">
							
							<td id="col0" class="scoreCol bgColorLightest colorDarkest borderDarkest">
								{{player.name}}
							</td>
							<td class="scoreCol bgColorLightest colorMediumHeavy borderDarkest" ng-repeat="frame in frames">
								<ul>
									<li>Roll One: <input type="text" value="{{frame.firstRoll}}" readonly></input></li>
									<li>Roll Two: <input type="text" value="{{frame.secondRoll}}" readonly></input></li>
									<li>Pins Knocked Down: <input type="text" value="{{frame.knockedDown}}" readonly></input></li>
									<li>Score: <input type="text" value="{{frame.currentScore}}" readonly></input></li>
								</ul>	
							</td>			

							<td id="col12" class="scoreCol bgColorLightest bgColorLightest borderDarkest">
								{{player.totalScore}}
							</td>
						</tr>

					</table>		
				</section>	

			</body>
			 <script type="text/javascript" src="script.js"></script>
			 <script type="text/json" src="frames.json"></script>
			 <script type="text/json" src="players.js"></script>

			<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
			<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
			<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
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
					prompt("How many players?");
				});					
				$("#reset").click(
				function(){
					confirm("Reset Game?");
				});			

			});

			</script>
			</html>