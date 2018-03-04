$(()=>{
  var pno = 1;
  var kws = decodeURI(location.search.slice(4));
  console.log(kws)
  function loadRose(kw,pno=1){
    $.ajax({
      type:"get",
      url:"data/product/getproductbykw.php",
      data:{kw:kws,pno:pno},
      dataType:"json"
    }).then(data=>{
      console.log(kws)
      //console.log(data);
      var html = "";
      for(var i=0;i<data.data.length;i++){
        html+=`
        <div class="product">
          <div class="img-container">
            <a class="pro-detail" data-fid="${data.data[i].fid}" data-rid="${data.data[i].rid}" href="productdetails.html?rid=${data.data[i].rid}&kw=${kws}" target="_blank">
              <img class="pimg" src="${data.data[i].img}" alt="">
            </a>
          </div>
          <p class="ptitle">${data.data[i].title}</p>
          <span class="details">${data.data[i].material}</span>
          <div>
            <span class="price">¥ ${data.data[i].price}</span>
          </div>
          <div>
            <a class="my-fav fav">收藏</a>
            <a class="shopping-cart" data-rid="${data.data[i].rid}"><i></i>加入购物车</a>
            <a class="buy-now" data-rid="${data.data[i].rid}"><i></i>立即购买</a>
          </div>
        </div>
        `
      }
      $(".box").html(html);
      html = "";
      for(var i=1;i<=data.totalPage;i++){
        html+=`<li class="${data.pno==i?'active':''}">${i}</li>`
      }
      $(".page-no").html(html)
      //面包屑导航
      html = "";
      if(kws=='玫瑰'){
        html = `
        <li><a href="rose.html?kw='玫瑰'">玫瑰专区</a></li>
        `
      }else{
        html = `
        <li><a href="rose.html?kw='玫瑰'">玫瑰专区</a></li>
        <li class="sperate"> > </li>
        <li>${kws}</li>
        `
      }
      $(".bread-ul").html(html)
    })
  }
  loadRose();
  //绑定商品分类事件
  $(".classify>li").click((e)=>{
    kws = $(e.target).html();
    if($(e.target).html()=='全部分类'){
      kws = '玫瑰'
    }
    //location.search = `?kw=${kw}`
    pno = 1;
    loadRose(kws,pno)
  })
  //点击收起打开
  $(".msg-bar").click((e)=>{
    //console.log(kw)
    if($(e.target).prev().is(":has(:hidden)")){
      $(e.target).prev().children().show(300);
      $(e.target).html(">>")
      $(e.target).attr("title","收起")
    }else{
      $(e.target).prev().children(":gt(2)").hide(300);
      $(e.target).html("<<")
      $(e.target).attr("title","打开")
    }
  })
  
  //首尾页
  $("span.first").click(()=>{
    if(pno!=1){
      pno = 1;
      loadRose(kws,pno);
    }
  })
  $("span.last").click(()=>{
    if(pno!=$(".page-no>li").length){
      pno = $(".page-no>li").length;
      loadRose(kws,pno)
    }
  })
  //上一页下一页
  $(".pre-page").click(()=>{
    pno>1&&(pno--)&&loadRose(kws,pno) 
  })
  $(".next-page").click(()=>{
    pno<$(".page-no>li").length&&(pno++)&&loadRose(kws,pno)
  })
  //点击页码换页
  $(".page-no").delegate("li","click",(e)=>{
    pno = $(e.target).html();
    loadRose(kws,pno)
  })
  //加入购物车
  $(".box").on("click","a.shopping-cart",(e)=>{
    $.ajax({
      type:"get",
      url:"data/login/isLogin.php",
      dataType:"json"
    }).then(data=>{
      if(data.ok==0){
        alert("请先登录");
        location = "login.html?back="+location.href
      }else{
        var $e = $(e.target);
        var rid = $e.data("rid");
        var price = $e.parent().siblings().children(".price").html().slice(2);
        var title = $e.parent().siblings(".ptitle").html();
        var img = $e.parent().siblings(".img-container").find(".pimg").attr("src");
        var count = 1;
        console.log($e.parent().siblings().children(".price").html())
        $.ajax({
          type:"post",
          url:"data/cart/addcart.php",
          data:`rid=${rid}&price=${price}&title=${title}&img=${img}&count=${count}`
        }).then(()=>{
          //购物车效果
          var pimg = $e.parent().siblings().find(".pimg");
          var simg = pimg.clone().css({"opacity":0.7});
          simg.appendTo($e.parent().parent());
          simg.css({
            "z-index":100,
            "width":300+"px",
            "height":300+"px",
            "position":"absolute",
            "border-radius":50+"%",
            "top":0,
            "left":0
          });
          simg.animate({
            "top":450+"px",
            "left":100+"px",
            "width":0,
            "height":0
          },200,function(){
            setTimeout(()=>simg.remove(),300)
          })
        })
      }
    })
  })
  //添加收藏
  $(".box").on("click","a.my-fav",(e)=>{
    e.preventDefault();
    $.ajax({
      type:"get",
      url:"data/login/isLogin.php",
      dataType:"json"
    }).then(data=>{
      if(data.ok==0){
        alert("请先登录");
        location = "login.html?back="+location.href
      }else{
        $e = $(e.target);
        var price = $e.parent().prev().children().html().slice(2);
        var title = $e.parent().siblings(".ptitle").html();
        var rid = $e.parent().siblings(".img-container").find(".pro-detail").data("rid");
        var pic = $e.parent().siblings(".img-container").find(".pro-detail").find(".pimg").attr("src");
        $.ajax({
          type:"post",
          url:"data/user/myfav.php",
          data:{rid:rid,title:title,price:price,pic:pic},
          dataType:"json"
        }).then(data=>{
          var html = "";
          $e.toggleClass("fav1");
            if($e.hasClass("fav1"))
          $e.html("已收藏")
            else
          $e.html("收藏")
        })
      }
    })
  })
  //回到顶部
  var a=document.querySelector("a.toTop");
  var scrollTop;
  window.onscroll=function(e){
    scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    //console.log(scrollTop);
    if(scrollTop>=500)a.className="toTop";
    else a.className="toTop hide";
  }
  var dist=0,dura=200,steps=20,
      interval=dura/steps, step=0,
      moved=steps, timer=null;
  a.onclick = function(e){
    e.preventDefault();
    dist=-scrollTop;
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

})