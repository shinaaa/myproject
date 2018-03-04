use flower_whisper;
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