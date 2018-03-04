set names utf8;
drop database if exists flower_whisper;
create database flower_whisper charset=utf8;
use flower_whisper;
###########所有商品的总分类fw_family
create table fw_family(
	fid int primary key auto_increment,
	fname varchar(64) not null
);
insert into fw_family(fid,fname) values(1,'玫瑰');
insert into fw_family(fid,fname) values(2,'百合');
insert into fw_family(fid,fname) values(3,'其他');

###########首页产品
create table fw_index_products(
	idx_id tinyint primary key auto_increment,
	title varchar(64),
	p_desc varchar(100),
	price decimal(6,2),
	img varchar(200),
	src varchar(100)
);
###########最新产品
insert into fw_index_products values(1,'含情脉脉','当你真的在乎一个人，多么微不足道的小细节，也变得重要起来。','288.00','images/products_img/hqmm1.jpg',null);
insert into fw_index_products values(2,'健康和平安','最纯洁的花朵，代表最纯洁的祝福','268.00','images/products_img/jiankang&pingan1.jpg',null);
insert into fw_index_products values(3,'夏日花园','采一束阳光，每一天都有温暖入怀','288.00','images/products_img/xrhy1.jpg',null);
insert into fw_index_products values(4,'爱的思念','对你的爱与思念与日俱增','128.00','images/products_img/lovemiss1.jpg',null);
###########人气推荐,(玫瑰，百合，玫瑰，其他)
insert into fw_index_products values(5,'爱的诺言','有了你我无怨无悔，你是我的唯一','198.00','images/products_img/aidenuoyan1.jpg',null);
insert into fw_index_products values(6,'青青子衿','青青子衿，悠悠我心','266.00','images/products_img/qqzj1.jpg',null);
insert into fw_index_products values(7,'巴黎恋人','永远爱你，此情不渝，遇一人白首，择一城终老','206.00','images/products_img/bllr1.jpg',null);
insert into fw_index_products values(8,'母爱','不负青春年华，是对你最好的报答！','158.00','images/products_img/muai1.jpg',null);
############专区介绍（玫瑰4，百合4，其他4）
	####玫瑰4
