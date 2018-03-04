(function(){
	var uname = document.querySelector("#uname"),
		upwd = document.querySelector("#upwd"),
		rememberMe = document.querySelector(".ckb"),
		a = document.querySelector("a.btn");
		if(getCookie("username")){
			uname.value = getCookie("username");
			upwd.value = getCookie("userpwd");
			rememberMe.checked = true;
		}
		rememberMe.onclick = function(){
			if(this.checked){
				setCookie("username",uname.value,7)
				setCookie("userpwd",upwd.value,7)
			}
		}
	a.onclick = function(e){
		e.preventDefault();
		console.log(location.search)
		if(uname.value&&upwd.value){
			ajax({
				type:"post",
				url:"data/login/login.php",
				data:`uname=${uname.value}&upwd=${upwd.value}`,
				dataType:"json"
			}).then(data=>{
				if(data.ok=="1"){
					var back=location.search.slice(6);
					location=back;					
				}else{
					alert("用户名或密码错误！");
				}
			})
		}else{
			alert("请输入用户名和密码")
		}
	}
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
			return;
	}
	//删除
	function delCookie(name){
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval=getCookie(name);
		if(cval!=null)
			document.cookie= name + "="+cval+";expires="+exp.toGMTString();
	 }
	
})()