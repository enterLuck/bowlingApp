if(gameStarted()){
							for(m=1;m<playersCheckedIn();m++){
						        if(playerNumber(wP,1)==1){
									console.log(frame1roll1());	
								}else if(playerNumber(wP,1)==2){
									console.log(frame1roll2());	
								}	
							}		
								}else if(playerNumber(wP,2)==3){
									console.log(frame2roll1());	
								}else if(playerNumber(wP,2)==4){
									console.log(frame2roll2());	
								}else if(playerNumber(wP,3)==5){
									console.log(frame3roll2());	
								}else if(playerNumber(wP,3)==6){
									console.log(frame3roll1());	
								}else if(playerNumber(wP,4)==7){
									console.log(frame4roll2());	
								}else if(playerNumber(wP,4)==8){
									console.log(frame4roll2());	
								}else if(playerNumber(wP,5)==9){
									console.log(frame5roll1());	
								}else if(playerNumber(wP,5)==10){
									console.log(frame5roll2());	
								}else if(playerNumber(wP,6)==11){
									console.log(frame6roll2());	
								}else if(playerNumber(wP,6)==12){
									console.log(frame6roll1());	
								}else if(playerNumber(wP,7)==13){
									console.log(frame7roll2());	
								}else if(playerNumber(wP,7)==14){
									console.log(frame7roll2());	
								}else if(playerNumber(wP,8)==15){
									console.log(frame8roll1());	
								}else if(playerNumber(wP,8)==16){
									console.log(frame8roll2());	
								}else if(playerNumber(wP,9)==17){
									console.log(frame9roll1());	
								}else if(playerNumber(wP,9)==18){
									console.log(frame9roll2());	
								}else if(playerNumber(wP,10)==19){
									console.log(frame10roll1());	
								}else if(playerNumber(wP,10)==20){
									console.log(frame10roll2());	
								}else if(playerNumber(wP,10)==21){ // && no strike spare this method does not exist yet

								}else{
									console.log("no click count added. err");
								}
								v	var totalClicks=0;
			var p1=p2=p3=p4=1;


			function playerNumber(wP,frN){
				if(frN==10){
					if(wP==1){
						var sv = p1;
						
						return sv;
					}
					else if(wP==2){
						var sv = p2;
						
						return sv;				
					}	
					else if(wP==3){
						var sv = p3;
						
						return sv;				
					}
					else if(wP==4){	
						var sv = p4;
						
						return sv;				
					}
					// if(strike or spare){
					//var wP=totalClicks%3;
					// }
				}else{
				if(wP==1){
					var sv = p1;

					p1++;
					return sv;
				}
				else if(wP==2){
					var sv = p2;
					p2++;
					return sv;				
				}	
				else if(wP==3){
					var sv = p3;
					p3++;
					return sv;				
				}
				else if(wP==4){	
					var sv = p4;
					p4++;
					return sv;				
				}else{
					console.log(wP);
				}
				}	
			};	







						var playerN = 1;
			var keepTrack = 0;
			function switchPlayer(fN){
				if(fN!=10){
					if(keepTrack<2){

					}else{
						keepTrack=0;
						playerN++;
					}
				}else{
					
				}
				return playerN;
			}

			if(playerqty==4){
					if(currentplayer<4){
						if(rollcnt<2){
							rollcnt++;
						}else{
							rollcnt=0;
							currentplayer++;
						}
					}
				}else if(playerqty==3){
					if(currentplayer<3){
						if(rollcnt<2){
							rollcnt++;
						}else{
							rollcnt=0;
							currentplayer++;
						}
					}
				}else if(playerqty==2){
					if(currentplayer<2){
						if(rollcnt<2){
							rollcnt++;
						}else{
							rollcnt=0;
							currentplayer++;
						}
					}
				}else if(playerqty==1){
					if(currentplayer<1){
						if(rollcnt<2){
							rollcnt++;
						}else{
							rollcnt=0;
							currentplayer++;
						}
					}
				}else{
					currentplayer = 0;
				}