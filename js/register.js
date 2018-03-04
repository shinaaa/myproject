$(()=>{
	var $uname=$("[name=uname]");
	var $upwd=$("[name=upwd]");
	var $cpwd=$("#cpwd");
	var $email=$("[name=email]");
	var $phone=$("[name=phone]");
	//验证失败的信息提示
	var msg={
		nameErr:"用户名必须介于4~12位之间，且只能包含字母、数字、下划线，开头必须为字母",
		pwdErr:"密码必须介于6~14位之间，且必须为字母和数字的组合",
		cpwdErr:"两次输入的密码不一致，请重新输入",
		emailErr:"邮箱格式不正确，请重新输入",
		phoneErr:"手机格式不正确，请重新输入"
	};
	$uname.focus();
    $uname.focus(e=>{
      var $e=$(e.target);
			var val=$uname.val();
			if(val=="")
				$e.next().removeClass();
				$e.next().html("用户名4~12位，可包含数字、字母、下划线");
		 })
		
		$upwd.focus(e=>{
			var $e=$(e.target);
			var val=$upwd.val();
			if(val==""){
				$e.next().removeClass();
				$e.next().html("密码6~14位，必须为字母数字的组合");
			}
		})
		var valName=false;
    $uname.blur(e=>{
        var $e=$(e.target);
				var val=$uname.val();
        var reg=/^[a-zA-z]\w{3,12}$/;
				if(!reg.test(val)){
						$e.next().removeClass();
            $e.next().addClass("val_fail").html(msg.nameErr);	
         }else{
            $.post(
                "data/login/val_name.php",
                $("[name=uname]").serialize()
            ).then(data=>{ 
                if(data.ok==1){
										valName=true;
										$e.next().removeClass();
                    $e.next().addClass("val_success").html("");
										
                }else{
										$e.next().removeClass();
                    $e.next().addClass("val_fail").html("用户名已存在！");
                }
            })
        }
    })
    //验证密码，不为空，长度必须介于6~14位之间，且必须为数字字母混合
		var valUpwd=false;
		$upwd.blur(e=>{
			var $e=$(e.target);
			var val=$upwd.val();
			var reg=/^[A-Za-z0-9]{6,14}$/;
			if(!reg.test(val)){
				$e.next().removeClass();
        $e.next().addClass("val_fail").html(msg.pwdErr);
			}else{
				$e.next().removeClass();
				$e.next().addClass("val_success").html("");
				valUpwd=true;
			}
		})
		//密码一致性验证
		var valCpwd=false;
		$cpwd.blur(e=>{
			var $e=$(e.target);
			var cval=$cpwd.val();
			var pval=$upwd.val();
			if(cval==""){
				$e.next().removeClass();
				$e.next().addClass("val_fail").html("密码不能为空！");
			}else{
				if(cval!=pval){
					$e.next().removeClass();
					$e.next().addClass("val_fail").html(msg.cpwdErr);
					console.log(valCpwd);
				}else{
					$e.next().removeClass();
					$e.next().addClass("val_success").html("");
					valCpwd=true;
				}
			}
		})
		//邮箱验证
		var valEmail=false;
		$email.blur(e=>{
			var $e=$(e.target);
			var val=$email.val();
			var reg=/^[A-Za-z0-9]{1,}@[A-Za-z0-9]{1,}.[A-Za-z0-9]{1,}$/;
			if(val==""){
				$e.next().removeClass();
        $e.next().addClass("val_fail").html("邮箱不能为空！");
			}else if(!reg.test(val)){
				$e.next().removeClass();
        $e.next().addClass("val_fail").html(msg.emailErr);
			}else{
				$e.next().removeClass();
				$e.next().addClass("val_success").html("");
				valEmail=true;
			}
		})
		//手机号格式验证,oninput实时监听输入框的值变化
		var valPhone=false;
		$phone.on("input",e=>{
			var $e=$(e.target);
			var val=$phone.val();
			var reg=/^1[34578]\d{9}$/;
			if(val==""){
				$e.next().removeClass();
        $e.next().addClass("val_fail").html("手机号不能为空！");
			}else if(!reg.test(val)){
				$e.next().removeClass();
        $e.next().addClass("val_fail").html(msg.phoneErr);
			}else{
				$e.next().removeClass();
				$e.next().addClass("val_success").html("");
				valPhone=true;
			}
		})
    //给button绑定点击事件
		$(".btn").click(e=>{
			if(!(valName&&valUpwd&&valCpwd&&valEmail&&valPhone)){
				e.preventDefault();
			}else{
				val_success()
			}
		})
		function val_success(){
			var date=new Date();
				$("#regTime").val(date.getTime());
				$.post(
					"data/login/register.php",
					$("#form").serialize()
				).then(data=>{
					if(data["ok"]==1)
						location.href="registerS.html";
				})
		}
    $("#phone").keydown(e=>{
			if(e.keyCode==13){
				if(!(valName&&valUpwd&&valCpwd&&valEmail&&valPhone)){
					e.preventDefault();
				}else{
					val_success()
				}
			}
		})

})