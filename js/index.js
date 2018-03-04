(function(){
//轮播图
	const WAIT = 3500;
	var timer = null;
	var idx = 0;
	var imgs = document.querySelectorAll(".img-box>li");
	var banner = document.querySelector(".banner");
	var dots = document.querySelectorAll(".dot>li");
	var left = document.querySelector("span.left");
	var right = document.querySelector("span.right");
	//console.log(imgs);
	imgs[0].className = "show";
	dots[0].className = "active";
	function show(){
		(idx<imgs.length-1)?(idx++):(idx=0);
		for(var i=0;i<imgs.length;i++){
			imgs[i].className="";
		}
		for(var i=0;i<dots.length;i++){
			dots[i].className = "";
		}
		imgs[idx].className = "show";
		dots[idx].className = "active"
	}
	timer = setInterval(show,WAIT);
	
	banner.onmouseenter = function(){
		clearInterval(timer);
		timer = null;
	}
	banner.onmouseleave = function(){
		timer = setInterval(show,WAIT)
	}
	for(var i=0;i<dots.length;i++){
		var a = dots[i];
		a.idx = i;
		a.onmouseover = function(){
			idx = this.idx;
			document.querySelector("li.active").className = "";
			dots[idx].className = "active";
			document.querySelector(".img-box>li.show").className = "";
			imgs[idx].className = "show"
		}
	}
$.ajax({
	type:"get",
	url:"data/product/index.php",
	dataType:"json"
}).then(data=>{
	console.log(data);
	//动态获取数据
	var newProducts=document.querySelector("#new_products"),
			recommend=document.querySelector("#recommend"),
			roses=document.querySelector("#roses"),
			lily=document.querySelector("#lily"),
			others=document.querySelector("#others"),
			html="";
	for(var i=0;i<=3;i++){
		html+=`<div class="products">
				<div class="p-details">
					<img src="${data[i].img}">
					<a href="" class="p-title">${data[i].title}</a>
					<span class="p-desc">${data[i].p_desc}</span>
				</div>
				<span class="p-price">¥ ${data[i].price}</span>
				<span class="add-shopping">加入购物车</span>
			</div>`
	}
	newProducts.innerHTML=html;
	
	html="";
	for(var i=4;i<=7;i++){
		html+=`<div class="products">
				<div class="p-details">
					<img src="${data[i].img}">
					<a href="" class="p-title">${data[i].title}</a>
					<span class="p-desc">${data[i].p_desc}</span>
				</div>
				<span class="p-price">¥ ${data[i].price}</span>
				<span class="add-shopping">加入购物车</span>
			</div>`
	}
	recommend.innerHTML=html;
	html="";
	for(var i=8;i<=11;i++){
		html+=`<div class="products">
				<div class="p-details">
					<img src="${data[i].img}">
					<a href="" class="p-title">${data[i].title}</a>
					<span class="p-desc">${data[i].p_desc}</span>
				</div>
				<span class="p-price">¥ ${data[i].price}</span>
				<span class="add-shopping">加入购物车</span>
			</div>`
	}
	roses.innerHTML=html; 
	html="";
	for(var i=12;i<=15;i++){
		html+=`<div class="products">
				<div class="p-details">
					<img src="${data[i].img}">
					<a href="" class="p-title">${data[i].title}</a>
					<span class="p-desc">${data[i].p_desc}</span>
				</div>
				<span class="p-price">¥ ${data[i].price}</span>
				<span class="add-shopping">加入购物车</span>
			</div>`
	}
	lily.innerHTML=html;
	html="";
	for(var i=16;i<=19;i++){
		html+=`<div class="products">
				<div class="p-details">
					<img src="${data[i].img}">
					<a href="" class="p-title">${data[i].title}</a>
					<span class="p-desc">${data[i].p_desc}</span>
				</div>
				<span class="p-price">¥ ${data[i].price}</span>
				<span class="add-shopping">加入购物车</span>
			</div>`
	}
	others.innerHTML=html;
	//鼠标移入产品效果
	var a=document.querySelectorAll("div.p-details>a.p-title");
	for(var i=0,len=a.length;i<len;i++){
		a[i].onmouseover=function(){
			var img=this.parentNode.firstElementChild;
			img.style.opacity=0.5;
			img.style.transform="scale(1.1)";
			this.style.transform="scale(1.1)";//防止外层不能完全覆盖内层
			this.style.opacity = 1;
		}
		a[i].onmouseout=function(){
			var img=this.parentNode.firstElementChild;
			img.style.opacity=1;
			img.style.transform="";
			this.style.transform="scale(1)";
			this.style.opacity = 0;
		}
	}
	//楼层滚动
	var div=document.querySelector("div.floor-scroll");
	function getTotalTop(elem){
		var totalTop = elem.offsetTop;
		while(elem.offsetParent){
			elem = elem.offsetParent;
			totalTop += elem.offsetTop;
		}//offsetTop表示当前元素据自己父元素的高度，所以要不停的累加，直到找到body为止。
		return totalTop;
	}

	var top1 = getTotalTop($("#new_products")[0]);//最新产品的高度
	var top2 = getTotalTop($("#recommend")[0]);//推荐的高度
	var top3 = getTotalTop($("#area")[0]);//专区介绍的高度
	var top;
	window.onscroll=function(e){
		top = body.scrollTop;
		var bodyTop = top+innerHeight/5;
		if(bodyTop>=top1){
			$("div.floor-scroll").addClass("show")
		}else{
			$("div.floor-scroll").removeClass("show")
		}
		if(bodyTop>=top1&&bodyTop<top2){
			$(".f-scroll1").addClass("active").siblings().removeClass("active");
		}else if(bodyTop>=top2&&bodyTop<top3){
			$(".f-scroll2").addClass("active").siblings().removeClass("active");
		}else if(bodyTop>=top3){
			$(".f-scroll3").addClass("active").siblings().removeClass("active");
		}
	}
	//点击返回顶部
	var dist=0,dura=300,steps=20,
			interval=dura/steps, step=0,
			moved=steps, timer=null;
	var toTop = document.querySelector(".toTop");
	toTop.onclick = function(e){
			e.preventDefault();
			dist=-top;
			step=dist/steps;
			timer=setInterval(function(){
				window.scrollBy(0,step);
				moved--;
				if(moved==0){
					clearInterval(timer);
					timer=null;
					moved=steps;
				}
			},interval)
	}

	//楼层滚动完毕
})//动态加载数据完毕
body.onclick=(e)=>{
	var ddd=document.getElementById("ddd");
	var cx=e.clientX,cy=e.clientY;
	//console.log(cx,cy);
	ddd.style.top=`${cy-7}px`;
	ddd.style.left=`${cx-10}px`;
	if(ddd.className=="hide_div"){
		ddd.className="show_div";
		setTimeout(()=>{ddd.className="hide_div";},80)
	}else{
		ddd.className="hide_div";
	}
}
})()