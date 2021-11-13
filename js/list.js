var tim = new Date(); 
var hour1 = tim.getHours(); 
var min1 = tim.getMinutes(); 
var sec1 = tim.getSeconds(); 
var maxtime = 3600 - min1 * 60 - sec1; 
function CountDown() {
    document.getElementById("time2").innerHTML = (hour1 + 2) < 23 ? ((hour1 + 2) + ":00") : "0" + (hour1 - 22) + ":00"; //下一场活动的时间
    document.getElementById("time3").innerHTML = (hour1 + 3) < 23 ? ((hour1 + 3) + ":00") : "0" + (hour1 - 21) + ":00"; //下下场活动的时间
    document.getElementById("time4").innerHTML = (hour1 + 4) < 23 ? ((hour1 + 4) + ":00") : "0" + (hour1 - 20) + ":00"; //最后一场活动的时间
    if (maxtime >= 0) {
        minutes = Math.floor((maxtime) / 60); 
        seconds = Math.floor(maxtime % 60); 
        msg = minutes + "分" + seconds + "秒";
        document.getElementById("time1").innerHTML = msg;
        if (maxtime == 5 * 60) alert('注意，还有5分钟!');
        --maxtime;
    } else {
        clearInterval(timer);
        alert("时间到，结束!");
    }
}

timer = setInterval("CountDown()", 1000);

/*悬浮侧边栏*/
$(document).ready(function(){
	$(document).on("mouseenter", ".suspension .a", function(){
        var _this = $(this);
        var s = $(".suspension");
        var isService = _this.hasClass("a-service");
        var isServicePhone = _this.hasClass("a-service-phone");
        var isQrcode = _this.hasClass("a-qrcode");
        if(isService){ s.find(".d-service").show().siblings(".d").hide();}
        if(isServicePhone){ s.find(".d-service-phone").show().siblings(".d").hide();}
        if(isQrcode){ s.find(".d-qrcode").show().siblings(".d").hide();}
	});
	$(document).on("mouseleave", ".suspension, .suspension .a-top", function(){
        $(".suspension").find(".d").hide();
	});
	$(document).on("mouseenter", ".suspension .a-top", function(){
		$(".suspension").find(".d").hide(); 
	});
	$(document).on("click", ".suspension .a-top", function(){
		$("html,body").animate({scrollTop: 0});
	});
	$(window).scroll(function(){
		var st = $(document).scrollTop();
		var $top = $(".suspension .a-top");
		if(st > 400){
			$top.css({display: 'block'});
		}else{
			if ($top.is(":visible")) {
				$top.hide();
			}
		}
	});
	
});	