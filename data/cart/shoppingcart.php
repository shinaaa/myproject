<?php
require("../init.php");
session_start();
@$uid = $_SESSION["uid"];
if($uid){
	$sql = "select sid,srid,pic,title,count,price,totalprice,checked from fw_shoppingcart where suid='$uid' order by sid DESC";
	$result = mysqli_query($conn,$sql);
	$arr = mysqli_fetch_all($result,1);
	if($arr){
		echo json_encode(["ok"=>1,"data"=>$arr]);
	}else{
		echo json_encode(["ok"=>0,"data"=>[]]);
	}
}else{
	echo json_encode(["ok"=>-1]);
}
?>