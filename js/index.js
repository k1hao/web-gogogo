
/*轮播图部分*/
var current=0;
var tags=document.getElementById("pics").getElementsByTagName("li");
var cats=document.getElementById("circle").getElementsByTagName("div");
function setNow(index){
    for(var i=0;i<tags.length;i++){
        tags[i].style.display="none";
        cats[i].className="";
    }
    cats[index].className="on";
    tags[index].style.display="block";
    current++;
    if(current==5){
        current=0;
    }
}
var myset=setInterval("setNow(current)",1000)
function setMouseOver(index){
    clearInterval(myset);
    setNow(index);
}
function setMouseOut(index){
    current=index;
    myset=setInterval("setNow(current)",1000);
}

/*图片触碰变色效果*/
function onOver(){
    var img1 = document.getElementById('fBimg1').src="img/phone2.png";
}
function onOver2(){
    var img2 = document.getElementById('fBimg2').src="img/airplane2.png";
}
function onOver3(){
    var img3 = document.getElementById('fBimg3').src="img/house2.png";
}
function onOver4(){
    var img4 = document.getElementById('fBimg4').src="img/game2.png";
}
function onOver5(){
    var img5 = document.getElementById('fBimg5').src="img/cart2.png";
}
function onOver6(){
    var img6 = document.getElementById('fBimg6').src="img/train2.png";
}
function onOver7(){
    var img7 = document.getElementById('fBimg7').src="img/people2.png";
}
function onOver8(){
    var img8 = document.getElementById('fBimg8').src="img/money2.png";
}
function onOver9(){
    var img9 = document.getElementById('fBimg9').src="img/wfile2.png";
}
function onOver10(){
    var img10 = document.getElementById('fBimg10').src="img/movie2.png";
}
function onOver11(){
    var img11 = document.getElementById('fBimg11').src="img/company2.png";
}
function onOver12(){
    var img12 = document.getElementById('fBimg12').src="img/gift2.png";
}

function onOut(){
    var img1 = document.getElementById('fBimg1').src="img/phone.png";
}
function onOut2(){
    var img2 = document.getElementById('fBimg2').src="img/airplane.png";
}
function onOut3(){
    var img3 = document.getElementById('fBimg3').src="img/house.png";
}
function onOut4(){
    var img4 = document.getElementById('fBimg4').src="img/game.png";
}
function onOut5(){
    var img5 = document.getElementById('fBimg5').src="img/cart.png";
}
function onOut6(){
    var img6 = document.getElementById('fBimg6').src="img/train.png";
}
function onOut7(){
    var img7 = document.getElementById('fBimg7').src="img/people.png";
}
function onOut8(){
    var img8 = document.getElementById('fBimg8').src="img/money.png";
}
function onOut9(){
    var img9 = document.getElementById('fBimg9').src="img/wfile.png";
}
function onOut10(){
    var img10 = document.getElementById('fBimg10').src="img/movie.png";
}
function onOut11(){
    var img11 = document.getElementById('fBimg11').src="img/company.png";
}
function onOut12(){
    var img12 = document.getElementById('fBimg12').src="img/gift.png";
}

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