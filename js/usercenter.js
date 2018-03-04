$(()=>{
	$.ajax({
    type:"get",
    url:"data/login/isLogin.php",
    dataType:"json"
  }).then(data=>{
		if(data.ok==0){	
      alert("请先登录！")
      location.href="login.html?back=usercenter.html";
    }else{
			var uid = location.search.slice(5);
			$.ajax({
				type:"post",
				url:"data/user/usercenter.php",
				data:uid,
				dataType:"json"
			}).then(data=>{
				//console.log(data);
				$("p.uname>span").html(data.uname)
				//修改个人信息
				$(".edit-info").click(()=>{
					$(".mask").show();
					$("body").addClass("hidden")
					$(".edit").show();
					//console.log(data)
					$(".email").val(data.email);
					$(".phone").val(data.phone);
					var ms = data.reg_time;
					var time = new Date(Number(ms)).toLocaleDateString();
					$(".reg_time").html(time);
				})
				$(".confirm-info").click(function(e){
					e.preventDefault();
					$.ajax({
						type:"post",
						url:"data/user/change_info.php",
						data:{email:$(".email").val(),phone:$(".phone").val()},
						dataType:"json"
					}).then(data=>{
						//console.log(email,phone)
						if(data.ok==1){
							alert(data.msg);
							$(".edit").hide();
							$(".mask").hide();
							$("body").removeClass("hidden")
						}
					})
				})
				$(".close").click(()=>{
					$(".edit").hide();
					$(".mask").hide();
					$("body").removeClass("hidden")
				})
				//完毕
				//修改地址
				$(".address").click(()=>{
					$(".mask").show();
					$("body").addClass("hidden")
					$(".pro-city").show();
					$.ajax({
						type:"get",
						url:"data/province_city.json",
						dataType:"json"
					}).then(data=>{
						//console.log(data);
						var html = "",output="";
						//省
						for(var i=0;i<data.length;i++){
							html += `<option value=${i}>${data[i].name}</option>`;
						}
						$(".province").html(html);
						//城市
						html="";
						load_city();
						html="";
						load_area();
						$(".province").change(()=>{
							html = "";
							load_city();
							html="";
							load_area();
							
						})
						$(".city").change(()=>{
							html = "";
							load_area()
						})
						function load_city(){
							var val = $(".province").val();
								//console.log(val);
								var item=data[val].city;
								for(var i=0;i<item.length;i++){
									html += `<option value=${i}>${item[i].name}</option>`;
								}
								$(".city").html(html);
						}
						//区
						function load_area(){
							var p_val = $(".province").val();
							var c_val = $(".city").val();
							var item = data[p_val].city[c_val].area
							for(var i=0;i<item.length;i++){
								html+=`<option value=${i}>${item[i]}</option>`
							}
							$(".area").html(html);
						}
						
						$(".confirm-add").click(e=>{
							e.preventDefault();
							output = $(".province").find("option:selected").html();
							output += $(".city").find("option:selected").html();
							output += $(".area").find("option:selected").html();
							output += $(".spec-add").val();
							console.log(output)
							$.ajax({
								type:"post",
								url:"data/user/change_address.php",
								data:{address:output},
								dataType:"json"
							}).then(data=>{
								console.log(data);
								alert(data.msg);
								$(".pro-city").hide();
								$(".mask").hide();
								$("body").removeClass("hidden")
							})
						})
					})
				})
				$(".close").click(()=>{
					$(".pro-city").hide();
					$(".mask").hide();
					$("body").removeClass("hidden")
				})
				//完毕
				//头像
				$(".avtar").mouseenter(e=>{
					$(".avtar-mask").fadeIn(200);
				})
				$(".avtar-mask").mouseleave(e=>{
					$(e.target).fadeOut(200);
				})
				$(".avtar-mask").click(e=>{
					//上传头像
					$(".mask").show();
					console.log($("body"))
					$("body").addClass("hidden")
					$(".upload").show();
					$(".close").click(()=>{
						$(".upload").hide();
						$(".mask").hide();
						$("body").removeClass("hidden")
					})
				})
			})
			$("p.order").click(e=>{
				location="shoppingcart.html";			
			})
		}
	})
})