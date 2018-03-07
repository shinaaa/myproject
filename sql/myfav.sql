create table fw_myfav(
	fav_id int primary key auto_increment,
	rid int,
		foreign key(rid) references fw_rose(rid),
	uid int,
		foreign key(uid) references fw_user(uid)
);