<?php
header("Content-Type:application/json");
require("../init.php");
$srid = $_REQUEST["rid"];
$count = $_REQUEST["count"];
$price = $_REQUEST["price"];
$pic = $_REQUEST["img"];
$title = $_REQUEST["title"];
//if(!$count){$count = 1;}
session_start();
@$suid=$_SESSION["uid"];
if($srid&&$suid&&$count){
	$sql = "select * from fw_shoppingcart where srid='$srid' and suid='$suid'";
	$result=mysqli_query($conn,$sql);
	$sql = "update fw_shoppingcart set count=$count,price='$price',totalprice=$price*count where srid='$srid' and suid='$suid'";
	mysqli_query($conn,$sql);
}
?>