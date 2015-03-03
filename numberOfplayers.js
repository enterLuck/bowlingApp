<html>
<head>
<script>
var numOfplayers=0;
function playerCount(){
	var p = document.getElementById("playerCnt");
	numOfplayers = p.options[p.selectedIndex].value;
	console.log(numOfplayers);
};
</script>
</head>
<body>
<select id="playerCnt">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
</select>
<input type="button" onclick="playerCount();" value="Submit"></input>

</body>
</html>