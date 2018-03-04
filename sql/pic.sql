###########产品图，第二行id外链fw_products的pid
create table fw_pic(
	pic_id int primary key auto_increment,
	pid int,
		foreign key(pid) references fw_products(pid),
	pic varchar(200)
);
insert into fw_pic values(1,1,'images/products_img/hqmm1.jpg');
insert into fw_pic values(2,1,'images/products_img/hqmm2.jpg');
insert into fw_pic values(3,1,'images/products_img/hqmm3.jpg');
insert into fw_pic values(4,2,'images/products_img/jiankang&pingan1.jpg');
insert into fw_pic values(5,2,'images/products_img/jiankang&pingan2.jpg');
insert into fw_pic values(6,2,'images/products_img/jiankang&pingan3.jpg');
insert into fw_pic values(7,3,'images/products_img/xrhy1.jpg');
insert into fw_pic values(8,4,'images/products_img/lovemiss1.jpg');
insert into fw_pic values(9,4,'images/products_img/lovemiss2.jpg');
insert into fw_pic values(10,5,'images/products_img/aidenuoyan1.jpg');
insert into fw_pic values(11,5,'images/products_img/aidenuoyan2.jpg');
insert into fw_pic values(12,5,'images/products_img/aidenuoyan3.jpg');
insert into fw_pic values(13,6,'images/products_img/qqzj1.jpg');
insert into fw_pic values(14,6,'images/products_img/qqzj2.jpg');
insert into fw_pic values(15,6,'images/products_img/qqzj3.jpg');
insert into fw_pic values(16,7,'images/products_img/bllr1.jpg');
insert into fw_pic values(17,8,'images/products_img/muai1.jpg');
insert into fw_pic values(18,8,'images/products_img/muai2.jpg');
insert into fw_pic values(19,9,'images/products_img/lmmw1.jpg');
insert into fw_pic values(20,10,'images/products_img/yxyy1.jpg');
insert into fw_pic values(21,11,'images/products_img/ygha1.jpg');
insert into fw_pic values(22,11,'images/products_img/ygha2.jpg');
insert into fw_pic values(23,12,'images/products_img/lianqu1.jpg');
insert into fw_pic values(24,12,'images/products_img/lianqu2.jpg');
insert into fw_pic values(25,13,'images/products_img/haosg1.jpg');
insert into fw_pic values(26,14,'images/products_img/xhnf1.jpg');
insert into fw_pic values(27,14,'images/products_img/xhnf2.jpg');
insert into fw_pic values(28,15,'images/products_img/ygxq1.jpg');
insert into fw_pic values(29,16,'images/products_img/zczy1.jpg');
insert into fw_pic values(30,17,'images/products_img/eqwx1.jpg');
insert into fw_pic values(31,17,'images/products_img/eqwx2.jpg');
insert into fw_pic values(32,18,'images/products_img/jkcj1.jpg');
insert into fw_pic values(33,19,'images/products_img/wuwangwo1.jpg');
insert into fw_pic values(34,19,'images/products_img/wuwangwo2.jpg');
insert into fw_pic values(35,20,'images/products_img/zhiqc1.jpg');
insert into fw_pic values(36,20,'images/products_img/zhiqc2.jpg');


###########产品详情,第二行id外链总分类fw_family的fid
create table fw_products(
	pid int primary key auto_increment,
	fid int,
		foreign key(fid) references fw_family(fid),
	title varchar(64),
	price decimal(6,2),
	src varchar(100)
);

insert into fw_products values(1,1,'含情脉脉','288.00',null);
insert into fw_products values(2,2,'健康和平安','268.00',null);
insert into fw_products values(3,3,'夏日花园','288.00',null);
insert into fw_products values(4,1,'爱的思念','128.00',null);

insert into fw_products values(5,1,'爱的诺言','198.00',null);
insert into fw_products values(6,2,'青青子衿','266.00',null);
insert into fw_products values(7,1,'巴黎恋人','206.00',null);
insert into fw_products values(8,3,'母爱','158.00',null);

insert into fw_products values(9,1,'浪漫满屋--香槟玫瑰11支，浅蓝色绣球1枝','199.00',null);
insert into fw_products values(10,1,'一心一意--玫瑰11枝，粉色勿忘我0.3扎','126.00',null);
insert into fw_products values(11,1,'阳光海岸----19枝香槟玫瑰','218.00',null);
insert into fw_products values(12,1,'恋曲----红玫瑰9枝，白百合1枝，白色雏菊2枝','178.00',null);

insert into fw_products values(13,2,'好时光----粉色香水百合4枝，苏醒粉玫瑰9枝','229.00',null);
insert into fw_products values(14,2,'心花怒放----粉香水百合5枝','188.00',null);
insert into fw_products values(15,2,'阳光心情----10枝多头黄百合','329.00',null);
insert into fw_products values(16,2,'真诚祝愿----花篮','238.00',null);

insert into fw_products values(17,3,'恩情无限----粉色康乃馨11枝，百合2枝','178.00',null);
insert into fw_products values(18,3,'健康长久----大红色康乃馨99枝、红色多头康乃馨1扎','412.00',null);
insert into fw_products values(19,3,'勿忘我----紫色+粉色勿忘我各一扎','120.00',null);
insert into fw_products values(20,3,'致青春/无声的爱----满天星一大扎','218.00',null);
