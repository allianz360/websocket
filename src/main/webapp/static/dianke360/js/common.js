
	$(function(){
		//登录后
		$(".topbar-user").hover(function() {
			$(this).addClass('user-hover')
		}, function() {
			$(this).removeClass('user-hover')
		});
		//搜索
		$(".search").children(".searchChose").hover(function(){
			// alert('d')
			var _s = $(this);
			_s.find("ul").css("display","block");
			_s.find("li").click(function(){
				$(this).parent().siblings(".show").html( $(this).html() )
				_s.find("ul").css("display","none");
			})
		},function(){
			var _s = $(this);
			_s.find("ul").css("display","none")
		})
		//全部分类
		$(".lesson").hover(function(){
			var $this = $(this);
			var $showDiv = $this.children(".lesson-con");
			if(0 != $showDiv.length){
				$showDiv.show()
			}
		},function(){
			var $this = $(this);
			if(0 != $this.children(".lesson-con").length){
				$this.children(".lesson-con").hide();
			}
		})
		$(".lesson-item").hover(function(){
			var $this = $(this);
			var $showDiv = $this.children(".lesson-more");
			if(0 != $showDiv.length){
				$this.addClass("lesson-item-hover");
				//计算更多div的y坐标
				var top_wrap = $(".lesson-con").offset().top;
				var top_this = $this.offset().top;
				var h_this = $this.height() + Number($this.css("padding-top").split("px")[0]) + Number($this.css("padding-bottom").split("px")[0]) + Number($this.css("border-top-width").split("px")[0]) + Number($this.css("border-bottom-width").split("px")[0]);
				//更多div
				var h_showDiv = $showDiv.height() + Number($showDiv.css("padding-top").split("px")[0]) + Number($showDiv.css("padding-bottom").split("px")[0]) + Number($showDiv.css("border-top-width").split("px")[0]) + Number($showDiv.css("border-bottom-width").split("px")[0]);
				var top_showDiv = 0;
				//计算更多top值
				if((top_this-top_wrap+h_this) <= h_showDiv){
					top_showDiv = top_wrap - top_this - (Number($this.css("border-top-width").split("px")[0]));
				}else{
					top_showDiv = h_this - h_showDiv - (Number($this.css("border-top-width").split("px")[0]));
				}
				//最后一个大分类
				if((($(".lesson-item").length-1) == $(".lesson-item").index($this)) && ($(".hotTravel").height() > h_showDiv)){
					top_showDiv = top_showDiv + Number($(".lesson-con").css("border-bottom-width").split("px")[0]);
					if("1px" == $showDiv.css("border-bottom-width")){
						top_showDiv--;
					}
				}
				$showDiv.css("top",top_showDiv + 'px').show();
			}
		},function(){
			var $this = $(this);
			if(0 != $this.children(".lesson-more").length){
				$this.removeClass("lesson-item-hover");
				$this.children(".lesson-more").hide();
			}
		});	
		//首页选项卡
		 if ($('.box-tab').length) {
	       $('.box-tab a').click(function () {  
	            var $this = $(this);
	            if (!$this.find('a').length ) {
	                var $siblings = $this.siblings('a');
	                $siblings.removeClass('on');
	                $this.addClass('on');
	                //ajax数据存放
	                
	            }
	        });
	    }  
	    /*单选框*/
        $(".radio").on("click", function () {
            if ($(this).hasClass("noradio")) {
            	$(this).siblings().addClass("noradio");
                $(this).removeClass("noradio");
            }
        });
	      
	      
	})
/*弹出框
@info:弹出框的内容
*/
function jBox(){
	//如果存在则先关闭弹窗
	if($('.jboxDiv').length > 0){
		jboxClose();
	}
	var info = arguments[0] ? arguments[0] : '';
	var title = arguments[1] ? arguments[1] : '提示';
	var html='<div class="jboxDiv">'
		html+='<div class="jboxblack" onclick="jboxClose()"></div>';
		html+='<div class="jboxmain">';
    	html+='<p class="jbox_close"><a onclick="jboxClose()">关闭</a></p>';
		html+='<h5>'+title+'</h5> ';
		html+='<div class="jbox_text"><i>i</i>'+info+'</div>';
		html+='</div>';
		html+='</div>';
	$("body").append(html);
	jboxmainPos();
	$(window).resize(function()	{
	jboxmainPos();
  });
}
/*jbox定位位置*/
function jboxmainPos(){
	var wHeight=$(window).height()/2;
	var bHeight=$('.jboxmain').height()/2;
	var jboxHeight=wHeight-bHeight;
	var wWidth=document.body.clientWidth/2;
	var bWidth=$('.jboxmain').width()/2;
	var jboxWidth=wWidth-bWidth;
	$('.jboxmain').css({'left':jboxWidth+'px','top':jboxHeight+'px'});
}	
/*jbox关闭*/
function jboxClose(){
	 $('.jboxDiv').remove();
}

/**
* 验证js
*/
var Reg = {
	phone:/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/, //手机验证
	email:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,	//邮箱验证
	nickNameLength:/^.{2,10}$/,//2-10位昵称
	nickName:/^[a-zA-Z0-9_]{1,}$/,//昵称 数字字母下划线
	pwdLength:/^.{6,16}$/,//6-16位密码
	empty:/\S/,		//是否为空
	code4:/\w{4}/,  //4位验证码
	code6:/\w{6}/  //6位验证码
};
var check = {
 
	pub:function(options){
		var defaults = {    
	    	checkValue: ''
		};     
		var opts = $.extend(defaults, options);   
		if(!opts.hasOwnProperty('type')){
			alert('unknow type');
			return false;
		}
		var nowReg = Reg[opts.type];
		if(typeof(nowReg) == "undefined"){
			alert('unknow type');
			return false;
		}
		var res = nowReg.test(opts.checkValue);
		var isTrueBack = opts.hasOwnProperty('trueBack');
		var isFalseBack = opts.hasOwnProperty('falseBack');

		//验证通过并且存在成功回调
		if(res && isTrueBack){
			opts.trueBack();return true;
		}
		
		//验证未通过并且存在失败回调
		if(!res && isFalseBack){
			opts.falseBack();return false;
		}

		return res;
	}
};
