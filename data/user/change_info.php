<?php
require("../init.php");
session_start();
$uid = $_SESSION["uid"];
@$email = $_REQUEST["email"];
@$phone = $_REQUEST["phone"];
$sql = "UPDATE fw_user SET email='$email',phone='$phone' WHERE fw_user.uid=$uid;";

$result = mysqli_query($conn,$sql);
$count = mysqli_affected_rows($conn);
//echo $uid;
if($count){
	echo json_encode(["ok"=>1,"msg"=>"修改成功！"]);
}else{
	echo json_encode(["ok"=>0]);
}
?>