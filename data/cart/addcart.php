<?php
header("Content-Type:application/json");
require("../init.php");
$srid = $_REQUEST["rid"];
$count = $_REQUEST["count"];
$price = $_REQUEST["price"];
$pic = $_REQUEST["img"];
$title = $_REQUEST["title"];
//if(!$count){$count = 1;}
$totalprice = $price;
session_start();
@$suid=$_SESSION["uid"];
if($srid&&$suid&&$count){
	$sql = "select * from fw_shoppingcart where srid='$srid' and suid='$suid'";
	$result=mysqli_query($conn,$sql);
	if(!mysqli_fetch_row($result)){
		$sql = "insert into fw_shoppingcart values(null,$srid,$suid,'$pic','$title',$count,'$price','$totalprice',0)";
	}else{
		$sql = "update fw_shoppingcart set count=count+$count,price='$price',totalprice=$price*count where srid='$srid' and suid='$suid'";
	}
	mysqli_query($conn,$sql);
	echo json_encode(["ok"=>1]);
}
?>