//鼠标点击登陆
function onlick_login(obj){
    var register =document.getElementsByClassName("boxRegister");  
    register[0].style.display="none";   
    var register =document.getElementsByClassName("boxLogin");  
    register[0].style.display="block"; 
    document.title="GOGOGO商城－登陆";

}
//鼠标点击注册
function onlick_register(obj){
    var register =document.getElementsByClassName("boxLogin");  
    register[0].style.display="none";   
    var register =document.getElementsByClassName("boxRegister");  
    register[0].style.display="block";
    document.title="GOGOGO商城－注册";                

}
//注册
function checkName(){
   var name=document.getElementById("registerName").value;
   if( name==""){
        alert("请输入用户名");
        return false;
    }
   if(name.length<2||name.length>15){
        alert("用户名在2-15位之间");
        return  false; 
    }
    return true; 
}
function checkPwd(){
    var pwd=document.getElementById("registerPwd").value;
    if( pwd==""){
        alert("请输入密码");
        return false;
    }
    if( pwd.length<6){
        alert(" 密码长度至少6位!");
        return false;
    }
    return true;
}  
function checkRePwd(){
    var pwd1=document.getElementById("registerPwd").value;
    var pwd2=document.getElementById("registerRePwd").value;
    if(pwd2==""){
        alert("请确认密码");
        return false;
    }
    else if( pwd1!==pwd2){
        alert("两次密码不一致");
        return false;
    }
    return true;
} 
function checkProtocol(){
    var obj=document.getElementById("protocol");
    var value = obj.checked;
    if( value==false){
            alert("请勾选同意协议");
            return protocol;
        }
    return true;
} 
function success(){
    alert("注册成功，快去登陆吧！");
}

function registerVerification(){
    var  result=true;
    if( checkName() ){  
        if(  checkPwd()  ){
            if( checkRePwd() ){ 
                if( checkProtocol()==true ){ 
                    success();
                }else{
                    result=false; 
                    return result;
                }
            }else{
                result=false; 
                return result;
            }
        }else{
            result=false;
            return result;
        }
    }else{                 
        result=false; 
        return result;
    }
    return result;
 }

//登陆
function checkLoginName(){
    var name = document.getElementById("loginName").value;
    var registerName = document.getElementById("registerName").value;
    if(name==registerName&&registerName!=""){
        return true;
    }
    if(name=="admin"){
        return true;
    }
    else{
        if(name==""){
            alert("请输入用户名");
            return false;
        }
        else{
            alert("用户名错误");
            return false;
        }
    }

}
function checkLoginPwd(){
    var pwd=document.getElementById("loginPwd").value;
    var registerPwd = document.getElementById("registerPwd").value;
    if(pwd==registerPwd&&pwd!=""){
        return true; 
    }
    if(pwd=="123456"){
        return true; 
    }
    else{
        if(pwd==""){
            alert("请输入密码");
            return false;
        }
        else{
            alert("密码错误");
            return false;
        }
    }
}  
function loginVerification(){
    var  result=true;
    if( checkLoginName() ){
        if( checkLoginPwd() ){
            
        }else{
            result=false; 
            return result;
        }
        
    }else{
        result=false; 
        return result;
    }
}

 //验证码
$(function(){
    var show_num = [];
    draw(show_num);
    $("#canvas").on("click",function(){
        draw(show_num);
    })
    $(".btn2").on("click",function(){
     var val = $("#yzcode").val().toLowerCase();
     var num = show_num.join("");
     if(val==""){
        alert("请输入验证码");
        return false;
     }else if(val == num){
        return true;
     }else{
        alert("验证码错误！请重新输入！");
        return false;
     }
    })
}) 
//生成验证码图形
function draw(show_num) {
        var canvas_width=$("#canvas").width();
        var canvas_height=$("#canvas").height();
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        var aCode = sCode.split(",");
        var aLength = aCode.length;
        for (var i = 0; i < 4; i++) { 
            var j = Math.floor(Math.random() * aLength);
            var deg = Math.random() - 0.5; 
            var txt = aCode[j];
            show_num[i] = txt.toLowerCase();
            var x = 10 + i * 20;
            var y = 20 + Math.random() * 8;
            context.font = "bold 23px 微软雅黑";
            context.translate(x, y);
            context.rotate(deg);
            context.fillStyle = randomColor();
            context.fillText(txt, 0, 0);
            context.rotate(-deg);
            context.translate(-x, -y);
        }
    for (var i = 0; i <= 5; i++) { 
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
    for (var i = 0; i <= 30; i++) { 
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
 
//live2d
L2Dwidget.init({
    "model": {
        jsonPath: "https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json",
        "scale": 1
    },
    "display": {
        "position": "right", 
        "width": 150,  
        "height": 300, 
        "hOffset": 0,
        "vOffset": -20
    },
    "mobile": {
        "show": true,
        "scale": 0.5
    },
    "react": {
        "opacityDefault":1,
        "opacityOnHover": 0.2
    }
});