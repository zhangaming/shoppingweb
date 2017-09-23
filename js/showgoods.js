$(function(){
	  // 商品展品
		  $(".qbfl").mouseover(function(event) {
		  	$(".qbfl_row").show();
		  });
		  $(".qbfl").mouseout(function(event) {
		  	$(".qbfl_row").hide();
		  });
		   $(".qbfl_row").mouseover(function(event) {
		  	$(".qbfl_row").show();
		  });
		   $(".qbfl_row").mouseout(function(event) {
		  	$(".qbfl_row").hide();
		  });
	// 商品领券
		$(".lingquan").click(function(event) {
			$(".coupon").toggle();
		});
	// 点击下啦选项
	$(".btn_adress1").click(function(event) {
		$(".adress_btn_row1").slideToggle();
	});
	$(".btn_adress2").click(function(event) {
		$(".adress_btn_row2").slideToggle();
	});
	$(".btn_adress3").click(function(event) {
		$(".adress_btn_row3").slideToggle();
	});
	// 商品规格选项
	$(".sku-line").click(function(event) {
		$(".sku-line").eq($(this).index()).addClass('selected').siblings().removeClass('selected');
	});
	$(".sku-line1").click(function(event) {
		$(".sku-line1").eq($(this).index()).addClass('selected').siblings().removeClass('selected');
	});
	// 数量加减
	$("#add").click(function(event) {
		number = $("#text_box").val();						///商品数量
   	 	number++;
   	 	$("#text_box").val(number);
   	 	if(number>1){
   	 		$("#min").attr("disabled",false);
   	 	}
	});
		$("#min").click(function(event) {
		number = $("#text_box").val();
		number--;
							///商品数量
   	 	$("#text_box").val(number);
   	 	if (number<=1){
   	 		$("#min").attr("disabled",true);
   	 	}
   	 	
	});
		// 点击加入收藏夹几秒后消失
		$(".pay2").click(function(event) {
			$("#gouwuche1").show();
			$("#gouwuche1").delay(3000).hide(0);
		});
		$(".pay1").click(function(event) {
			$(".goumai").show();
			$(".goumai").delay(3000).hide(0);
		});
		$("#gouwuche1").click(function(event) {
			$("#gouwuche1").hide();
		});
			$(".goumai").click(function(event) {
			$(".goumai").hide();
		});
			// 店长推荐
			$(".dztj_img").each(function(i) {
				$(this).mouseover(function(event) {
			$(".dztj_img>span").eq(i).show()
			});
		});
			$(".dztj_img").each(function(i) {
				$(this).mouseout(function(event) {
			$(".dztj_img>span").eq(i).hide()
			});
		});
			// 商品详情触摸切换
			$(".main_ul_li").each(function(i) {
				$(this).click(function(event) {
					$(".main_ul_li").eq(i).addClass('main_li').siblings().removeClass('main_li');

					$(".introduceMain_row").eq(i).show().siblings().hide();
						$(".introduceMain_ul").show();
				});
			});
			//右侧边轮
		$(".pingmu_r").hover(function() {
				$(".pingmu_p").eq($(this).index()).stop().animate({"left":-60},500);
			}, function(){
				$(".pingmu_p").eq($(this).index()).stop().animate({"left":35},500);
			});
		$(".pingmu_r").eq(6).click(function(event) {
			var speed=400;//滑动的速度
	        $('body,html').animate({ scrollTop: 0 }, speed);
	        return false;
		});

})	