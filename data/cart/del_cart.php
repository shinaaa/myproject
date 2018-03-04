<?php
	require("../init.php");
	session_start();
	$uid = $_SESSION["uid"];
	$sid = $_REQUEST["sid"];
	$sql = "delete from fw_shoppingcart where sid=$sid and suid=$uid";
	$result = mysqli_query($conn,$sql);
	if($result){
		echo json_encode(["ok"=>1]);
	}
?>