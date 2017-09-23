$(function(){
			var index = 0;
			// 1. 触摸box时，按钮显示跟隐藏
			$("#ad_main").mouseover(function(){
				$(".prev").show();
				$(".next").show();
				clearInterval(timer);
			});
			$("#ad_main").mouseleave(function(){
				$(".prev").hide();
				$(".next").hide();
				timer = setInterval(autoPlay, 3000);
			});
			// 2. 实现手动点击切换
			$(".next").click(function(event) {
				autoPlay();
			});
			$(".prev").click(function(event) {
				if(index == 0){
					index = 6;
					$(".icon").css({left:-790*6});
				}
				index --;
				if(index<0){
					index = 6;
				}
				switchWP(index==6?0:index);
				$(".icon").animate({left:-790*index},500,function(){
					if(index == 6){
						$(".icon").css({left:0});
					}
				});
			});
			// 3. 触摸小白点时，使得广告切换
			$(".indicator>li").mouseover(function(){
				switchWP($(this).index());
				index = $(this).index();
				$(".icon").stop().animate({left:-790*$(this).index()},500);
			});
			// 4. 程序启动，就实现自动滚动
			var timer = setInterval(autoPlay, 3000);
			function autoPlay(){
				index ++;
				index %= $(".icon>li").children().length;
				switchWP(index==6?0:index);
				if(index == 0){
					index = 1;
					switchWP(index);
				}
				$(".icon").animate({left:-790*index},500,function(){
					if(index == 6){
						$(".icon").css({left:0});
					}
				});
			}
			function switchWP(i){
				$(".indicator>li").eq(i).addClass("on").siblings().removeClass("on");
			}
		});