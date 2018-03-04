<?php
header("Content-Type:application/json");
require("../init.php");
@$rid = $_REQUEST["rid"];
@$title = $_REQUEST["title"];
@$price = $_REQUEST["price"];
@$pic = $_REQUEST["pic"];
session_start();
$uid= $_SESSION["uid"];
$sql = "select * from fw_fav where uid=$uid and rid=$rid";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result);
if($rows){
	$sql = "delete from fw_fav where uid=$uid and rid=$rid";
	mysqli_query($conn,$sql);
	echo json_encode(["code"=>0]);
}else{
	$sql = "insert into fw_fav values(null,$rid,$uid,'$pic','$title','$price')";
	mysqli_query($conn,$sql);
	echo json_encode(["code"=>1]);
}
?>