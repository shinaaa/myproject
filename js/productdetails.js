(()=>{
	var arr = location.search;
	arr = arr.split("&");
	//console.log(arr);
	var rid = arr[0].slice(5);
	var kw = decodeURI(arr[1].slice(3));
	var html = "";
	if(kw == "玫瑰"){
		html = `
			<li class=""><a href="index.html">首页</a></li>
			<li class="sperate"> > </li>
			<li class=""><a href="rose.html?kw=玫瑰">玫瑰</a></li>	
			<li class="sperate"> > </li>
			<li class="active">详情</li>
		`;
	}else{
		html = `
			<li class=""><a href="index.html">首页</a></li>
			<li class="sperate"> > </li>
			<li class=""><a href="rose.html?kw=${kw}">${kw}</a></li>	
			<li class="sperate"> > </li>
			<li class="active">详情</li>
		`;
	}
	$("ul.bread-ul").html(html);
	$.ajax({
		type:"get",
		url:"data/product/product_details.php",
		data:{rid:rid}
	}).then(output=>{
		//动态加载页面内容
		var html = "";
		html+=`
					<img class="large-img" src="${output.img[0].pic}" alt="" />
					<div class="mask"></div>
					<div class="superMask"></div>
			`;
		$(".l-img-box").html(html);
		html = "";
		for(var i=0;i<output.img.length;i++){
			html+=`
				<li><img src="${output.img[i].pic}" alt="" /></li>	
				`;
		}
		$(".s-img").html(html);
		var data = output.data[0];
		$("#all-title").html("❀"+data.title+"❀");//改变页面的title
		var html = `
				<p class="title">${data.title}</p>
				<div class="meaning">花语：${data.meaning}</div>
				<div class="material">材料：${data.material}</div>
				<div>附送：下单填写留言，即免费赠送精美贺卡！</div>
				<div class="delivery">配送：全国 （可配送至全国1000多城市，市区免配送费）</div>
				<p class="price">
					价格：¥ <span>${data.price}</span>
				</p>
				<p class="rt-last">
					<span class="add-shoppingcart" data-rid="${rid}">加入购物车</span>
					<!-- <span class="hide"></span> -->
					<span class="buy-now">立即购买</span>
					<span class="fav">
					<img src="images/logo/fav_1.png" alt="" />
					<span>收藏</span>
				</span>
				</p>	
			`;
		$(".rt-side").html(html);
		//加载下面的描述
		var imgsrc = output.img[0].pic;//.replace("1","_d1")
		var html = "";
		for(var i=1;i<=4;i++){
			imgsrc = output.img[0].pic.replace("1",`_d${i}`);
			html += `
				<div>
					<img src="${imgsrc}" alt="" />
				</div>
			`;
		}
		$("div.img-container").html(html);
	
		//点击收藏/取消收藏
		$("span.fav").click(e=>{
			$.ajax({
				type:"get",
				url:"data/login/isLogin.php",
				dataType:"json"
			}).then((data)=>{
				if(data.ok==0){
					location = "login.html?back="+location.href;
				}else{
					var $e = $(e.target);
						if($("span.fav>span").html()=="收藏"){
							$("span.fav>img").attr("src","images/logo/fav1.png");
							$("span.fav>span").html("已收藏");
							$("span.fav>img").css("transform","scale(1.2)");
							setTimeout(()=>{
								$("span.fav>img").css("transform","scale(1)");
							},300)
						}else{
							$("span.fav>img").attr("src","images/logo/fav_1.png");
							$("span.fav>span").html("收藏");
							$("span.fav>img").css("transform","scale(1.2)");
							setTimeout(()=>{
								$("span.fav>img").css("transform","scale(1)");
						},300)}
					/* var price = $(".price>span").html();
					var title = $("p.title").html();
					var pic = $(".large-img").attr("src");
					$.ajax({
						type:"get",
						url:"data/user/myfav.php",
						data:{rid:rid,title:title,price:price,pic:pic}
					}).then(()=>{
						var $e = $(e.target);
						if($("span.fav>span").html()=="收藏"){
							$("span.fav>img").attr("src","images/logo/fav1.png");
							$("span.fav>span").html("已收藏");
							$("span.fav>img").css("transform","scale(1.2)");
							setTimeout(()=>{
								$("span.fav>img").css("transform","scale(1)");
							},300)
						}else{
							$("span.fav>img").attr("src","images/logo/fav_1.png");
							$("span.fav>span").html("收藏");
							$("span.fav>img").css("transform","scale(1.2)");
							setTimeout(()=>{
								$("span.fav>img").css("transform","scale(1)");
						},300)}
					}) */
				}
			})

		})
		//完毕
		//点击加入购物车
		$("span.add-shoppingcart").click(e=>{
			var $e = $(e.target);
			$.ajax({
				type:"get",
				url:"data/login/isLogin.php",
				dataType:"json"
			}).then((data)=>{
				if(data.ok==0){
					location="login.html?back="+location.href;
				}else{
					var rid = $e.data("rid");
					var price = $("p.price>span").html();
					var title = $("p.title").html();
					var img = $(".l-img-box>img").attr("src");
					var count = 1;
					console.log(img)
					ajax({
						type:"post",
						url:"data/cart/addcart.php",
						data:`rid=${rid}&price=${price}&title=${title}&img=${img}&count=${count}`
					}).then(()=>{
							var dImg = $(".large-img").clone();
							dImg.appendTo($(".first"));
							dImg.css({
								"z-index":100,
								"opacity":0.7,
								"position":"absolute",
								"height":300,
								"width":300,
								"top":20+"px",
								"left":50+"px"
							});
							dImg.animate({
								"width":80,
								"height":80,
								"border-radius":50+"%"
							},300,function(){
								dImg.animate({
									"top":300,
									"left":520,
									"opacity":0
								},600,function(){
										dImg.remove();
									})
							})

					})
				}
			})
		})
		//完毕
		//左侧图鼠标悬停换图
		$("ul.s-img>li>img").mouseenter(e=>{
			var $e = $(e.target);
			var src = $e.attr("src");
			$(".l-img-box>img").attr("src",src);
		})
		//完毕
		//放大镜
		var sMask = document.querySelector(".superMask");
		var mask = document.querySelector(".mask");
		var lgImg = document.querySelector(".lg-img");
		var smImg = document.querySelector(".l-img-box>img")
		sMask.onmouseover = function(){
			mask.style.display = "block";
			lgImg.style.display = "block";
			lgImg.style.backgroundImage = `url(${smImg.src})`;
		}
		sMask.onmousemove = function(e){
			var w = sMask.offsetWidth;
			var h = sMask.offsetHeight;
			var l = e.offsetX-mask.offsetWidth/2;
			var t = e.offsetY-mask.offsetHeight/2;
			if(l<0) l = 0;
			else if(l>w-mask.offsetWidth) l=w-mask.offsetWidth;
			if(t<10) t = 10;//因为smask距离上方有10个像素的距离
			else if(t>h-mask.offsetHeight+10) t = h-mask.offsetHeight+10;
			mask.style.left = l+"px";
			mask.style.top = t+"px";
			lgImg.style.backgroundPosition = `${-l*2}px ${-t*2}px`
		}
		sMask.onmouseout = function(){
			mask.style.display = "none";
			lgImg.style.display = "none";
		}
		//完毕
		function scrollToTop(){
			var c = document.documentElement.scrollTop || document.body.scrollTop;
			console.log(c)
			if(c>0){
				window.requestAnimationFrame(scrollToTop);
				window.scrollTo(0,c-c/8);
			}
		}
		$(".toTop").click((e)=>{
			e.preventDefault();
			scrollToTop();
		})
	})
})()