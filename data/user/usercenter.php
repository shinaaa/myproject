<?php
	require("../init.php");
	session_start();
	$uid = $_SESSION["uid"];
	//echo $uid;
	$sql = "select uname,email,phone,reg_time from fw_user where uid='$uid'";
	$result = mysqli_query($conn,$sql);
	$arr = mysqli_fetch_assoc($result);
	echo json_encode($arr);
?>