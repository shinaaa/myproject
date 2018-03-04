<?php
require("../init.php");
header("Content-Type:application/json");
$uname = $_REQUEST["uname"];
$upwd = $_REQUEST["upwd"];
$sql = "select uid from fw_user where uname='$uname' and upwd='$upwd'";
//如果密码加过密，要用upwd=md5('$upwd')
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($uname&&$upwd){
	if($row){
		session_start();
		$_SESSION["uid"]=$row[0];
		$uid = $_SESSION["uid"];
		echo json_encode(["ok"=>1,"uid"=>$uid]);
	}else{
		echo json_encode(["ok"=>0,"msg"=>"用户名或密码错误！"]);
	}
}
?>