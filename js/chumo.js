$(function(){
	// 促销 公告的移动条
	$(".news_first").click(function(event) {
		$("#chuXiao").show();
		$("#gongGao").hide();
		$(".news_tab_active").stop().animate({left: '10'}, "400");
	});
	$(".news_last").click(function(event) {
		$("#chuXiao").hide();
		$("#gongGao").show();
		$(".news_tab_active").stop().animate({left: '60'}, "400");
	});
	// 触摸切换商品列表 移动上面又恢复轮播图
	$(".cate_menu_item").each(function(i) {
		$(this).mouseover(function(event) {
			$(".fs_col4").show();
			$(".content").eq(i).show().siblings().hide();
		});
	});
	$("#navitems").mouseover(function(event) {
		$(".fs_col4").hide();
	});
	//触摸 红点切换照片
	$(".ms_right_icon").each(function(i) {
		$(this).mouseover(function(event) {
			$(".ms_right_icon").eq(i).css('background-color', 'red').siblings().css('background-color', 'gray');
			$(".ms_right_img").eq(i).fadeIn("slow").siblings().hide();
		});
	});

	//切换排行榜
			$("#box_tab>a").mouseover(function(event) {
			$("#img>img").eq($(this).index()).show().siblings().hide();
			});
	var cc = function(x){
		x.aa.mouseover(function(event) {
				$("#tiao").stop().animate({left:x.bb}, 400);
			});
	}
	$.banner = cc;
	$.banner({aa:$("#box_tab>a:nth-child(1)"),bb:"0px"});
	$.banner({aa:$("#box_tab>a:nth-child(2)"),bb:"70px"});
	$.banner({aa:$("#box_tab>a:nth-child(3)"),bb:"140px"});
	$.banner({aa:$("#box_tab>a:nth-child(4)"),bb:"210px"});
	$.banner({aa:$("#box_tab>a:nth-child(5)"),bb:"280px"});
		//发现好货点击图片会动一下
		$(".box_fd1>li").each(function(i) {
		$(this).mouseover(function(event) {
			$(".find_item_img").eq(i).stop().animate({right:"20px"}, 400);
		});
		$(this).mouseout(function(event) {
			$(".find_item_img").eq(i).stop().animate({right:"10px"}, 400);
		});
	});

		// 京东秒杀
		
		$(".sk_item_li").hover(function() {
				$(".sk_item_image").eq($(this).index()).stop().animate({"top":20},500);
			}, function(){
				$(".sk_item_image").eq($(this).index()).stop().animate({"top":30},500);
			});
		//享品质
		$(".entry_list>li").hover(function() {
				$(".entry_img").eq($(this).index()).stop().animate({"right":0},500);
			}, function(){
				$(".entry_img").eq($(this).index()).stop().animate({"right":-10},500);
			});
		// 美妆
		$(".pt_bi_img").each(function(i) {
		$(this).mouseover(function(event) {
			$(".pt_bi_img").eq(i).stop().animate({right:"10px"}, 400);
		});
		$(this).mouseout(function(event) {
			$(".pt_bi_img").eq(i).stop().animate({right:"5px"}, 400);
		});
	});
		$(".pt_more_img").each(function(i) {
		$(this).mouseover(function(event) {
			$(".pt_more_img").eq(i).stop().animate({right:"0px"}, 400);
		});
		$(this).mouseout(function(event) {
			$(".pt_more_img").eq(i).stop().animate({right:"-10px"}, 400);
		});
	});
		// $(".pt_cover1").hover(function() {
		// 		$(".pt_cover_img").eq(0).stop().animate({"right":0},500);
		// 	}, function(){
		// 		$(".pt_cover_img").eq(0).stop().animate({"right":-10},500);
		// 	});
			// 传参数 

	var aa = function(x){ 
		x.aa.hover(function() {
				$(".pt_cover_img").eq(x.bb).stop().animate({"right":0},500);
			}, function(){
				$(".pt_cover_img").eq(x.bb).stop().animate({"right":-10},500);
			});
	} 
	$.cover = aa;
	// 美妆 
	$.cover({ aa: $(".pt_cover1"), bb: 0}); 
	$.cover({ aa: $(".pt_cover2"), bb: 1}); 
		// <!-- 家电手机 -->
	$.cover({ aa: $(".pt_cover3"), bb: 2}); 
	$.cover({ aa: $(".pt_cover4"), bb: 3}); 
		// 3C运动
	$.cover({ aa: $(".pt_cover5"), bb: 4}); 
	$.cover({ aa: $(".pt_cover6"), bb: 5}); 
		// 母婴家具
	$.cover({ aa: $(".pt_cover7"), bb: 6}); 
	$.cover({ aa: $(".pt_cover8"), bb: 7}); 
		// 图书汽车
	$.cover({ aa: $(".pt_cover9"), bb: 8}); 
	$.cover({ aa: $(".pt_cover10"), bb: 9}); 
			// 健康旅行
	$.cover({ aa: $(".pt_cover11"), bb: 10}); 
	$.cover({ aa: $(".pt_cover12"), bb: 11}); 

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
		// 锚点
		$wWidth = $(window).width();
        $wHeight = $(window).height();
        $(".lift_item").click(function() {
				$(".lift_item").eq($(this).index()).addClass('lift_item_on').siblings().removeClass('lift_item_on')
		});
		var bb = function(x){ 
		$('.lift_item').eq(x.i).click(function(){$('html,body').stop().animate({scrollTop:x.aa.offset().top}, 800);});
		} 
		$.scrollR = bb;
		$.scrollR({i:0,aa:$('#pinzi')});
		$.scrollR({i:1,aa:$('#loveLive')});
		$.scrollR({i:2,aa:$('#beauty')});
		$.scrollR({i:3,aa:$('#mobilePhone')});
		$.scrollR({i:4,aa:$('#exercise')});
		$.scrollR({i:5,aa:$('#furniture')});
		$.scrollR({i:6,aa:$('#books')});
		$.scrollR({i:7,aa:$('#travel')});
		// $('.lift_item').eq(0).click(function(){$('html,body').stop().animate({scrollTop:$('#pinzi').offset().top}, 800);});
		$('.lift_item').eq(8).click(function(){$('html,body').stop().animate({scrollTop:0}, 800); return false;});
		
		// 滚动条滚动事件
		 function funScroll(){
		 	 var top = $(document).scrollTop();
			 var targetTop =$("#partingLine").offset().top;
			 var targeTop =$("#pinzi").offset().top;
			 var targeBottom =$("#pinzi").height();

			 if (top<targetTop) {
			 	$("#pingmuL").fadeOut();
			 	$("#pingmuT").fadeOut();
			 }
			 if(top>=targetTop){
			 	$("#pingmuL").fadeIn();
			 	$("#pingmuT").fadeIn();
			 }
		 }
		 // 当窗口滚动式触发
		  $(window).scroll(funScroll);
		  // 
		 
}) 