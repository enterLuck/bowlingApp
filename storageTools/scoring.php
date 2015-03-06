<?php

class Player{
	$name = "";
	$roll = 0;
	$currentScore = 0;
	$totalScore = 0;

	function addToScore($pins){
		$currentScore +=$pins;
	}
	function spareScoring(){
		$currentScore = $currentScore + $pins + $firstRollNextFrame;
	}	
	function strikeScoring(){
		if($secondRollNextFrame<10){
			$currentScore = $currentScore + $pins + $firstRollNextFrame +$secondRollNextFrame;
		}else{
			$currentScore = $currentScore + $pins + $firstRollNextFrame + 10;
		}
	}
	function currentScore(){
		return $currentScore;
	}
	function totalScore(){
		if()
	}

}	
class Frame implements Strike,Spare{
	$number = 1;
	$pins = 10;
	$rolls = 2;

	function reducePins($p){
		$pins -= $p;
	}
	function resetPins(){
		$pins = 10;
	}
	function increaseFrameNum($currentFrame){
		$number = $currentFrame + 1;
	}
	function increaseRolls(){
		$rolls += 1;
	}
}
class TenthFrame extends Frame{

}
interface Roll{
	public function first($pins);
	public function second($pins);
	public function third($pins);
}
interface FirstRoll extends Roll{
	public function first($pins);
}
interface SecondRoll extends Roll{
	public function second($pins);
}
interface Strike extends FirstRoll {
	public function checkForStrike();

}
interface Spare extends SecondRoll{
	public function checkForSpare();
}
interface TenthFrameThirdRoll extends FirstRoll{
	public function third($pins);
}

?>