insert into fw_index_products values(9,'浪漫满屋','如果可以，让心一起住在浪漫满屋里，去开开心心、活蹦乱跳的谈情说爱','199.00','images/products_img/lmmw1.jpg',null);
insert into fw_index_products values(10,'一心一意','一句寒暖，一线相喧；一句叮咛，一笺相传；一份相思，一心相盼；一份爱意，一生相恋。','126.00','images/products_img/yxyy1.jpg',null);
insert into fw_index_products values(11,'阳光海岸','和你手牵手漫步海边，在沙滩上画两颗心，心心相印，永不分离。','218.00','images/products_img/ygha1.jpg',null);
insert into fw_index_products values(12,'恋曲','一首爱的恋曲，一份心的期待；几许期许，几许感悟；
让我们共同来谙就明天的韵律！','178.00','images/products_img/lianqu1.jpg',null);
	####百合
insert into fw_index_products values(13,'好时光','有一段走过的路我不会忘，有一个爱过的人放在心上','229.00','images/products_img/haosg1.jpg',null);
insert into fw_index_products values(14,'心花怒放','每一颗心都是一束美丽的花，跟随你的心，寻找真正的快乐，将热情发自内心怒放。','188.00','images/products_img/xhnf1.jpg',null);
insert into fw_index_products values(15,'阳光心情','想着 我们曾手牵手走过曾经。此刻，我的心情，一如阳光般温暖！','329.00','images/products_img/ygxq1.jpg',null);
insert into fw_index_products values(16,'真诚祝愿','一份诚挚的祝福，一份真诚的问候，愿你快乐每一天！','238.00','images/products_img/zczy1.jpg',null);
	###其他
insert into fw_index_products values(17,'恩情无限','我想在阳光下满身花香，我想在阳光下沐浴清新，我想在清新里感受每一天的好时光','178.00','images/products_img/eqwx1.jpg',null);
insert into fw_index_products values(18,'健康长久','时光时光慢些吧，不想让你再变老了，我愿用我一切，换你岁月长留。','412.00','images/products_img/jkcj1.jpg',null);
insert into fw_index_products values(19,'勿忘我','Forget-me-not','120.00','images/products_img/wuwangwo1.jpg',null);
insert into fw_index_products values(20,'致青春','我爱你，胜过爱爱情，更胜过爱自己！','218.00','images/products_img/zhiqc1.jpg',null);

#############玫瑰产品
CREATE TABLE fw_rose (
  rid int(11) primary key auto_increment,
  fid int(11) DEFAULT NULL,
		foreign key(fid) references fw_family(fid),
  title varchar(60),
  material varchar(100),
  meaning varchar(200),
  price decimal(6,2),
  src varchar(200)
);
INSERT INTO fw_rose VALUES(1, 1, '惊艳时光', '红玫瑰19枝、绿色桔梗5枝、银叶菊5枝', '你悄悄地出现，教会我如何思念', '226.00', NULL);
INSERT INTO fw_rose VALUES(2, 1, '深情眷恋', '66枝红玫瑰', '想念你眼底的温柔，思念你嘴角的笑容，眷恋你深情的相拥，愿我们的爱到永久', '436.00', 'null');
INSERT INTO fw_rose VALUES(3, 1, '浪漫满屋', '香槟玫瑰11支，浅蓝色绣球1枝', '如果可以，让心一起住在浪漫满屋里，去开开心心、活蹦乱跳的谈情说爱', '199.00', 'null');
INSERT INTO fw_rose VALUES(4, 1, '浪漫心情', '红玫瑰19枝，白色相思梅0.5扎，栀子叶1扎', '铺满玫瑰的夜里，有温暖的告白在等待，来我的怀里，拥抱我的爱，把你的热情摊开，我会一直都在', '208.00', 'null');
INSERT INTO fw_rose VALUES(5, 1, '清风雅韵', '香槟玫瑰12枝，迷你菊6枝，栀子叶半扎', '清似溪流涓涓水，风如三月杨柳絮。雅吟风骚诗千古，韵含真情吐芬芳', '159.00', 'null');
INSERT INTO fw_rose VALUES(6, 1, '恋曲', '红玫瑰9枝，白百合1枝，白色雏菊2枝，尤加利3枝', '一首爱的恋曲，一份心的期待；几许期许，几许感悟', '178.00', 'null');
INSERT INTO fw_rose VALUES(7, 1, 'LOVE 99', '99枝精品红玫瑰花束，满天星围绕', '99朵靓丽的红玫瑰，献给你的至爱', '499.00', 'null');
INSERT INTO fw_rose VALUES(8, 1, '阳光海岸', '19枝香槟玫瑰，白色石竹梅围绕', '和你手牵手漫步海边，在沙滩上画两颗心，心心相印，永不分离', '218.00', 'null');
INSERT INTO fw_rose VALUES(9, 1, '一心一意', '红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶适量搭配', '一句寒暖，一线相喧；一句叮咛，一笺相传；一份相思，一心相盼；一份爱意，一生相恋', '126.00', 'null');
INSERT INTO fw_rose VALUES(10, 1, '缘分', '11枝红玫瑰,2枝多头白香水百合', '转身你成了我的风景，有一种惊喜暗藏于心', '189.00', 'null');
INSERT INTO fw_rose VALUES(11, 1, '一生期盼', '紫玫瑰19枝、紫色桔梗6枝、搭配适量紫色雏菊、银叶菊、绿叶', '喜欢是淡淡的爱，爱是深深的喜欢，爱你是我一生的期盼，祝你一生都幸福，快乐永远', '259.00', 'null');
INSERT INTO fw_rose VALUES(12, 1, '一往情深', '高档礼盒装鲜花:19枝红玫瑰，勿忘我适量', '你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深', '235.00', 'null');
INSERT INTO fw_rose VALUES(13, 1, '伴你久久', '冷美人紫玫瑰99枝', '为你动情一瞬，便想相爱一生', '328.00', 'null');
INSERT INTO fw_rose VALUES(14, 1, '巴黎恋人', '红玫瑰19枝，搭配适量尤加利叶', '遇一人白首，择一城终老！', '206.00', 'null');
INSERT INTO fw_rose VALUES(15, 1, 'LOVE 99', '99枝精品红玫瑰花束，满天星围绕', '99朵靓丽的红玫瑰，献给你的至爱', '499.00', 'null');
INSERT INTO fw_rose VALUES(16, 1, '阳光海岸', '19枝香槟玫瑰，白色石竹梅围绕', '和你手牵手漫步海边，在沙滩上画两颗心，心心相印，永不分离', '218.00', 'null');
INSERT INTO fw_rose VALUES(17, 1, '浪漫心情', '红玫瑰19枝，白色相思梅0.5扎，栀子叶1扎', '铺满玫瑰的夜里，有温暖的告白在等待，来我的怀里，拥抱我的爱，把你的热情摊开，我会一直都在', '208.00', 'null');
INSERT INTO fw_rose VALUES(18, 1, '浪漫满屋', '香槟玫瑰11支，浅蓝色绣球1枝', '如果可以，让心一起住在浪漫满屋里，去开开心心、活蹦乱跳的谈情说爱', '199.00', 'null');
INSERT INTO fw_rose VALUES(19, 1, '一心一意', '红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶适量搭配', '一句寒暖，一线相喧；一句叮咛，一笺相传；一份相思，一心相盼；一份爱意，一生相恋', '126.00', 'null');
INSERT INTO fw_rose VALUES(20, 1, '缘分', '11枝红玫瑰,2枝多头白香水百合', '转身你成了我的风景，有一种惊喜暗藏于心', '189.00', 'null');

########玫瑰图片
CREATE TABLE fw_rose_pic (
  pid int(11) primary key auto_increment,
  rpid int(11),
		foreign key(rpid) references fw_rose(rid),
  fid int(11),
		foreign key(fid) references fw_family(fid),
  pic varchar(200)
);
INSERT INTO fw_rose_pic VALUES
(1, 1, 1, 'images/products_img/jyshiguang1.jpg'),
(2, 1, 1, 'images/products_img/jyshiguang2.jpg'),
(3, 2, 1, 'images/products_img/shenqingjn1.jpg'),
(4, 3, 1, 'images/products_img/lmmw1.jpg'),
(5, 4, 1, 'images/products_img/lmxq1.jpg'),
(6, 4, 1, 'images/products_img/lmxq2.jpg'),
(7, 5, 1, 'images/products_img/qfyy1.jpg'),
(8, 6, 1, 'images/products_img/lianqu1.jpg'),
(9, 6, 1, 'images/products_img/lianqu2.jpg'),
(10, 7, 1, 'images/products_img/LOVE1.jpg'),
(11, 8, 1, 'images/products_img/ygha1.jpg'),
(12, 8, 1, 'images/products_img/ygha2.jpg'),
(13, 9, 1, 'images/products_img/yxyy1.jpg'),
(14, 10, 1, 'images/products_img/yuanfen1.jpg'),
(15, 11, 1, 'images/products_img/yishengqp1.jpg'),
(16, 12, 1, 'images/products_img/ywqs1.jpg'),
(17, 13, 1, 'images/products_img/bnjj1.jpg'),
(18, 14, 1, 'images/products_img/bllr1.jpg'),
(19, 15, 1, 'images/products_img/LOVE1.jpg'),
(20, 16, 1, 'images/products_img/ygha1.jpg'),
(21, 17, 1, 'images/products_img/lmxq1.jpg'),
(22, 18, 1, 'images/products_img/lmmw1.jpg'),
(23, 19, 1, 'images/products_img/yxyy1.jpg'),
(24, 20, 1, 'images/products_img/yuanfen1.jpg');

###########用户信息表，保存注册用户的信息
create table fw_user(
    uid int primary key auto_increment,
    uname char(12) not null,
    upwd char(32) not null,
    email varchar(20),
    phone char(11),
		reg_time bigint
);
##########购物车
create table fw_shoppingcart(
	sid int primary key auto_increment,
	srid int,
		foreign key(srid) references fw_rose(rid),
	suid int,
		foreign key(suid) references fw_user(uid),
	pic varchar(100),
	title varchar(100),
	count tinyint,
	price decimal(6,2)
);