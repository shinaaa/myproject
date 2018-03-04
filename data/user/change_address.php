<?php
require("../init.php");
session_start();
$uid = $_SESSION["uid"];
$address = $_REQUEST["address"];
$sql = "update fw_user set address='$address' where uid=$uid";
$result = mysqli_query($conn,$sql);
$count = mysqli_affected_rows($conn);
if($count){
	echo json_encode(["ok"=>1,"msg"=>"修改成功！"]);
}else{
	echo json_encode(["ok"=>0]);
}
?>