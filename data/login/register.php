<?php
header("Content-Type:application/json");
$uname=$_REQUEST["uname"];
$upwd=$_REQUEST["upwd"];
@$email=$_REQUEST["email"];
@$phone=$_REQUEST["phone"];
@$reg_time=$_REQUEST["reg_time"];
require("../init.php");
if($uname&&$upwd&&$email&&$phone){
	$sql="insert into fw_user(uname,upwd,email,phone,reg_time) values('$uname','$upwd','$email','$phone','$reg_time')";//密码加密可用md5('$upwd')
	$result=mysqli_query($conn,$sql);
	if($result){
		echo json_encode(["ok"=>1,"msg"=>"注册成功！"]);
	}
}
?>