<?php
header("Content-Type:application/json");
require("../init.php");
@$uname=$_REQUEST["uname"];
if($uname){
	$sql="select * from fw_user where uname='$uname'";
	$result=mysqli_query($conn,$sql);
	if(mysqli_fetch_row($result)==null){
		echo json_encode(['ok'=>1]);
	}else{
		echo json_encode(['ok'=>0]);
	}
}
?>