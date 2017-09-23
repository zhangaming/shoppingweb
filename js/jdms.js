var content =document.getElementById("right_box_content");
	var hourEle =content.children[0];
	var minuteEle =content.children[2];
	var secondEle =content.children[4];
	var nowTime = new Date("2017/9/30 22:42:30");
	var targetTime = new Date("2017/10/01 00:00:00");
	var cha = parseInt((targetTime.getTime() - nowTime.getTime())/1000);
	setInterval(countDown, 1000);
	function countDown(){
		// var nowTime =new Date();
		
		
			cha--;
			// var day = parseInt(cha/3600/24);
			// console.log("还有" + day + "天");
			var hour = parseInt(cha/3600);
			// console.log("还有" + hour + "小时");
			var min = parseInt(cha/60 - hour*60);
			// console.log("还有" + min + "分钟");
			var sec = cha%60;
			if(hour<10 ){
				 hour = "0"+ parseInt(cha/3600);
			}else if(min<10 ){
				 min = "0"+parseInt(cha/60 - hour*60);
			}else if(sec<10){
				 sec = "0"+cha%60;
			}
			// console.log("还有" + sec + "秒");
			hourEle.innerHTML= hour;
			minuteEle.innerHTML=min;
			secondEle.innerHTML=sec;
			return cha

			}