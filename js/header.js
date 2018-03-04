$(function(){
	$.ajax({
		type:"get",url:"header.html"
	}).then(data=>{
		document.getElementById("head").innerHTML=data;
		document.head.innerHTML += `<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
		<title>header</title>
		<link rel="stylesheet" href="css/header.css">
		<link rel="stylesheet" href="css/main.css">`
		$.ajax({
			type:"post",
			url:"data/login/isLogin.php",
			dataType:"json"
		}).then(data=>{
			console.log(data);
			if(data.ok==1){
				setCookie("username",data.uname,10)
				$("#login").html(`
					<p>
						你好，<a class="usercenter" href="" data-uid=${data.uid}>${data.uname} </a> |
						<a class="my_fav">我的收藏</a> |
						<a class="shoppingcart"></a>
						<a href="" class="out">注销</a>
					</p>
				`).css("margin-top",22)
			}else{
				$("#login").html(`
					<p>
						你好，请<a class="in">登录</a> | 
						<a class="reg">注册</a>
					</p>
				`).css("margin-top",33)
			}
		})
		$("#login").on("click","p>a.out",e=>{
			console.log(location)
			e.preventDefault();
			$.ajax({
				type:"get",
				url:"data/login/logout.php"
			}).then(function(){
				if(location.href.match(/cart|usercenter/ig))
					location.href = "index.html"
				else
					location.reload(true)
			});
		})

		$("#login").on("click","p>a.in",function(e){
			e.preventDefault();
			location="login.html?back="+location.href;		
		})
		
		$("#login").on("click","p>a.reg",e=>{
			e.preventDefault();
			location="register.html";
		})
		$("#login").on("click",".usercenter",function(e){
			e.preventDefault();
			var $e = $(e.target);
			location = "usercenter.html?uid="+$e.data("uid");
		})
		$("#login").on("click",".shoppingcart",function(e){
			e.preventDefault();
			var $e = $(e.target);
			open(`shoppingcart.html?uid=${$e.siblings(".usercenter").data("uid")}`,"_cart")
		})
		$("#login").on("click",".my_fav",function(e){
			e.preventDefault();
			var $e = $(e.target);
			open(`myfav.html?uid=${$e.siblings(".usercenter").data("uid")}`)
		})
		function setCookie(c_name, value, expiredays){
			var exdate=new Date();
			exdate.setDate(exdate.getDate() + expiredays);
			document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
		}     
		//读取cookies
		function getCookie(name) {
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))     
				return arr[2];
			else
				return "no cookie";
		}
		console.log(getCookie("username"))
	})
})